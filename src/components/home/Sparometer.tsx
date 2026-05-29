"use client"

import { useState, useEffect, useRef } from "react"

const TARGET_AMOUNT = 274839
const DURATION_MS = 2500

export default function Sparometer() {
    const [count, setCount] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasBeenVisible) {
                    setHasBeenVisible(true)
                    setIsAnimating(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [hasBeenVisible])

    useEffect(() => {
        if (!isAnimating) return

        const startTime = Date.now()
        const startCount = 0

        const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / DURATION_MS, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(startCount + (TARGET_AMOUNT - startCount) * eased)

            setCount(currentCount)

            if (progress < 1) {
                requestAnimationFrame(tick)
            }
        }

        requestAnimationFrame(tick)
    }, [isAnimating])

    const handleReSnap = () => {
        setCount(0)
        setIsAnimating(false)
        setTimeout(() => {
            setIsAnimating(true)
        }, 100)
    }

    const formattedCount = count.toLocaleString("de-DE")

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-zinc-950 py-16 text-white">
            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_60%)]" />

            {/* Gold shimmer borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            {/* Floating warm emojis */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute left-[8%] top-[20%] animate-float-gentle text-xl opacity-20">💰</span>
                <span className="absolute right-[12%] top-[15%] animate-float-gentle text-2xl opacity-20" style={{ animationDelay: "1s" }}>🥂</span>
                <span className="absolute left-[20%] bottom-[20%] animate-float-gentle text-xl opacity-20" style={{ animationDelay: "2s" }}>🐷</span>
            </div>

            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-800/30 bg-amber-950/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                    📊 BudgetScout Sparometer
                </div>

                <div className="relative">
                    {/* Big number */}
                    <div className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
                        <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent tabular-nums">
                            {formattedCount}
                        </span>
                        <span className="ml-2 text-4xl text-amber-400/80 sm:text-5xl">€</span>
                    </div>

                    <p className="mt-4 text-lg text-zinc-400">
                        Bisher von unseren Lounge-Gästen gespart 💰
                    </p>

                    <button
                        onClick={handleReSnap}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-950/30 px-6 py-2 text-sm font-medium text-amber-400 backdrop-blur-sm transition-all hover:bg-amber-950/50 hover:text-amber-300 active:scale-95"
                    >
                        🍸 Nochmal zählen lassen
                    </button>
                </div>

                {/* Mini ticker bar */}
                <div className="mx-auto mt-8 h-3 w-full max-w-md overflow-hidden rounded-full bg-zinc-800">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-1000"
                        style={{
                            width: `${Math.min((count / TARGET_AMOUNT) * 100, 100)}%`,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
