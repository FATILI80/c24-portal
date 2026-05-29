"use client"

import { useState } from "react"
import { generateAffiliateLink, getAffiliateLinkAttributes } from "@/lib/affiliate-links"
import type { Slug } from "@/types/affiliate"
import DealTicker from "@/components/conversion/DealTicker"
import ShareButtons from "@/components/conversion/ShareButtons"
import { trackProductView } from "@/components/conversion/RecentlyViewed"
import RecentlyViewed from "@/components/conversion/RecentlyViewed"
import Testimonials from "@/components/home/Testimonials"
import NewsletterSignup from "@/components/conversion/NewsletterSignup"
import StickyCta from "@/components/conversion/StickyCta"
import ExitIntentPopup from "@/components/conversion/ExitIntentPopup"

// ─── CHECK24 Category Config ──────────────────────────────────────────────
interface Check24Category {
    slug: Slug
    name: string
    description: string
    icon: string
    savings: string
}

const CHECK24_CATEGORIES: Check24Category[] = [
    {
        slug: "kfz-versicherung",
        name: "Kfz-Versicherung",
        description: "Haftpflicht, Teil- oder Vollkasko – bis zu 500€ sparen durch einen Wechsel.",
        icon: "🚗",
        savings: "Bis zu 500€ sparen",
    },
    {
        slug: "strom-gas",
        name: "Stromanbieter",
        description: "Finde den günstigsten Stromtarif für Deine PLZ. Wechsel in wenigen Minuten.",
        icon: "⚡",
        savings: "Bis zu 300€ sparen",
    },
    {
        slug: "dsl",
        name: "DSL & Internet",
        description: "Surfgeschwindigkeiten vergleichen – vom günstigen Einsteiger- bis zum Highspeed-Tarif.",
        icon: "🌐",
        savings: "Bis zu 240€ sparen",
    },
    {
        slug: "kredite",
        name: "Kredite",
        description: "Ratenkredite, Autokredite oder Umschuldung – den besten Zins sichern.",
        icon: "💰",
        savings: "Bis zu 1.000€ Zinsen sparen",
    },
    {
        slug: "krankenversicherung",
        name: "Krankenversicherung",
        description: "Gesetzlich oder privat? Vergleich lohnt sich – vor allem für Selbstständige.",
        icon: "🛡️",
        savings: "Bis zu 800€ sparen",
    },
    {
        slug: "mietwagen",
        name: "Mietwagen",
        description: "Mietwagen weltweit vergleichen – günstige Preise von Sixt, Europcar, Hertz und vielen mehr.",
        icon: "🚙",
        savings: "Ab 15€ pro Tag",
    },
    {
        slug: "reisen",
        name: "Reisen & Flüge",
        description: "Hotels, Flüge und Pauschalreisen vergleichen. Die besten Angebote für Deinen Urlaub.",
        icon: "✈️",
        savings: "Urlaub günstig buchen",
    },
]

// ─── Digistore24 Product Config (15 echte Produkte) ──────────────────────

interface DigistoreProduct {
    name: string
    description: string
    category: string
    filterGroup: string
    link: string
}

