"use client"

import { useState, useEffect, useCallback } from "react"

interface ShareButtonsProps {
    title?: string
    description?: string
}

export default function ShareButtons({
    title = "BudgetScout – Vergleichen & Sparen mit einem Klick",
    description = "Vergleiche Kfz-Versicherung, Strom, DSL & Kredite. Kostenlos & unverbindlich.",
}: ShareButtonsProps) {
    const [currentUrl, setCurrentUrl] = useState("")
    const [copied, setCopied] = useState(false)
    const [hasNativeShare, setHasNativeShare] = useState(false)

    useEffect(() => {
        setCurrentUrl(window.location.href)
    }, [])

    useEffect(() => {
        setHasNativeShare(typeof navigator !== "undefined" && typeof navigator.share !== "undefined")
    }, [])

    const handleCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(currentUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Fallback
            const textArea = document.createElement("textarea")
            textArea.value = currentUrl
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }, [currentUrl])

    // Native share (mobile) or link-based share
    const handleShare = useCallback(
        async (platform?: "whatsapp" | "telegram") => {
            const url = encodeURIComponent(currentUrl)
            const text = encodeURIComponent(`${title}\n\n${description}`)

            // Try native share first (mobile browsers)
            if (!platform && navigator.share) {
                try {
                    await navigator.share({
                        title,
                        text: description,
                        url: currentUrl,
                    })
                    return
                } catch {
                    // User cancelled or native share unavailable
                }
            }

            // Platform-specific fallback
            if (platform === "whatsapp") {
                window.open(
                    `https://wa.me/?text=${text}%20${url}`,
                    "_blank",
                    "noopener,noreferrer"
                )
            } else if (platform === "telegram") {
                window.open(
                    `https://t.me/share/url?url=${url}&text=${text}`,
                    "_blank",
                    "noopener,noreferrer"
                )
            }
        },
        [currentUrl, title, description]
    )

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-zinc-500">Teilen:</span>

            {/* WhatsApp */}
            <button
                onClick={() => handleShare("whatsapp")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-holz-dark/60 text-sm transition-all hover:bg-green-700 hover:scale-110"
                aria-label="Auf WhatsApp teilen"
                title="WhatsApp"
            >
                💬
            </button>

            {/* Telegram */}
            <button
                onClick={() => handleShare("telegram")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-holz-dark/60 text-sm transition-all hover:bg-blue-600 hover:scale-110"
                aria-label="Auf Telegram teilen"
                title="Telegram"
            >
                ✈️
            </button>

            {/* Native share (mobile) */}
            {hasNativeShare && (
                <button
                    onClick={() => handleShare()}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-holz-dark/60 text-sm transition-all hover:bg-gold-primary/20 hover:scale-110"
                    aria-label="Teilen"
                    title="Teilen"
                >
                    📤
                </button>
            )}

            {/* Copy link */}
            <button
                onClick={handleCopyLink}
                className={`flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium transition-all hover:scale-105 ${copied
                    ? "bg-green-500/20 text-green-400"
                    : "bg-holz-dark/60 text-zinc-400 hover:bg-holz-dark"
                    }`}
                aria-label="Link kopieren"
                title="Link kopieren"
            >
                {copied ? "✅ Kopiert!" : "🔗 Kopieren"}
            </button>
        </div>
    )
}

