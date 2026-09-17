// ============================================================================
// Digistore24 — Affiliate-Konfiguration, Angebote & Werbebanner
// ============================================================================
// Zentrale Quelle für ALLE Digistore24-Links der Seite. Jeder Link ist mit
// der Affiliate-ID des Betreibers verknüpft (`Bb8ozi`, überschreibbar über
// `NEXT_PUBLIC_DIGISTORE24_AFFILIATE_ID`).
//
// Es gibt zwei Link-Typen:
//  1. redir-Links:        https://www.checkout-ds24.com/redir/{NR}/{AFFILIATE}/
//  2. Anbieter-Links mit  `#aff=`-Anker (Produkte ohne redir-Nummer)
//
// WICHTIG: Redir-Links müssen über `www.checkout-ds24.com` laufen.
// Aufrufe über `www.digistore24.com/redir/...` werden von Digistore24 abgelehnt
// (Fehlercode CUSDM3), weil die Domain nicht als Partner-Domain freigeschaltet ist.
//
// Optional wird ein `subid`-Parameter angehängt. Damit lassen sich Banner-
// Klicks in der Digistore24-Statistik unterscheiden; für garantiertes
// Banner-Tracking können im Partnerbereich zusätzlich Promolinks (Kampagnen)
// erzeugt und hier als `promoUrl` hinterlegt werden.
// ============================================================================

// ─── Affiliate-Konfiguration ───────────────────────────────────────────────

/** Digistore24-Affiliate-ID (Affiliate-Name bzw. "Dankeschlüssel") */
export const DIGISTORE_AFFILIATE_ID =
    process.env.NEXT_PUBLIC_DIGISTORE24_AFFILIATE_ID || "Bb8ozi"

/**
 * Redirect-Endpunkt von Digistore24.
 *
 * Muss `www.checkout-ds24.com` sein – `www.digistore24.com/redir/...` wird von
 * Digistore24 mit dem Fehlercode `CUSDM3` abgelehnt.
 */
export const DIGISTORE_REDIR_BASE = "https://www.checkout-ds24.com/redir"

/** @deprecated Alias auf {@link DIGISTORE_REDIR_BASE} (historischer Name). */
export const DIGISTORE_CHECKOUT_BASE = DIGISTORE_REDIR_BASE

/** Digistore24-Produktnummern sind rein numerisch (z. B. 615173) */
export const DIGISTORE_PRODUCT_ID_PATTERN = /^\d{4,}$/

/** Prüft, ob ein Wert eine Digistore24-Produktnummer ist. */
export function isDigistoreProductId(value: string): boolean {
    return DIGISTORE_PRODUCT_ID_PATTERN.test((value || "").trim())
}

/**
 * Erzeugt einen Digistore24-Affiliate-Link über den redir-Endpunkt.
 *
 * @param productId Digistore24-Produktnummer (z. B. "615173")
 * @param subid     Optionaler Kampagnen-/Platzierungsparameter
 *
 * @example
 * generateDigistoreLink("615173")
 * // => "https://www.checkout-ds24.com/redir/615173/Bb8ozi/"
 */
export function generateDigistoreLink(productId: string, subid?: string): string {
    const normalized = (productId || "").trim()
    const base = `${DIGISTORE_REDIR_BASE}/${normalized}/${DIGISTORE_AFFILIATE_ID}/`
    return subid ? `${base}?subid=${encodeURIComponent(subid)}` : base
}

/**
 * Ergänzt einen Anbieter-Link um die Affiliate-ID (`#aff=...`).
 * Bereits vorhandene Affiliate-Anker werden nicht doppelt gesetzt.
 */