const DIGISTORE_PRODUCTS: DigistoreProduct[] = [
    {
        name: "Mehr Energie im Alltag",
        description: "Natürliche Methoden für mehr Vitalität – ohne teure Arztbesuche.",
        category: "Gesundheit",
        filterGroup: "Gesundheit",
        link: "https://www.digistore24.com/redir/659362/Bb8ozi/",
    },
    {
        name: "Gesund & unabhängig leben",
        description: "Praktisches Haushalts-Wissen das bares Geld spart.",
        category: "Gesundheit & Haushalt",
        filterGroup: "Gesundheit",
        link: "https://www.digistore24.com/redir/659614/Bb8ozi/",
    },
    {
        name: "Heilpflanzen selbst anbauen",
        description: "Medizinische Pflanzen zuhause ziehen – unabhängig von Apotheke & Drogerie.",
        category: "Gesundheit & Vorsorge",
        filterGroup: "Gesundheit",
        link: "https://medicinalseedkit.com/kit/#aff=Bb8ozi",
    },
    {
        name: "Krisenvorsorge: Lebensmittel clever lagern",
        description: "Wie du dich mit einem kleinen Budget optimal für Engpässe absicherst.",
        category: "Vorsorge & Sparen",
        filterGroup: "Vorsorge & Sicherheit",
        link: "https://ultimatesurvivalfoods.com/book/#aff=Bb8ozi",
    },
    {
        name: "Der Haus-Doktor: Selbst behandeln & sparen",
        description: "Das Handbuch für medizinische Erstversorgung zuhause – weniger Arztkosten.",
        category: "Gesundheit & Haushalt",
        filterGroup: "Gesundheit",
        link: "https://homedoctorbook.com/book/#aff=Bb8ozi",
    },
    {
        name: "Zuhause sicher & geschützt",
        description: "Günstige Maßnahmen die dein Zuhause vor Einbruch schützen.",
        category: "Sicherheit & Vorsorge",
        filterGroup: "Vorsorge & Sicherheit",
        link: "https://www.theantilooterkit.com/main/#aff=Bb8ozi",
    },
    {
        name: "Besser schlafen – weniger Kosten",
        description: "Erholsamer Schlaf ohne teure Hilfsmittel oder Schlafmittel.",
        category: "Gesundheit",
        filterGroup: "Gesundheit",
        link: "https://neowake.de/source-code/#aff=Bb8ozi",
    },
    {
        name: "Sauberes Wasser – Kosten senken",
        description: "Trinkwasser selbst aufbereiten – unabhängig und günstiger als Flaschen.",
        category: "Haushalt & Sparen",
        filterGroup: "Haushalt & Sparen",
        link: "https://uswaterrevolution.com/#aff=Bb8ozi",
    },
    {
        name: "Vitalität steigern – natürlich",
        description: "Für alle die in ihre Gesundheit investieren statt ins Gesundheitssystem.",
        category: "Gesundheit & Vorsorge",
        filterGroup: "Gesundheit",
        link: "https://myvigorsana.com/vigorsana-pdp-fe#aff=Bb8ozi",
    },
    {
        name: "Finanziell freier werden",
        description: "Schritt-für-Schritt zur finanziellen Unabhängigkeit – auch mit kleinem Budget.",
        category: "Finanzen",
        filterGroup: "Finanzen",
        link: "https://www.digistore24.com/redir/434104/Bb8ozi/",
    },
    {
        name: "Nebeneinkommen mit Social Media",
        description: "Wie du mit Instagram ein zweites Standbein aufbaust – Schritt für Schritt.",
        category: "Online Business",
        filterGroup: "Online Business",
        link: "https://franke-akademie.de/met-gluecksformel-instagram#aff=Bb8ozi",
    },
    {
        name: "Mental stark & fokussiert",
        description: "Mentale Stärke aufbauen – für bessere Entscheidungen beim Geld und im Alltag.",
        category: "Mindset & Finanzen",
        filterGroup: "Mindset",
        link: "https://silent-subliminals.de#aff=Bb8ozi",
    },
    {
        name: "Passives Einkommen starten",
        description: "Einnahmen aufbauen die auch dann fließen wenn du schläfst.",
        category: "Online Business",
        filterGroup: "Online Business",
        link: "https://www.digistore24.com/redir/615173/Bb8ozi/",
    },
    {
        name: "Website-Besucher in Kunden verwandeln",
        description: "Tool für mehr Conversions – ideal für alle die online verkaufen.",
        category: "Online Business & Tools",
        filterGroup: "Online Business",
        link: "https://www.engagegorilla.com/?utm_source=affiliate&utm_medium=Bb8ozi#aff=Bb8ozi",
    },
    {
        name: "Smarter sparen im Alltag",
        description: "Praktische Strategien die sofort mehr Geld im Portemonnaie lassen.",
        category: "Sparen & Finanzen",
        filterGroup: "Finanzen",
        link: "https://www.checkout-ds24.com/redir/678181/Bb8ozi/",
    },
]

// ─── Category Filter Config ──────────────────────────────────────────────

