// ============================================================================
// Category Definitions — All CHECK24 Verticals
// ============================================================================
// Registers all CHECK24 comparison categories into the content registry.
// Adding a new category is as simple as adding a new object and calling
// registerCategory() — no routing or structural changes needed.
// ============================================================================

import type { Category } from "@/types/affiliate"
import { registerCategory } from "@/lib/content-loader"
import { buildTitle, buildDescription, toSlug } from "@/lib/seo"

// ─── Category Factory ──────────────────────────────────────────────────────

function createCategory(overrides: Partial<Category> & {
    name: string
    shortName: string
    description: string
    icon: string
    order: number
    check24BaseUrl: string
    affiliateSubid: string
}): Category {
    const slug = toSlug(overrides.name)
    return {
        // Spread overrides FIRST so explicitly computed fields below take precedence
        ...overrides,
        id: slug,
        featured: overrides.featured ?? true,
        seo: {
            title: buildTitle(`${overrides.shortName}-Vergleich`),
            description: buildDescription(overrides.description),
            keywords: [overrides.name, overrides.shortName, "Vergleich", "CHECK24"],
        },
        deepLinkConfig: {
            basePath: "",
            params: [],
            exampleUrl: overrides.check24BaseUrl,
        },
        relatedArticles: overrides.relatedArticles ?? [],
    }
}

// ─── Define All Categories ─────────────────────────────────────────────────

const STROM_GAS: Category = createCategory({
    name: "Strom & Gas",
    shortName: "Stromvergleich",
    description:
        "Vergleichen Sie Strom- und Gastarife. Wechseln Sie zu günstigeren Anbietern und sparen Sie bis zu 500€ pro Jahr.",
    icon: "⚡",
    order: 1,
    check24BaseUrl: "https://www.check24.de/stromvergleich/",
    affiliateSubid: "kategorie-strom-gas",
    relatedArticles: ["stromtarif-vergleich-2026"],
})

const KREDITKARTEN: Category = createCategory({
    name: "Kreditkarten",
    shortName: "Kreditkartenvergleich",
    description:
        "Die besten Kreditkarten im Vergleich. Karten ohne Jahresgebühr mit bis zu 100€ Willkommensbonus und kostenloser Auslandseinsatz.",
    icon: "💳",
    order: 2,
    check24BaseUrl: "https://www.check24.de/kreditkarte/",
    affiliateSubid: "kategorie-kreditkarten",
    relatedArticles: ["kreditkarten-vergleich-2026"],
})

const TAGESGELD: Category = createCategory({
    name: "Tagesgeld",
    shortName: "Tagesgeldvergleich",
    description:
        "Tagesgeldkonten mit den höchsten Zinsen 2026. Bis zu 3,5% Zinsen p.a. mit deutscher Einlagensicherung.",
    icon: "🏦",
    order: 3,
    check24BaseUrl: "https://www.check24.de/tagesgeld/",
    affiliateSubid: "kategorie-tagesgeld",
    relatedArticles: ["tagesgeld-top-zinsen-2026"],
})

const KFZ_VERSICHERUNG: Category = createCategory({
    name: "KFZ-Versicherung",
    shortName: "KFZ-Vergleich",
    description:
        "KFZ-Versicherung wechseln und sparen. Vergleichen Sie Haftpflicht, Teilkasko und Vollkasko von über 150 Tarifen.",
    icon: "🚗",
    order: 4,
    check24BaseUrl: "https://www.check24.de/kfz-versicherung/",
    affiliateSubid: "kategorie-kfz-versicherung",
    relatedArticles: ["kfz-versicherung-wechseln-2026"],
})

const DSL: Category = createCategory({
    name: "DSL & Internet",
    shortName: "DSL-Vergleich",
    description:
        "DSL, Kabel, Glasfaser und 5G im Vergleich. Finden Sie den besten Tarif für Zuhause mit bis zu 250 Mbit/s.",
    icon: "🌐",
    order: 5,
    check24BaseUrl: "https://www.check24.de/dsl/",
    affiliateSubid: "kategorie-dsl",
    relatedArticles: ["dsl-vergleich-2026"],
})

const MIETWAGEN: Category = createCategory({
    name: "Mietwagen",
    shortName: "Mietwagenvergleich",
    description:
        "Mietwagen weltweit vergleichen und buchen. Günstige Preise von Sixt, Europcar, Hertz und vielen weiteren Anbietern.",
    icon: "🚙",
    order: 6,
    check24BaseUrl: "https://www.check24.de/mietwagen/",
    affiliateSubid: "kategorie-mietwagen",
})

const REISEN: Category = createCategory({
    name: "Reisen & Hotels",
    shortName: "Reisevergleich",
    description:
        "Hotels, Flüge und Pauschalreisen vergleichen. Die besten Angebote für Ihren Urlaub 2026.",
    icon: "✈️",
    order: 7,
    check24BaseUrl: "https://www.check24.de/reise/",
    affiliateSubid: "kategorie-reisen",
})

// ─── Initialization ────────────────────────────────────────────────────────

/**
 * Initialize all categories in the content registry.
 * Call this during app startup (e.g., in layout.tsx or a provider).
 */
export function initCategories(): void {
    const allCategories = [
        STROM_GAS,
        KREDITKARTEN,
        TAGESGELD,
        KFZ_VERSICHERUNG,
        DSL,
        MIETWAGEN,
        REISEN,
    ]

    for (const category of allCategories) {
        registerCategory(category)
    }
}

/**
 * Get all raw category definitions (before registration).
 * Useful for testing or previewing category data.
 */
export function getCategoryDefinitions(): Category[] {
    return [
        STROM_GAS,
        KREDITKARTEN,
        TAGESGELD,
        KFZ_VERSICHERUNG,
        DSL,
        MIETWAGEN,
        REISEN,
    ]
}
