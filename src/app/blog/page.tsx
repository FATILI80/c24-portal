import type { Metadata } from "next"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/content-loader"
import { generatePageMetadata, buildSEOData, SEO_CONFIG } from "@/lib/seo"
import { getCategoryBySlug } from "@/lib/content-loader"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: `Blog & Ratgeber ${SEO_CONFIG.currentYear}`,
        description: `Aktuelle Ratgeber, Vergleiche und Tipps zu Kreditkarten, Strom, DSL, Versicherungen und mehr. Unabhängige Tests für ${SEO_CONFIG.currentYear}.`,
        slug: "blog",
        keywords: ["Blog", "Ratgeber", "Vergleich", "CHECK24", `Ratgeber ${SEO_CONFIG.currentYear}`],
        ogType: "website",
    })
)

export default function BlogOverviewPage() {
    const posts = getAllBlogPosts()

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Blog & Ratgeber
                </h1>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    Unabhängige Vergleiche, Tests und Spartipps für {SEO_CONFIG.currentYear}.
                </p>
            </div>

            {posts.length === 0 ? (
                /* Empty state with placeholder articles */
                <div className="mt-12 space-y-8">
                    <p className="text-center text-zinc-500">
                        Blog-Artikel werden aktuell erstellt. Hier erscheinen demnächst Ratgeber zu Kreditkarten, Strom, DSL und mehr.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="animate-pulse rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                            >
                                <div className="h-4 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
                                <div className="mt-3 h-6 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                                <div className="mt-2 h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                                <div className="mt-4 h-4 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Blog grid */
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => {
                        const category = post.categoryId
                            ? getCategoryBySlug(post.categoryId)
                            : null
                        return (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-700"
                            >
                                {/* Category badge */}
                                {category && (
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                        {category.icon} {category.name}
                                    </span>
                                )}
                                {/* Title */}
                                <h2 className="mt-3 text-lg font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                                    {post.title}
                                </h2>
                                {/* Excerpt */}
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                {/* Date + Reading time */}
                                <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
                                    <time dateTime={post.publishedAt}>
                                        {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    {post.tags && post.tags.length > 0 && (
                                        <span className="text-zinc-300 dark:text-zinc-600">•</span>
                                    )}
                                    {post.tags?.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-zinc-500 dark:text-zinc-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