const FILTER_CATEGORIES = [
    "Alle",
    "Gesundheit",
    "Finanzen",
    "Vorsorge & Sicherheit",
    "Online Business",
    "Haushalt & Sparen",
    "Mindset",
] as const

type FilterCategory = (typeof FILTER_CATEGORIES)[number]

// ─── Vertrauens-Bereich Config ───────────────────────────────────────────

interface TrustItem {
    icon: string
    title: string
    description: string
}

const TRUST_ITEMS: TrustItem[] = [
    {
        icon: "🔍",
        title: "Unabhängig verglichen",
        description: "Alle Vergleiche sind redaktionell unabhängig. Wir erhalten eine Provision, aber das beeinflusst unsere Rankings nicht.",
    },
    {
        icon: "📅",
        title: "Täglich aktualisiert",
        description: "Tarife und Preise ändern sich ständig. Wir aktualisieren unsere Daten täglich, damit Du immer den besten Deal bekommst.",
    },
    {
        icon: "✅",
        title: "Kostenlos & unverbindlich",
        description: "Alle Vergleiche sind für Dich völlig kostenlos. Keine versteckten Kosten, keine Anmeldung erforderlich.",
    },
]

// ─── Ratgeber-Vorschau Config ────────────────────────────────────────────

interface RatgeberPreview {
    title: string
    excerpt: string
    slug: string
    icon: string
}

const RATGEBER_ARTICLES: RatgeberPreview[] = [
    {
        title: "Kfz-Versicherung wechseln – so geht's",
        excerpt: "Wann lohnt sich ein Wechsel der Kfz-Versicherung? Wir erklären die Fristen, Stufen und worauf Du achten musst, um bares Geld zu sparen.",
        slug: "kfz-versicherung-wechseln",
        icon: "🚗",
    },
    {
        title: "Stromanbieter vergleichen & wechseln",
        excerpt: "Der Strommarkt ist im Wandel. Erfahre, wie Du mit einem Anbieterwechsel hunderte Euro sparst und worauf es beim Tarifvergleich ankommt.",
        slug: "stromanbieter-vergleich",
        icon: "⚡",
    },
    {
        title: "Online Geld verdienen – seriöse Wege",
        excerpt: "Nebenjob oder Hauptverdienst? Wir zeigen Dir seriöse Möglichkeiten, online Geld zu verdienen – von Affiliate-Marketing bis zum eigenen Online-Kurs.",
        slug: "online-geld-verdienen",
        icon: "💡",
    },
]

// ─── Helper ──────────────────────────────────────────────────────────────

const linkAttrs = getAffiliateLinkAttributes()

function buildCheck24Url(slug: Slug, subid: string): string {
    const { url } = generateAffiliateLink({
        categorySlug: slug,
        subid,
    })
    return url
}

// ─── Holzquerbalken Component ───────────────────────────────────────────

function HolzBalken({ dark = false }: { dark?: boolean }) {
    return <div className={dark ? "holz-balken-dark" : "holz-balken"} />
}

// ─── Component ──────────────────────────────────────────────────────────

