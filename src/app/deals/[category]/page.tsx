import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import TechDeals from "@/components/affiliate/TechDeals"
import DigistoreDeals from "@/components/affiliate/DigistoreDeals"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"

// ─── Supported Category Routes ────────────────────────────────────────────

type DealCategory = "laptops" | "monitore" | "ebooks"

const DEAL_CATEGORIES: Record<
    DealCategory,
    {
        label: string
        icon: string
        description: string
        seoTitle: string
        seoDesc: string
        type: "tech" | "digistore"
    }
> = {
    laptops: {
        label: "Laptop-Angebote",
        icon: "💻",
        description:
            "Aktuelle Laptop-Deals von Lenovo, HP, Dell, ASUS, Apple & mehr. Geprüfte Angebote mit bis zu 40% Rabatt.",
        seoTitle: `Laptop-Angebote – Beste Laptop Deals ${SEO_CONFIG.currentYear}`,
        seoDesc: `Die besten Laptop-Angebote bei Amazon. Lenovo, HP, Dell, ASUS, MacBook – täglich aktualisiert. Spare bis zu 40% beim Laptop-Kauf!`,
        type: "tech",
    },
    monitore: {
        label: "Monitor-Angebote",
        icon: "🖥️",
        description:
            "Monitor-Schnäppchen von LG, Dell, Samsung & mehr. Gaming, Office oder 4K – hier wirst Du fündig.",
        seoTitle: `Monitor-Angebote – Beste Monitor Deals ${SEO_CONFIG.currentYear}`,
        seoDesc: `Monitore günstig kaufen. LG, Dell, Samsung Monitore im Vergleich. Gaming, 4K, Curved – die besten Angebote täglich aktualisiert.`,
        type: "tech",
    },
    ebooks: {
        label: "Spar-Ratgeber & E-Books",
        icon: "📚",
        description:
            "Die besten E-Books, Kurse und Vorlagen zum Thema Sparen, Investieren und Finanzen.",
        seoTitle: `Spar-Ratgeber – E-Books & Kurse zum Thema Geld sparen ${SEO_CONFIG.currentYear}`,
        seoDesc: `Die besten digitalen Produkte zum Thema Sparen. E-Books, Online-Kurse und Vorlagen für Deine Finanzen. Bis zu 70% Provision.`,
        type: "digistore",
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
            <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    {/* Breadcrumb */}
                    <nav className="mb-6 flex items-center gap-2 text-sm text-emerald-200">
                        <Link
                            href="/deals"
                            className="transition-colors hover:text-white"
                        >
                            Angebote
                        </Link>
                        <span>/</span>
                        <span className="text-white">{cat.label}</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="text-6xl">{cat.icon}</span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            {cat.label}
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-emerald-100">
                            {cat.description}
                        </p>

                        <Link
                            href="/deals"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-105"
                        >
                            <span>← Alle Angebote</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Products ──────────────────────────────────────────────── */}
            {cat.type === "tech" ? (
                <TechDeals showFilters={false} />
            ) : (
                <DigistoreDeals showFilters={false} />
            )}
        </div>
    )
}