export function appendAffiliateAnchor(url: string, subid?: string): string {
    const raw = (url || "").trim()
    if (!raw) return raw
    if (/[#&?]aff=/.test(raw)) return raw

    try {
        const parsed = new URL(raw)
        if (subid) parsed.searchParams.set("subid", subid)
        return `${parsed.toString()}#aff=${DIGISTORE_AFFILIATE_ID}`
    } catch {
        return raw
    }
}

/** Standard-Attribute für Affiliate-Links (SEO-konform, neuer Tab). */
export function getDigistoreLinkAttributes(): Record<string, string> {
    return {
        target: "_blank",
        rel: "sponsored nofollow noopener noreferrer",
    }
}

/** Kompakter Werbehinweis für Produktkarten und Banner. */
export const DIGISTORE_DISCLOSURE_SHORT =
    "Anzeige / Partnerlink: Beim Kauf über diesen Link erhalten wir eine " +
    "Provision von Digistore24 – für Dich bleibt der Preis gleich."

/** Ausführlicher Hinweis für Fußzeilen und Bereiche mit Bezug zu Rechtstexten. */
export const DIGISTORE_DISCLOSURE_TEXT =
    "Die hier empfohlenen digitalen Produkte (E-Books, Kurse, Vorlagen) " +
    "stammen von externen Anbietern und werden über Digistore24 " +
    "abgewickelt. Als Digistore24-Affiliate erhalten wir eine Provision, " +
    "wenn Du über unsere Links kaufst. Für Dich entstehen dadurch keine " +
    "Mehrkosten. Preise, Inhalte und Verfügbarkeit prüfst Du bitte direkt " +
    "beim Anbieter."

// ─── Angebots-Kategorien ───────────────────────────────────────────────────

export type DigistoreOfferCategory =
    | "gesundheit"
    | "finanzen"
    | "online-business"
    | "vorsorge"
    | "haushalt"

export const DIGISTORE_CATEGORY_LABELS: Record<
    DigistoreOfferCategory,
    { label: string; icon: string }
> = {
    gesundheit: { label: "Gesundheit", icon: "💚" },
    finanzen: { label: "Finanzen", icon: "💰" },
    "online-business": { label: "Online Business", icon: "💻" },
    vorsorge: { label: "Vorsorge & Sicherheit", icon: "🛡️" },
    haushalt: { label: "Haushalt & Sparen", icon: "🏠" },
}

// ─── Angebote ──────────────────────────────────────────────────────────────
// Ausschließlich Angebote aus dem Digistore24-Partnerkonto des Betreibers.
// Bewusst ohne Preis- und Provisionsangaben: beides ändert sich laufend und
// wird deshalb direkt beim Anbieter geprüft.

export interface DigistoreOffer {
    /** Interner, sprechender Bezeichner */
    id: string
    /** Anzeigename */
    name: string
    /** Kurze Verkaufszeile (max. ~60 Zeichen) */
    claim: string
    /** Ausführliche Beschreibung */
    description: string
    /** Themengebiet */
    category: DigistoreOfferCategory
    /** Emoji als Bildersatz (keine Fremdbilder) */
    icon: string
    /** Digistore24-Produktnummer (redir-Link) */
    redirId?: string
    /** Alternativer Anbieter-Link (`#aff=` wird automatisch ergänzt) */
    directUrl?: string
    /** Optionales Badge, z. B. "Bestseller" */
    badge?: string
}

export const DIGISTORE_OFFERS: DigistoreOffer[] = [
    {
        id: "smarter-sparen",
        name: "Smarter sparen im Alltag",
        claim: "Praktische Strategien für sofort mehr Geld im Portemonnaie",
        description:
            "Konkrete Spar-Strategien für Haushalt, Einkauf und Verträge – ganz ohne Verzicht.",
        category: "finanzen",
        icon: "🐿️",
        redirId: "678181",
        badge: "Beliebt",
    },
    {
        id: "finanziell-freier",
        name: "Finanziell freier werden",
        claim: "Schritt für Schritt zur finanziellen Unabhängigkeit",
        description:
            "Der Weg zum eigenen Finanzpolster – auch mit kleinem Budget und ohne Vorkenntnisse.",
        category: "finanzen",
        icon: "💰",
        redirId: "434104",
        badge: "Bestseller",
    },
    {
        id: "passives-einkommen",
        name: "Passives Einkommen starten",
        claim: "Einnahmen, die auch dann fließen, wenn Du schläfst",
        description:
            "Praktischer Leitfaden für den Aufbau regelmäßiger Nebeneinnahmen neben dem Job.",
        category: "online-business",
        icon: "📈",
        redirId: "615173",
    },
    {
        id: "social-media-nebeneinkommen",
        name: "Nebeneinkommen mit Social Media",
        claim: "Mit Instagram ein zweites Standbein aufbauen",
        description:
            "Vom ersten Post bis zum ersten Verkauf: der Einstieg in den Aufbau einer Reichweite.",
        category: "online-business",
        icon: "📱",
        directUrl: "https://franke-akademie.de/met-gluecksformel-instagram",
        badge: "Neu",
    },
    {
        id: "website-conversion",
        name: "Website-Besucher in Kunden verwandeln",
        claim: "Mehr Anfragen und Verkäufe aus Deinem Website-Traffic",
        description:
            "Tool für mehr Conversions – ideal für alle, die online verkaufen oder beraten.",
        category: "online-business",
        icon: "🎯",
        directUrl: "https://www.engagegorilla.com/",
    },
    {
        id: "energie-alltag",
        name: "Mehr Energie im Alltag",
        claim: "Natürliche Methoden für mehr Vitalität",
        description:
            "Routinen und Methoden für mehr Energie – ohne teure Arztbesuche.",
        category: "gesundheit",
        icon: "⚡",
        redirId: "659362",
    },
    {
        id: "besser-schlafen",
        name: "Besser schlafen – weniger Kosten",
        claim: "Erholsamer Schlaf ohne teure Hilfsmittel",
        description:
            "Audio-Programme und Anleitungen für besseren Schlaf – statt Schlafmitteln.",
        category: "gesundheit",
        icon: "🌙",
        directUrl: "https://neowake.de/source-code/",
    },
    {
        id: "vitalitaet-steigern",
        name: "Vitalität steigern – natürlich",
        claim: "Für alle, die in die eigene Gesundheit investieren",
        description:
            "Natürliche Unterstützung für mehr Vitalität – statt Folgekosten im Gesundheitssystem.",
        category: "gesundheit",
        icon: "🌿",
        directUrl: "https://myvigorsana.com/vigorsana-pdp-fe",
    },
    {
        id: "mental-stark",
        name: "Mental stark & fokussiert",
        claim: "Mentale Stärke für bessere Entscheidungen",
        description:
            "Mentale Stärke aufbauen – für bessere Entscheidungen beim Geld und im Alltag.",
        category: "gesundheit",
        icon: "🧠",
        directUrl: "https://silent-subliminals.de",
    },
    {
        id: "gesund-unabhaengig",
        name: "Gesund & unabhängig leben",
        claim: "Haushalts-Wissen, das bares Geld spart",
        description:
            "Praktisches Alltagswissen zu gesunder Lebensweise und günstigem Haushalten.",
        category: "gesundheit",
        icon: "🥗",
        redirId: "659614",
    },
    {
        id: "heilpflanzen-anbauen",
        name: "Heilpflanzen selbst anbauen",
        claim: "Medizinische Pflanzen zuhause ziehen",
        description:
            "Unabhängig von Apotheke und Drogerie: Heilpflanzen im Garten oder auf dem Balkon.",
        category: "haushalt",
        icon: "🌱",
        directUrl: "https://medicinalseedkit.com/kit/",
    },
    {
        id: "haus-doktor",
        name: "Der Haus-Doktor: Selbst behandeln & sparen",
        claim: "Handbuch für die Erstversorgung zuhause",
        description:
            "Grundlagen der Selbstversorgung bei kleinen Beschwerden – weniger Arztkosten.",
        category: "gesundheit",
        icon: "🩺",
        directUrl: "https://homedoctorbook.com/book/",
    },
    {
        id: "wasser-aufbereiten",
        name: "Sauberes Wasser – Kosten senken",
        claim: "Trinkwasser selbst aufbereiten",
        description:
            "Wasseraufbereitung für den Haushalt – günstiger und unabhängiger als Flaschenwasser.",
        category: "haushalt",
        icon: "💧",
        directUrl: "https://uswaterrevolution.com/",
    },
    {
        id: "krisenvorsorge",
        name: "Krisenvorsorge: Lebensmittel clever lagern",
        claim: "Mit kleinem Budget optimal vorsorgen",
        description:
            "Vorratshaltung und Bevorratung planen – für Engpässe und unruhige Zeiten.",
        category: "vorsorge",
        icon: "🥫",
        directUrl: "https://ultimatesurvivalfoods.com/book/",
    },
    {
        id: "zuhause-sicher",
        name: "Zuhause sicher & geschützt",
        claim: "Günstige Maßnahmen gegen Einbruch",
        description:
            "Kleine Investitionen mit großer Wirkung: So sicherst Du Haus und Wohnung.",
        category: "vorsorge",
        icon: "🔒",
        directUrl: "https://www.theantilooterkit.com/main/",
    },
]

// ─── Zugriffs-Helfer ───────────────────────────────────────────────────────

/** Liefert die Fertig-URL eines Angebots inkl. Affiliate-ID und Sub-ID. */
export function getDigistoreOfferUrl(
    offer: DigistoreOffer,
    subid?: string
): string {
    if (offer.redirId) return generateDigistoreLink(offer.redirId, subid)
    if (offer.directUrl) return appendAffiliateAnchor(offer.directUrl, subid)
    return DIGISTORE_REDIR_BASE
}

/** Angebot anhand des internen Bezeichners. */
export function pickDigistoreOffer(id: string): DigistoreOffer {
    return DIGISTORE_OFFERS.find((offer) => offer.id === id) ?? DIGISTORE_OFFERS[0]
}

/** Angebote einer Kategorie (oder alle). */
export function getDigistoreOffersByCategory(
    category: DigistoreOfferCategory | "all"
): DigistoreOffer[] {
    if (category === "all") return DIGISTORE_OFFERS
    return DIGISTORE_OFFERS.filter((offer) => offer.category === category)
}

/** Kuratierte Auswahl passend zur Vergleichsrubrik. */
export function pickDigistoreOfferForCategory(category?: string): DigistoreOffer {
    const key = (category || "").toLowerCase()
    if (/kredit|finanz|tagesgeld|geld/.test(key)) return pickDigistoreOffer("finanziell-freier")
    if (/dsl|internet|blog|online/.test(key)) return pickDigistoreOffer("passives-einkommen")
    if (/kfz|versicherung|vorsorge/.test(key)) return pickDigistoreOffer("krisenvorsorge")
    if (/kranken|gesund/.test(key)) return pickDigistoreOffer("energie-alltag")
    return pickDigistoreOffer("smarter-sparen")
}

// ─── Werbebanner ───────────────────────────────────────────────────────────
// Banner-Bausteine für die redaktionellen Flächen. Jedes Banner verweist auf
// ein echtes Digistore24-Angebot und trägt eine eigene Sub-ID, damit sich die
// Platzierungen in der Statistik unterscheiden lassen.

/** Flächen, auf denen Digistore24-Banner erscheinen dürfen */
export type DigistoreBannerPlacement =
    | "home"
    | "deals"
    | "kategorie"
    | "ratgeber"
    | "blog"
    | "global"

export interface DigistoreBanner {
    /** Interne Kennung (auch als Sub-ID-Präfix) */
    id: string
    /** Verknüpftes Angebot */
    offerId: string
    /** Große Zeile */
    headline: string
    /** Erklärende Zeile */
    subline: string
    /** Button-Beschriftung */
    cta: string
    /** Emoji als Bildersatz */
    emoji: string
    /** Platzierungen, auf denen das Banner laufen soll */
    placements: DigistoreBannerPlacement[]
}

export const DIGISTORE_BANNERS: DigistoreBanner[] = [
    {
        id: "banner-spar-strategien",
        offerId: "smarter-sparen",
        headline: "Sparen im Alltag – ohne Verzicht",
        subline:
            "Die besten Spartricks für Haushalt, Einkauf und Verträge.",
        cta: "Programm ansehen",
        emoji: "🐿️",
        placements: ["global", "home", "deals", "kategorie", "ratgeber"],
    },
    {
        id: "banner-finanzpolster",
        offerId: "finanziell-freier",
        headline: "Finanzpolster aufbauen – auch mit kleinem Budget",
        subline:
            "Schritt für Schritt zur finanziellen Unabhängigkeit.",
        cta: "Mehr erfahren",
        emoji: "💰",
        placements: ["global", "kategorie", "ratgeber", "deals"],
    },
    {
        id: "banner-nebeneinkommen",
        offerId: "passives-einkommen",
        headline: "Zweites Standbein aufbauen",
        subline:
            "Nebeneinkünfte planbar aufbauen – neben dem Hauptjob.",
        cta: "Guide ansehen",
        emoji: "📈",
        placements: ["global", "deals", "blog", "ratgeber"],
    },
    {
        id: "banner-abschleppen",
        offerId: "energie-alltag",
        headline: "Mehr Energie, weniger Ausgaben",
        subline:
            "Natürliche Methoden für den Alltag – statt teurer Zusatzprodukte.",
        cta: "Entdecken",
        emoji: "⚡",
        placements: ["global", "home", "blog", "kategorie"],
    },
]

/** Banner einer Platzierung (ohne Duplikate desselben Angebots). */
export function getDigistoreBannersFor(
    placement: DigistoreBannerPlacement,
    limit?: number
): DigistoreBanner[] {
    const result = DIGISTORE_BANNERS.filter((banner) =>
        banner.placements.includes(placement)
    )
    return typeof limit === "number" ? result.slice(0, limit) : result
}



