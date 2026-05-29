"use client"

import { useState } from "react"
import type { Digistore24Product, Digistore24Category } from "@/types/affiliate"
import {
    ALL_DIGISTORE24_PRODUCTS,
    getDigistore24ByCategory,
    getFeaturedDigistore24,
    DIGISTORE24_CATEGORY_LABELS,
} from "@/lib/sample-digistore24"

// ─── Category Configuration ───────────────────────────────────────────────

const CATEGORIES: {
    key: Digistore24Category | "all"
    label: string
    icon: string
}[] = [
        { key: "all", label: "Alle", icon: "📦" },
        { key: "ebook", label: "E-Books", icon: "📚" },
        { key: "course", label: "Kurse", icon: "🎓" },
        { key: "template", label: "Vorlagen", icon: "📑" },
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

function DigistoreProductCard({ product }: { product: Digistore24Product }) {
    const [imgError, setImgError] = useState(false)

    return (
        <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
        >
            {/* Badges */}
            <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
                {product.badge && (
                    <span className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                        {product.badge}
                    </span>
                )}
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {product.commissionPercent}% Provision
                </span>
            </div>

            {/* Image placeholder */}
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
                {imgError ? (
                    <span className="text-5xl opacity-30">
                        {product.category === "ebook"
                            ? "📚"
                            : product.category === "course"
                                ? "🎓"
                                : product.category === "software"
                                    ? "⚙️"
                                    : "📑"}
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
                {/* Category tag */}
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {DIGISTORE24_CATEGORY_LABELS[product.category]?.icon}{" "}
                    {DIGISTORE24_CATEGORY_LABELS[product.category]?.label}
                </span>

                <h3 className="mt-1 text-sm font-semibold leading-tight text-zinc-900 line-clamp-2 dark:text-zinc-50">
                    {product.title}
                </h3>

                {/* Tagline */}
                {product.tagline && (
                    <p className="mt-1 text-xs italic text-zinc-500 dark:text-zinc-400">
                        {product.tagline}
                    </p>
                )}

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2 dark:text-zinc-400">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-xs text-amber-400">
                        {renderStars(product.rating)}
                    </span>
                    <span className="text-xs text-zinc-400">{product.vendor}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                        {formatPrice(product.price)}
                    </span>
                    {product.originalPrice &&
                        product.originalPrice > product.price && (
                            <span className="text-sm text-zinc-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                </div>

                {/* Commission hint */}
                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    Bis zu {formatPrice(product.price * (product.commissionPercent / 100))}{" "}
                    Provision pro Verkauf
                </p>

                {/* CTA */}
                <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-2 dark:text-emerald-400">
                    <span>Zum Produkt</span>
                    <span>→</span>
                </div>
            </div>
        </a>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────

interface DigistoreDealsProps {
    /** Show filter tabs (default: true) */
    showFilters?: boolean
    /** Featured mode: show only top picks */
    featured?: boolean
    /** Max products to show */
    maxItems?: number
}

export default function DigistoreDeals({
    showFilters = true,
    featured = false,
    maxItems,
}: DigistoreDealsProps) {
    const [activeCategory, setActiveCategory] =
        useState<Digistore24Category | "all">("all")

    const filtered =
        featured || activeCategory === "all"
            ? featured
                ? getFeaturedDigistore24(maxItems ?? 4)
                : maxItems
                    ? ALL_DIGISTORE24_PRODUCTS.slice(0, maxItems)
                    : ALL_DIGISTORE24_PRODUCTS
            : getDigistore24ByCategory(activeCategory as Digistore24Category)

    const display = maxItems ? filtered.slice(0, maxItems) : filtered

    return (
        <section className="bg-gradient-to-b from-emerald-50/50 to-white py-12 sm:py-16 dark:from-emerald-950/20 dark:to-zinc-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <span className="text-4xl">📚</span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Spar-Ratgeber & digitale Produkte
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        E-Books, Kurse und Vorlagen – damit Sparen richtig Spaß macht!{" "}
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            Bis zu 70% Provision
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
                                        ? "bg-emerald-600 text-white shadow-md"
                                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
                        <DigistoreProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                {/* View all link */}
                {featured && (
                    <div className="mt-8 text-center">
                        <a
                            href="/deals"
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
                        >
                            Alle Produkte entdecken 🚀
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
