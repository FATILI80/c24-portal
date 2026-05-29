// ============================================================================
// CHECK24 Affiliate Deep-Link Framework
// ============================================================================
// Centralized configuration for all CHECK24 affiliate links across all
// verticals. Handles deep-link URL generation with tracking parameters
// and category-specific query parameter validation.
// ============================================================================

import type {
    AffiliateLink,
    AffiliateLinkConfig,
    DeepLinkConfig,
    Slug,
} from "@/types/affiliate"

// ─── Default Configuration ─────────────────────────────────────────────────

export const DEFAULT_AFFILIATE_CONFIG: AffiliateLinkConfig = {
    partnerId:
        process.env.NEXT_PUBLIC_CHECK24_PARTNER_ID || "YOUR_PARTNER_ID",
    defaultSubid: "c24-portal",
    baseDomain: "www.check24.de",
    enabled: process.env.NODE_ENV === "production",
    protocol: "https",
}

// ─── Category Deep-Link Configurations ─────────────────────────────────────

export const CATEGORY_DEEP_LINKS: Record<Slug, DeepLinkConfig> = {
    "strom-gas": {
        basePath: "/stromvergleich/",
        params: [
            {
                param: "plz",
                label: "Postleitzahl",
                type: "text",
                placeholder: "z.B. 10115",
                required: true,
                pattern: "^\\d{5}$",
                unit: "PLZ",
            },
            {
                param: "verbrauch",
                label: "Jahresverbrauch",
                type: "number",
                placeholder: "z.B. 3500",
                required: true,
                unit: "kWh",
            },
            {
                param: "personen",
                label: "Personen im Haushalt",
                type: "select",
                required: false,
                options: [
                    { label: "1 Person", value: "1" },
                    { label: "2 Personen", value: "2" },
                    { label: "3 Personen", value: "3" },
                    { label: "4+ Personen", value: "4" },
                ],
                defaultValue: "2",
            },
        ],
        exampleUrl:
            "https://www.check24.de/stromvergleich/?plz=10115&verbrauch=3500&affiliate=PARTNER_ID&subid=kategorie-strom-gas",
    },
    kreditkarten: {
        basePath: "/kreditkarte/",
        params: [
            {
                param: "bonus",
                label: "Willkommensbonus",
                type: "select",
                required: false,
                options: [
                    { label: "Alle anzeigen", value: "" },
                    { label: "Mit Bonus (50€+)", value: "50" },
                    { label: "Mit Bonus (100€+)", value: "100" },
                ],
            },
            {
                param: "ohne_jahresgebuehr",
                label: "Ohne Jahresgebühr",
                type: "select",
                required: false,
                options: [
                    { label: "Alle anzeigen", value: "" },
                    { label: "Ja, ohne Jahresgebühr", value: "true" },
                ],
                defaultValue: "true",
            },
        ],
        exampleUrl:
            "https://www.check24.de/kreditkarte/?ohne_jahresgebuehr=true&affiliate=PARTNER_ID&subid=kategorie-kreditkarten",
    },
    tagesgeld: {
        basePath: "/tagesgeld/",
        params: [
            {
                param: "anlagesumme",
                label: "Anlagesumme",
                type: "number",
                placeholder: "z.B. 10000",
                required: false,
                unit: "€",
            },
        ],
        exampleUrl:
            "https://www.check24.de/tagesgeld/?affiliate=PARTNER_ID&subid=kategorie-tagesgeld",
    },
    "kfz-versicherung": {
        basePath: "/kfz-versicherung/",
        params: [
            {
                param: "plz",
                label: "Postleitzahl",
                type: "text",
                placeholder: "z.B. 10115",
                required: true,
                pattern: "^\\d{5}$",
                unit: "PLZ",
            },
            {
                param: "fahrzeugtyp",
                label: "Fahrzeugtyp",
                type: "select",
                required: true,
                options: [
                    { label: "PKW", value: "pkw" },
                    { label: "Motorrad", value: "motorrad" },
                    { label: "Elektroauto", value: "elektro" },
                ],
            },
            {
                param: "schadenfreiheitsklasse",
                label: "Schadenfreiheitsklasse (SF)",
                type: "select",
                required: true,
                options: [
                    { label: "SF 0 (Neuling)", value: "0" },
                    { label: "SF 1/2", value: "0.5" },
                    { label: "SF 1-5", value: "1-5" },
                    { label: "SF 6-10", value: "6-10" },
                    { label: "SF 11+", value: "11" },
                ],
            },
        ],
        exampleUrl:
            "https://www.check24.de/kfz-versicherung/?plz=10115&fahrzeugtyp=pkw&affiliate=PARTNER_ID&subid=kategorie-kfz-versicherung",
    },
    dsl: {
        basePath: "/dsl/",
        params: [
            {
                param: "plz",
                label: "Postleitzahl",
                type: "text",
                placeholder: "z.B. 10115",
                required: true,
                pattern: "^\\d{5}$",
                unit: "PLZ",
            },
            {
                param: "geschwindigkeit",
                label: "Geschwindigkeit",
                type: "select",
                required: false,
                options: [
                    { label: "Alle", value: "" },
                    { label: "16 Mbit/s", value: "16000" },
                    { label: "50 Mbit/s", value: "50000" },
                    { label: "100 Mbit/s", value: "100000" },
                    { label: "250 Mbit/s", value: "250000" },
                ],
                defaultValue: "50000",
            },
        ],
        exampleUrl:
            "https://www.check24.de/dsl/?plz=10115&geschwindigkeit=50000&affiliate=PARTNER_ID&subid=kategorie-dsl",
    },
    mietwagen: {
        basePath: "/mietwagen/",
        params: [
            {
                param: "ort",
                label: "Abholort",
                type: "text",
                placeholder: "z.B. München",
                required: true,
            },
            {
                param: "datum",
                label: "Abholdatum",
                type: "text",
                placeholder: "TT.MM.JJJJ",
                required: true,
            },
            {
                param: "dauer",
                label: "Mietdauer",
                type: "select",
                required: true,
                options: [
                    { label: "1 Tag", value: "1" },
                    { label: "3 Tage", value: "3" },
                    { label: "5 Tage", value: "5" },
                    { label: "7 Tage", value: "7" },
                    { label: "14 Tage", value: "14" },
                ],
            },
        ],
        exampleUrl:
            "https://www.check24.de/mietwagen/?affiliate=PARTNER_ID&subid=kategorie-mietwagen",
    },
    reisen: {
        basePath: "/reise/",
        params: [
            {
                param: "ziel",
                label: "Reiseziel",
                type: "text",
                placeholder: "z.B. Mallorca, Paris",
                required: true,
            },
            {
                param: "reisedauer",
                label: "Reisedauer",
                type: "select",
                required: false,
                options: [
                    { label: "3-5 Tage", value: "3-5" },
                    { label: "1 Woche", value: "7" },
                    { label: "2 Wochen", value: "14" },
                ],
            },
        ],
        exampleUrl:
            "https://www.check24.de/hotel/?affiliate=PARTNER_ID&subid=kategorie-reisen",
    },
    "kredite": {
        basePath: "/kredit/",
        params: [
            {
                param: "kreditsumme",
                label: "Kreditsumme",
                type: "number",
                placeholder: "z.B. 10000",
                required: true,
                unit: "€",
            },
            {
                param: "laufzeit",
                label: "Laufzeit (Monate)",
                type: "select",
                required: false,
                options: [
                    { label: "12 Monate", value: "12" },
                    { label: "24 Monate", value: "24" },
                    { label: "36 Monate", value: "36" },
                    { label: "48 Monate", value: "48" },
                    { label: "60 Monate", value: "60" },
                    { label: "84 Monate", value: "84" },
                ],
                defaultValue: "60",
            },
        ],
        exampleUrl:
            "https://www.check24.de/kredit/?kreditsumme=10000&affiliate=PARTNER_ID&subid=kategorie-kredite",
    },
    "krankenversicherung": {
        basePath: "/krankenversicherung/",
        params: [
            {
                param: "alter",
                label: "Alter",
                type: "number",
                placeholder: "z.B. 30",
                required: true,
                unit: "Jahre",
            },
            {
                param: "beruf",
                label: "Beruf / Status",
                type: "select",
                required: true,
                options: [
                    { label: "Angestellt", value: "angestellt" },
                    { label: "Selbstständig", value: "selbststaendig" },
                    { label: "Beamter", value: "beamter" },
                    { label: "Student", value: "student" },
                ],
            },
        ],
        exampleUrl:
            "https://www.check24.de/krankenversicherung/?alter=30&affiliate=PARTNER_ID&subid=kategorie-krankenversicherung",
    },
}

