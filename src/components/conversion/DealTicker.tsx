"use client"

import { useEffect, useState, useRef } from "react"

interface TickerEntry {
    name: string
    amount: string
    icon: string
}

const TICKER_ENTRIES: TickerEntry[] = [
    { name: "Max M.", amount: "237€", icon: "🦸" },
    { name: "Lisa K.", amount: "85€", icon: "🦊" },
    { name: "Tom W.", amount: "350€", icon: "🐧" },
    { name: "Svenja R.", amount: "192€", icon: "🐌" },
    { name: "Julia B.", amount: "410€", icon: "🦋" },
    { name: "Felix T.", amount: "156€", icon: "🦁" },
    { name: "Mia S.", amount: "278€", icon: "🌸" },
    { name: "Lukas H.", amount: "89€", icon: "🚀" },
    { name: "Anna W.", amount: "520€", icon: "🌟" },
    { name: "Tim R.", amount: "134€", icon: "⚡" },
]

// Duplicate entries for seamless infinite scroll
const DISPLAY_ENTRIES = [...TICKER_ENTRIES, ...TICKER_ENTRIES]

export default function DealTicker() {
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        if (isPaused) return

        const container = containerRef.current
        if (!container) return

        const halfWidth = container.scrollWidth / 2
        const speed = 0.4 // pixels per frame

        let animationId: number
        let pos = scrollPos

        const animate = () => {
            pos += speed
            // Reset to create seamless loop at the halfway point
            if (pos >= halfWidth) {
                pos = 0
            }
            container.scrollLeft = pos
            setScrollPos(pos)
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPaused])

    return (
        <div
            className="relative w-full overflow-hidden border-y border-gold-primary/15 bg-holz-very-dark/80 py-2.5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-holz-very-dark/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-holz-very-dark/90 to-transparent" />

            {/* Scrolling content */}
            <div
                ref={containerRef}
                className="flex gap-8 overflow-hidden whitespace-nowrap"
                style={{ scrollbarWidth: "none" }}
            >
                {DISPLAY_ENTRIES.map((entry, i) => (
                    <span
                        key={i}
                        className="flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-400"
                    >
                        <span className="text-base">{entry.icon}</span>
                        <span>{entry.name}</span>
                        <span className="text-gold-primary font-bold">+{entry.amount}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-500">gerade gespart</span>
                        {i < DISPLAY_ENTRIES.length - 1 && (
                            <span className="ml-4 h-4 w-px bg-gold-primary/10" />
                        )}
                    </span>
                ))}
            </div>

            {/* Live indicator badge */}
            <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-1.5 rounded-full bg-holz-dark/80 px-2.5 py-1 text-xs font-medium text-gold-primary backdrop-blur-sm sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-soft" />
                Live
            </div>
        </div>
    )
}
