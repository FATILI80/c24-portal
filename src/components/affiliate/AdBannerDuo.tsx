"use client"

// ============================================================================
// AdBannerDuo — kombiniertes Werbebanner (Digistore24 + Amazon)
// ============================================================================
// Wird im Root-Layout eingebunden und erscheint damit auf jeder Seite.
// Links: Digistore24-Angebot, rechts: Amazon-Spargadget. Beide Links sind mit
// den jeweiligen Partner-IDs des Betreibers verknüpft.
//
// Wichtig:
// - Keine externen Requests, keine Fremdbilder: es werden nur Links gerendert.
// - Rotation stoppt bei Hover/Fokus (Barrierefreiheit).
// - Nutzer können das Banner dauerhaft ausblenden (localStorage).
// ============================================================================

import { useEffect, useState, useSyncExternalStore } from "react"
import { AMAZON_PRODUCTS, getAmazonProductUrl } from "@/lib/amazon-products"
import { getAmazonLinkAttributes } from "@/lib/affiliate-links"
import {
    getDigistoreBannersFor,
    getDigistoreLinkAttributes,
    getDigistoreOfferUrl,
    pickDigistoreOffer,
} from "@/lib/digistore-products"

/** Laufzeit einer Empfehlung in Millisekunden */
const ROTATION_MS = 8000

/** Merker für "dauerhaft ausgeblendet" */
const DISMISS_KEY = "budgetscout-ad-duo-dismissed"

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

// ─── Ausblenden-Status als externer Store ──────────────────────────────────
// localStorage liegt außerhalb von React; `useSyncExternalStore` ist der dafür
// vorgesehene Weg (kein setState im Effekt, kein Hydration-Fehler).

const dismissListeners = new Set<() => void>()

function subscribeDismissed(callback: () => void) {
    dismissListeners.add(callback)
    return () => {
        dismissListeners.delete(callback)
    }
}

function getDismissedSnapshot(): boolean {
    try {
        return window.localStorage.getItem(DISMISS_KEY) === "1"
    } catch {
        return false
    }
}

function getServerDismissedSnapshot(): boolean {
    return false
}

function markDismissed() {
    try {
        window.localStorage.setItem(DISMISS_KEY, "1")
    } catch {
        // localStorage kann durch Browsereinstellungen blockiert sein
    }
    dismissListeners.forEach((listener) => listener())
}

/** Rotierende Digistore24-Banner für die globale Fläche */
const DUO_BANNERS = getDigistoreBannersFor("global", 4)

// ─── Kombiniertes Banner ───────────────────────────────────────────────────

export default function AdBannerDuo() {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const dismissed = useSyncExternalStore(
        subscribeDismissed,
        getDismissedSnapshot,
        getServerDismissedSnapshot
    )

    useEffect(() => {
        if (dismissed || paused) return
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % DUO_BANNERS.length)
        }, ROTATION_MS)
        return () => window.clearInterval(timer)
    }, [dismissed, paused])

    if (dismissed) return null

    const banner = DUO_BANNERS[index % DUO_BANNERS.length]
    const offer = pickDigistoreOffer(banner.offerId)
    const digistoreSubid = `duo-banner-${banner.id}`
    const digistoreHref = getDigistoreOfferUrl(offer, digistoreSubid)

    const amazonProduct = AMAZON_PRODUCTS[index % AMAZON_PRODUCTS.length]
    const amazonSubid = `duo-banner-${amazonProduct.id}`
    const amazonHref = getAmazonProductUrl(amazonProduct, amazonSubid)

    const track = (partner: "digistore24" | "amazon", id: string) => {
        window.gtag?.("event", "affiliate_click", {
            partner,
            product: id,
            position: "duo_banner_global",
        })
    }

    return (
        <aside
            role="region"
            aria-label="Anzeigen: Digistore24- und Amazon-Partnerempfehlungen"
            className="border-t border-gold-accent/40 bg-gradient-to-r from-holz-dark/60 via-surface to-holz-dark/60"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-primary/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-primary">
                        Anzeige · Partnerlinks
                    </span>
                    <button
                        type="button"
                        onClick={markDismissed}
                        aria-label="Werbebanner dauerhaft ausblenden"
                        title="Banner ausblenden"
                        className="rounded p-1 text-zinc-500 transition-colors hover:text-gold-primary"
                    >
                        <span aria-hidden="true" className="text-sm">
                            ✕
                        </span>
                    </button>
                </div>
                {/* ── Digistore24-Banner ──────────────────────────────── */}
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                    <a
                        href={digistoreHref}
                        {...getDigistoreLinkAttributes()}
                        onClick={() => track("digistore24", banner.id)}
                        data-subid={digistoreSubid}
                        className="group flex items-center gap-3 rounded-xl border border-gold-accent bg-holz-dark/40 p-3 transition-all hover:border-gold-primary/50"
                    >
                        <span aria-hidden="true" className="shrink-0 text-2xl">
                            {banner.emoji}
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                                Digistore24
                            </span>
                            <span className="mt-0.5 block text-sm font-bold text-text-primary">
                                {banner.headline}
                            </span>
                            <span className="mt-0.5 hidden text-xs text-zinc-400 sm:block">
                                {banner.subline}
                            </span>
                        </span>
                        <span className="btn-gold shrink-0 !px-3 !py-1.5 text-xs !font-bold">
                            {banner.cta}
                        </span>
                    </a>

                    {/* ── Amazon-Banner ───────────────────────────────────── */}
                    <a
                        href={amazonHref}
                        {...getAmazonLinkAttributes()}
                        onClick={() => track("amazon", amazonProduct.id)}
                        data-subid={amazonSubid}
                        className="group flex items-center gap-3 rounded-xl border border-gold-accent bg-holz-dark/40 p-3 transition-all hover:border-gold-primary/50"
                    >
                        <span aria-hidden="true" className="shrink-0 text-2xl">
                            {amazonProduct.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                                Amazon-Partner
                            </span>
                            <span className="mt-0.5 block text-sm font-bold text-text-primary">
                                {amazonProduct.name}
                            </span>
                            <span className="mt-0.5 hidden text-xs text-zinc-400 sm:block">
                                {amazonProduct.claim}
                            </span>
                        </span>
                        <span className="btn-gold shrink-0 !px-3 !py-1.5 text-xs !font-bold">
                            Bei Amazon
                        </span>
                    </a>
                </div>
            </div>
        </aside>
    )
}