export default function HomeClient() {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("Alle")

    const filteredProducts =
        activeFilter === "Alle"
            ? DIGISTORE_PRODUCTS
            : DIGISTORE_PRODUCTS.filter((p) => p.filterGroup === activeFilter)

    const handleProductClick = (product: DigistoreProduct) => {
        trackProductView(product.name, product.link, product.category)
    }

    return (
        <div className="flex flex-col">
            {/* ══════════════════════════════════════════════════════════════════
            DEAL TICKER
            ══════════════════════════════════════════════════════════════════ */}
            <DealTicker />

            {/* ══════════════════════════════════════════════════════════════════
            HERO SECTION
            ══════════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-surface">
                {/* Subtle wood texture in hero background */}
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            <span>🏆</span>
                            <span>Unabhängiges Vergleichsportal</span>
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Vergleichen & Sparen{" "}
                            <span className="text-gold-primary">mit einem Klick</span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
                            Vergleiche Kfz-Versicherung, Stromtarife, DSL, Kredite und
                            Krankenversicherung. Wir finden den besten Tarif für Dich –
                            <span className="text-gold-primary font-medium">
                                {" "}garantiert kostenlos & unverbindlich.
                            </span>
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#check24-vergleiche" className="btn-gold text-base">
                                Jetzt vergleichen
                            </a>
                            <a href="#digistore-deals" className="btn-outline text-base">
                                Top Deals entdecken
                            </a>
                        </div>

                        {/* Trust bar under hero */}
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                            <span className="flex items-center gap-1.5">
                                <span className="text-gold-primary">✓</span> 100% kostenlos
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-gold-primary">✓</span> Unabhängig
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-gold-primary">✓</span> Täglich aktuell
                            </span>
                        </div>

                        {/* Share buttons */}
                        <div className="mt-8">
                            <ShareButtons />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Holzquerbalken ────────────────────────────────────────────── */}
            <HolzBalken />

            {/* ══════════════════════════════════════════════════════════════════
            CHECK24 VERGLEICHE
            ══════════════════════════════════════════════════════════════════ */}
            <section
                id="check24-vergleiche"
                className="relative overflow-hidden bg-surface py-16 sm:py-24"
            >
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                            📊 CHECK24-Vergleiche
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                            Finde den besten Tarif
                        </h2>
                        <p className="mt-3 text-lg text-zinc-400">
                            Wähle eine Kategorie und vergleiche aktuell bis zu 50+ Tarife.
                        </p>
                    </div>

                    {/* Category cards grid */}
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {CHECK24_CATEGORIES.map((cat) => {
                            const href = buildCheck24Url(cat.slug, `homepage-${cat.slug}`)
                            return (
                                <a
                                    key={cat.slug}
                                    href={href}
                                    {...linkAttrs}
                                    className="card-base card-holz-border group flex flex-col items-center p-6 text-center"
                                >
                                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-holz-dark text-2xl transition-all duration-300 group-hover:scale-110">
                                        {cat.icon}
                                    </span>
                                    <h3 className="mt-4 text-base font-bold text-text-primary">
                                        {cat.name}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                                        {cat.description}
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-gold-primary/10 px-2.5 py-0.5 text-xs font-semibold text-gold-primary">
                                        {cat.savings}
                                    </span>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-primary transition-all group-hover:gap-2">
                                        Jetzt vergleichen
                                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Holzquerbalken ────────────────────────────────────────────── */}
            <HolzBalken dark />

            {/* ══════════════════════════════════════════════════════════════════
            DIGISTORE24 PRODUKTE
            ══════════════════════════════════════════════════════════════════ */}
            <section
                id="digistore-deals"
                className="relative overflow-hidden bg-surface py-16 sm:py-24"
            >
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                            🛒 Empfohlene Produkte
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                            Deals, die sich lohnen
                        </h2>
                        <p className="mt-3 text-lg text-zinc-400">
                            Hochwertige Kurse, E-Books und mehr – handverlesen für Dich.
                        </p>
                    </div>

                    {/* ── Category Filter Tabs ──────────────────────────────────── */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {FILTER_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${activeFilter === cat
                                    ? "bg-gold-primary text-surface"
                                    : "bg-holz-dark/60 text-zinc-400 hover:bg-holz-dark hover:text-text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Product Cards Grid ────────────────────────────────────── */}
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product, i) => (
                            <a
                                key={i}
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="card-base card-holz-border group flex flex-col p-6"
                                onClick={() => handleProductClick(product)}
                            >
                                {/* Category badge */}
                                <span className="inline-flex self-start rounded-full bg-gold-primary/15 px-2.5 py-0.5 text-xs font-semibold text-gold-primary">
                                    {product.category}
                                </span>

                                {/* Product name */}
                                <h3 className="mt-3 text-base font-bold text-text-primary">
                                    {product.name}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500 flex-1">
                                    {product.description}
                                </p>

                                {/* CTA */}
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-primary transition-all group-hover:gap-2">
                                    Jetzt ansehen
                                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* If filter yields no results */}
                    {filteredProducts.length === 0 && (
                        <p className="mt-8 text-center text-sm text-zinc-600">
                            Keine Produkte in dieser Kategorie gefunden.
                        </p>
                    )}
                </div>
            </section>

            {/* ── Holzquerbalken ────────────────────────────────────────────── */}
            <HolzBalken />

            {/* ══════════════════════════════════════════════════════════════════
            RECENTLY VIEWED
            ══════════════════════════════════════════════════════════════════ */}
            <RecentlyViewed />

            {/* ── Holzquerbalken (dark) ────────────────────────────────────── */}
            <HolzBalken dark />

            {/* ══════════════════════════════════════════════════════════════════
            DEAL DES TAGES
            ══════════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="card-base card-holz-border relative overflow-hidden border border-gold-primary/20 p-8 sm:p-12 animate-gold-pulse">
                        {/* Wood texture overlay */}
                        <div className="absolute inset-0 bg-holz-texture opacity-30" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.04),transparent_60%)]" />

                        <div className="relative">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-primary/15 px-3 py-1 text-xs font-bold text-gold-primary">
                                <span className="animate-pulse-soft">🔥</span>
                                DEAL DES TAGES
                            </span>

                            <h3 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                                Exklusives Angebot des Tages
                            </h3>

                            <p className="mt-3 max-w-2xl text-base text-zinc-400">
                                Dieses Angebot wird aktuell von unserem Team geprüft.
                                Schau bald wieder vorbei – täglich neue Top-Deals!
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <span className="text-sm text-zinc-500">
                                    ⏳ Limitierte Aktion – gültig solange der Vorrat reicht
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Holzquerbalken (dark) ────────────────────────────────────── */}
            <HolzBalken dark />

            {/* ══════════════════════════════════════════════════════════════════
            VERTRAUENS-BEREICH
            ══════════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                            Darum vertrauen uns tausende Nutzer
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {TRUST_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                className="card-base card-holz-border flex flex-col items-center p-8 text-center"
                            >
                                <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-holz-dark text-3xl">
                                    {item.icon}
                                </span>
                                <h3 className="mt-4 text-lg font-bold text-text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Holzquerbalken ────────────────────────────────────────────── */}
            <HolzBalken />

            {/* ══════════════════════════════════════════════════════════════════
            TESTIMONIALS
            ══════════════════════════════════════════════════════════════════ */}
            <Testimonials />

            {/* ── Holzquerbalken (dark) ────────────────────────────────────── */}
            <HolzBalken dark />

            {/* ══════════════════════════════════════════════════════════════════
            NEWSLETTER SIGNUP
            ══════════════════════════════════════════════════════════════════ */}
            <NewsletterSignup />

            {/* ── Holzquerbalken ────────────────────────────────────────────── */}
            <HolzBalken />

            {/* ══════════════════════════════════════════════════════════════════
            RATGEBER-VORSCHAU
            ══════════════════════════════════════════════════════════════════ */}
            <section
                id="ratgeber"
                className="relative overflow-hidden bg-surface py-16 sm:py-24"
            >
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                            📖 Ratgeber
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                            Clever sparen – unsere Tipps
                        </h2>
                        <p className="mt-3 text-lg text-zinc-400">
                            Praxisnahe Ratgeber zu Versicherungen, Finanzen und mehr.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {RATGEBER_ARTICLES.map((article, i) => (
                            <a
                                key={i}
                                href={`/ratgeber/${article.slug}`}
                                className="card-base card-holz-border group flex flex-col p-6"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-holz-dark text-2xl transition-all duration-300 group-hover:scale-110">
                                    {article.icon}
                                </span>
                                <h3 className="mt-4 text-base font-bold text-text-primary group-hover:text-gold-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500 flex-1">
                                    {article.excerpt}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-primary transition-all group-hover:gap-2">
                                    Weiterlesen
                                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Holzquerbalken (bottom) ──────────────────────────────────── */}
            <HolzBalken dark />

            {/* ══════════════════════════════════════════════════════════════════
            STICKY CTA (mobile only)
            ══════════════════════════════════════════════════════════════════ */}
            <StickyCta />

            {/* ══════════════════════════════════════════════════════════════════
            EXIT INTENT POPUP (full-page overlay)
            ══════════════════════════════════════════════════════════════════ */}
            <ExitIntentPopup />
        </div>
    )
}
