"use client"

import { useState } from "react"
import type { AmazonProduct, AmazonTechCategory } from "@/types/affiliate"
import {
    ALL_TECH_DEALS,
    getTechDealsByCategory,
    getFeaturedTechDeals,
} from "@/lib/sample-tech-deals"

// ─── Category Configuration ───────────────────────────────────────────────

const CATEGORIES: {
    key: AmazonTechCategory | "all"
    label: string
    icon: string
}[] = [
        { key: "all", label: "Alle Deals", icon: "🔥" },
        { key: "laptop", label: "Laptops", icon: "💻" },
        { key: "monitor", label: "Monitore", icon: "🖥️" },
        { key: "zubehoer", label: "Zubehör", icon: "🖱️" },
    ]

// ─── Helper ───────────────────────────────────────────────────────────────

function formatPrice(price: number): string {
    return price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    })
}

function renderStars(rating: number): string {
    const full = Math.floor(rating)
    const half = rating - full >= 0.5 ? 1 : 0
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half)
}

// ─── Product Card ─────────────────────────────────────────────────────────

function TechProductCard({ product }: { product: AmazonProduct }) {
    const [imgError, setImgError] = useState(false)

    return (
        <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-gold-accent bg-gold-dark/40 transition-all duration-300 hover:border-gold-primary/50 hover:shadow-gold-glow-lg hover:-translate-y-1"
        >
            {/* Badge */}
            {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-gold-primary to-yellow-600 px-3 py-1 text-xs font-bold text-gold-dark shadow-sm">
                    {product.badge}
                </span>
            )}

            {/* Image placeholder */}
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gold-dark to-gold-accent">
                {imgError ? (
                    <span className="text-6xl opacity-30">
                        {product.category === "laptop"
                            ? "💻"
                            : product.category === "monitor"
                                ? "🖥️"
                                : "🖱️"}
                    </span>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-semibold leading-tight text-text-primary line-clamp-2">
                    {product.title}
                </h3>

                {/* Rating */}
                <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-xs text-gold-primary">
                        {renderStars(product.rating)}
                    </span>
                    <span className="text-xs text-zinc-400">
                        ({product.reviewCount?.toLocaleString("de-DE")})
                    </span>
                </div>

                {/* Features */}
                {product.features && (
                    <ul className="mt-2 space-y-0.5">
                        {product.features.slice(0, 3).map((f, i) => (
                            <li
                                key={i}
                                className="text-xs text-zinc-400"
                            >
                                ✓ {f}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-text-primary">
                        {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-zinc-400 line-through">
                            {formatPrice(product.originalPrice)}
                        </span>
                    )}
                </div>

                {/* CTA */}
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-gold-primary transition-all group-hover:gap-2">
                    <span>Zum Angebot</span>
                    <span>→</span>
                </div>
            </div>
        </a>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────

interface TechDealsProps {
    /** Show filter tabs (default: true) */
    showFilters?: boolean
    /** Max products to show (default: all) */
    maxItems?: number
    /** Featured mode: show only top picks */
    featured?: boolean
}

export default function TechDeals({
    showFilters = true,
    maxItems,
    featured = false,
}: TechDealsProps) {
    const [activeCategory, setActiveCategory] =
        useState<AmazonTechCategory | "all">("all")

    const filtered =
        featured || activeCategory === "all"
            ? featured
                ? getFeaturedTechDeals(maxItems ?? 4)
                : maxItems
                    ? ALL_TECH_DEALS.slice(0, maxItems)
                    : ALL_TECH_DEALS
            : getTechDealsByCategory(activeCategory as AmazonTechCategory)

    const display = maxItems ? filtered.slice(0, maxItems) : filtered

    return (
        <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <span className="text-4xl">💻</span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary">
                        Tech-Deals & Spar-Angebote
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        Laptops, Monitore und Zubehör zu den besten Preisen –{" "}
                        <span className="font-semibold text-gold-primary">
                            geprüft von BudgetScout
                        </span>
                    </p>
                </div>

                {/* Filter tabs */}
                {showFilters && !featured && (
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat.key
                                    ? "bg-gold-primary text-gold-dark shadow-md"
                                    : "bg-gold-accent/50 text-zinc-400 hover:bg-gold-accent hover:text-gold-primary"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Product grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {display.map((product) => (
                        <TechProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View all link */}
                {featured && (
                    <div className="mt-8 text-center">
                        <a
                            href="/deals"
                            className="inline-flex items-center gap-2 rounded-xl bg-gold-primary px-6 py-3 text-sm font-semibold text-gold-dark shadow-sm transition-all hover:bg-gold-primary/90 hover:scale-105 active:scale-95"
                        >
                            Alle Deals anzeigen 🚀
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
