"use client"

import { useEffect, useState, useCallback } from "react"

const STORAGE_KEY = "budgetscout-exit-intent-dismissed"
const DELAY_MS = 5000 // Minimum time on page before popup activates

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false)
    const [canShow, setCanShow] = useState(false)

    // Don't show if previously dismissed in this session
    useEffect(() => {
        const dismissed = sessionStorage.getItem(STORAGE_KEY)
        if (dismissed === "true") return

        // Wait at least DELAY_MS before allowing exit intent
        const timer = setTimeout(() => setCanShow(true), DELAY_MS)
        return () => clearTimeout(timer)
    }, [])

    // Exit intent detection
    const handleMouseLeave = useCallback(
        (e: MouseEvent) => {
            if (!canShow || show) return
            // Only trigger when mouse leaves through the top
            if (e.clientY <= 0) {
                setShow(true)
            }
        },
        [canShow, show]
    )

    useEffect(() => {
        document.documentElement.addEventListener("mouseleave", handleMouseLeave)
        return () =>
            document.documentElement.removeEventListener(
                "mouseleave",
                handleMouseLeave
            )
    }, [handleMouseLeave])

    const handleDismiss = useCallback(() => {
        setShow(false)
        sessionStorage.setItem(STORAGE_KEY, "true")
    }, [])

    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) handleDismiss()
        },
        [handleDismiss]
    )

    // Prevent body scroll when popup is open
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [show])

    if (!show) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleBackdropClick}
        >
            <div className="relative mx-4 w-full max-w-md animate-in zoom-in-95 duration-300">
                <div className="card-base card-holz-border relative overflow-hidden border border-gold-primary/20 p-8">
                    {/* Wood texture overlay */}
                    <div className="absolute inset-0 bg-holz-texture opacity-20" />

                    {/* Gold accent line */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

                    <div className="relative">
                        {/* Close button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-holz-dark/80 text-zinc-500 transition-colors hover:bg-holz-medium hover:text-text-primary"
                            aria-label="Schließen"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Icon */}
                        <div className="mb-4 flex justify-center">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-primary/10 text-3xl">
                                🎯
                            </span>
                        </div>

                        {/* Heading */}
                        <h3 className="text-center text-xl font-bold text-text-primary">
                            Warte! Spar Dir bares Geld!
                        </h3>

                        <p className="mt-3 text-center text-sm leading-relaxed text-zinc-400">
                            Vergleiche jetzt Kfz-Versicherung, Stromtarife, DSL und
                            Kredite –{" "}
                            <span className="text-gold-primary font-semibold">
                                kostenlos & unverbindlich
                            </span>
                            . Die besten Tarife warten auf Dich.
                        </p>

                        {/* CTA */}
                        <div className="mt-6 flex flex-col gap-3">
                            <a
                                href="#check24-vergleiche"
                                onClick={handleDismiss}
                                className="btn-gold w-full text-center text-sm"
                            >
                                Jetzt vergleichen & sparen
                            </a>
                            <button
                                onClick={handleDismiss}
                                className="text-center text-xs text-zinc-600 underline underline-offset-2 transition-colors hover:text-zinc-400"
                            >
                                Nein, ich möchte lieber Geld verschenken 😅
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-zinc-600">
                            <span className="flex items-center gap-1">
                                ✓ Kostenlos
                            </span>
                            <span className="flex items-center gap-1">
                                ✓ Unabhängig
                            </span>
                            <span className="flex items-center gap-1">
                                ✓ Unverbindlich
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
