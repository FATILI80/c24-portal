import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import DigistoreDeals from "@/components/affiliate/DigistoreDeals"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"

// ─── Supported Category Routes ────────────────────────────────────────────

type DealCategory = "ebooks"

const DEAL_CATEGORIES: Record<
    DealCategory,
    {
        label: string
        icon: string
        description: string
        seoTitle: string
        seoDesc: string
    }
> = {
    ebooks: {
        label: "Spar-Ratgeber & E-Books",
        icon: "📚",
        description:
            "Die besten E-Books, Kurse und Vorlagen zum Thema Sparen, Investieren und Finanzen.",
        seoTitle: `Spar-Ratgeber – E-Books & Kurse zum Thema Geld sparen ${SEO_CONFIG.currentYear}`,
        seoDesc: `Die besten digitalen Produkte zum Thema Sparen. E-Books, Online-Kurse und Vorlagen für Deine Finanzen. Bis zu 70% Provision.`,
    },
}

// ─── Generate Metadata ────────────────────────────────────────────────────

interface Props {
    params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params
    const cat = DEAL_CATEGORIES[category as DealCategory]

    if (!cat) {
        return {}
    }

    return generatePageMetadata(
        buildSEOData({
            title: cat.seoTitle,
            description: cat.seoDesc,
            slug: `deals/${category}`,
            keywords: [
                cat.label,
                "Deals",
                "Angebote",
                `Schnäppchen ${SEO_CONFIG.currentYear}`,
            ],
            ogType: "website",
        })
    )
}

// ─── Page Component ───────────────────────────────────────────────────────

export default async function DealCategoryPage({ params }: Props) {
    const { category } = await params
    const cat = DEAL_CATEGORIES[category as DealCategory]

    if (!cat) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            {/* ─── Hero ──────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    {/* Breadcrumb */}
                    <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
                        <Link
                            href="/deals"
                            className="transition-colors hover:text-gold-primary"
                        >
                            Angebote
                        </Link>
                        <span>/</span>
                        <span className="text-text-primary">{cat.label}</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="text-6xl">{cat.icon}</span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                            {cat.label}
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-zinc-400">
                            {cat.description}
                        </p>

                        <Link
                            href="/deals"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gold-primary/30 px-5 py-2.5 text-sm font-medium text-gold-primary transition-all hover:bg-gold-dark/50 hover:border-gold-primary/60"
                        >
                            <span>← Alle Angebote</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Digistore24 Products ──────────────────────────────────── */}
            <DigistoreDeals showFilters={false} />
        </div>
    )
}
