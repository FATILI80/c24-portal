import type { MetadataRoute } from "next"
import { SEO_CONFIG } from "@/lib/seo"

/**
 * Dynamic robots.txt generation.
 * Allows all crawlers, points to sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/api/",
                "/_next/",
                "/_vercel/",
            ],
        },
        sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
    }
}
