import type { MetadataRoute } from "next"
import { getAllCategories, getAllBlogPosts } from "@/lib/content-loader"
import { SEO_CONFIG } from "@/lib/seo"

/**
 * Generate a dynamic XML sitemap for all pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SEO_CONFIG.baseUrl
    const today = new Date().toISOString().split("T")[0]

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: today,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: today,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/impressum`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.2,
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.2,
        },
    ]

    // Category pages
    const categoryPages: MetadataRoute.Sitemap = getAllCategories().map(
        (category) => ({
            url: `${baseUrl}/kategorien/${category.id}`,
            lastModified: today,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        })
    )

    // Blog post pages
    const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map(
        (post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt ?? today,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })
    )

    return [...staticPages, ...categoryPages, ...blogPages]
}

