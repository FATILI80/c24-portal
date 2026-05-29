// ============================================================================
// SEO Utilities & Year-Keyword System
// ============================================================================
// Centralized SEO configuration with a global year-keyword replacement system.
// Enables site-wide year updates (e.g. "2026" → "2027") by changing a single
// config value. Includes Schema.org structured data generators.
// ============================================================================

import type { Metadata } from "next"
import type {
    Breadcrumb,
    SEOData,
    Slug,
    YearString,
} from "@/types/affiliate"

// ─── SEO Configuration ─────────────────────────────────────────────────────

export const SEO_CONFIG = {
    /** Current year for content (change globally for all year-keyword content) */
    currentYear: new Date().getFullYear().toString() as YearString,
    /** Regex to match year patterns in content strings */
    yearPattern: /\b(202\d|20\d{2})\b/g,
    /** Default title suffix appended to page titles */
    defaultTitleSuffix: ` ${new Date().getFullYear()} | BudgetScout.de`,
    /** Base URL of the website (used for canonical URLs) */
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://budgetscout.de",
    /** Default locale */
    locale: "de_DE" as const,
    /** Site name for structured data */
    siteName: "BudgetScout.de",
    /** Twitter handle (optional) */
    twitterHandle: undefined as string | undefined,
    /** Default Open Graph image path */
    defaultOgImage: "/images/og-default.jpg",
}

// ─── Year Keyword Replacement ──────────────────────────────────────────────

/**
 * Replace all year patterns in a string with the current year.
 * This enables evergreen content: write "{2026}" and it renders as "2026".
 * When the year changes, update SEO_CONFIG.currentYear and all content updates.
 *
 * @example
 * ```ts
 * resolveYearString("Kreditkarten-Vergleich 2026")
 * // → "Kreditkarten-Vergleich 2026" (if currentYear = "2026")
 *
 * resolveYearString("Bester Stromtarif {2026}")
 * // → "Bester Stromtarif 2026"
 * ```
 */
export function resolveYearString(text: string): string {
    return text.replace(SEO_CONFIG.yearPattern, SEO_CONFIG.currentYear)
}

// ─── Title & Description Builders ──────────────────────────────────────────

/**
 * Build a page title with year resolution and default suffix.
 */
export function buildTitle(
    title: string,
    options?: { suffix?: string; resolveYear?: boolean }
): string {
    const resolved = options?.resolveYear !== false ? resolveYearString(title) : title
    const suffix = options?.suffix ?? SEO_CONFIG.defaultTitleSuffix
    return `${resolved}${suffix}`
}

/**
 * Build a meta description with year resolution.
 */
export function buildDescription(
    description: string,
    resolveYear = true
): string {
    return resolveYear ? resolveYearString(description) : description
}

// ─── SEO Data Builder ──────────────────────────────────────────────────────

export interface BuildSEODataOptions {
    title: string
    description: string
    slug: Slug
    categorySlug?: Slug
    keywords?: string[]
    ogImage?: string
    ogType?: "website" | "article"
    noindex?: boolean
    publishedAt?: string
    updatedAt?: string
    author?: string
}

/**
 * Build a complete SEO data object from content metadata.
 * Automatically resolves year keywords and generates canonical URL.
 */
export function buildSEOData(options: BuildSEODataOptions): SEOData {
    const {
        title,
        description,
        slug,
        keywords,
        ogImage,
        ogType = "website",
        noindex,
    } = options

    const canonicalUrl = `${SEO_CONFIG.baseUrl}/${slug}`

    return {
        title: buildTitle(title),
        description: buildDescription(description),
        keywords: keywords ?? [],
        ogImage: ogImage || SEO_CONFIG.defaultOgImage,
        ogType,
        canonicalUrl,
        noindex,
        schema: {},
    }
}

// ─── Schema.org Generators ─────────────────────────────────────────────────

/**
 * Generate WebSite schema.org structured data.
 */
export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.baseUrl,
        description: `Aktuelle Vergleiche und Tests für ${SEO_CONFIG.currentYear} – Kreditkarten, Strom, DSL, Versicherungen & mehr.`,
        inLanguage: "de",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SEO_CONFIG.baseUrl}/suche?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    }
}

/**
 * Generate Article schema.org structured data.
 */
export function generateArticleSchema(seo: SEOData, options: {
    headline: string
    datePublished: string
    dateModified: string
    author?: string
    imageUrl?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: options.headline,
        datePublished: options.datePublished,
        dateModified: options.dateModified,
        author: {
            "@type": "Person",
            name: options.author || "Redaktion",
        },
        publisher: {
            "@type": "Organization",
            name: SEO_CONFIG.siteName,
        },
        description: seo.description,
        ...(options.imageUrl ? { image: options.imageUrl } : {}),
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": seo.canonicalUrl || SEO_CONFIG.baseUrl,
        },
    }
}

/**
 * Generate BreadcrumbList schema.org structured data.
 */
export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: `${SEO_CONFIG.baseUrl}${crumb.href}`,
        })),
    }
}

/**
 * Generate FAQ schema.org structured data.
 */
export function generateFAQSchema(
    faqs: { question: string; answer: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}

// ─── Next.js Metadata Generator ───────────────────────────────────────────

/**
 * Generate Next.js App Router compatible Metadata from SEOData.
 * Use this in `generateMetadata()` export of page components.
 *
 * @example
 * ```ts
 * // In app/kategorien/[slug]/page.tsx
 * export async function generateMetadata({ params }: Props): Promise<Metadata> {
 *   const category = getCategoryBySlug(params.slug)
 *   return generatePageMetadata(category.seo)
 * }
 * ```
 */
export function generatePageMetadata(seo: SEOData): Metadata {
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(", "),
        ...(seo.canonicalUrl
            ? { alternates: { canonical: seo.canonicalUrl } }
            : {}),
        ...(seo.noindex ? { robots: { index: false, follow: false } } : {}),
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: seo.ogType ?? "website",
            ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
            siteName: SEO_CONFIG.siteName,
            locale: SEO_CONFIG.locale,
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
        },
        ...(SEO_CONFIG.twitterHandle
            ? {
                twitter: {
                    card: "summary_large_image",
                    site: SEO_CONFIG.twitterHandle,
                    title: seo.title,
                    description: seo.description,
                },
            }
            : {}),
    }
}

// ─── Slug Helpers ──────────────────────────────────────────────────────────

/**
 * Convert a German string to a URL-friendly slug.
 * Handles German special characters.
 *
 * @example
 * ```ts
 * toSlug("Kreditkarten-Vergleich 2026")
 * // → "kreditkarten-vergleich-2026"
 *
 * toSlug("Straßenverzeichnis")
 * // → "strassenverzeichnis"
 * ```
 */
export function toSlug(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
}

/**
 * Check if a given year string is the current SEO year.
 * Useful for conditional content display.
 */
export function isCurrentYear(year: string): boolean {
    return year === SEO_CONFIG.currentYear
}
