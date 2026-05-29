"use client"

import { useState, useEffect, useCallback } from "react"

const SAVING_SPRUECHE = [
    "Oink! Hier geht's ab zum Sparglück! 🐷",
    "Ich hab schon 3 Tarife verglichen – und Du? 💪",
    "Sparen ist wie Salat – macht fit für den Geldbeutel! 🥗",
    "Du glaubst nicht, was ich hier für Schnäppchen sehe! 👀",
    "Ein Vergleich und schon haste mehr Kohle im Sack! 💰",
    "Wer vergleicht, spart – wer nicht, hat schon verloren! 🏆",
    "Ich liebe Geld mehr als mein Spiegelbild! 🪞",
    "Mit BudgetScout wird dein Konto zum Bodybuilder! 💪",
]

export default function Mascot() {
    const [spruch, setSpruch] = useState(SAVING_SPRUECHE[0])
    const [isVisible, setIsVisible] = useState(false)
    const [isBouncing, setIsBouncing] = useState(false)

    const nextSpruch = useCallback(() => {
        setIsBouncing(true)
        setTimeout(() => {
            setSpruch((prev) => {
                const currentIndex = SAVING_SPRUECHE.indexOf(prev)
                return SAVING_SPRUECHE[(currentIndex + 1) % SAVING_SPRUECHE.length]
            })
            setIsBouncing(false)
        }, 300)
    }, [])

    useEffect(() => {
        // Show after a short delay
        const showTimer = setTimeout(() => setIsVisible(true), 1500)
        // Rotate messages
        const messageTimer = setInterval(nextSpruch, 8000)

        return () => {
            clearTimeout(showTimer)
            clearInterval(messageTimer)
        }
    }, [nextSpruch])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Speech Bubble */}
            <div
                className={`relative max-w-[260px] rounded-2xl bg-gradient-to-r from-gold-primary to-yellow-500 px-4 py-3 text-sm font-medium text-gold-dark shadow-lg transition-all duration-300 ${isBouncing ? "scale-95 opacity-50" : "scale-100 opacity-100"
                    }`}
            >
                <p>{spruch}</p>
                {/* Speech bubble arrow */}
                <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 bg-yellow-500" />
            </div>

            {/* Piggy Mascot */}
            <button
                onClick={nextSpruch}
                className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-3xl shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95 animate-bounce-slow"
                aria-label="Neuen Spruch anzeigen"
            >
                <span className="animate-pulse">🐷</span>
                {/* Hover sparkle */}
                <span className="absolute -right-1 -top-1 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                    ✨
                </span>
            </button>
        </div>
    )
}
