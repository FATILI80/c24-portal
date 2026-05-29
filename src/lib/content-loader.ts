// ============================================================================
// Content Loader — Registry Pattern
// ============================================================================
// In-memory content registry for categories and blog posts.
// Follows the registry pattern: categories and posts register themselves,
// and content is queried via typed accessor functions.
// Designed to be replaced by a Markdown/headless CMS layer in production.
// ============================================================================

import type {
    AffiliateContent,
    Category,
    ISODate,
    Slug,
} from "@/types/affiliate"

// ─── In-Memory Registry ────────────────────────────────────────────────────

const categories = new Map<Slug, Category>()
const blogPosts = new Map<Slug, AffiliateContent>()

// ─── Category Operations ───────────────────────────────────────────────────

/**
 * Register a category in the content registry.
 */
export function registerCategory(category: Category): void {
    categories.set(category.id, category)
}

/**
 * Get all registered categories, sorted by display order.
 */
export function getAllCategories(): Category[] {
    return Array.from(categories.values()).sort((a, b) => a.order - b.order)
}

/**
 * Get only featured categories (for homepage display).
 */
export function getFeaturedCategories(): Category[] {
    return getAllCategories().filter((c) => c.featured)
}

/**
 * Get a single category by its slug.
 */
export function getCategoryBySlug(slug: Slug): Category | null {
    return categories.get(slug) ?? null
}

/**
 * Get total number of registered categories.
 */
export function getCategoryCount(): number {
    return categories.size
}

// ─── Blog Post Operations ──────────────────────────────────────────────────

/**
 * Register a blog post in the content registry.
 */
export function registerBlogPost(post: AffiliateContent): void {
    blogPosts.set(post.id, post)
}

/**
 * Get all blog posts, sorted by published date (most recent first).
 */
export function getAllBlogPosts(): AffiliateContent[] {
    return Array.from(blogPosts.values()).sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

/**
 * Get a single blog post by its slug.
 */
export function getBlogPostBySlug(slug: Slug): AffiliateContent | null {
    return blogPosts.get(slug) ?? null
}

/**
 * Get the latest N blog posts.
 */
export function getLatestBlogPosts(count = 5): AffiliateContent[] {
    return getAllBlogPosts().slice(0, count)
}

/**
 * Get blog posts filtered by category ID.
 */
export function getBlogPostsByCategory(categoryId: Slug): AffiliateContent[] {
    return getAllBlogPosts().filter((post) => post.categoryId === categoryId)
}

/**
 * Get related blog posts (same category, excluding current post).
 */
export function getRelatedBlogPosts(
    currentSlug: Slug,
    categoryId: Slug,
    maxCount = 3
): AffiliateContent[] {
    return getBlogPostsByCategory(categoryId)
        .filter((post) => post.slug !== currentSlug)
        .slice(0, maxCount)
}

/**
 * Search blog posts by text across title, excerpt, content, and tags.
 */
export function searchContent(query: string): AffiliateContent[] {
    const lowerQuery = query.toLowerCase().trim()
    if (!lowerQuery) return []

    return getAllBlogPosts().filter((post) => {
        const searchable = [
            post.title,
            post.excerpt,
            post.content,
            ...(post.tags ?? []),
        ]
            .join(" ")
            .toLowerCase()

        return searchable.includes(lowerQuery)
    })
}

// ─── Utility Functions ─────────────────────────────────────────────────────

/**
 * Format a date string in German locale.
 *
 * @example
 * ```ts
 * formatDate("2026-05-29")
 * // → "29. Mai 2026"
 * ```
 */
export function formatDate(dateStr: ISODate): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

/**
 * Estimate reading time in minutes based on word count.
 */
export function estimateReadingTime(content: string): number {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

/**
 * Parse simple frontmatter from a markdown string.
 * Supports YAML-like key-value pairs between `---` delimiters.
 *
 * @example
 * ```ts
 * const md = `---
 * title: "Test"
 * date: 2026-05-29
 * ---
 * Content here`
 *
 * parseFrontmatter(md)
 * // → { frontmatter: { title: "Test", date: "2026-05-29" }, content: "Content here" }
 * ```
 */
export function parseFrontmatter(
    raw: string
): {
    frontmatter: Record<string, string>
    content: string
} {
    const result: Record<string, string> = {}
    let content = raw

    const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
    if (match) {
        const frontmatterLines = match[1].split("\n")
        for (const line of frontmatterLines) {
            const separatorIndex = line.indexOf(":")
            if (separatorIndex !== -1) {
                const key = line.slice(0, separatorIndex).trim()
                let value = line.slice(separatorIndex + 1).trim()
                // Remove surrounding quotes
                if (
                    (value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))
                ) {
                    value = value.slice(1, -1)
                }
                result[key] = value
            }
        }
        content = match[2].trim()
    }

    return { frontmatter: result, content }
}

/**
 * Clear all registered content (useful for testing or hot-reload).
 */
export function clearRegistry(): void {
    categories.clear()
    blogPosts.clear()
}
