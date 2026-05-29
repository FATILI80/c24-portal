"use client"

import { useState, useEffect } from "react"

interface Badge {
    id: string
    emoji: string
    title: string
    description: string
    condition: string
    unlocked: boolean
    hidden?: boolean
}

const ALL_BADGES: Badge[] = [
    {
        id: "besucher",
        emoji: "👋",
        title: "Hallo Welt!",
        description: "Du hast die Seite besucht – erster Schritt zum Sparglück!",
        condition: "Seite besucht",
        unlocked: true,
    },
    {
        id: "neugierig",
        emoji: "🐿️",
        title: "Neugieriges Eichhörnchen",
        description: "Du hast mehr als 3 Kategorien angesehen!",
        condition: "3 Kategorien besucht",
        unlocked: false,
    },
    {
        id: "sparfuchs",
        emoji: "🦊",
        title: "Spar-Fuchs",
        description: "Du hast einen Vergleich gestartet!",
        condition: "1 Vergleich gestartet",
        unlocked: false,
    },
    {
        id: "profi",
        emoji: "🦸",
        title: "Spar-Profi",
        description: "Du hast alle Kategorien erkundet!",
        condition: "Alle Kategorien besucht",
        unlocked: false,
    },
    {
        id: "leseratte",
        emoji: "📖",
        title: "Leseratte",
        description: "Du hast einen Blog-Artikel gelesen!",
        condition: "1 Artikel gelesen",
        unlocked: false,
    },
    {
        id: "könig",
        emoji: "👑",
        title: "Spar-König",
        description: "Du hast ALLE Badges freigeschaltet!",
        condition: "Alle Badges gesammelt",
        unlocked: false,
    },
    // Hidden badges
    {
        id: "mitternacht",
        emoji: "🦉",
        title: "Nachteule",
        description: "Du vergleichst Tarife um Mitternacht – Respekt!",
        condition: "Besuch zwischen 0-4 Uhr",
        unlocked: false,
        hidden: true,
    },
]

const STORAGE_KEY = "budgetscout-badges"

function loadBadges(): string[] {
    if (typeof window === "undefined") return []
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : ["besucher"]
    } catch {
        return ["besucher"]
    }
}

function saveBadges(ids: string[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {
        // localStorage not available
    }
}

export default function GamificationBadges() {
    const [unlockedIds, setUnlockedIds] = useState<string[]>([])
    const [showNewBadge, setShowNewBadge] = useState<string | null>(null)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        setUnlockedIds(loadBadges())

        // Check for midnight badge
        const hour = new Date().getHours()
        if (hour >= 0 && hour < 4) {
            const current = loadBadges()
            if (!current.includes("mitternacht")) {
                current.push("mitternacht")
                saveBadges(current)
                setUnlockedIds(current)
                setShowNewBadge("mitternacht")
                setTimeout(() => setShowNewBadge(null), 5000)
            }
        }
    }, [])

    const visibleBadges = ALL_BADGES.filter((b) => !("hidden" in b && b.hidden) || unlockedIds.includes(b.id))

    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex w-full items-center justify-between rounded-xl border border-gold-accent bg-gold-dark/40 px-6 py-4 text-left transition-all hover:border-gold-primary/50 hover:shadow-gold-glow"
                >
                    <div>
                        <span className="text-lg font-semibold text-text-primary">
                            🏆 Deine Spar-Erfolge
                        </span>
                        <p className="mt-1 text-sm text-zinc-500">
                            {unlockedIds.length} / {ALL_BADGES.length} Badges freigeschaltet
                        </p>
                    </div>
                    <span
                        className={`text-2xl text-zinc-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                    >
                        ▼
                    </span>
                </button>

                {isExpanded && (
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {visibleBadges.map((badge) => {
                            const isUnlocked = unlockedIds.includes(badge.id)
                            const isNew = showNewBadge === badge.id

                            return (
                                <div
                                    key={badge.id}
                                    className={`relative rounded-xl border p-4 text-center transition-all duration-500 ${isUnlocked
                                        ? "border-gold-primary/50 bg-gold-dark/50 shadow-sm"
                                        : "border-gold-accent bg-gold-dark/20 opacity-40 grayscale"
                                        } ${isNew ? "animate-bounce ring-2 ring-gold-primary" : ""}`}
                                >
                                    <div className="text-3xl">{badge.emoji}</div>
                                    <p className="mt-2 text-xs font-semibold text-text-primary">
                                        {badge.title}
                                    </p>
                                    <p className="mt-1 text-[10px] leading-tight text-zinc-500">
                                        {isUnlocked ? badge.description : `🔒 ${badge.condition}`}
                                    </p>
                                    {isNew && (
                                        <div className="absolute -right-2 -top-2 animate-ping-slow rounded-full bg-gold-primary px-2 py-0.5 text-[10px] font-bold text-gold-dark">
                                            NEU
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
