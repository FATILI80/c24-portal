// ============================================================================
// SEO Utilities & Year-Keyword System
// ============================================================================
// Centralized SEO configuration with a global year-keyword replacement system.
// Enables site-wide year updates (e.g. "2026" → "2027") by changing a single
// config value. Includes Schema.org structured data generators for rich results.
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
    twitterHandle: "@BudgetScoutDE" as string | undefined,
    /** Default Open Graph image path */
    defaultOgImage: "/images/og-default.jpg",
    /** Organization details for Schema.org */
    organization: {
        name: "BudgetScout.de",
        legalName: "BudgetScout.de Vergleichsportal",
        url: "https://budgetscout.de",
        logo: "https://budgetscout.de/images/logo.png",
        description: "Unabhängiges Vergleichsportal für Kfz-Versicherung, Strom, DSL, Kredite und Krankenversicherung.",
        address: {
            street: "Musterstraße 123",
            locality: "Berlin",
            postalCode: "10115",
            country: "DE",
        },
        contactEmail: "info@budgetscout.de",
        foundingDate: "2024-01-01",
    },
    /** Google Search Console verification */
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
} as const

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
 * Includes SearchAction for Google Sitelinks search box.
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
 * Generate Organization schema.org structured data.
 * Adds logo, contact info, social profiles for rich results.
 */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SEO_CONFIG.organization.name,
        legalName: SEO_CONFIG.organization.legalName,
        url: SEO_CONFIG.organization.url,
        logo: SEO_CONFIG.organization.logo,
        description: SEO_CONFIG.organization.description,
        foundingDate: SEO_CONFIG.organization.foundingDate,
        email: SEO_CONFIG.organization.contactEmail,
        address: {
            "@type": "PostalAddress",
            streetAddress: SEO_CONFIG.organization.address.street,
            addressLocality: SEO_CONFIG.organization.address.locality,
            postalCode: SEO_CONFIG.organization.address.postalCode,
            addressCountry: SEO_CONFIG.organization.address.country,
        },
        sameAs: [
            "https://www.facebook.com/budgetscout",
        ],
    }
}

/**
 * Generate Article schema.org structured data.
 * Includes full publisher and author markup for rich search results.
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
            logo: {
                "@type": "ImageObject",
                url: SEO_CONFIG.organization.logo,
            },
        },
        description: seo.description,
        ...(options.imageUrl
            ? {
                image: {
                    "@type": "ImageObject",
                    url: options.imageUrl,
                    width: 1200,
                    height: 630,
                },
            }
            : {}),
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

/**
 * Generate Product schema for Digistore24 / affiliate product pages.
 * Helps Google show rich product results in SERPs.
 */
export function generateProductSchema(options: {
    name: string
    description: string
    url: string
    image?: string
    price?: string
    priceCurrency?: string
    availability?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: options.name,
        description: options.description,
        url: options.url,
        ...(options.image ? { image: options.image } : {}),
        ...(options.price
            ? {
                offers: {
                    "@type": "Offer",
                    price: options.price,
                    priceCurrency: options.priceCurrency || "EUR",
                    availability: options.availability || "https://schema.org/InStock",
                    url: options.url,
                },
            }
            : {}),
    }
}

/**
 * Generate a combined LocalBusiness + Organization schema for location pages.
 */
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SEO_CONFIG.organization.name,
        url: SEO_CONFIG.organization.url,
        logo: SEO_CONFIG.organization.logo,
        description: SEO_CONFIG.organization.description,
        email: SEO_CONFIG.organization.contactEmail,
        address: {
            "@type": "PostalAddress",
            streetAddress: SEO_CONFIG.organization.address.street,
            addressLocality: SEO_CONFIG.organization.address.locality,
            postalCode: SEO_CONFIG.organization.address.postalCode,
            addressCountry: SEO_CONFIG.organization.address.country,
        },
    }
}

// ─── Next.js Metadata Generator ───────────────────────────────────────────

/**
 * Resolve an OG image URL — handles both relative and absolute paths.
 */
function resolveOgImage(image?: string): string | undefined {
    if (!image) return undefined
    if (image.startsWith("http")) return image
    return `${SEO_CONFIG.baseUrl}${image.startsWith("/") ? "" : "/"}${image}`
}

/**
 * Generate Next.js App Router compatible Metadata from SEOData.
 * Use this in `generateMetadata()` export of page components.
 * Includes full Open Graph, Twitter Card, and canonical support.
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
    const ogImage = resolveOgImage(seo.ogImage || SEO_CONFIG.defaultOgImage)

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(", "),
        ...(seo.canonicalUrl
            ? { alternates: { canonical: seo.canonicalUrl } }
            : {}),
        ...(seo.noindex
            ? { robots: { index: false, follow: false } }
            : {
                robots: {
                    index: true,
                    follow: true,
                },
            }),
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: seo.ogType ?? "website",
            ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
            siteName: SEO_CONFIG.siteName,
            locale: SEO_CONFIG.locale,
            ...(SEO_CONFIG.twitterHandle ? {} : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            ...(ogImage ? { images: [ogImage] } : {}),
            site: SEO_CONFIG.twitterHandle,
            creator: SEO_CONFIG.twitterHandle,
        },
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
