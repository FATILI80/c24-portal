"use client"

import { getAllCategories } from "@/lib/content-loader"
import { SEO_CONFIG } from "@/lib/seo"
import { useConfetti } from "./Confetti"
import ConfettiOverlay from "./Confetti"
import FunFacts from "./FunFacts"
import Sparometer from "./Sparometer"
import Testimonials from "./Testimonials"
import GamificationBadges from "./GamificationBadges"
import Mascot from "./Mascot"
import TechDeals from "@/components/affiliate/TechDeals"
import DigistoreDeals from "@/components/affiliate/DigistoreDeals"
import Check24CategoryCards from "@/components/home/Check24CategoryCards"

// ─── Lounge-Style Category Sayings ─────────────────────────────────────
const CATEGORY_CLAIMS: Record<string, string> = {
    "strom-gas": "Kalt erwischt? Hier wird's heiß! 🔥",
    kreditkarten: "Zahlen? Sparen! Easy wie 'nen Cocktail schlürfen 🍸",
    tagesgeld: "Mehr Zinsen als Dein Konto tragen kann! 🌱",
    "kfz-versicherung": "Versicherung wechseln – Geldbeutel sagt Danke! 🚗✨",
    dsl: "Schneller als die Bedienung an der Bar! ⚡",
    mietwagen: "Fahren wie ein Boss – zahlen wie ein Azubi! 👑",
    reisen: "Urlaub buchen, Kasse schonen. Prost! ✈️🥂",
}

// ─── Lounge Mood Sayings ────────────────────────────────────────────────
const LOUNGE_SPRUECHE = [
    "Willkommen in der gemütlichsten Ecke des Internets 🥂",
    "Lehn Dich zurück – Sparen war noch nie so entspannt 🛋️",
    "Hier schlürfst Du Cocktails, während Dein Geld arbeitet 🍸",
    "Vergleiche bei Kerzenschein – romantisch und günstig 🕯️",
    "Dein Geldbeutel verdient 'ne Auszeit – Lounge-Modus an! 🎵",
    "Chillen, Vergleichen, Sparen – in genau dieser Reihenfolge 😎",
    "Willkommen im VIP-Bereich des Sparens 🎫",
    "Setz Dich, schnapp Dir 'nen Drink und vergleich' Tarife 🍹",
]

