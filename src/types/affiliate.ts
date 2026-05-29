// ============================================================================
// BATT-SENSE CHECK24 Affiliate Portal — TypeScript Interfaces & Data Models
// ============================================================================
// This module defines the core data model for the multi-vertical comparison
// platform. All category-specific models extend the base `AffiliateContent`.
// ============================================================================

// ─── General Types ────────────────────────────────────────────────────────────

/** ISO date string (e.g. "2026-05-29") */
export type ISODate = string

/** URL string */
export type URLString = string

/** Slug (URL-friendly identifier, e.g. "kreditkarten-vergleich") */
export type Slug = string

/** 1-5 star rating */
export type Rating = 1 | 2 | 3 | 4 | 5

/** Year string (e.g. "2026") */
export type YearString = string

// ─── SEO Types ────────────────────────────────────────────────────────────────

export interface SEOData {
    title: string
    description: string
    keywords?: string[]
    ogImage?: URLString
    ogType?: "website" | "article"
    canonicalUrl?: URLString
    noindex?: boolean
    schema?: Record<string, unknown>
}

// ─── Core Content Model ───────────────────────────────────────────────────────

/** Base interface for ALL content types (categories, articles, comparisons) */
export interface AffiliateContent {
    /** Unique identifier (slug-based) */
    id: Slug
    /** Human-readable title */
    title: string
    /** SEO-friendly slug */
    slug: Slug
    /** Short description / excerpt (150-160 chars for meta) */
    excerpt: string
    /** Full markdown content */
    content: string
    /** Last updated date */
    updatedAt: ISODate
    /** Published date */
    publishedAt: ISODate
    /** Category this content belongs to */
    categoryId: Slug
    /** SEO metadata */
    seo: SEOData
    /** Whether this is featured on homepage */
    featured?: boolean
    /** Content tags */
    tags?: string[]
    /** Featured image path */
    featuredImage?: string
}

// ─── Category Model ───────────────────────────────────────────────────────────

export interface Category {
    /** Unique slug (e.g. "strom-gas") */
    id: Slug
    /** Display name (e.g. "Strom & Gas") */
    name: string
    /** Singular short name (e.g. "Stromvergleich") */
    shortName: string
    /** Detailed description */
    description: string
    /** Category icon emoji or path */
    icon: string
    /** Display order on homepage */
    order: number
    /** Whether featured on homepage */
    featured: boolean
    /** CHECK24 base URL for this category */
    check24BaseUrl: URLString
    /** Default affiliate subid for tracking */
    affiliateSubid: string
    /** SEO metadata */
    seo: SEOData
    /** Related article slugs */
    relatedArticles?: Slug[]
    /** Deep-link configuration specific to this category */
    deepLinkConfig: DeepLinkConfig
}

// ─── CHECK24 Deep Link Configuration ──────────────────────────────────────────

export interface DeepLinkParam {
    /** Query parameter name in CHECK24 URL */
    param: string
    /** Human-readable label */
    label: string
    /** Input type for the parameter */
    type: "text" | "number" | "select"
    /** Placeholder text for input */
    placeholder?: string
    /** Options for select type */
    options?: { label: string; value: string }[]
    /** Whether this parameter is required */
    required: boolean
    /** Validation regex pattern */
    pattern?: string
    /** Default value */
    defaultValue?: string
    /** Unit label (e.g. "kWh", "€", "Jahre") */
    unit?: string
}

export interface DeepLinkConfig {
    /** Base path after check24.de (e.g. "/stromvergleich/") */
    basePath: string
    /** Supported query parameters */
    params: DeepLinkParam[]
    /** Example URL for the category */
    exampleUrl: string
    /** Category-specific partner ID override (optional) */
    partnerIdOverride?: string
}

// ─── Affiliate Link Types ─────────────────────────────────────────────────────

export interface AffiliateLinkConfig {
    /** Your CHECK24 partner ID */
    partnerId: string
    /** Default subid for general tracking */
    defaultSubid: string
    /** Base domain (defaults to check24.de) */
    baseDomain: string
    /** Whether to enable affiliate tracking (toggle for dev/prod) */
    enabled: boolean
    /** Protocol (https) */
    protocol: "https"
}

