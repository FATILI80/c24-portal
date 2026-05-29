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
        <section className="relative overflow-hidden bg-gradient-to-b from-surface via-gold-dark to-surface py-16">
            {/* Warm gold accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                        😂 Lounge-Stammgäste
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                        Das sagen unsere Sparfüchse
                    </h2>
                    <p className="mt-2 text-zinc-400">
                        Echte Menschen. Echte Ersparnisse. Lounge-geprüft. 🥂
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`group relative cursor-pointer rounded-xl border bg-gold-dark/40 p-6 shadow-sm transition-all duration-300 hover:shadow-gold-glow-lg hover:-translate-y-2 ${activeIndex === i
                                ? "border-gold-primary ring-2 ring-gold-primary/30"
                                : "border-gold-accent"
                                }`}
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                        >
                            {/* Avatar */}
                            <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                {t.avatar}
                            </div>

                            {/* Quote */}
                            <p className="text-sm leading-relaxed text-zinc-400">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Highlight Badge - gold */}
                            <div className="mt-4 inline-block rounded-full bg-gold-dark/50 px-3 py-1 text-xs font-semibold text-gold-primary">
                                🎉 {t.highlight}
                            </div>

                            {/* Author */}
                            <div className="mt-4 border-t border-gold-accent pt-3">
                                <p className="text-sm font-semibold text-text-primary">
                                    {t.name}
                                </p>
                                <p className="text-xs text-zinc-500">{t.role}</p>
                            </div>

                            {/* Click hint */}
                            <span className="absolute right-3 top-3 text-xs text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100">
                                🥂
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
