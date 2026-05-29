import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Mediadaten",
        description: "Mediadaten für BudgetScout.de – Partner- und Werbemöglichkeiten auf unserem CHECK24-Vergleichsportal. Erreiche preisbewusste Verbraucher.",
        slug: "mediadaten",
        keywords: ["Mediadaten", "Werbung", "Partner", "Kooperation", "Anzeigen"],
    })
)

export default function MediadatenPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            📊 Mediadaten
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Werben auf BudgetScout.de
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Erreiche preisbewusste Verbraucher, die aktiv nach
                            Vergleichen und Sparmöglichkeiten suchen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                            Reichweite & Zielgruppe
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { value: "50.000+", label: "Besucher/Monat", icon: "👥" },
                            { value: "25-55", label: "Hauptzielgruppe (Jahre)", icon: "🎯" },
                            { value: "65%", label: "Mobile Nutzer", icon: "📱" },
                            { value: "3:42", label: "Ø Verweildauer", icon: "⏱️" },
                        ].map((metric, i) => (
                            <div
                                key={i}
                                className="card-base card-holz-border flex flex-col items-center p-6 text-center"
                            >
                                <span className="text-3xl">{metric.icon}</span>
                                <p className="mt-3 text-2xl font-extrabold text-gold-primary">
                                    {metric.value}
                                </p>
                                <p className="mt-1 text-sm text-zinc-500">
                                    {metric.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Angebote */}
            <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
                <div className="absolute inset-0 bg-holz-texture opacity-10" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />

                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                            Werbeformate
                        </h2>
                        <p className="mt-2 text-zinc-400">
                            Flexible Möglichkeiten für Deine Marke
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                icon: "🖼️",
                                title: "Display-Anzeigen",
                                desc: "Bannerwerbung in verschiedenen Formaten (300x250, 728x90, 970x250) auf allen Unterseiten.",
                                preis: "Auf Anfrage",
                            },
                            {
                                icon: "✍️",
                                title: "Sponsored Content",
                                desc: "Redaktionelle Artikel mit Partnerbezug – authentisch eingebettet in unsere Ratgeber-Inhalte.",
                                preis: "Auf Anfrage",
                            },
                            {
                                icon: "🔗",
                                title: "Affiliate-Partnerschaft",
                                desc: "Wir bewerben Dein Produkt oder Deine Dienstleistung gegen Provision. Nur bei Erfolg.",
                                preis: "Ab 10% Provision",
                            },
                            {
                                icon: "📧",
                                title: "Newsletter-Erwähnung",
                                desc: "Dein Angebot in unserem Newsletter – direkt vor unserer engagierten Leserschaft.",
                                preis: "Auf Anfrage",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="card-base card-holz-border p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                                            {item.desc}
                                        </p>
                                        <span className="mt-2 inline-block rounded-full bg-gold-primary/10 px-3 py-1 text-xs font-semibold text-gold-primary">
                                            {item.preis}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kontakt */}
            <section className="relative overflow-hidden bg-surface py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-30" />
                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                        Interesse geweckt?
                    </h2>
                    <p className="mt-3 text-zinc-400">
                        Wir freuen uns auf Deine Nachricht – schreib uns einfach eine
                        E-Mail und wir besprechen die Details.
                    </p>
                    <a
                        href="mailto:partner@budgetscout.de"
                        className="btn-gold mt-6 inline-flex"
                    >
                        partner@budgetscout.de
                    </a>
                    <p className="mt-4 text-xs text-zinc-600">
                        Oder nutze unser{" "}
                        <a href="/kontakt" className="text-gold-primary underline">
                            Kontaktformular
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    )
}
