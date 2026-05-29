import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { generateAffiliateLink, getAffiliateLinkAttributes } from "@/lib/affiliate-links"

const seo = buildSEOData({
    title: "Tagesgeld-Vergleich 2026 – Die besten Zinsen für Dein Geld",
    description: "Tagesgeld mit den besten Zinsen ✓ Bis zu 3,5% p.a. ✓ Täglich verfügbar ✓ Einlagensicherung ✓ Jetzt vergleichen und mehr aus Deinem Geld machen – mit CHECK24 ✓",
    slug: "ratgeber/tagesgeld-vergleich",
    keywords: ["Tagesgeld", "Tagesgeldvergleich", "Zinsen", "Geldanlage", "CHECK24 Tagesgeld"],
    ogType: "article",
})

export const metadata: Metadata = generatePageMetadata(seo)

const linkAttrs = getAffiliateLinkAttributes()
const check24Link = generateAffiliateLink({ categorySlug: "tagesgeld" as any, subid: "ratgeber-tagesgeld" }).url

const articleSchema = generateArticleSchema(seo, {
    headline: "Tagesgeld-Vergleich 2026 – Die besten Zinsen für Dein Geld",
    datePublished: "2026-02-01",
    dateModified: "2026-05-20",
    author: "Redaktion",
})

const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Tagesgeld-Vergleich", href: "/ratgeber/tagesgeld-vergleich" },
])

const TOP_ZINSEN = [
    { bank: "Raisin Bank", zins: "3,50%", einlagensicherung: "100.000€", besonderheit: "Marktführender Zins" },
    { bank: "Consorsbank", zins: "3,30%", einlagensicherung: "100.000€", besonderheit: "Kostenloses Girokonto" },
    { bank: "ING", zins: "3,25%", einlagensicherung: "100.000€", besonderheit: "Top-Bewertungen" },
    { bank: "DKB", zins: "3,00%", einlagensicherung: "100.000€", besonderheit: "Beste App" },
]

