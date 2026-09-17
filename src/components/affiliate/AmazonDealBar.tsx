"use client"

// ============================================================================
// Amazon Deal-Leiste — globaler Werbebanner auf jeder Seite
// ============================================================================
// Wird im Root-Layout gerendert und erscheint damit auf jeder Route
// (Startseite, Vergleiche, Ratgeber, Blog, Deals und Rechtstexte).
//
// Wichtig:
// - Keine externen Requests: es werden ausschließlich Links gerendert.
// - Rotation stoppt bei Hover/Fokus (Barrierefreiheit).
// - Nutzer können die Leiste dauerhaft ausblenden (localStorage).
// ============================================================================

import { useEffect, useState, useSyncExternalStore } from "react"
import { AMAZON_PRODUCTS, getAmazonProductUrl } from "@/lib/amazon-products"
import { getAmazonLinkAttributes } from "@/lib/affiliate-links"

/** Laufzeit der einzelnen Empfehlung in Millisekunden */
const ROTATION_MS = 7000

/** Merker für "dauerhaft ausgeblendet" */
const DISMISS_KEY = "budgetscout-amazon-bar-dismissed"

/** Sub-ID-Präfix für die Auswertung im Amazon-PartnerNet */
const BAR_SUBID = "global-leiste"

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

// ─── Ausblenden-Status als externer Store ──────────────────────────────────
// localStorage ist ein System außerhalb von React. `useSyncExternalStore` ist
// der dafür vorgesehene Weg: Der Server rendert "sichtbar", der Client gleicht
// danach ab – ohne Hydration-Fehler und ohne setState im Effekt.

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

export default function AmazonDealBar() {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    // Sichtbarkeit kommt aus dem externen Store (localStorage)
    const dismissed = useSyncExternalStore(
        subscribeDismissed,
        getDismissedSnapshot,
        getServerDismissedSnapshot
    )

    // Rotierende Empfehlung
    useEffect(() => {
        if (dismissed || paused) return
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % AMAZON_PRODUCTS.length)
        }, ROTATION_MS)
        return () => window.clearInterval(timer)
    }, [dismissed, paused])

    const product = AMAZON_PRODUCTS[index % AMAZON_PRODUCTS.length]
    const subid = `${BAR_SUBID}-${product.id}`
    const href = getAmazonProductUrl(product, subid)

    const handleDismiss = () => markDismissed()

    const handleClick = () => {
        window.gtag?.("event", "amazon_affiliate_click", {
            product: product.id,
            position: "global_leiste",
        })
    }

    if (dismissed) return null

    return (
        <aside
            role="region"
            aria-label="Amazon-Partnerempfehlung"
            className="relative z-30 border-b border-gold-primary/20 bg-gradient-to-r from-holz-dark via-surface to-holz-dark"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="mx-auto flex max-w-7xl items-center gap-2.5 px-4 py-2 sm:gap-3 sm:px-6 lg:px-8">
                <span className="hidden shrink-0 rounded border border-gold-primary/40 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-primary sm:inline">
                    Anzeige
                </span>

                <span aria-hidden="true" className="shrink-0 text-lg">
                    {product.icon}
                </span>

                <p className="min-w-0 flex-1 text-xs leading-snug text-zinc-300 sm:text-sm">
                    <span className="font-semibold text-text-primary">
                        {product.name}
                    </span>
                    <span className="hidden text-zinc-500 md:inline">
                        {" "}
                        – {product.claim}
                    </span>
                </p>

                <a
                    href={href}
                    {...getAmazonLinkAttributes()}
                    onClick={handleClick}
                    data-subid={subid}
                    className="btn-gold shrink-0 !px-3 !py-1.5 text-xs !font-bold"
                >
                    Bei Amazon ansehen
                </a>

                <button
                    type="button"
                    onClick={handleDismiss}
                    aria-label="Amazon-Hinweis dauerhaft ausblenden"
                    title="Hinweis ausblenden"
                    className="shrink-0 rounded p-1 text-zinc-500 transition-colors hover:text-gold-primary"
                >
                    <span aria-hidden="true" className="text-sm">
                        ✕
                    </span>
                </button>
            </div>
        </aside>
    )
}