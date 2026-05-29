import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCategoryBySlug, getBlogPostsByCategory } from "@/lib/content-loader"
import { getComparisonTableByCategory } from "@/lib/sample-data"
import {
    generatePageMetadata,
    buildSEOData,
    generateBreadcrumbSchema,
    SEO_CONFIG,
} from "@/lib/seo"
import {
    generateAffiliateLink,
    getAffiliateLinkAttributes,
    AFFILIATE_DISCLOSURE_TEXT,
} from "@/lib/affiliate-links"
import ComparisonTable from "@/components/affiliate/ComparisonTable"
import AffiliateLink from "@/components/affiliate/AffiliateLink"

// ─── Props ─────────────────────────────────────────────────────────────────

interface CategoryPageProps {
    params: Promise<{ slug: string }>
}

// ─── Generate Static Params ────────────────────────────────────────────────

export async function generateStaticParams() {
    // Categories are registered at startup — we could pre-define them here,
    // but for dynamic SSG we'll let Next.js handle it via dynamicParams.
    return []
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params
    const category = getCategoryBySlug(slug)

    if (!category) {
        return { title: "Kategorie nicht gefunden" }
    }

    return generatePageMetadata(category.seo)
}

// ─── Page Component ────────────────────────────────────────────────────────

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params
    const category = getCategoryBySlug(slug)

    if (!category) {
        notFound()
    }

    const comparisonTable = getComparisonTableByCategory(slug)
    const blogPosts = getBlogPostsByCategory(slug)
    const affiliateLink = generateAffiliateLink({
        categorySlug: slug,
        subid: `kategorie-${slug}`,
    })
    const linkAttrs = getAffiliateLinkAttributes()

    // Breadcrumb schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { label: "Home", href: "/" },
        { label: category.name, href: `/kategorien/${slug}`, isCurrentPage: true },
    ])

    return (
        <div className="flex flex-col">
            {/* ─── Breadcrumb ─────────────────────────────────────────── */}
            <nav
                aria-label="Breadcrumb"
                className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
            >
                <ol className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <li>
                        <a href="/" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                            Home
                        </a>
                    </li>
                    <li aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
                        /
                    </li>
                    <li className="font-medium text-zinc-900 dark:text-zinc-50">
                        {category.name}
                    </li>
                </ol>
            </nav>

            {/* ─── Category Hero ──────────────────────────────────────── */}
            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 dark:from-zinc-900 dark:to-zinc-950 sm:p-12">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                        {/* Icon */}
                        <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm dark:bg-zinc-800">
                            {category.icon}
                        </span>

                        {/* Content */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                                {category.name} {SEO_CONFIG.currentYear}
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {category.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="mt-6 flex flex-wrap gap-4">
                                <AffiliateLink
                                    link={affiliateLink}
                                    variant="primary"
                                >
                                    Jetzt auf CHECK24 vergleichen
                                </AffiliateLink>
                                {comparisonTable && (
                                    <a
                                        href="#vergleichstabelle"
                                        className="inline-flex items-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
                                    >
                                        Zur Vergleichstabelle
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Comparison Table ───────────────────────────────────── */}
            {comparisonTable && (
                <section
                    id="vergleichstabelle"
                    className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
                >
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        {category.shortName} — Die besten Angebote
                    </h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        Unabhängiger Vergleich der Top-Tarife. Stand: Mai {SEO_CONFIG.currentYear}.
                    </p>
                    <div className="mt-6">
                        <ComparisonTable table={comparisonTable} />
                    </div>

                    {/* Direct CHECK24 Link */}
                    <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Alle Tarife auf einen Blick?</strong> Auf CHECK24 finden
                            Sie eine vollständige Übersicht aller verfügbaren Angebote.
                        </p>
                        <div className="mt-4">
                            <AffiliateLink link={affiliateLink} variant="primary">
                                Alle {category.shortName.toLowerCase()} bei CHECK24 ansehen
                            </AffiliateLink>
                        </div>
                    </div>
                </section>
            )}

            {/* ─── No Data Placeholder ────────────────────────────────── */}
            {!comparisonTable && (
                <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
                        <span className="text-5xl">{category.icon}</span>
                        <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                            {category.name} Vergleich
                        </h2>
                        <p className="mt-4 mx-auto max-w-xl text-zinc-600 dark:text-zinc-400">
                            Die Vergleichsdaten für {category.name.toLowerCase()} werden
                            derzeit erstellt. Bereits jetzt können Sie die Angebote direkt
                            auf CHECK24 vergleichen.
                        </p>
                        <div className="mt-6">
                            <AffiliateLink link={affiliateLink} variant="primary">
                                Jetzt auf CHECK24 vergleichen
                            </AffiliateLink>
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Deep Link Parameters (Category-specific) ────────────── */}
            {category.deepLinkConfig.params.length > 0 && (
                <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                            So funktioniert der {category.shortName}
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Für einen präzisen Vergleich benötigt CHECK24 folgende Angaben:
                        </p>
                        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {category.deepLinkConfig.params.map((param) => (
                                <li
                                    key={param.param}
                                    className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                        {param.required ? "!" : "i"}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                            {param.label}
                                            {param.required && (
                                                <span className="ml-1 text-xs text-red-500">*</span>
                                            )}
                                        </p>
                                        {param.unit && (
                                            <p className="text-xs text-zinc-500">{param.unit}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <AffiliateLink link={affiliateLink} variant="outline">
                                Jetzt vergleichen auf CHECK24
                            </AffiliateLink>
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Related Blog Posts ──────────────────────────────────── */}
            {blogPosts.length > 0 && (
                <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Passende Blog-Artikel
                    </h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        Unser Ratgeber zu {category.name.toLowerCase()}.
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.slice(0, 3).map((post) => (
                            <a
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-700"
                            >
                                <h3 className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <p className="mt-4 text-xs text-zinc-400">
                                    {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* ─── Affiliate Disclosure ────────────────────────────────── */}
            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {AFFILIATE_DISCLOSURE_TEXT}
                    </p>
                </div>
            </section>

            {/* ─── Breadcrumb Schema ────────────────────────────────────── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </div>
    )
}
