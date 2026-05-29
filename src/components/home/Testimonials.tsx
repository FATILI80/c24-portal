"use client"

import { useState } from "react"

const TESTIMONIALS = [
    {
        name: "Max M.",
        role: "Stromsparer aus München",
        avatar: "🦸",
        text: "Ich habe einen Stromtarif gefunden, der günstiger ist als mein letzter Döner. Danke, BudgetScout Lounge!",
        highlight: "237€ pro Jahr gespart",
    },
    {
        name: "Lisa K.",
        role: "Kreditkarten-Kennerin aus Hamburg",
        avatar: "🦊",
        text: "Endlich eine Vergleichsseite, die nicht so staubtrocken ist wie mein Toast von gestern. Lounge-Feeling pur!",
        highlight: "85€ Gebühren gespart",
    },
    {
        name: "Tom W.",
        role: "Tagesgeld-Fan aus Berlin",
        avatar: "🐧",
        text: "3,5% Zinsen? Mein Erspartes macht jetzt Urlaub auf den Bahamas. Lounge-Modus an!",
        highlight: "350€ mehr Zinsen",
    },
    {
        name: "Svenja R.",
        role: "DSL-Wechslerin aus Köln",
        avatar: "🐌",
        text: "DSL wechseln war einfacher als meinem Kater ein Bad zu geben. Und günstiger obendrein!",
        highlight: "192€ im Jahr gespart",
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-16 dark:from-zinc-900 dark:to-zinc-950">
            {/* Warm accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-400">
                        😂 Lounge-Stammgäste
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                        Das sagen unsere Sparfüchse
                    </h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        Echte Menschen. Echte Ersparnisse. Lounge-geprüft. 🥂
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`group relative cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 dark:border-zinc-800 dark:bg-zinc-950 ${activeIndex === i
                                    ? "border-amber-400 ring-2 ring-amber-200 dark:ring-amber-800"
                                    : "border-zinc-200 dark:border-zinc-800"
                                }`}
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                        >
                            {/* Avatar */}
                            <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                {t.avatar}
                            </div>

                            {/* Quote */}
                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Highlight Badge - warm amber */}
                            <div className="mt-4 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                🎉 {t.highlight}
                            </div>

                            {/* Author */}
                            <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-zinc-800">
                                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                    {t.name}
                                </p>
                                <p className="text-xs text-zinc-500">{t.role}</p>
                            </div>

                            {/* Click hint */}
                            <span className="absolute right-3 top-3 text-xs text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-700">
                                🥂
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
