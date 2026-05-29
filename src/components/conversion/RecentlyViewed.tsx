"use client"

import { useEffect, useState } from "react"

interface ViewedProduct {
    name: string
    link: string
    category: string
    timestamp: number
}

const STORAGE_KEY = "budgetscout-recently-viewed"
const MAX_ITEMS = 5

/**
 * Track a product view. Call this from product link click handlers.
 */
export function trackProductView(name: string, link: string, category: string) {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        const items: ViewedProduct[] = stored ? JSON.parse(stored) : []

        // Remove duplicate if exists
        const filtered = items.filter((item) => item.link !== link)

        // Add new entry at the beginning
        filtered.unshift({ name, link, category, timestamp: Date.now() })

        // Keep only MAX_ITEMS
        const trimmed = filtered.slice(0, MAX_ITEMS)

        localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
    } catch {
        // localStorage might be unavailable
    }
}

export default function RecentlyViewed() {
    const [items, setItems] = useState<ViewedProduct[]>([])

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) {
                const parsed: ViewedProduct[] = JSON.parse(stored)
                // Only show items from the last 7 days
                const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
                const recent = parsed.filter((item) => item.timestamp > weekAgo)
                setItems(recent)
            }
        } catch {
            // localStorage unavailable
        }
    }, [])

    if (items.length === 0) return null

    return (
        <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                        👀 Zuletzt angesehen
                    </span>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                        Deine zuletzt besuchten Deals
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {items.map((item, i) => (
                        <a
                            key={`${item.link}-${i}`}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="card-base card-holz-border group flex items-center gap-4 p-4 transition-all duration-200 hover:-translate-y-1"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-holz-dark text-lg">
                                {item.category === "Gesundheit"
                                    ? "🩺"
                                    : item.category === "Finanzen"
                                        ? "💰"
                                        : item.category === "Vorsorge & Sicherheit"
                                            ? "🛡️"
                                            : item.category === "Online Business"
                                                ? "💻"
                                                : item.category === "Haushalt & Sparen"
                                                    ? "🏠"
                                                    : item.category === "Mindset"
                                                        ? "🧠"
                                                        : "📦"}
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-text-primary group-hover:text-gold-primary transition-colors">
                                    {item.name}
                                </p>
                                <p className="mt-0.5 text-xs text-zinc-500">
                                    {item.category}
                                </p>
                            </div>
                            <span className="shrink-0 text-xs text-gold-primary opacity-0 transition-opacity group-hover:opacity-100">
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
