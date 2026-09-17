// ============================================================================
// Amazon PartnerNet — Produktkuratierung
// ============================================================================
// Kuratierte Spar-Gadgets für Haushalt und Heizkosten. Jede Empfehlung hat
// eine ASIN (Amazon-Standardnummer) und zusätzlich einen Suchbegriff als
// Rückfalloption, damit ein ausgelistetes Produkt nie zu einem toten Link
// führt. Alle ASINs wurden gegen den deutschen Amazon-Store geprüft.
//
// Neue Produkte aufnehmen: einfach ein weiteres Objekt in AMAZON_PRODUCTS
// ergänzen und über `categories` den Vergleichsrubriken zuordnen.
// ============================================================================

import {
    generateAmazonLink,
    generateAmazonSearchLink,
} from "@/lib/affiliate-links"

// ─── Type ──────────────────────────────────────────────────────────────────

export interface AmazonProduct {
    /** Interne ID – wird als Amazon-Sub-ID (ascsubtag) ausgewertet */
    id: string
    /** Amazon-Standardnummer (10 Zeichen, z. B. "B0DLJYZFR6") */
    asin: string
    /** Rückfall-Suchbegriff, falls die ASIN ausgelistet wird */
    searchQuery: string
    /** Produktname in Alltagssprache (keine Hersteller-Marketingnamen) */
    name: string
    /** Verkaufsargument in einem Satz */
    claim: string
    /** Kurzbeschreibung für Karten und Banner */
    description: string
    /** Emoji-Icon (bewusst kein Amazon-Bildmaterial) */
    icon: string
    /** Aufmerksamkeits-Badge */
    badge: string
    /** Konkrete Nutzenpunkte */
    benefits: string[]
    /** Sparpotenzial-Hinweis (vorsichtig formuliert, keine Preisangabe) */
    savingsHint: string
    /** Optionale Sparvariante, z. B. Mehrfachpack */
    alternative?: { asin: string; label: string }
}

// ─── Kuratierte Produkte ───────────────────────────────────────────────────

/** 1) Energiekosten-Messgerät – findet die Stromfresser im Haushalt. */
export const AMAZON_PRODUCT_ENERGY_METER: AmazonProduct = {
    id: "energiekosten-messgeraet",
    asin: "B0DLJYZFR6",
    searchQuery: "energiekostenmessgerät steckdose",
    name: "Energiekosten-Messgerät für die Steckdose",
    claim: "Finde in 5 Minuten heraus, welches Gerät Dein Geld frisst",
    description:
        "Zwischenstecker mit Display: zeigt Stromverbrauch, Leistung und Kosten einzelner Geräte – ohne Installation, ohne App.",
    icon: "🔌",
    badge: "Spar-Tipp Nr. 1",
    benefits: [
        "Einfach zwischen Steckdose und Gerät stecken – sofort messbereit",
        "Verbrauch in kWh, Leistung in Watt und Kosten im Blick",
        "Ideal für Kühlschrank, TV, Gaming-PC, Router & Co.",
    ],
    savingsHint:
        "Ein Blick auf die alten Stromfresser lohnt sich meist sofort – oft fallen dabei Geräte auf, die unbemerkt dauerhaft laufen.",
}

/** 2) Smartes Heizkörperthermostat – Heizkosten nach Zeitplan senken. */
export const AMAZON_PRODUCT_THERMOSTAT: AmazonProduct = {
    id: "smart-thermostat",
    asin: "B0GXZZDXS5",
    searchQuery: "wlan heizkörperthermostat programmierbar",
    name: "Smartes Heizkörperthermostat (WLAN)",
    claim: "Heizen nach Zeitplan – warm, wenn Du zuhause bist",
    description:
        "Wird auf den vorhandenen Heizkörper geschraubt und lässt sich per App oder Zeitplan steuern. Keine Heizungsmodernisierung nötig.",
    icon: "🌡️",
    badge: "Redaktions-Tipp",
    benefits: [
        "Nachtrüstbar: passt auf gängige Heizkörperventile",
        "Zeitpläne und Wochenprogramme statt Dauerheizen",
        "Raumtemperatur gezielt senken – gemütlich bleibt es trotzdem",
    ],
    savingsHint:
        "Schon 1–2 °C weniger Raumtemperatur und automatisches Absenken bei Abwesenheit machen sich auf der Jahresabrechnung bemerkbar.",
    alternative: {
        asin: "B0GXXSSGHW",
        label: "Für mehrere Räume: 3er-Pack ansehen",
    },
}

