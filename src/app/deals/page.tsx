import type { Metadata } from "next"
import Link from "next/link"
import TechDeals from "@/components/affiliate/TechDeals"
import DigistoreDeals from "@/components/affiliate/DigistoreDeals"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: `Deals & Angebote – Sparen bei Technik & digitalen Produkten ${SEO_CONFIG.currentYear}`,
        description: `Die besten Tech-Deals, Laptop-Angebote, Monitor-Schnäppchen und digitale Spar-Ratgeber. Geprüfte Angebote von Amazon & Digistore24 – täglich aktualisiert.`,
        slug: "deals",
        keywords: [
            "Deals",
            "Angebote",
            "Laptop Deals",
            "Monitor Angebote",
            "Spar-Ratgeber",
            "E-Books Sparen",
            `Technik Deals ${SEO_CONFIG.currentYear}`,
        ],
        ogType: "website",
    })
)

export default function DealsPage() {
    const categoryLinks = [
        { href: "/deals/laptops", label: "Laptops 💻", desc: "Aktuelle Laptop-Angebote" },
        { href: "/deals/monitore", label: "Monitore 🖥️", desc: "Monitor-Schnäppchen" },
        { href: "/deals/ebooks", label: "E-Books 📚", desc: "Spar-Ratgeber & Guides" },
    ]

    return (
        <div className="flex flex-col">
            {/* ─── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-yellow-200 backdrop-blur-sm">
                            <span>🏷️</span>
                            <span>Täglich neue Angebote</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Deals & Spar-Angebote{" "}
                            <span className="text-yellow-300">für Dich</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-emerald-100 sm:text-xl">
                            Ob Laptop, Monitor oder der ultimative Spar-Ratgeber – hier
                            findest Du die besten Angebote. Geprüft von BudgetScout!
                        </p>

                        {/* Category quick links */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {categoryLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-105"
                                >
                                    <span>{link.label}</span>
                                    <span className="opacity-60">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Tech Deals ─────────────────────────────────────────────── */}
            <TechDeals showFilters={false} />

            {/* ─── Divider ────────────────────────────────────────────────── */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-zinc-200 dark:border-zinc-800" />
            </div>

            {/* ─── Digistore24 Deals ──────────────────────────────────────── */}
            <DigistoreDeals showFilters={false} />
        </div>
    )
}