const LOUNGE_EMOJIS = ["🥂", "🍸", "🛋️", "✨", "💫", "🌟", "🎵", "🎶", "🍹", "🧊"]

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

            {/* ─── Hero - BudgetScout Lounge ─────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-surface via-gold-dark to-surface text-text-primary">
                {/* Warm gold lounge glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.08),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,197,24,0.05),transparent_50%)]" />

                {/* Floating lounge decorations */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute left-[5%] top-[15%] animate-float-gentle text-2xl opacity-20">🥂</span>
                    <span className="absolute right-[8%] top-[25%] animate-float-gentle text-3xl opacity-20" style={{ animationDelay: "0.8s" }}>🍸</span>
                    <span className="absolute left-[15%] bottom-[30%] animate-float-gentle text-2xl opacity-20" style={{ animationDelay: "1.6s" }}>✨</span>
                    <span className="absolute right-[20%] bottom-[20%] animate-float-gentle text-3xl opacity-20" style={{ animationDelay: "2.4s" }}>🎵</span>
                    <span className="absolute left-[45%] top-[60%] animate-float-gentle text-xl opacity-20" style={{ animationDelay: "3.2s" }}>🛋️</span>
                </div>

                {/* Animated gold shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px animate-shimmer-gold" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <div className="max-w-3xl">
                        {/* Lounge tagline badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-dark/40 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            <span className="animate-pulse-soft">🥂</span>
                            <span>BudgetScout Lounge · Seit {SEO_CONFIG.currentYear}</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Vergleichen, Sparen,{" "}
                            <span className="bg-gradient-to-r from-gold-primary via-yellow-300 to-gold-primary bg-clip-text text-transparent">
                                Lounge genießen
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
                            Kreditkarten, Strom, DSL & mehr – lehn Dich zurück, wir finden den besten Tarif für Dich.
                            <span className="block mt-2 text-gold-primary/80 text-base italic">
                                &bdquo;Sparen war noch nie so entspannt wie ein Feierabend-Cocktail.&ldquo; 🍸
                            </span>
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    fire(50, 80)
                                    document
                                        .getElementById("kategorien")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }}
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-primary to-yellow-500 px-6 py-3 text-base font-semibold text-gold-dark shadow-lg shadow-gold-primary/25 transition-all hover:from-gold-primary/90 hover:to-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-gold-primary/30 active:scale-95"
                            >
                                Kategorien entdecken 🎯
                            </button>
                            <a
                                href="/deals"
                                className="inline-flex items-center gap-2 rounded-xl border border-gold-primary/40 px-6 py-3 text-base font-semibold text-gold-primary transition-all hover:bg-gold-dark/50 hover:border-gold-primary/60 hover:scale-105 active:scale-95"
                            >
                                🔥 Deals stöbern
                            </a>
                            <a
                                href="/blog"
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/40 px-6 py-3 text-base font-medium text-zinc-400 transition-all hover:border-zinc-500/40 hover:text-zinc-200 hover:scale-105 active:scale-95"
                            >
                                📖 Blog lesen
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px animate-shimmer-gold" />
            </section>

            {/* ─── Fun Facts ─────────────────────────────────────────────── */}
            <FunFacts />

            {/* ─── Sparometer ────────────────────────────────────────────── */}
            <Sparometer />

            {/* ─── GOLD QUERBALKEN I ───────────────────────────────────── */}
            <div className="relative overflow-hidden">
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
                <div className="relative bg-gradient-to-r from-surface via-gold-primary/5 to-surface py-6">
                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 px-4">
                        <div className="h-px flex-1 bg-gradient-to-l from-gold-primary/30 to-transparent" />
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary/80">
                            🥂 Geld sparen ist wie 'n guter Lounge-Cocktail – die Mischung machts!
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gold-primary/30 to-transparent" />
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
            </div>

            {/* ─── WOW STATS SECTION ──────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-surface py-14">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.04),transparent_60%)]" />
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {[
                            { value: "274.839+", label: "Euro gespart", icon: "💰" },
                            { value: "12.458", label: "Vergleiche durchgeführt", icon: "📊" },
                            { value: "4.921", label: "Lounge-Gäste", icon: "🛋️" },
                            { value: "1.847", label: "Badges verliehen", icon: "🏆" },
                        ].map((stat, i) => (
                            <div key={i} className="group rounded-xl border border-gold-accent bg-gold-dark/30 p-6 text-center transition-all duration-300 hover:border-gold-primary/50 hover:bg-gold-dark/60 shadow-gold-glow hover:shadow-gold-glow-lg">
                                <span className="text-3xl transition-transform duration-300 group-hover:scale-125">{stat.icon}</span>
                                <p className="mt-2 text-2xl font-black text-gold-primary tabular-nums">{stat.value}</p>
                                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Category Grid (Lounge Cards) ──────────────────────────── */}
            <section id="kategorien" className="relative overflow-hidden bg-gradient-to-b from-surface via-gold-dark to-surface py-16 sm:py-24">
                {/* Subtle pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,197,24,0.03),transparent_70%)]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                            🛋️ Lounge-Menü
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
                            Wähl' Dein Spar-Vergnügen
                        </h2>
                        <p className="mt-3 text-lg text-zinc-400">
                            Such Dir aus, wo Du zuschlagen willst – der erste Drink (Vergleich) geht aufs Haus! 🥂
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={`/kategorien/${category.id}`}
                                onClick={() => fire(50, 50)}
                                className="group relative overflow-hidden rounded-xl border border-gold-accent bg-gold-dark/40 p-6 shadow-sm transition-all duration-300 hover:border-gold-primary/60 hover:shadow-gold-glow-lg hover:-translate-y-2"
                            >
                                {/* Warm gold glow on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-yellow-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10" />

                                <div className="relative flex items-center gap-4">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-dark to-gold-accent text-2xl shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                        {category.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm font-medium text-gold-primary">
                                            {category.shortName}
                                        </p>
                                    </div>
                                </div>

                                <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
                                    {category.description}
                                </p>

                                {/* Lounge claim */}
                                <p className="relative mt-3 flex items-center gap-1.5 text-xs font-medium text-gold-primary">
                                    <span>🍸</span>
                                    <span>{CATEGORY_CLAIMS[category.id] ?? "Sparen Lounge-Style! 😎"}</span>
                                </p>

                                <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-gold-primary transition-all group-hover:gap-3">
                                    <span>In die Lounge</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    <span className="text-lg opacity-0 transition-all group-hover:opacity-100">🥂</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CHECK24 Category Comparisons ─────────────────────────── */}
            <Check24CategoryCards />

            {/* ─── GOLD QUERBALKEN II ──────────────────────────────────── */}
            <div className="relative overflow-hidden">
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
                <div className="relative bg-gradient-to-r from-surface via-gold-primary/5 to-surface py-4">
                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 px-4">
                        <span className="text-gold-primary/60">✦</span>
                        <span className="text-sm text-zinc-500 italic">
                            &bdquo;Vergleichen ist wie Cocktail probieren – einmal anfangen, willste nicht mehr aufhören!&ldquo;
                        </span>
                        <span className="text-gold-primary/60">✦</span>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
            </div>

            {/* ─── Tech Deals Preview (Amazon) ──────────────────────────── */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,197,24,0.03),transparent_60%)]" />
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-dark/30 px-4 py-1 text-sm font-medium text-gold-primary">
                            💻 Lounge-Tech
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
                            Tech-Deals entdecken
                        </h2>
                        <p className="mt-3 text-lg text-zinc-500">
                            Laptops, Monitore & Zubehör – in der Lounge immer stark reduziert! 🏷️
                        </p>
                    </div>
                    <div className="mt-10">
                        <TechDeals featured maxItems={4} />
                    </div>
                    <div className="mt-6 text-center">
                        <a
                            href="/deals"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary transition-all hover:text-gold-primary/80 hover:gap-3"
                        >
                            Alle Tech-Deals ansehen → 🚀
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── GOLD QUERBALKEN III ─────────────────────────────────── */}
            <div className="relative overflow-hidden">
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
                <div className="relative bg-gradient-to-r from-surface via-gold-primary/5 to-surface py-4">
                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 px-4">
                        <span className="text-gold-primary/60">✦</span>
                        <span className="text-sm text-zinc-500 italic">
                            &bdquo;In der Lounge ist jeder Tag 'Spar-d your enthusiasm'-Tag!&ldquo; 😄
                        </span>
                        <span className="text-gold-primary/60">✦</span>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
            </div>

            {/* ─── Testimonials ──────────────────────────────────────────── */}
            <Testimonials />

            {/* ─── Digistore24 Deals Preview ─────────────────────────────── */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 right-1/4 h-px animate-shimmer-gold" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-dark/30 px-4 py-1 text-sm font-medium text-gold-primary">
                            📚 Lounge-Wissen
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
                            Sparen mit Köpfchen
                        </h2>
                        <p className="mt-3 text-lg text-zinc-500">
                            E-Books & Kurse mit bis zu 70% Provision – Wissen, das sich auszahlt! 🎓
                        </p>
                    </div>
                    <div className="mt-10">
                        <DigistoreDeals featured maxItems={4} />
                    </div>
                    <div className="mt-6 text-center">
                        <a
                            href="/deals"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary transition-all hover:text-gold-primary/80 hover:gap-3"
                        >
                            Alle Deals entdecken → 🚀
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── GOLD QUERBALKEN IV ──────────────────────────────────── */}
            <div className="relative overflow-hidden">
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
                <div className="relative bg-gradient-to-r from-surface via-gold-primary/5 to-surface py-6">
                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 px-4">
                        <div className="h-px flex-1 bg-gradient-to-l from-gold-primary/30 to-transparent" />
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary/80">
                            🛋️ In der BudgetScout Lounge ist jeder Vergleich ein Genuss.
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gold-primary/30 to-transparent" />
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
            </div>

            {/* ─── Trust Signals (Lounge Edition) ────────────────────────── */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                            💪 Lounge-Vorteile
                        </span>
                        <h2 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                            Darum lieben uns unsere Lounge-Gäste
                        </h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="group rounded-xl border border-gold-accent bg-gold-dark/40 p-8 text-center shadow-sm transition-all duration-300 hover:border-gold-primary/50 hover:shadow-gold-glow-lg hover:-translate-y-1">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gold-dark to-gold-accent text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                🦊
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-text-primary">
                                Unabhängig
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Neutral wie ein Lounge-Barkeeper, der jedem den perfekten Drink mixt.
                            </p>
                        </div>
                        <div className="group rounded-xl border border-gold-accent bg-gold-dark/40 p-8 text-center shadow-sm transition-all duration-300 hover:border-gold-primary/50 hover:shadow-gold-glow-lg hover:-translate-y-1">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gold-dark to-gold-accent text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                                🛡️
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-text-primary">
                                Sicher
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Deine Daten sind sicherer als die Bar-Reserve im Tresor.
                            </p>
                        </div>
                        <div className="group rounded-xl border border-gold-accent bg-gold-dark/40 p-8 text-center shadow-sm transition-all duration-300 hover:border-gold-primary/50 hover:shadow-gold-glow-lg hover:-translate-y-1">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gold-dark to-gold-accent text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                🎁
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-text-primary">
                                Kostenlos
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Der Vergleich kostet keinen Cent – der Drink geht auch aufs Haus! 🥂
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Gamification Badges ───────────────────────────────────── */}
            <GamificationBadges />

            {/* ─── CTA Section (Lounge Closing) ──────────────────────────── */}
            <section className="relative overflow-hidden bg-surface py-20">
                {/* Warm gold glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.08),transparent_60%)]" />
                <div className="absolute top-0 left-0 right-0 h-px animate-shimmer-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px animate-shimmer-gold" />

                {/* Floating lounge elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute left-[10%] top-[20%] animate-float-gentle text-3xl opacity-30">🥂</span>
                    <span className="absolute right-[15%] top-[30%] animate-float-gentle text-2xl opacity-30" style={{ animationDelay: "1s" }}>✨</span>
                    <span className="absolute left-[25%] bottom-[25%] animate-float-gentle text-3xl opacity-30" style={{ animationDelay: "2s" }}>🎵</span>
                    <span className="absolute right-[20%] bottom-[20%] animate-float-gentle text-2xl opacity-30" style={{ animationDelay: "3s" }}>🍸</span>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/30 px-4 py-1.5 text-sm text-gold-primary">
                        🛋️ Lounge schließt nie
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                        Bereit zum Sparen?
                    </h2>
                    <p className="mt-4 text-xl text-zinc-500">
                        Tausend andere haben schon in der Lounge gespart – jetzt bist Du dran! 🚀
                    </p>
                    <p className="mt-2 text-sm italic text-zinc-600">
                        &bdquo;Der beste Zeitpunkt zum Sparen? Gestern. Der zweitbeste? Jetzt!&ldquo; 🐷
                    </p>
                    <button
                        onClick={() => {
                            fire(50, 80)
                            document
                                .getElementById("kategorien")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-primary to-yellow-500 px-8 py-4 text-base font-semibold text-gold-dark shadow-lg shadow-gold-primary/25 transition-all hover:from-gold-primary/90 hover:to-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-gold-primary/30 active:scale-95"
                    >
                        Jetzt vergleichen 🥂
                    </button>
                </div>
            </section>

            {/* ─── Mascot (floating piggy) ────────────────────────────────── */}
            <Mascot />
        </div>
    )
}