/** 3) Budget-Planer – Einnahmen und Ausgaben wieder im Griff. */
export const AMAZON_PRODUCT_BUDGET_PLANNER: AmazonProduct = {
    id: "budget-planer",
    asin: "B0CWDB4GR9",
    searchQuery: "haushaltsbuch einnahmen ausgaben",
    name: "Budget-Planer: Einnahmen- & Ausgabenbuch",
    claim: "Jeden Euro im Blick – Haushaltsbudget auf Papier",
    description:
        "Vorgedruckte Tabellen für Einnahmen, Ausgaben und Fixkosten. Wer sein Budget schwarz auf weiß sieht, spart erfahrungsgemäß leichter.",
    icon: "📒",
    badge: "Klassiker",
    benefits: [
        "Vorgedruckte Monats- und Jahresübersichten",
        "Handliches Format für Schublade oder Handtasche",
        "Perfekt als Ergänzung zu unseren Online-Vergleichen",
    ],
    savingsHint:
        "Wer seine Ausgaben notiert, entdeckt erfahrungsgemäß schnell mehrere Abos und Kleinbeträge, die sich streichen lassen.",
}

/** 4) Smarte Messsteckdose – Automatisierung plus Verbrauchsmessung. */
export const AMAZON_PRODUCT_SMART_PLUG: AmazonProduct = {
    id: "messsteckdose",
    asin: "B0GHYRQ368",
    searchQuery: "smart plug leistungsmessung wlan",
    name: "Smarte Messsteckdose (WLAN)",
    claim: "Standby-Fresser automatisch vom Netz nehmen",
    description:
        "Schaltet per App oder Sprache und misst gleichzeitig den Verbrauch – ideal für Router, Fernseher, Drucker und Ladegeräte.",
    icon: "📶",
    badge: "Smarte Ergänzung",
    benefits: [
        "Automatische Abschaltung nach Feierabend oder nachts",
        "Leistungsmessung direkt in der App",
        "Kompatibel mit den gängigen Smart-Home-Sprachassistenten",
    ],
    savingsHint:
        "Geräte im Standby summieren sich übers Jahr – automatisches Abschalten wirkt jeden Tag.",
}

/** 5) Heizkörperthermostat im 3er-Pack – für mehrere Räume. */
export const AMAZON_PRODUCT_THERMOSTAT_PACK: AmazonProduct = {
    id: "smart-thermostat-pack",
    asin: "B0GXXSSGHW",
    searchQuery: "heizkörperthermostat set wlan",
    name: "Heizkörperthermostat im 3er-Pack",
    claim: "Wohnung oder Haus komplett auf Zeitplan",
    description:
        "Mehrere Räume gleichzeitig automatisieren statt einzeln nachrüsten – sinnvoll, sobald mehr als ein Heizkörper gesteuert werden soll.",
    icon: "🏠",
    badge: "Für mehrere Räume",
    benefits: [
        "Drei Thermostate für Schlafzimmer, Wohnzimmer und Büro",
        "Ein einheitliches Zeitprogramm für alle Räume",
        "Nachrüstung ohne Eingriff in die Heizungsanlage",
    ],
    savingsHint:
        "Je mehr Räume nach Zeitplan beheizt werden, desto größer der Effekt auf die Heizkosten.",
}

/** 6) Nachfüllbarer Budget-Organizer – Planung zum Anfassen. */
export const AMAZON_PRODUCT_ORGANIZER: AmazonProduct = {
    id: "budget-organizer",
    asin: "B0FMDCS7LK",
    searchQuery: "haushaltsplaner organizer a5",
    name: "Nachfüllbarer Budget-Organizer (A5)",
    claim: "Finanzplanung mit System statt Zettelwirtschaft",
    description:
        "Ringbuch mit Registern und Nachfüllpapier: Rechnungen, Versicherungen und Fixkosten sauber an einem Ort.",
    icon: "🗂️",
    badge: "Ordnung schafft Ersparnis",
    benefits: [
        "Register für Fixkosten, Verträge und Jahresabrechnungen",
        "Nachfüllbar – wächst mit Deiner Planung",
        "Praktisch für Unterlagen zum Strom- und Versicherungswechsel",
    ],
    savingsHint:
        "Ein Ablageplatz für Verträge macht Kündigungs- und Wechselfristen sichtbar, bevor sie Geld kosten.",
}

