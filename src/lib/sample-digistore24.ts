// ============================================================================
// Sample Digistore24 Products — Digitale Produkte (Säule B)
// ============================================================================
// E-Books, Online-Kurse und Vorlagen rund ums Thema Sparen & Finanzen.
// Diese Daten werden später durch die Digistore24 API ersetzt.
// ============================================================================

import type { Digistore24Product } from "@/types/affiliate"

// ─── Affiliate-Konfiguration ──────────────────────────────────────────────
// TODO: Durch echte Digistore24 Affiliate-ID ersetzen
const DIGISTORE_AFFILIATE_ID = "budgetscout"
const DIGISTORE_BASE = "https://www.digistore24.com/redir"

function digistoreUrl(productId: string): string {
    return `${DIGISTORE_BASE}/${productId}/${DIGISTORE_AFFILIATE_ID}`
}

// ─── E-Books ──────────────────────────────────────────────────────────────

const E_BOOKS: Digistore24Product[] = [
    {
        id: "ebook-sparfuchs",
        title: "Der Sparfuchs – 100 geniale Spartricks",
        description:
            "Das ultimative E-Book mit über 100 alltagstauglichen Spartricks. Von Lebensmitteln bis Versicherungen – so behältst Du monatlich 500+ Euro mehr in der Tasche.",
        imageUrl: "/images/deals/ebook-sparfuchs.jpg",
        price: 9.99,
        originalPrice: 19.99,
        currency: "EUR",
        commissionPercent: 60,
        affiliateUrl: digistoreUrl("123456"),
        category: "ebook",
        rating: 4.6,
        vendor: "FinanzWissen Verlag",
        badge: "Bestseller",
        tagline: "500€ mehr im Monat – garantiert!",
    },
    {
        id: "ebook-schuldenfrei",
        title: "Schuldenfrei in 12 Monaten",
        description:
            "Bewährte Schritt-für-Schritt-Anleitung, um Schulden abzubauen und dauerhaft schuldenfrei zu bleiben. Mit Workbook und Budget-Tabellen.",
        imageUrl: "/images/deals/ebook-schuldenfrei.jpg",
        price: 14.99,
        originalPrice: 29.99,
        currency: "EUR",
        commissionPercent: 50,
        affiliateUrl: digistoreUrl("123457"),
        category: "ebook",
        rating: 4.4,
        vendor: "Schuldenfrei-Institut",
        badge: "-50%",
        tagline: "Raus aus den Schulden – für immer!",
    },
    {
        id: "ebook-cashback",
        title: "Cashback-Geheimnisse 2026",
        description:
            "Die besten Cashback-Portale, Gutschein-Seiten und Rabatt-Strategien. Erfahre, wie Du bei jedem Online-Kauf Geld zurückbekommst.",
        imageUrl: "/images/deals/ebook-cashback.jpg",
        price: 7.99,
        originalPrice: 14.99,
        currency: "EUR",
        commissionPercent: 65,
        affiliateUrl: digistoreUrl("123458"),
        category: "ebook",
        rating: 4.3,
        vendor: "Sparfuchs Media",
        badge: "Neu",
        tagline: "Geld zurück bei jedem Einkauf!",
    },
    {
        id: "ebook-investieren",
        title: "Investieren für Anfänger 2026",
        description:
            "Verständlicher Einstieg in Aktien, ETFs und Fonds. Mit 5 konkreten Strategien für den Vermögensaufbau – ohne Vorkenntnisse!",
        imageUrl: "/images/deals/ebook-investieren.jpg",
        price: 12.99,
        originalPrice: 24.99,
        currency: "EUR",
        commissionPercent: 50,
        affiliateUrl: digistoreUrl("123459"),
        category: "ebook",
        rating: 4.7,
        vendor: "GeldProfi Verlag",
        badge: "Top bewertet",
        tagline: "Dein erster Schritt an die Börse!",
    },
]

// ─── Online-Kurse ─────────────────────────────────────────────────────────

