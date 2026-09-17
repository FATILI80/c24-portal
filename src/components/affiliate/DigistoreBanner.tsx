// ============================================================================
// Digistore24 Werbebanner — Angebote mit Partnerlink
// ============================================================================
// Banner-Bausteine für redaktionelle Flächen. Jedes Banner ist direkt mit der
// Digistore24-Affiliate-ID verknüpft und trägt eine eigene Sub-ID, damit sich
// die Platzierungen unterscheiden lassen.
//
// Bewusst ohne Fremdbilder und ohne Preis-/Provisionsangaben: angezeigt werden
// Emoji, Text und ein Link zum Anbieter.
// ============================================================================

import {
    DIGISTORE_DISCLOSURE_SHORT,
    getDigistoreBannersFor,
    getDigistoreLinkAttributes,
    getDigistoreOfferUrl,
    pickDigistoreOffer,
    pickDigistoreOfferForCategory,
    type DigistoreBanner as DigistoreBannerData,
    type DigistoreBannerPlacement,
} from "@/lib/digistore-products"

// ─── Einzelnes Banner (Karte) ──────────────────────────────────────────────

interface DigistoreBannerCardProps {
    banner: DigistoreBannerData
    /** Sub-ID für die Auswertung im Digistore24-Partnerbereich */
    subid: string
    /** Kompakte Darstellung für Fußzeilen-nahe Flächen */
    compact?: boolean
}

/** Ein Werbebanner im Werbemittel-Stil (ohne Fremdbilder). */
export function DigistoreBannerCard({
    banner,
    subid,
    compact = false,
}: DigistoreBannerCardProps) {
    const offer = pickDigistoreOffer(banner.offerId)
    const href = getDigistoreOfferUrl(offer, subid)

    return (
        <a
            href={href}
            {...getDigistoreLinkAttributes()}
            data-subid={subid}
            className={`card-base card-holz-border group flex flex-col ${compact ? "p-4" : "p-6"}`}
        >
            {/* Kennzeichnungspflicht: Werbung sichtbar am Banner */}
            <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-primary/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-primary">
                    Anzeige
                </span>
                <span className="text-[11px] font-medium text-zinc-500">
                    Digistore24-Partner
                </span>
            </div>

            <div className="mt-4 flex items-start gap-4">
                <span
                    aria-hidden="true"
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-holz-dark text-2xl transition-transform duration-300 group-hover:scale-110"
                >
                    {banner.emoji}
                </span>
                <div className="min-w-0">
                    <h3
                        className={`font-bold leading-snug text-text-primary ${compact ? "text-sm" : "text-base"}`}
                    >
                        {banner.headline}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                        {banner.subline}
                    </p>
                </div>
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-primary">
                {offer.icon} {offer.name}
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-primary transition-all group-hover:gap-2">
                {banner.cta}
                <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                >
                    →
                </span>
            </span>
        </a>
    )
}

// ─── Inline-Banner für Unterseiten ─────────────────────────────────────────

interface DigistoreInlineBannerProps {
    /** Vergleichsrubrik – bestimmt das beworbene Angebot */
    categorySlug?: string
    /** Eigener Überschreibungstext (optional) */
    headline?: string
    /** Sub-ID für die Digistore24-Auswertung */
    subid?: string
    className?: string
}

/**
 * Kompakter Werbebanner (eine Zeile) für Kategorie-, Deal-, Blog- und
 * Ratgeberseiten – passend zum Amazon-Inline-Banner.
 */
export function DigistoreInlineBanner({
    categorySlug,
    headline,
    subid,
    className = "",
}: DigistoreInlineBannerProps) {
    const offer = pickDigistoreOfferForCategory(categorySlug)
    const resolvedSubid = subid || `inline-banner-${categorySlug || offer.id}`
    const href = getDigistoreOfferUrl(offer, resolvedSubid)

    return (
        <aside
            role="region"
            aria-label="Digistore24-Partnerempfehlung"
            className={`not-prose my-8 rounded-xl border border-gold-primary/30 bg-gradient-to-r from-holz-dark/70 via-surface to-holz-dark/70 p-4 sm:p-5 ${className}`}
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span
                    aria-hidden="true"
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-holz-dark text-2xl"
                >
                    {offer.icon}
                </span>

                <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-primary">
                        Anzeige · Digistore24-Partner
                    </p>
                    <p className="mt-1 text-sm font-bold text-text-primary">
                        {headline ?? offer.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {offer.claim}
                    </p>
                </div>

                <a
                    href={href}
                    {...getDigistoreLinkAttributes()}
                    data-subid={resolvedSubid}
                    className="btn-gold shrink-0 text-center text-sm"
                >
                    Zum Anbieter
                </a>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                {DIGISTORE_DISCLOSURE_SHORT}
            </p>
        </aside>
    )
}

// ─── Banner-Fläche für Haupt- und Unterseiten ──────────────────────────────

interface DigistoreBannerSectionProps {
    /** Fläche, auf der die Banner laufen sollen */
    placement?: DigistoreBannerPlacement
    /** Anzahl der Banner (Standard: 3) */
    limit?: number
    /** Überschrift über der Banner-Fläche */
    title?: string
    /** Untereinander statt im Raster anordnen */
    stacked?: boolean
    className?: string
}

/**
 * Werbebanner-Fläche mit Digistore24-Angeboten. Als Server-Komponente
 * einsetzbar, da keinerlei Browser-APIs benötigt werden.
 */
export default function DigistoreBanner({
    placement = "home",
    limit = 3,
    title = "Digitale Spar-Ratgeber – handverlesen",
    stacked = false,
    className = "",
}: DigistoreBannerSectionProps) {
    const banners = getDigistoreBannersFor(placement, limit)
    if (banners.length === 0) return null

    return (
        <section
            aria-label="Anzeigen: Digistore24-Partnerangebote"
            className={`py-8 ${className}`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-primary">
                        Anzeige · Digistore24-Partner
                    </span>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                        {title}
                    </h2>
                </div>

                <div
                    className={
                        stacked
                            ? "mt-8 grid grid-cols-1 gap-4"
                            : "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    }
                >
                    {banners.map((banner) => (
                        <DigistoreBannerCard
                            key={banner.id}
                            banner={banner}
                            subid={`${placement}-${banner.id}`}
                            compact={stacked}
                        />
                    ))}
                </div>

                <p className="mt-6 text-center text-xs leading-relaxed text-zinc-600">
                    {DIGISTORE_DISCLOSURE_SHORT}
                </p>
            </div>
        </section>
    )
}