export interface Check24DeepLinkParams {
    /** Query parameters as key-value pairs */
    [key: string]: string | number | boolean | undefined
}

export interface AffiliateLink {
    /** Full URL with affiliate parameters */
    url: URLString
    /** Tracked subid */
    subid: string
    /** Category ID */
    categoryId: Slug
    /** Whether this is a nofollow link (always true for affiliate) */
    nofollow: boolean
    /** Whether to open in new tab */
    external: boolean
    /** Human-readable link text */
    text?: string
}

// ─── Comparison Table Types ───────────────────────────────────────────────────

export interface ComparisonColumn {
    /** Column header */
    key: string
    /** Display label */
    label: string
    /** Whether to highlight this column as "winner" */
    highlighted?: boolean
    /** Value type for formatting */
    type?: "text" | "number" | "price" | "percentage" | "rating" | "boolean"
}

export interface ComparisonRow {
    /** Product/provider name */
    name: string
    /** Short description */
    description?: string
    /** Pros list */
    pros?: string[]
    /** Cons list */
    cons?: string[]
    /** Column values keyed by column key */
    values: Record<string, string | number | boolean | Rating>
    /** CHECK24 affiliate link for this row */
    affiliateLink?: AffiliateLink
    /** Visual badge (e.g. "Testsieger", "Top-Empfehlung") */
    badge?: string
    /** Rating 1-5 */
    rating?: Rating
    /** Whether this is the top recommendation */
    recommended?: boolean
}

export interface ComparisonTable {
    /** Table identifier */
    id: Slug
    /** Table title */
    title: string
    /** Column definitions */
    columns: ComparisonColumn[]
    /** Data rows */
    rows: ComparisonRow[]
    /** Optional footer note */
    footer?: string
    /** Affiliate disclosure for this table */
    disclosure?: string
}

// ─── Pros & Cons ──────────────────────────────────────────────────────────────

export interface ProsCons {
    pros: string[]
    cons: string[]
}

// ─── Technical Specifications (key-value) ──────────────────────────────────────

export interface TechSpec {
    /** Specification name (e.g. "Effektiver Jahreszins") */
    name: string
    /** Specification value (e.g. "4.99%") */
    value: string
    /** Optional tooltip / explanation */
    tooltip?: string
}

export interface TechSpecs {
    /** Product identifier */
    productId: Slug
    /** Product name */
    productName: string
    /** Array of technical specifications */
    specs: TechSpec[]
}

// ─── Product Review ───────────────────────────────────────────────────────────

export interface ProductReview extends AffiliateContent {
    /** Product rating 1-5 */
    rating: Rating
    /** Pros and cons */
    prosCons: ProsCons
    /** Comparison table reference */
    comparisonTableId?: Slug
    /** Technical specs */
    techSpecs?: TechSpec[]
    /** CHECK24 affiliate link */
    affiliateLink: AffiliateLink
    /** Product image URL */
    productImage?: string
    /** Price range */
    priceRange?: { min: number; max: number; currency: "EUR" }
}

// ============================================================================
// VERTICAL-SPECIFIC MODELS
// ============================================================================

// ─── 1. Strom & Gas ───────────────────────────────────────────────────────────

export interface StromGasTarif {
    /** Provider name */
    anbieter: string
    /** Tariff name */
    tarifName: string
    /** Base monthly fee (€) */
    grundgebuehrProMonat: number
    /** Price per kWh (€/kWh) */
    arbeitspreisProKwh: number
    /** One-time signup bonus (€) */
    wechselbonus: number
    /** Price guarantee duration (months, 0 = none) */
    preisgarantieMonate: number
    /** Minimum contract duration (months) */
    mindestvertragslaufzeitMonate: number
    /** Cancellation notice period (months) */
    kuendigungsfristMonate: number
    /** Estimated annual cost (€) */
    geschaetzteJahreskosten: number
    /** Customer rating (1-5) */
    kundenbewertung: Rating
    /** Ökostrom (true/false) */
    oekostrom: boolean
    /** CHECK24 affiliate link */
    affiliateLink?: AffiliateLink
    /** Badge (e.g. "Preisgarantie", "Ökostrom") */
    badge?: string
}

