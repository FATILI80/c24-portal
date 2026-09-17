"use client"

// ============================================================================
// Amazon Sticky-Banner (Mobile) — Verkaufs-CTA auf jeder Unterseite
// ============================================================================
// Schmale, dauerhaft erreichbare Leiste am unteren Bildschirmrand für
// Mobilgeräte. Wird erst nach etwas Scroll-Tiefe eingeblendet und ist
// jederzeit ausblendbar. Auf der Startseite bleibt sie ausgeblendet, weil
// dort bereits `StickyCta` (CHECK24-Vergleich) aktiv ist.
// ============================================================================

import { useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"
import { AMAZON_PRODUCTS, getAmazonProductUrl } from "@/lib/amazon-products"
import { getAmazonLinkAttributes } from "@/lib/affiliate-links"

/** Ab dieser Scroll-Tiefe (px) erscheint die Leiste */
const TRIGGER_PX = 800

const DISMISS_KEY = "budgetscout-amazon-sticky-dismissed"
const STICKY_SUBID = "global-sticky-mobil"

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

// ─── Browser-Status als externe Stores ─────────────────────────────────────
// `useSyncExternalStore` statt setState im Effekt: Der Server rendert die
// Leiste nicht, der Client gleicht den echten Zustand danach ab. Dadurch gibt
// es keine Hydration-Fehler und keine verketteten Renders.

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

function subscribeScroll(callback: () => void) {
    window.addEventListener("scroll", callback, { passive: true })
    return () => {
        window.removeEventListener("scroll", callback)
    }
}

function getScrolledSnapshot(): boolean {
    return window.scrollY > TRIGGER_PX
}

function getServerScrolledSnapshot(): boolean {
    return false
}

export default function AmazonStickyBanner() {
    const pathname = usePathname()

    // Nur auf Unterseiten – verhindert doppelte Sticky-Leisten
    const suppressed = pathname === "/" || pathname === ""

    const dismissed = useSyncExternalStore(
        subscribeDismissed,
        getDismissedSnapshot,
        getServerDismissedSnapshot
    )
    const scrolledPast = useSyncExternalStore(
        subscribeScroll,
        getScrolledSnapshot,
        getServerScrolledSnapshot
    )

    if (suppressed || dismissed || !scrolledPast) return null

    const product = AMAZON_PRODUCTS[0]
    const subid = `${STICKY_SUBID}-${product.id}`

    const handleDismiss = () => markDismissed()

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold-primary/25 bg-surface/95 backdrop-blur-xl md:hidden">
            <div className="flex items-center gap-3 px-4 py-2.5">
                <span aria-hidden="true" className="text-xl">
                    {product.icon}
                </span>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-text-primary">
                        {product.name}
                    </p>
                    <p className="truncate text-[11px] text-gold-primary">
                        Anzeige · {product.badge}
                    </p>
                </div>
                <a
                    href={getAmazonProductUrl(product, subid)}
                    {...getAmazonLinkAttributes()}
                    data-subid={subid}
                    onClick={() =>
                        window.gtag?.("event", "amazon_affiliate_click", {
                            product: product.id,
                            position: "sticky_mobil",
                        })
                    }
                    className="btn-gold shrink-0 !px-3 !py-1.5 text-xs !font-bold"
                >
                    Ansehen
                </a>
                <button
                    type="button"
                    onClick={handleDismiss}
                    aria-label="Amazon-Hinweis ausblenden"
                    className="shrink-0 rounded p-1 text-zinc-500 transition-colors hover:text-gold-primary"
                >
                    <span aria-hidden="true" className="text-sm">
                        ✕
                    </span>
                </button>
            </div>
        </div>
    )
}