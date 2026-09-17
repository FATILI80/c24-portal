// ============================================================================
// Amazon Top-Produkte — Spar-Gadgets mit Partnerlink
// ============================================================================
// Kuratierte Haushalts-Spargadgets mit direktem Amazon-Partnerlink.
// Bewusst ohne Amazon-Bildmaterial und ohne Preisangaben: Preise ändern sich
// täglich, deshalb verlinken wir neutral auf die Produktseite.
// ============================================================================

import {
    AMAZON_DISCLOSURE_SHORT,
    getAmazonLinkAttributes,
} from "@/lib/affiliate-links"
import {
    AMAZON_TOP_PRODUCTS,
    getAmazonProductUrl,
    getAmazonProductsForCategory,
    pickAmazonProductForCategory,
    type AmazonProduct,
} from "@/lib/amazon-products"

// ─── Internal: Produktkarte ────────────────────────────────────────────────

interface AmazonProductCardProps {
    product: AmazonProduct
    /** Sub-ID für die Auswertung im Amazon-PartnerNet */
    subid: string
    /** Nummer der Empfehlung (1-basiert) – erzeugt eine Rangfolge */
    rank?: number
}

function AmazonProductCard({ product, subid, rank }: AmazonProductCardProps) {
    const linkAttrs = getAmazonLinkAttributes()
    const altAttrs = getAmazonLinkAttributes()

    return (
        <article className="card-base card-holz-border group relative flex flex-col p-6">
            {/* Kennzeichnungspflicht: Werbung sichtbar am Produkt */}
            <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-primary/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-primary">
                    <span>Anzeige</span>
                </span>
                <span className="text-[11px] font-medium text-zinc-500">
                    Amazon-Partner
                </span>
            </div>

            {/* Icon + Rang */}
            <div className="mt-4 flex items-start gap-4">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-holz-dark text-2xl transition-transform duration-300 group-hover:scale-110">
                    {product.icon}
                </span>
                <div>
                    <span className="inline-flex rounded-full bg-gold-primary/10 px-2.5 py-0.5 text-xs font-bold text-gold-primary">
                        {rank ? `${rank}. ` : ""}
                        {product.badge}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-text-primary">
                        {product.name}
                    </h3>
                </div>
            </div>

            {/* Verkaufsargument */}
            <p className="mt-3 text-sm font-semibold text-gold-primary/90">
                {product.claim}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {product.description}
            </p>

            {/* Nutzenpunkte */}
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                        <span aria-hidden="true" className="text-gold-primary">
                            ✓
                        </span>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>

            {/* Sparpotenzial-Hinweis */}
            <p className="mt-4 rounded-lg border border-gold-accent/40 bg-holz-dark/40 p-3 text-xs leading-relaxed text-zinc-400">
                <span className="font-semibold text-text-primary">
                    💡 Sparlogik:{" "}
                </span>
                {product.savingsHint}
            </p>

            {/* CTA */}
            <div className="mt-auto pt-5">
                <a
                    href={getAmazonProductUrl(product, subid)}
                    {...linkAttrs}
                    className="btn-gold flex w-full items-center justify-center gap-1.5 text-sm"
                    data-subid={subid}
                >
                    Bei Amazon ansehen
                    <span aria-hidden="true">→</span>
                </a>
                {product.alternative && (
                    <a
                        href={getAmazonProductUrl(
                            { ...product, asin: product.alternative.asin },
                            `${subid}-alternative`
                        )}
                        {...altAttrs}
                        className="mt-2 block text-center text-xs font-medium text-gold-primary/80 underline-offset-4 transition-colors hover:text-gold-primary hover:underline"
                    >
                        {product.alternative.label}
                    </a>
                )}
                <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                    Aktuellen Preis und Verfügbarkeit prüfst Du direkt bei
                    Amazon.
                </p>
            </div>
        </article>
    )
}

// ─── Public: Startseiten-/Bereichs-Sektion ─────────────────────────────────