const KURSE: Digistore24Product[] = [
    {
        id: "kurs-finanzen-im-griff",
        title: "Finanzen im Griff – Der 30-Tage-Sparkurs",
        description:
            "30 Tage, 30 Lektionen, lebenslange Ersparnis. Tägliche Video-Lektionen + Aufgaben, um Deine Finanzen endlich in den Griff zu bekommen.",
        imageUrl: "/images/deals/kurs-finanzen.jpg",
        price: 47,
        originalPrice: 97,
        currency: "EUR",
        commissionPercent: 50,
        affiliateUrl: digistoreUrl("223456"),
        category: "course",
        rating: 4.5,
        vendor: "FinanzCoach GmbH",
        badge: "Bestseller",
        tagline: "30 Tage – ein neues Ich!",
    },
    {
        id: "kurs-nebenverdienst",
        title: "Nebenverdienst mit Affiliate-Marketing",
        description:
            "Kompletter Videokurs zum Start ins Affiliate-Marketing. Von der Nischenwahl bis zum ersten Verkauf – alles Schritt für Schritt erklärt.",
        imageUrl: "/images/deals/kurs-nebenverdienst.jpg",
        price: 67,
        originalPrice: 147,
        currency: "EUR",
        commissionPercent: 40,
        affiliateUrl: digistoreUrl("223457"),
        category: "course",
        rating: 4.3,
        vendor: "Digital Income Academy",
        badge: "-54%",
        tagline: "Verdiene Geld im Schlaf!",
    },
]

// ─── Vorlagen / Software ──────────────────────────────────────────────────

const VORLAGEN: Digistore24Product[] = [
    {
        id: "vorlage-haushaltsbuch",
        title: "Excel-Haushaltsbuch Premium",
        description:
            "Professionelle Excel-Vorlage für Dein Haushaltsbuch. Automatische Auswertungen, Diagramme und Budget-Grenzen. Inkl. App-kompatibler CSV-Export.",
        imageUrl: "/images/deals/vorlage-haushaltsbuch.jpg",
        price: 19.99,
        originalPrice: 29.99,
        currency: "EUR",
        commissionPercent: 70,
        affiliateUrl: digistoreUrl("323456"),
        category: "template",
        rating: 4.6,
        vendor: "TemplatePilot",
        badge: "Bestseller",
        tagline: "Deine Finanzen auf einen Blick!",
    },
    {
        id: "vorlage-budget-planner",
        title: "Budget-Planer PDF – 12 Monate",
        description:
            "Schöner, ausdruckbarer Budget-Planer für 12 Monate. Mit Spar-Challenges, Ziele-Tracker und monatlichen Checklisten.",
        imageUrl: "/images/deals/vorlage-budget-planner.jpg",
        price: 14.99,
        originalPrice: 24.99,
        currency: "EUR",
        commissionPercent: 65,
        affiliateUrl: digistoreUrl("323457"),
        category: "template",
        rating: 4.4,
        vendor: "SmartPlanner.de",
        badge: "-40%",
        tagline: "Planen – Sparen – Freuen!",
    },
]

// ─── Export: Alle Produkte ───────────────────────────────────────────────

export const ALL_DIGISTORE24_PRODUCTS: Digistore24Product[] = [
    ...E_BOOKS,
    ...KURSE,
    ...VORLAGEN,
]

/** Get products by category */
export function getDigistore24ByCategory(
    category: Digistore24Product["category"]
): Digistore24Product[] {
    return ALL_DIGISTORE24_PRODUCTS.filter((p) => p.category === category)
}

/** Get bestsellers (sorted by rating) */
export function getFeaturedDigistore24(count = 4): Digistore24Product[] {
    return [...ALL_DIGISTORE24_PRODUCTS]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, count)
}

/** Get best commission products */
export function getBestCommissionDeals(count = 4): Digistore24Product[] {
    return [...ALL_DIGISTORE24_PRODUCTS]
        .sort((a, b) => b.commissionPercent - a.commissionPercent)
        .slice(0, count)
}

/** Human-readable category labels */
export const DIGISTORE24_CATEGORY_LABELS: Record<
    Digistore24Product["category"],
    { label: string; icon: string; description: string }
> = {
    ebook: {
        label: "E-Books",
        icon: "📚",
        description: "Ratgeber & Guides zum Thema Sparen",
    },
    course: {
        label: "Online-Kurse",
        icon: "🎓",
        description: "Videokurse für finanzielle Bildung",
    },
    software: {
        label: "Software",
        icon: "⚙️",
        description: "Tools und Apps für den Geldbeutel",
    },
    template: {
        label: "Vorlagen",
        icon: "📑",
        description: "Excel, PDF & Co. für Dein Budget",
    },
}
