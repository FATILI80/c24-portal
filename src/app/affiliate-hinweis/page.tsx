import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Affiliate-Hinweis",
        description: "Transparenz ist uns wichtig – hier erfährst Du alles über unsere Affiliate-Partnerschaften und wie BudgetScout.de finanziert wird.",
        slug: "affiliate-hinweis",
        keywords: ["Affiliate", "Provision", "Transparenz", "Partner", "Werbekennzeichnung"],
    })
)

export default function AffiliateHinweisPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            🔗 Transparenz
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Affiliate-Hinweis
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Transparenz ist die Grundlage unseres Geschäftsmodells.
                            Hier erfährst Du, wie BudgetScout.de finanziert wird.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {/* Disclosure */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary">
                                Was bedeutet Affiliate?
                            </h2>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                {AFFILIATE_DISCLOSURE_TEXT}
                            </p>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Das bedeutet: Wenn Du über einen Link auf unserer Seite
                                zu CHECK24 gelangst und dort einen Vertrag abschließt
                                (z.B. eine Kfz-Versicherung) oder ein Produkt kaufst
                                (z.B. über Digistore24), erhalten wir eine kleine
                                Provision. Für Dich entstehen dadurch{" "}
                                <span className="font-semibold text-text-primary">
                                    keine zusätzlichen Kosten
                                </span>
                                .
                            </p>
                        </div>

                        {/* Why affiliate */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary">
                                Warum arbeiten wir mit Affiliate-Links?
                            </h2>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Unser Portal ist für Dich{" "}
                                <span className="font-semibold text-text-primary">
                                    komplett kostenlos
                                </span>
                                . Du zahlst nichts für die Nutzung der Vergleiche, der
                                Ratgeber oder der Tools. Die Affiliate-Provisionen
                                ermöglichen es uns, den Betrieb der Website zu
                                finanzieren und kontinuierlich zu verbessern.
                            </p>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Wichtig: Unsere redaktionellen Inhalte und Vergleiche
                                sind{" "}
                                <span className="font-semibold text-text-primary">
                                    unabhängig
                                </span>
                                . Die Höhe einer Provision beeinflusst nicht, wie wir
                                Produkte oder Tarife bewerten. Wir empfehlen nur
                                Angebote, die wir auch selbst nutzen würden.
                            </p>
                        </div>

                        {/* Partner */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary">
                                Unsere Partner
                            </h2>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Aktuell arbeiten wir mit folgenden Partnern zusammen:
                            </p>
                            <ul className="mt-4 space-y-3">
                                {[
                                    {
                                        name: "CHECK24",
                                        desc: "Vergleichsplattform für Versicherungen, Strom, DSL, Kredite und mehr.",
                                        url: "https://www.check24.de/",
                                    },
                                    {
                                        name: "Digistore24",
                                        desc: "Marketplace für digitale Produkte wie Kurse, E-Books und Software.",
                                        url: "https://www.digistore24.com/",
                                    },
                                ].map((partner, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 rounded-lg bg-holz-dark/30 p-4"
                                    >
                                        <span className="mt-0.5 shrink-0 text-xl">
                                            🤝
                                        </span>
                                        <div>
                                            <p className="font-semibold text-text-primary">
                                                {partner.name}
                                            </p>
                                            <p className="mt-0.5 text-sm text-zinc-500">
                                                {partner.desc}
                                            </p>
                                            <a
                                                href={partner.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 inline-block text-xs text-gold-primary underline"
                                            >
                                                {partner.url}
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Erkennbarkeit */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary">
                                Woran erkennst Du Affiliate-Links?
                            </h2>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Wir kennzeichnen Affiliate-Links auf verschiedene Weise:
                            </p>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                                <li>
                                    Links zu CHECK24-Vergleichen sind als solche
                                    erkennbar und führen Dich zur CHECK24-Website.
                                </li>
                                <li>
                                    Digistore24-Produkte sind mit dem Hinweis
                                    "Empfohlen" gekennzeichnet.
                                </li>
                                <li>
                                    In Ratgeber-Artikeln weisen wir gesondert auf
                                    Affiliate-Links hin.
                                </li>
                                <li>
                                    Alle externen Links öffnen in einem neuen Tab,
                                    sodass Du jederzeit zurückkehren kannst.
                                </li>
                            </ul>
                        </div>

                        {/* Fragen */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary">
                                Hast Du Fragen?
                            </h2>
                            <p className="mt-3 leading-relaxed text-zinc-400">
                                Wenn Du weitere Fragen zu unseren Affiliate-Partnerschaften
                                hast, kannst Du uns jederzeit kontaktieren.
                            </p>
                            <a
                                href="/kontakt"
                                className="btn-gold mt-4 inline-flex"
                            >
                                Kontakt aufnehmen
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
