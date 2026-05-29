"use client"

import { getAllCategories } from "@/lib/content-loader"
import {
    SAMPLE_STROM_GAS_TABLE,
    SAMPLE_KREDITKARTEN_TABLE,
} from "@/lib/sample-data"
import { SEO_CONFIG } from "@/lib/seo"
import { useConfetti } from "./Confetti"
import ConfettiOverlay from "./Confetti"
import FunFacts from "./FunFacts"
import Sparometer from "./Sparometer"
import Testimonials from "./Testimonials"
import GamificationBadges from "./GamificationBadges"
import Mascot from "./Mascot"

const CATEGORY_CLAIMS: Record<string, string> = {
    "strom-gas": "Kalt erwischt? Hier wird's heiß! 🔥",
    kreditkarten: "Zahlen? Sparen! Ganz einfach. 💳",
    tagesgeld: "Mehr Zinsen als Deine Oma im Garten! 🌱",
    "kfz-versicherung": "Versicherung wechseln – Geldbeutel freut's! 🚗",
    dsl: "Schneller als Dein letzter Download! ⚡",
    mietwagen: "Fahren wie ein König – zahlen wie ein Schüler! 👑",
    reisen: "Urlaub buchen, Kasse schonen. Easy! ✈️",
}

export default function HomeClient({
    categories,
}: {
    categories: ReturnType<typeof getAllCategories>
}) {
    const { particles, fire } = useConfetti()

    return (
        <div className="flex flex-col">
            {/* ─── Confetti Overlay ───────────────────────────────────── */}
            <ConfettiOverlay particles={particles} />

            {/* ─── Hero Section ─────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                {/* Animated background dots */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                {/* Floating emojis decoration */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute left-[10%] top-[20%] animate-bounce-slow text-2xl opacity-20">💰</span>
                    <span className="absolute right-[15%] top-[15%] animate-bounce-slow text-3xl opacity-20" style={{ animationDelay: "0.5s" }}>🐷</span>
                    <span className="absolute left-[20%] bottom-[25%] animate-bounce-slow text-2xl opacity-20" style={{ animationDelay: "1s" }}>⚡</span>
                    <span className="absolute right-[25%] bottom-[15%] animate-bounce-slow text-3xl opacity-20" style={{ animationDelay: "1.5s" }}>💳</span>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <div className="max-w-3xl">
                        {/* Fun tagline */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-yellow-200 backdrop-blur-sm">
                            <span>🐷</span>
                            <span>Spaß am Sparen seit {SEO_CONFIG.currentYear}</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Vergleichen, Sparen,{" "}
                            <span className="text-yellow-300">Geldbeutel knuddeln</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl">
                            Kreditkarten, Strom, DSL, Versicherungen und mehr – wir finden den
                            günstigsten Tarif für Dich. Versprochen! 🤝
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    fire(50, 80)
                                    document
                                        .getElementById("kategorien")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }}
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:scale-105 active:scale-95"
                            >
                                Kategorien entdecken 🎯
                            </button>
                            <a
                                href="/blog"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                            >
                                Blog lesen 📖
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Fun Facts ─────────────────────────────────────────────── */}
            <FunFacts />

            {/* ─── Sparometer ────────────────────────────────────────────── */}
            <Sparometer />

            {/* ─── Category Grid (with fun claims) ──────────────────────── */}
            <section id="kategorien" className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-4xl">🗂️</span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            Wähle Deine Spar-Kategorie
                        </h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Such Dir aus, wo Du zuschlagen willst! ⚡
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={`/kategorien/${category.id}`}
                                onClick={() => fire(50, 50)}
                                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-amber-300 hover:shadow-lg hover:-translate-y-2 hover:rotate-[0.5deg] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-700"
                            >
                                {/* Hover gradient glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-pink-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />

                                <div className="relative flex items-center gap-4">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-2xl shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6 dark:from-amber-950 dark:to-orange-950">
                                        {category.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            {category.shortName}
                                        </p>
                                    </div>
                                </div>

                                <p className="relative mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {category.description}
                                </p>

                                {/* Fun claim */}
                                <p className="relative mt-3 text-xs font-medium text-amber-600 dark:text-amber-400">
                                    {CATEGORY_CLAIMS[category.id] ?? "Sparen war noch nie so lustig! 😄"}
                                </p>

                                <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 transition-all group-hover:gap-3 dark:text-blue-400">
                                    <span>Jetzt vergleichen</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    <span className="text-lg opacity-0 transition-all group-hover:opacity-100">✨</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Featured Comparison Preview ──────────────────────────── */}
            <section className="bg-zinc-50 py-16 sm:py-24 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-4xl">📊</span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            Beliebte Vergleiche
                        </h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Das sind die Dauerbrenner bei unseren Sparfüchsen! 🔥
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Strom/Gas Comparison Preview */}
                        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-amber-700">
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                ⚡ Stromtarife
                                <span className="text-sm font-normal text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">
                                    Heißer Tipp! 🔥
                                </span>
                            </h3>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                            <th className="py-2 text-left font-medium text-zinc-600 dark:text-zinc-400">Anbieter</th>
                                            <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Jahreskosten</th>
                                            <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Bonus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SAMPLE_STROM_GAS_TABLE.rows.slice(0, 3).map((row) => (
                                            <tr key={row.name} className="border-b border-zinc-100 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
                                                <td className="py-3">
                                                    <div className="font-medium text-zinc-900 dark:text-zinc-50">{row.name}</div>
                                                    <div className="text-xs text-zinc-500">{row.description}</div>
                                                </td>
                                                <td className="py-3 text-right font-medium text-zinc-900 dark:text-zinc-50">
                                                    {typeof row.values.jahreskosten === "number"
                                                        ? `${row.values.jahreskosten.toFixed(2)} €`
                                                        : row.values.jahreskosten}
                                                </td>
                                                <td className="py-3 text-right font-medium text-green-600">
                                                    {typeof row.values.wechselbonus === "number"
                                                        ? `${row.values.wechselbonus} €`
                                                        : row.values.wechselbonus}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                onClick={() => fire(30, 60)}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all hover:gap-2 hover:text-blue-700 dark:text-blue-400"
                            >
                                Alle Stromtarife vergleichen →
                            </button>
                        </div>

                        {/* Kreditkarten Comparison Preview */}
                        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-amber-700">
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                💳 Kreditkarten
                                <span className="text-sm font-normal text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">
                                    Gebührenfrei! 🎉
                                </span>
                            </h3>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                            <th className="py-2 text-left font-medium text-zinc-600 dark:text-zinc-400">Karte</th>
                                            <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Jahresgebühr</th>
                                            <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Bonus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SAMPLE_KREDITKARTEN_TABLE.rows.slice(0, 3).map((row) => (
                                            <tr key={row.name} className="border-b border-zinc-100 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
                                                <td className="py-3">
                                                    <div className="font-medium text-zinc-900 dark:text-zinc-50">{row.name}</div>
                                                    <div className="text-xs text-zinc-500">{row.description}</div>
                                                </td>
                                                <td className="py-3 text-right font-medium text-zinc-900 dark:text-zinc-50">
                                                    {typeof row.values.jahresgebuehr === "number" && row.values.jahresgebuehr === 0
                                                        ? "Kostenlos 🎉"
                                                        : `${row.values.jahresgebuehr} €`}
                                                </td>
                                                <td className="py-3 text-right font-medium text-green-600">
                                                    {typeof row.values.bonus === "number" && row.values.bonus > 0
                                                        ? `${row.values.bonus} €`
                                                        : "-"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                onClick={() => fire(70, 60)}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-all hover:gap-2 hover:text-blue-700 dark:text-blue-400"
                            >
                                Alle Kreditkarten vergleichen →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Testimonials ──────────────────────────────────────────── */}
            <Testimonials />

            {/* ─── Trust Signals ─────────────────────────────────────────── */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-4xl">💪</span>
                        <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                            Darum lieben uns unsere Sparfüchse
                        </h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="group text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:from-green-950 dark:to-emerald-950">
                                🦊
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                Unabhängig
                            </h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Unsere Vergleiche sind so neutral wie ein Schweizer Taschenmesser.
                            </p>
                        </div>
                        <div className="group text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 dark:from-blue-950 dark:to-indigo-950">
                                🛡️
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                Sicher
                            </h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Deine Daten sind sicherer als Dein Erspartes unterm Kopfkissen.
                            </p>
                        </div>
                        <div className="group text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:from-yellow-950 dark:to-amber-950">
                                🎁
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                Kostenlos
                            </h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Der Vergleich kostet Dich keinen Cent – nur ein Klick! 🤯
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Gamification Badges ───────────────────────────────────── */}
            <GamificationBadges />

            {/* ─── CTA Section ───────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
                {/* Animated sparkles */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute left-[10%] top-[30%] animate-ping-slow text-2xl opacity-30">✨</span>
                    <span className="absolute right-[20%] top-[20%] animate-ping-slow text-xl opacity-30" style={{ animationDelay: "0.7s" }}>🌟</span>
                    <span className="absolute left-[30%] bottom-[20%] animate-ping-slow text-2xl opacity-30" style={{ animationDelay: "1.4s" }}>💫</span>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-4 text-5xl">🐷</div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        Bereit zu sparen?
                    </h2>
                    <p className="mt-4 text-lg text-emerald-100">
                        Tausend andere haben schon gespart – jetzt bist Du dran! 🚀
                    </p>
                    <button
                        onClick={() => {
                            fire(50, 80)
                            document
                                .getElementById("kategorien")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-sm transition-all hover:bg-emerald-50 hover:scale-105 active:scale-95"
                    >
                        Jetzt vergleichen 🎉
                    </button>
                </div>
            </section>

            {/* ─── Mascot (floating piggy) ────────────────────────────────── */}
            <Mascot />
        </div>
    )
}