export interface StromGasVergleich {
    /** Postal code (PLZ) */
    plz: string
    /** Annual consumption (kWh) */
    jahresverbrauchKwh: number
    /** Number of persons in household */
    personen: number
    /** Available tariffs */
    tarife: StromGasTarif[]
    /** Date of comparison */
    stand: ISODate
    /** Estimated savings compared to current (€) */
    ersparnis?: number
}

// ─── 2. Kreditkarten ──────────────────────────────────────────────────────────

export interface Kreditkarte {
    /** Card name */
    name: string
    /** Issuing bank / provider */
    anbieter: string
    /** Annual fee (€) */
    jahresgebuehr: number
    /** Effective annual interest rate (%) */
    effektiverJahreszins: number
    /** Nominal interest rate (%) */
    nominellerZins: number
    /** Free cash withdrawal abroad */
    auslandseinsatzGebuehrfrei: boolean
    /** Foreign transaction fee (%) */
    auslandseinsatzGebuehr: number
    /** Welcome bonus (€) */
    willkommensbonus: number
    /** Credit limit range min (€) */
    kreditlimitMin: number
    /** Credit limit range max (€) */
    kreditlimitMax: number
    /** Free period for payment (days) */
    zinsfreieZeitTage: number
    /** Included travel insurance */
    reiseversicherung: boolean
    /** Included purchase insurance */
    einkaufsversicherung: boolean
    /** Contactless payment support */
    kontaktlos: boolean
    /** Apple Pay / Google Pay support */
    mobilePayment: boolean
    /** Card type (Visa, Mastercard, etc.) */
    kartentyp: "Visa" | "Mastercard" | "American Express" | "Diners Club"
    /** Annual income requirement (€) */
    mindesteinkommen: number
    /** Customer rating (1-5) */
    kundenbewertung: Rating
    /** CHECK24 affiliate link */
    affiliateLink?: AffiliateLink
    /** Badge */
    badge?: string
}

export interface KreditkartenVergleich {
    /** Available cards */
    karten: Kreditkarte[]
    /** Date */
    stand: ISODate
    /** Filter: no annual fee */
    filterOhneJahresgebuehr?: boolean
}

// ─── 3. Tagesgeld ─────────────────────────────────────────────────────────────

export interface TagesgeldKonto {
    /** Bank name */
    bank: string
    /** Account name */
    kontoName: string
    /** Current interest rate (%) */
    zinssatz: number
    /** Interest rate binding period (months, 0 = variable) */
    zinsbindungMonate: number
    /** Deposit protection scheme */
    einlagensicherung: string
    /** Deposit protection amount (€) */
    einlagensicherungSumme: number
    /** Minimum deposit (€) */
    mindestanlage: number
    /** Maximum deposit (€, 0 = unlimited) */
    maxAnlage: number
    /** Free withdrawals per year */
    kostenloseAbhebungenProJahr: number
    /** Online banking available */
    onlineBanking: boolean
    /** App available */
    app: boolean
    /** Customer rating (1-5) */
    kundenbewertung: Rating
    /** CHECK24 affiliate link */
    affiliateLink?: AffiliateLink
    /** Badge (e.g. "Top-Zins", "Angebot der Woche") */
    badge?: string
}

export interface TagesgeldVergleich {
    /** Available accounts */
    konten: TagesgeldKonto[]
    /** Date */
    stand: ISODate
    /** Investment amount for calculation (€) */
    anlagesumme?: number
    /** Calculated annual return (€) */
    jahresrendite?: number
}

// ============================================================================
// Helper Types
// ============================================================================

/** Standard API response wrapper */
export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
    timestamp: ISODate
}

/** Breadcrumb type for navigation */
export interface Breadcrumb {
    label: string
    href: string
    isCurrentPage?: boolean
}

/** Disclosure information */
export interface AffiliateDisclosure {
    /** Whether to show disclosure */
    show: boolean
    /** Custom disclosure text */
    text?: string
    /** Date of last review */
    lastReviewed?: ISODate
}