// ─── Affiliate Link Generation ─────────────────────────────────────────────

export interface GenerateAffiliateLinkOptions {
    categorySlug: Slug
    subid?: string
    params?: Record<string, string | number | boolean>
    partnerIdOverride?: string
    /** Whether the link should be enabled (defaults to config.enabled) */
    enabled?: boolean
}

/**
 * Generate a fully qualified CHECK24 affiliate deep-link URL.
 *
 * @example
 * ```ts
 * generateAffiliateLink({
 *   categorySlug: "strom-gas",
 *   subid: "blog-stromvergleich-2026",
 *   params: { plz: "10115", verbrauch: 3500 }
 * })
 * // → "https://www.check24.de/stromvergleich/?plz=10115&verbrauch=3500&affiliate=PARTNER_ID&subid=blog-stromvergleich-2026"
 * ```
 */
export function generateAffiliateLink(
    options: GenerateAffiliateLinkOptions
): AffiliateLink {
    const { categorySlug, subid, params, partnerIdOverride } = options
    const config = DEFAULT_AFFILIATE_CONFIG
    const deepLink = CATEGORY_DEEP_LINKS[categorySlug]

    if (!deepLink) {
        throw new Error(
            `Unknown category slug: "${categorySlug}". No deep-link config found.`
        )
    }

    const baseUrl = `${config.protocol}://${config.baseDomain}${deepLink.basePath}`
    const searchParams = new URLSearchParams()

    // Add category-specific query parameters
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== "") {
                searchParams.set(key, String(value))
            }
        }
    }

    // Add affiliate tracking parameters
    const partnerId = partnerIdOverride || config.partnerId
    searchParams.set("affiliate", partnerId)
    searchParams.set("subid", subid || config.defaultSubid)

    const url = `${baseUrl}?${searchParams.toString()}`

    return {
        url,
        subid: subid || config.defaultSubid,
        categoryId: categorySlug,
        nofollow: true,
        external: true,
    }
}