export default function TagesgeldVergleichPage() {
    return (
        <div className="flex flex-col">
            {/* Article */}
            <article className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
                        <Link href="/" className="transition-colors hover:text-gold-primary">Home</Link>
                        <span>/</span>
                        <Link href="/ratgeber" className="transition-colors hover:text-gold-primary">Ratgeber</Link>
                        <span>/</span>
                        <span className="text-zinc-400">Tagesgeld-Vergleich</span>
                    </nav>

                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                        🏦 Tagesgeld
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Tagesgeld-Vergleich 2026 – Die besten Zinsen für Dein Geld
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                        <span>📅 20. Mai 2026</span>
                        <span>•</span>
                        <span>⏱️ 7 Min Lesezeit</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">✍️ Von der Redaktion</span>
                    </div>

                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                        Die Zinswende ist da! Nach Jahren der Niedrigzinsen steigen die
                        Tagesgeldzinsen wieder. Wir zeigen Dir, welche Banken aktuell die
                        besten Konditionen bieten und worauf Du achten solltest.
                    </p>
                </div>
            </article>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 text-base leading-relaxed text-zinc-400">
                        {/* 1. Warum Tagesgeld? */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">1. Warum Tagesgeld?</h2>
                            <p className="mt-4">
                                Tagesgeld ist die flexible Alternative zum Festgeld. Dein Geld ist
                                <strong className="text-text-primary"> täglich verfügbar</strong> und Du erhältst
                                attraktive Zinsen – ganz ohne Bindung. Ideal für:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li><strong className="text-text-primary">Notreserve:</strong> 2-3 Monatsgehälter als Sicherheitspolster</li>
                                <li><strong className="text-text-primary">Sparziel:</strong> Für Urlaub, Auto oder Anzahlung</li>
                                <li><strong className="text-text-primary">Zinsoptimierung:</strong> Besser als das Girokonto für Erspartes</li>
                            </ul>
                        </div>

                        {/* 2. Vergleichstabelle */}
                        <div className="card-base card-holz-border overflow-hidden p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">2. Die besten Tagesgeldzinsen im Vergleich</h2>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-holz-accent/30">
                                            <th className="pb-3 text-left font-semibold text-text-primary">Bank</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Zins p.a.</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Einlagensicherung</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Besonderheit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TOP_ZINSEN.map((entry, i) => (
                                            <tr key={i} className="border-b border-holz-accent/20 last:border-0">
                                                <td className="py-3 pr-4 font-medium text-text-primary">{entry.bank}</td>
                                                <td className="py-3 pr-4 text-gold-primary font-semibold">{entry.zins}</td>
                                                <td className="py-3 pr-4 text-zinc-400">{entry.einlagensicherung}</td>
                                                <td className="py-3 text-xs text-zinc-500">{entry.besonderheit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. Einlagensicherung */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">3. Einlagensicherung – Dein Geld ist geschützt</h2>
                            <p className="mt-4">
                                Alle Banken in der EU sind gesetzlich verpflichtet, Einlagen bis
                                zu <strong className="text-text-primary">100.000€ pro Kunde und Bank</strong> abzusichern.
                                Dieser Schutz greift automatisch und ist kostenlos. Bei deutschen
                                Banken kommt oft noch die freiwillige Einlagensicherung hinzu,
                                die weit höhere Beträge absichert.
                            </p>
                            <p className="mt-3">
                                Unser Tipp: <strong className="text-text-primary">Verteile größere Summen auf mehrere Banken</strong>,
                                um das 100.000€-Limit optimal zu nutzen.
                            </p>
                        </div>

                        {/* 4. Zinsentwicklung */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">4. Aktuelle Zinsentwicklung</h2>
                            <p className="mt-4">
                                Die EZB hat die Leitzinsen in den letzten Monaten mehrfach
                                angehoben, was sich positiv auf die Tagesgeldzinsen auswirkt.
                                Während die Zinsen 2023 bei etwa 2% lagen, sind sie 2026 auf
                                bis zu <strong className="text-text-primary">3,5% p.a.</strong> gestiegen.
                            </p>
                            <p className="mt-3">
                                Allerdings reagieren nicht alle Banken gleich schnell. Während
                                Direktbanken wie Raisin und Consorsbank die Zinsen zeitnah
                                weitergeben, zögern traditionelle Filialbanken oft.
                            </p>
                        </div>

                        {/* 5. Steuern */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">5. Steuern auf Tagesgeldzinsen</h2>
                            <p className="mt-4">
                                Zinserträge unterliegen der <strong className="text-text-primary">Abgeltungsteuer von 25%</strong>
                                (zzgl. Solidaritätszuschlag und ggf. Kirchensteuer). Der
                                Freibetrag liegt bei <strong className="text-text-primary">1.000€ pro Person</strong> (2.000€
                                für Verheiratete). Du solltest Deiner Bank einen Freistellungsauftrag
                                erteilen, damit Du nicht unnötig Steuern zahlst.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="card-base card-holz-border relative overflow-hidden border border-gold-primary/20 p-6 sm:p-8">
                            <div className="absolute inset-0 bg-holz-texture opacity-20" />
                            <div className="relative text-center">
                                <span className="text-3xl">🏦</span>
                                <h3 className="mt-3 text-xl font-bold text-text-primary">
                                    Jetzt Tagesgeld vergleichen
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Finde den besten Tagesgeldzins für Dein Erspartes –
                                    kostenlos und unverbindlich über CHECK24.
                                </p>
                                <a
                                    href={check24Link}
                                    {...linkAttrs}
                                    className="btn-gold mt-4 inline-flex"
                                >
                                    Jetzt vergleichen & mehr Zinsen sichern →
                                </a>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">6. Häufige Fragen (FAQ)</h2>
                            <div className="mt-6 space-y-6">
                                {[
                                    {
                                        q: "Wie oft werden die Zinsen gutgeschrieben?",
                                        a: "Die meisten Banken schreiben die Zinsen monatlich oder quartalsweise gut. Je häufiger die Gutschrift, desto stärker der Zinseszinseffekt."
                                    },
                                    {
                                        q: "Kann ich täglich auf mein Tagesgeld zugreifen?",
                                        a: "Ja, Tagesgeld ist täglich verfügbar. Die Überweisung auf Dein Referenzkonto dauert in der Regel 1 Werktag."
                                    },
                                    {
                                        q: "Gibt es einen Mindestbetrag für Tagesgeld?",
                                        a: "Die meisten Banken verlangen keine Mindesteinlage. Du kannst bereits ab 1€ ein Tagesgeldkonto eröffnen."
                                    },
                                ].map((faq, i) => (
                                    <div key={i}>
                                        <h3 className="font-semibold text-text-primary">{faq.q}</h3>
                                        <p className="mt-1 text-sm text-zinc-500">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Disclosure */}
                        <div className="rounded-lg border border-holz-accent/20 bg-holz-dark/30 p-4 text-xs text-zinc-600">
                            <strong>Affiliate-Hinweis:</strong> Die mit 🏦 markierten Links führen zu CHECK24.
                            Als Partner erhalten wir eine Provision – für Dich entstehen keine Mehrkosten.
                        </div>
                    </div>
                </div>
            </section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </div>
    )
}
