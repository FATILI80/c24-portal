import type { Metadata } from "next"
import Link from "next/link"
import DigistoreDeals from "@/components/affiliate/DigistoreDeals"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: `Deals & Angebote – Digitale Produkte & Spar-Ratgeber ${SEO_CONFIG.currentYear}`,
        description: `Die besten digitalen Produkte, E-Books und Kurse zum Thema Sparen. Geprüfte Angebote von Digistore24 – täglich aktualisiert.`,
        slug: "deals",
        keywords: [
            "Deals",
            "Angebote",
            "E-Books",
            "Spar-Ratgeber",
            "Digitale Produkte",
            `Deals ${SEO_CONFIG.currentYear}`,
        ],
        ogType: "website",
    })
)

export default function DealsPage() {
    return (
        <div className="flex flex-col">
            {/* ─── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/40 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            <span>🏷️</span>
                            <span>Täglich aktualisiert</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                            Deals & Angebote{" "}
                            <span className="text-gold-primary">für Dich</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
                            Digitale Produkte, E-Books und Kurse rund ums Sparen –
                            handverlesen und geprüft von BudgetScout.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Digistore24 Deals ──────────────────────────────────────── */}
            <DigistoreDeals showFilters={false} />
        </div>
    )
}