/**
 * Validate that all required deep-link parameters for a category are present.
 * Returns an array of missing required parameter labels.
 */
export function validateDeepLinkParams(
    categorySlug: Slug,
    params: Record<string, unknown>
): string[] {
    const deepLink = CATEGORY_DEEP_LINKS[categorySlug]
    if (!deepLink) return [`Unknown category: "${categorySlug}"`]

    const missing: string[] = []
    for (const paramDef of deepLink.params) {
        if (paramDef.required) {
            const value = params[paramDef.param]
            if (value === undefined || value === null || value === "") {
                missing.push(paramDef.label)
            } else if (paramDef.pattern) {
                const regex = new RegExp(paramDef.pattern)
                if (!regex.test(String(value))) {
                    missing.push(`${paramDef.label} (ungültiges Format)`)
                }
            }
        }
    }
    return missing
}

/**
 * Get standard anchor attributes for affiliate links (SEO-compliant).
 */
export function getAffiliateLinkAttributes(): Record<string, string> {
    return {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    }
}

// ─── Affiliate Disclosure ──────────────────────────────────────────────────

/**
 * Standard affiliate disclosure text (required by EU law).
 */
export const AFFILIATE_DISCLOSURE_TEXT =
    "Die Vergleiche auf dieser Seite sind redaktionell unabhängig. " +
    "Wenn Sie über einen Link auf dieser Seite bei CHECK24 buchen, erhalten wir " +
    "eine geringe Provision – für Sie entstehen dadurch keine Mehrkosten. " +
    "Als CHECK24-Partner verdienen wir an qualifizierten Vermittlungen."

/**
 * Short disclosure for use in compact areas (cards, tables).
 */
export const AFFILIATE_DISCLOSURE_SHORT =
    "Unabhängiger Vergleich – mit * gekennzeichnete Links sind Affiliate-Links."

// ─── Helper: Get deep-link config for a category ───────────────────────────

export function getDeepLinkConfig(categorySlug: Slug): DeepLinkConfig | null {
    return CATEGORY_DEEP_LINKS[categorySlug] ?? null
}
