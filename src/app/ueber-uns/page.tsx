import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Über uns",
        description: "BudgetScout.de – Dein unabhängiges CHECK24-Vergleichsportal. Erfahre mehr über unsere Mission, unser Team und wie wir Dir helfen, bares Geld zu sparen.",
        slug: "ueber-uns",
        keywords: ["Über uns", "Team", "Mission", "BudgetScout", "Vergleichsportal"],
    })
)

export default function UeberUnsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            💡 Über uns
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Sparen mit System
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Wir sind ein unabhängiges Vergleichsportal und helfen Dir,
                            den besten Tarif zu finden – einfach, transparent und
                            kostenlos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                                Unsere Mission
                            </h2>
                            <p className="mt-4 leading-relaxed text-zinc-400">
                                In Deutschland zahlen Verbraucher jährlich hunderte Euro
                                zu viel für Versicherungen, Strom, DSL und Kredite. Weil
                                sie den Wechsel scheuen – oder nicht wissen, dass es
                                günstiger geht.
                            </p>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Genau hier setzen wir an.{" "}
                                <span className="font-semibold text-text-primary">
                                    BudgetScout.de
                                </span>{" "}
                                macht den Vergleich einfach. Wir zeigen Dir auf einen
                                Blick, welche Tarife es gibt und wo Du sparst.{" "}
                                <span className="text-gold-primary font-semibold">
                                    Kostenlos. Unabhängig. Transparent.
                                </span>
                            </p>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Als CHECK24-Partnerportal nutzen wir die gebündelte
                                Marktmacht der größten Vergleichsplattform Deutschlands –
                                damit Du immer den besten Deal bekommst.
                            </p>
                        </div>

                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h3 className="text-lg font-bold text-gold-primary">
                                Unsere Werte
                            </h3>
                            <ul className="mt-4 space-y-4">
                                {[
                                    {
                                        icon: "🔍",
                                        title: "Unabhängigkeit",
                                        desc: "Unsere Vergleiche sind redaktionell unabhängig. Provisionen beeinflussen unsere Rankings nicht.",
                                    },
                                    {
                                        icon: "💎",
                                        title: "Transparenz",
                                        desc: "Wir kennzeichnen alle Affiliate-Links klar. Du weißt immer, woran Du bist.",
                                    },
                                    {
                                        icon: "⚡",
                                        title: "Einfachheit",
                                        desc: "Keine Fachbegriffe, keine versteckten Kosten. Ein Klick – und Du siehst, was Du sparst.",
                                    },
                                    {
                                        icon: "🤝",
                                        title: "Fairness",
                                        desc: "Wir empfehlen nur Produkte und Tarife, die wir auch selbst nutzen würden.",
                                    },
                                ].map((value, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-0.5 shrink-0 text-xl">
                                            {value.icon}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-text-primary">
                                                {value.title}
                                            </p>
                                            <p className="text-sm text-zinc-500">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="absolute inset-0 bg-holz-texture opacity-10" />
                {/* Holz divider top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />

                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                            So funktioniert's
                        </h2>
                        <p className="mt-2 text-zinc-400">
                            In 3 Schritten zum besten Tarif
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {[
                            {
                                step: "1",
                                icon: "🔎",
                                title: "Kategorie wählen",
                                desc: "Wähle aus, was Du vergleichen möchtest – Kfz-Versicherung, Strom, DSL, Kredit oder Krankenversicherung.",
                            },
                            {
                                step: "2",
                                icon: "📊",
                                title: "Tarife vergleichen",
                                desc: "Wir leiten Dich zu CHECK24 weiter, wo Du alle Tarife auf einen Blick siehst.",
                            },
                            {
                                step: "3",
                                icon: "💰",
                                title: "Wechseln & sparen",
                                desc: "Wähle den besten Tarif und wechsle direkt online. Der Rest erledigt sich von selbst.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="card-base card-holz-border flex flex-col items-center p-6 text-center"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-primary/10 text-xl font-bold text-gold-primary">
                                    {item.step}
                                </span>
                                <span className="mt-4 text-3xl">{item.icon}</span>
                                <h3 className="mt-3 font-bold text-text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-surface py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-30" />
                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                        Bereit zu sparen?
                    </h2>
                    <p className="mt-3 text-zinc-400">
                        Starte jetzt Deinen Vergleich – kostenlos & unverbindlich.
                    </p>
                    <a
                        href="/#check24-vergleiche"
                        className="btn-gold mt-6 inline-flex"
                    >
                        Jetzt vergleichen
                    </a>
                </div>
            </section>
        </div>
    )
}
