import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedBlogPosts, getCategoryBySlug } from "@/lib/content-loader"
import { generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { generateAffiliateLink } from "@/lib/affiliate-links"
import AffiliateLink from "@/components/affiliate/AffiliateLink"

interface BlogPostProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)
    if (!post) return { title: "Artikel nicht gefunden" }
    return generatePageMetadata(post.seo)
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const category = post.categoryId ? getCategoryBySlug(post.categoryId) : null
    const relatedPosts = getRelatedBlogPosts(slug, post.categoryId, 3)
    const affiliateLink = category
        ? generateAffiliateLink({
            categorySlug: category.id,
            subid: `blog-${slug}`,
        })
        : null

    const articleSchema = generateArticleSchema(post.seo, {
        headline: post.title,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: "Redaktion",
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${slug}`, isCurrentPage: true },
    ])

    return (
        <div className="flex flex-col">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-3xl px-4 pt-6 sm:px-6">
                <ol className="flex items-center gap-2 text-sm text-zinc-500">
                    <li><Link href="/" className="hover:text-zinc-900">Home</Link></li>
                    <li aria-hidden="true" className="text-zinc-300">/</li>
                    <li><Link href="/blog" className="hover:text-zinc-900">Blog</Link></li>
                    <li aria-hidden="true" className="text-zinc-300">/</li>
                    <li className="truncate max-w-[200px] font-medium text-zinc-900">{post.title}</li>
                </ol>
            </nav>

            {/* Article */}
            <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
                {/* Category badge */}
                {category && (
                    <Link
                        href={`/kategorien/${category.id}`}
                        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                    >
                        {category.icon} {category.name}
                    </Link>
                )}

                {/* Title */}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                    <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                    {category && (
                        <>
                            <span aria-hidden="true">•</span>
                            <Link href={`/kategorien/${category.id}`} className="hover:text-zinc-900">
                                {category.name}
                            </Link>
                        </>
                    )}
                    {post.tags && post.tags.length > 0 && (
                        <>
                            <span aria-hidden="true">•</span>
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-zinc-100 px-2 py-0.5 rounded dark:bg-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Excerpt / Lead */}
                <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {post.excerpt}
                </p>

                {/* Content (placeholder for full article) */}
                <div className="mt-8 prose prose-zinc max-w-none dark:prose-invert">
                    {post.content ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                        <>
                            <p>
                                Der vollständige Artikel wird aktuell für Sie vorbereitet.
                                Bereits jetzt können Sie die Angebote direkt vergleichen.
                            </p>
                        </>
                    )}
                </div>

                {/* CTA */}
                {affiliateLink && (
                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Jetzt vergleichen und sparen!</strong> Auf CHECK24 finden Sie
                            die besten Angebote für {category?.name.toLowerCase() ?? "Ihren Vergleich"}.
                        </p>
                        <div className="mt-4">
                            <AffiliateLink link={affiliateLink} variant="primary">
                                Jetzt auf CHECK24 vergleichen
                            </AffiliateLink>
                        </div>
                    </div>
                )}

                {/* Updated date */}
                {post.updatedAt !== post.publishedAt && (
                    <p className="mt-8 text-xs text-zinc-400">
                        Aktualisiert am {new Date(post.updatedAt).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                )}
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                            Weitere Artikel
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-700"
                                >
                                    <h3 className="text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                                        {related.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                        {related.excerpt}
                                    </p>
                                    <p className="mt-3 text-xs text-zinc-400">
                                        {new Date(related.publishedAt).toLocaleDateString("de-DE", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </div>
    )
}