// ─── Sammlungen ────────────────────────────────────────────────────────────

/**
 * Die drei Produkte der Startseiten-Sektion: klassische Haushalts-Spargadgets
 * in der Reihenfolge ihrer Verkaufsstärke (Strom → Heizung → Budget).
 */
export const AMAZON_TOP_PRODUCTS: AmazonProduct[] = [
    AMAZON_PRODUCT_ENERGY_METER,
    AMAZON_PRODUCT_THERMOSTAT,
    AMAZON_PRODUCT_BUDGET_PLANNER,
]

/** Alle Produkte – Rotation für Banner und Leisten. */
export const AMAZON_PRODUCTS: AmazonProduct[] = [
    AMAZON_PRODUCT_ENERGY_METER,
    AMAZON_PRODUCT_THERMOSTAT,
    AMAZON_PRODUCT_BUDGET_PLANNER,
    AMAZON_PRODUCT_SMART_PLUG,
    AMAZON_PRODUCT_THERMOSTAT_PACK,
    AMAZON_PRODUCT_ORGANIZER,
]

/**
 * Thematische Zuordnung der Vergleichsrubriken zu passenden Spar-Gadgets.
 * Wird für die Inline-Banner auf Kategorie-, Deal- und Ratgeberseiten genutzt.
 */
export const CATEGORY_AMAZON_PRODUCTS: Record<string, string> = {
    "strom-gas": AMAZON_PRODUCT_ENERGY_METER.id,
    dsl: AMAZON_PRODUCT_SMART_PLUG.id,
    "dsl-internet": AMAZON_PRODUCT_SMART_PLUG.id,
    kreditkarten: AMAZON_PRODUCT_BUDGET_PLANNER.id,
    tagesgeld: AMAZON_PRODUCT_BUDGET_PLANNER.id,
    kredite: AMAZON_PRODUCT_BUDGET_PLANNER.id,
    "kfz-versicherung": AMAZON_PRODUCT_BUDGET_PLANNER.id,
    versicherungen: AMAZON_PRODUCT_BUDGET_PLANNER.id,
    reisen: AMAZON_PRODUCT_BUDGET_PLANNER.id,
}

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Liefert die Ziel-URL eines Produkts. Bevorzugt den ASIN-Link und fällt auf
 * den Suchlink zurück, damit niemals ein toter Link entsteht.
 */
export function getAmazonProductUrl(
    product: AmazonProduct,
    subid?: string
): string {
    if (product.asin && product.asin.trim().length === 10) {
        return generateAmazonLink(product.asin, subid || product.id)
    }
    return generateAmazonSearchLink(
        product.searchQuery,
        subid || product.id
    )
}

/** Produkt anhand der internen ID ermitteln. */
export function getAmazonProductById(id: string): AmazonProduct | null {
    return AMAZON_PRODUCTS.find((product) => product.id === id) ?? null
}

/**
 * Wählt das thematisch passendste Produkt für eine Vergleichsrubrik aus.
 * Ohne Zuordnung wird der Budget-Planer ausgeliefert – er passt zu jeder
 * Rubrik, die sich mit Sparen im Haushalt beschäftigt.
 */
export function pickAmazonProductForCategory(
    categorySlug: string
): AmazonProduct {
    const productId = CATEGORY_AMAZON_PRODUCTS[categorySlug]
    return (
        (productId ? getAmazonProductById(productId) : null) ??
        AMAZON_PRODUCT_BUDGET_PLANNER
    )
}

/** Alle Produkte für einen Kategorie-Slug, inkl. passendem Fallback. */
export function getAmazonProductsForCategory(
    categorySlug: string
): AmazonProduct[] {
    const primary = pickAmazonProductForCategory(categorySlug)
    const rest = AMAZON_PRODUCTS.filter((product) => product.id !== primary.id)
    return [primary, ...rest]
}

