import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"
import ContactForm from "./ContactForm"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Kontakt",
        description: "Kontaktiere BudgetScout.de – Dein unabhängiges Vergleichsportal für CHECK24-Vergleiche. Wir freuen uns auf Deine Nachricht.",
        slug: "kontakt",
        keywords: ["Kontakt", "BudgetScout", "Support", "Fragen", "Hilfe"],
    })
)

export default function KontaktPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            📬 Kontakt
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Wir sind für Dich da
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Fragen, Anregungen oder Feedback? Schreib uns – wir melden uns
                            innerhalb von 24 Stunden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="card-base card-holz-border p-6">
                                <h2 className="text-lg font-bold text-text-primary">
                                    📧 E-Mail
                                </h2>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Für allgemeine Anfragen:
                                </p>
                                <a
                                    href="mailto:info@budgetscout.de"
                                    className="mt-1 inline-block text-sm font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                >
                                    info@budgetscout.de
                                </a>
                            </div>

                            <div className="card-base card-holz-border p-6">
                                <h2 className="text-lg font-bold text-text-primary">
                                    🤝 Partner & Kooperationen
                                </h2>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Du möchtest Partner werden oder hast ein interessantes
                                    Angebot? Schreib uns an:
                                </p>
                                <a
                                    href="mailto:partner@budgetscout.de"
                                    className="mt-1 inline-block text-sm font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                >
                                    partner@budgetscout.de
                                </a>
                            </div>

                            <div className="card-base card-holz-border p-6">
                                <h2 className="text-lg font-bold text-text-primary">
                                    🔗 Affiliate-Hinweis
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {AFFILIATE_DISCLOSURE_TEXT}
                                </p>
                                <a
                                    href="/affiliate-hinweis"
                                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                >
                                    Mehr erfahren →
                                </a>
                            </div>

                            <div className="card-base card-holz-border p-6">
                                <h2 className="text-lg font-bold text-text-primary">
                                    ⏱️ Antwortzeit
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    Wir bemühen uns, alle Anfragen innerhalb von{" "}
                                    <span className="font-semibold text-text-primary">
                                        24 Stunden
                                    </span>{" "}
                                    zu beantworten. An Wochenenden und Feiertagen kann es
                                    etwas länger dauern.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
