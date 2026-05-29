"use client"

import { getAllCategories } from "@/lib/content-loader"
import { generateAffiliateLink } from "@/lib/affiliate-links"
import type { Slug } from "@/types/affiliate"

// ─── STATIC: Category → Check24 mapping ───────────────────────────────────
// Direct Check24 comparison paths for each category
const CHECK24_CATEGORY_PATHS: Record<string, { path: string; tagline: string }> = {
    "strom-gas": {
        path: "/stromvergleich/",
        tagline: "Bis 500€ sparen pro Jahr!",
    },
    kreditkarten: {
        path: "/kreditkarte/",
        tagline: "Bis 100€ Bonus sichern!",
    },
    tagesgeld: {
        path: "/tagesgeld/",
        tagline: "Bis 3,5% Zinsen p.a.",
    },
    "kfz-versicherung": {
        path: "/kfz-versicherung/",
        tagline: "Wechseln & sparen!",
    },
    dsl: {
        path: "/dsl/",
        tagline: "Bis zu 250 Mbit/s",
    },
    mietwagen: {
        path: "/mietwagen/",
        tagline: "Ab 15€ pro Tag",
    },
    reisen: {
        path: "/reise/",
        tagline: "Urlaub günstig buchen",
    },
}

/**
 * Renders all 7 CHECK24 categories as lounge-style cards with direct
 * affiliate deep-links to check24.de comparisons.
 */
export default function Check24CategoryCards() {
    const categories = getAllCategories()

    return (
        <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-24">
            {/* Warm lounge glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-800/40 bg-amber-950/30 px-4 py-1 text-sm font-medium text-amber-400">
                        🏆 CHECK24 Vergleichssieger
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100">
                        Alle Vergleiche auf einen Blick
                    </h2>
                    <p className="mt-3 text-lg text-zinc-500">
                        Wähl' Deine Kategorie und leg los – bei CHECK24 mit Deinem persönlichen Deal! 🔥
                    </p>
                </div>

                {/* 7 Category Cards — 4-grid on desktop, 2 on tablet */}
                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categories.map((cat) => {
                        const check24Info = CHECK24_CATEGORY_PATHS[cat.id]
                        if (!check24Info) return null

                        // Generate the affiliate deep-link for this category
                        const link = generateAffiliateLink({
                            categorySlug: cat.id as Slug,
                            subid: `homepage-${cat.id}`,
                        })

                        return (
                            <a
                                key={cat.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm transition-all duration-300 hover:border-amber-700/60 hover:bg-zinc-900/70 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Warm glow on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative flex items-center gap-4">
                                    {/* Category icon */}
                                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-950/40 to-yellow-950/40 text-2xl shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                        {cat.icon}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-zinc-100 truncate">
                                            {cat.name}
                                        </h3>
                                        <p className="text-sm font-medium text-amber-400/80">
                                            {cat.shortName}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="relative mt-4 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                                    {cat.description}
                                </p>

                                {/* Tagline */}
                                <p className="relative mt-3 flex items-center gap-1.5 text-xs font-medium text-amber-500">
                                    <span>🔥</span>
                                    <span>{check24Info.tagline}</span>
                                </p>

                                {/* CTA with arrow */}
                                <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-amber-400 transition-all group-hover:gap-3">
                                    <span>Direkt zu CHECK24</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    <span className="text-base opacity-0 transition-all group-hover:opacity-100">⚡</span>
                                </div>

                                {/* Bottom gold shimmer on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                        )
                    })}
                </div>

                {/* Lounge saying footer */}
                <div className="relative mt-10 text-center">
                    <p className="text-sm italic text-zinc-600">
                        &bdquo;Vergleich ist der beste Cocktail – einmal probiert, willste nicht mehr aufhören!&ldquo; 🥂
                    </p>
                </div>
            </div>
        </section>
    )
}