interface AmazonTopProductsProps {
    /** Anker-ID der Sektion (z. B. für Navigations-Sprünge) */
    id?: string
    title?: string
    subtitle?: string
    /** Vergleichsrubrik – steuert Reihenfolge und Themenbezug */
    categorySlug?: string
    /** Anzahl der angezeigten Empfehlungen (Standard: 3) */
    limit?: number
    /** Präfix für die Amazon-Sub-ID (Auswertung im PartnerNet) */
    subidPrefix?: string
    /** Kompaktere Abstände für Unterseiten */
    compact?: boolean
}

/**
 * Sektion mit den drei stärksten Haushalts-Spargadgets inklusive
 * Partnerlinks. Ohne `categorySlug` erscheinen die Startseiten-Empfehlungen.
 */
export default function AmazonTopProducts({
    id = "amazon-spar-gadgets",
    title = "Spar-Gadgets, die sich oft schnell bezahlt machen",
    subtitle = "Handverlesene Helfer für Strom, Heizung und Haushaltsbudget – direkt bei Amazon.de.",
    categorySlug,
    limit = 3,
    subidPrefix = "amazon-top-produkte",
    compact = false,
}: AmazonTopProductsProps) {
    const source = categorySlug
        ? getAmazonProductsForCategory(categorySlug)
        : AMAZON_TOP_PRODUCTS
    const products = source.slice(0, Math.max(1, limit))

    return (
        <section
            id={id}
            className={`relative overflow-hidden bg-surface ${
                compact ? "py-12 sm:py-14" : "py-16 sm:py-20"
            }`}
        >
            <div className="absolute inset-0 bg-holz-texture opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,197,24,0.05),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Sektionskopf */}
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                        <span aria-hidden="true">🛒</span>
                        Anzeige · Amazon-Partner
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {subtitle}
                    </p>
                </div>

                {/* Produktkarten */}
                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {products.map((product, i) => (
                        <AmazonProductCard
                            key={product.id}
                            product={product}
                            rank={i + 1}
                            subid={`${subidPrefix}-${product.id}`}
                        />
                    ))}
                </div>

                {/* Rechtlicher Hinweis */}
                <p className="mt-8 text-center text-xs leading-relaxed text-zinc-600">
                    {AMAZON_DISCLOSURE_SHORT}
                </p>
            </div>
        </section>
    )
}

// ─── Public: Inline-Banner für Unterseiten ─────────────────────────────────

interface AmazonInlineBannerProps {
    /** Vergleichsrubrik – bestimmt das beworbene Produkt */
    categorySlug?: string
    /** Eigener Überschreibungstext (optional) */
    headline?: string
    /** Präfix für die Amazon-Sub-ID */
    subid?: string
    className?: string
}

/**
 * Kompakter Werbebanner (eine Zeile) für Kategorie-, Deal-, Blog- und
 * Ratgeberseiten. Passt zwischen zwei Textabschnitte, ohne den Lesefluss
 * zu stören.
 */
export function AmazonInlineBanner({
    categorySlug,
    headline,
    subid,
    className = "",
}: AmazonInlineBannerProps) {
    const product = pickAmazonProductForCategory(categorySlug ?? "default")
    const linkAttrs = getAmazonLinkAttributes()
    const resolvedSubid = subid || `inline-banner-${categorySlug || product.id}`

    return (
        <aside
            role="region"
            aria-label="Amazon-Partnerempfehlung"
            className={`not-prose my-8 rounded-xl border border-gold-primary/30 bg-gradient-to-r from-holz-dark/70 via-surface to-holz-dark/70 p-4 sm:p-5 ${className}`}
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span
                    aria-hidden="true"
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-holz-dark text-2xl"
                >
                    {product.icon}
                </span>

                <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-primary">
                        Anzeige · Amazon-Partner
                    </p>
                    <p className="mt-1 text-sm font-bold text-text-primary">
                        {headline ?? product.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {product.claim}
                    </p>
                </div>

                <a
                    href={getAmazonProductUrl(product, resolvedSubid)}
                    {...linkAttrs}
                    className="btn-gold shrink-0 text-center text-sm"
                    data-subid={resolvedSubid}
                >
                    Bei Amazon ansehen
                </a>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                {AMAZON_DISCLOSURE_SHORT}
            </p>
        </aside>
    )
}
