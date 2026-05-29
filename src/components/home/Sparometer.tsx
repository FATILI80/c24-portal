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
        <section ref={sectionRef} className="bg-gradient-to-br from-emerald-600 to-teal-700 py-16 text-white">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                    📊 BudgetScout Sparometer
                </div>

                <div className="relative">
                    {/* Big number */}
                    <div className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
                        <span className="inline-block tabular-nums">
                            {formattedCount}
                        </span>
                        <span className="ml-2 text-4xl sm:text-5xl">€</span>
                    </div>

                    <p className="mt-4 text-lg text-emerald-100">
                        Bisher von unseren Nutzern gespart 💰
                    </p>

                    <button
                        onClick={handleReSnap}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30 active:scale-95"
                    >
                        🔄 Nochmal zählen lassen
                    </button>
                </div>

                {/* Mini ticker bar */}
                <div className="mx-auto mt-8 h-3 w-full max-w-md overflow-hidden rounded-full bg-white/20">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-1000"
                        style={{
                            width: `${Math.min((count / TARGET_AMOUNT) * 100, 100)}%`,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

