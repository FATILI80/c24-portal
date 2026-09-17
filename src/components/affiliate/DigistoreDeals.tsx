"use client"

// ============================================================================
// Digistore24 Deals — Angebots-Raster mit Partnerlinks
// ============================================================================
// Alle Links stammen aus `@/lib/digistore-products` und sind mit der
// Digistore24-Affiliate-ID des Betreibers verknüpft. Bewusst ohne Preis- und
// Provisionsangaben: beides ändert sich laufend und wird direkt beim Anbieter
// geprüft. Keine Fremdbilder – jedes Angebot nutzt ein Emoji.
// ============================================================================

import { useState } from "react"
import {
    DIGISTORE_CATEGORY_LABELS,
    DIGISTORE_DISCLOSURE_SHORT,
    DIGISTORE_OFFERS,
    getDigistoreLinkAttributes,
    getDigistoreOfferUrl,
    getDigistoreOffersByCategory,
    type DigistoreOffer,
    type DigistoreOfferCategory,
} from "@/lib/digistore-products"

// ─── Filter-Kategorien ─────────────────────────────────────────────────────

const CATEGORIES: {
    key: DigistoreOfferCategory | "all"
    label: string
    icon: string
}[] = [
    { key: "all", label: "Alle", icon: "📦" },
    { key: "finanzen", label: "Finanzen", icon: "💰" },
    { key: "online-business", label: "Online Business", icon: "💻" },
    { key: "gesundheit", label: "Gesundheit", icon: "💚" },
    { key: "vorsorge", label: "Vorsorge", icon: "🛡️" },
    { key: "haushalt", label: "Haushalt", icon: "🏠" },
]

// ─── Angebotskarte ─────────────────────────────────────────────────────────

function DigistoreOfferCard({
    offer,
    subid,
}: {
    offer: DigistoreOffer
    subid: string
}) {
    const href = getDigistoreOfferUrl(offer, subid)
    const label = DIGISTORE_CATEGORY_LABELS[offer.category]

    return (
        <a
            href={href}
            {...getDigistoreLinkAttributes()}
            data-subid={subid}
            className="card-base card-holz-border group flex flex-col p-6"
        >
            {/* Kennzeichnungspflicht: Werbung sichtbar am Angebot */}
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
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-holz-dark text-2xl transition-transform duration-300 group-hover:scale-110"
                >
                    {offer.icon}
                </span>
                <div className="min-w-0">
                    {offer.badge && (
                        <span className="inline-flex rounded-full bg-gold-primary/10 px-2.5 py-0.5 text-xs font-bold text-gold-primary">
                            {offer.badge}
                        </span>
                    )}
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-text-primary">
                        {offer.name}
                    </h3>
                </div>
            </div>

            <p className="mt-3 text-sm font-semibold text-gold-primary/90">
                {offer.claim}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {offer.description}
            </p>

            <div className="flex-1" />

            <span className="mt-4 inline-flex self-start rounded-full bg-holz-dark/60 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                {label.icon} {label.label}
            </span>

            <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-gold-primary transition-all group-hover:gap-2">
                Angebot ansehen
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

// ─── Hauptkomponente ───────────────────────────────────────────────────────

interface DigistoreDealsProps {
    /** Filter-Tabs anzeigen (Standard: true) */
    showFilters?: boolean
    /** Nur hervorgehobene Angebote zeigen */
    featured?: boolean
    /** Maximale Anzahl an Angeboten */
    maxItems?: number
}

export default function DigistoreDeals({
    showFilters = true,
    featured = false,
    maxItems,
}: DigistoreDealsProps) {
    const [activeCategory, setActiveCategory] =
        useState<DigistoreOfferCategory | "all">("all")

    const source = featured
        ? [...DIGISTORE_OFFERS].sort(
              (a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge))
          )
        : getDigistoreOffersByCategory(activeCategory)

    const display = maxItems ? source.slice(0, maxItems) : source

    return (
        <section className="bg-surface py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Kopfbereich ─────────────────────────────────────────── */}
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-primary">
                        Anzeige · Digistore24-Partner
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
                        Digitale Produkte rund ums Sparen
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        Ratgeber, Kurse und Werkzeuge – handverlesen aus dem
                        Digistore24-Partnernetzwerk.
                    </p>
                </div>

                {/* ── Filter-Tabs ─────────────────────────────────────────── */}
                {showFilters && !featured && (
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                type="button"
                                onClick={() => setActiveCategory(cat.key)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                    activeCategory === cat.key
                                        ? "bg-gold-primary text-surface"
                                        : "bg-holz-dark/60 text-zinc-400 hover:bg-holz-dark hover:text-gold-primary"
                                }`}
                            >
                                <span aria-hidden="true">{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* ── Angebots-Raster ─────────────────────────────────────── */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {display.map((offer) => (
                        <DigistoreOfferCard
                            key={offer.id}
                            offer={offer}
                            subid={`produktliste-${offer.id}`}
                        />
                    ))}
                </div>

                {display.length === 0 && (
                    <p className="mt-8 text-center text-sm text-zinc-600">
                        Keine Angebote in dieser Kategorie gefunden.
                    </p>
                )}

                {/* ── Rechtlicher Hinweis ─────────────────────────────────── */}
                <p className="mt-8 text-center text-xs leading-relaxed text-zinc-600">
                    {DIGISTORE_DISCLOSURE_SHORT}
                </p>
            </div>
        </section>
    )
}
