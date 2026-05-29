import type { Metadata } from "next"
import Link from "next/link"
import { SEO_CONFIG, generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT, generateAffiliateLink } from "@/lib/affiliate-links"
import type { Breadcrumb } from "@/types/affiliate"

const SLUG = "ratgeber/kfz-versicherung-wechseln"
const CANONICAL = `https://budgetscout.de/${SLUG}`

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: `Kfz-Versicherung wechseln ${SEO_CONFIG.currentYear} – Bis zu 500€ sparen`,
        description: `Kfz-Versicherung wechseln und sparen: Schritt-für-Schritt-Anleitung für ${SEO_CONFIG.currentYear}. Bis zu 500€ Prämie sichern mit CHECK24. Jetzt vergleichen und wechseln!`,
        slug: SLUG,
        keywords: [
            "Kfz-Versicherung wechseln",
            "Autoversicherung Vergleich",
            "Kfz-Versicherung sparen",
            `Kfz-Versicherung ${SEO_CONFIG.currentYear}`,
            "CHECK24 Kfz-Versicherung",
            "Autoversicherung kündigen",
            "Schadenfreiheitsklasse",
            "Beitragsrechner Kfz",
        ],
        ogType: "article",
    })
)

// Breadcrumb data
const breadcrumbs: Breadcrumb[] = [
    { label: "BudgetScout.de", href: "/" },
    { label: "Ratgeber", href: "/#ratgeber" },
    { label: "Kfz-Versicherung wechseln", href: `/${SLUG}` },
]

// --- Article Schema ---
const articleSchema = generateArticleSchema(
    {
        title: `Kfz-Versicherung wechseln ${SEO_CONFIG.currentYear} – Bis zu 500€ sparen`,
        description: "Kfz-Versicherung wechseln und sparen: Schritt-für-Schritt-Anleitung. Bis zu 500€ Prämie sichern mit CHECK24.",
        canonicalUrl: CANONICAL,
        ogType: "article",
    },
    {
        headline: `Kfz-Versicherung wechseln ${SEO_CONFIG.currentYear}: Schritt-für-Schritt-Anleitung zum Sparerfolg`,
        datePublished: "2026-06-01",
        dateModified: "2026-06-01",
        author: "Redaktion",
    }
)

export default function KfzVersicherungWechselnPage() {
    const check24Link = generateAffiliateLink({
        categorySlug: "kfz-versicherung" as any,
        subid: "ratgeber-kfz-wechseln",
    }).url

    const today = SEO_CONFIG.currentYear

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                    {breadcrumbs.map((crumb, i) => (
                        <li key={crumb.href} className="flex items-center gap-2">
                            {i > 0 && <span className="text-zinc-600">/</span>}
                            <Link
                                href={crumb.href}
                                className="transition-colors hover:text-gold-primary"
                            >
                                {crumb.label}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Article Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
                }}
            />

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Kfz-Versicherung wechseln {today} – So sparen Sie bis zu 500€
            </h1>

            {/* Meta info */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <time dateTime="2026-06-01">1. Juni {today}</time>
                <span className="text-zinc-600">•</span>
                <span>12 Minuten Lesezeit</span>
                <span className="text-zinc-600">•</span>
                <span className="text-gold-primary">Ratgeber</span>
            </div>

            {/* Lead text */}
            <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-300">
                <p className="text-lg font-medium text-gold-primary/90">
                    Ein Wechsel der Kfz-Versicherung lohnt sich fast immer. Im Jahr {today} können Sie durch einen Anbieterwechsel
                    durchschnittlich <strong className="text-gold-primary">200 bis 500 Euro pro Jahr</strong> sparen.
                    Wir zeigen Ihnen, wie es in wenigen Schritten gelingt.
                </p>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 rounded-xl border border-gold-accent/30 bg-gradient-to-r from-holz-dark/60 to-surface p-6">
                <h2 className="text-xl font-bold text-gold-primary">
                    Jetzt Kfz-Versicherung vergleichen
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                    Über 150 Tarife vergleichen & bis zu 500€ Prämie sichern.
                </p>
                <a
                    href={check24Link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-gold mt-4 inline-block"
                >
                    Jetzt vergleichen & sparen →
                </a>
            </div>

            {/* Content */}
            <article className="mt-10 space-y-8 text-base leading-relaxed text-zinc-300">
                {/* CHAPTER 1 */}
                <section>
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Warum sich ein Wechsel der Kfz-Versicherung lohnt
                    </h2>
                    <p>
                        Die Kfz-Versicherung gehört zu den größten wiederkehrenden Kosten für Autofahrer in Deutschland.
                        Doch viele Verbraucher zahlen jahrelang denselben Beitrag, obwohl der Markt sich ständig verändert.
                        Neue Anbieter locken mit günstigen Einsteiger-Tarifen, bestehende Versicherungen passen ihre Preise an –
                        und wer nicht wechselt, zahlt oft drauf.
                    </p>
                    <p className="mt-3">
                        Im Jahr {today} ist der Wettbewerb auf dem Kfz-Versicherungsmarkt so intensiv wie nie zuvor.
                        Die Folge: <strong className="text-gold-primary">attraktive Neukundenprämien</strong> von bis zu 500 Euro,
                        niedrige Beiträge und flexible Tarifmodelle. Wer einmal im Jahr vergleicht, profitiert von diesem Wettbewerb.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">
                        Die wichtigsten Fakten zum Kfz-Versicherungswechsel
                    </h3>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li><strong>Durchschnittliche Ersparnis:</strong> 200–500 € pro Jahr</li>
                        <li><strong>Wechselfrist:</strong> In der Regel 4 Wochen vor Versicherungsbeginn (meist 30. November)</li>
                        <li><strong>Sonderkündigungsrecht:</strong> Nach Beitragserhöhung innerhalb von 4 Wochen</li>
                        <li><strong>Wechselaufwand:</strong> Nur wenige Minuten – der neue Anbieter kümmert sich um alles</li>
                        <li><strong>Doppelversicherung:</strong> Nicht möglich – die alte Versicherung wird automatisch gekündigt</li>
                    </ul>
                </section>

                {/* CHAPTER 2 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Schritt 1: Die richtige Vorbereitung
                    </h2>
                    <p>
                        Bevor Sie die Kfz-Versicherung wechseln, sollten Sie einige wichtige Informationen bereithalten.
                        Je genauer Ihre Angaben sind, desto präziser wird der Vergleich.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">
                        Diese Daten benötigen Sie für den Vergleich
                    </h3>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li><strong>Kennzeichen</strong> oder Fahrzeug-Identifizierungsnummer (FIN)</li>
                        <li><strong>Fahrzeugschein</strong> – alle Daten zu Ihrem Auto</li>
                        <li><strong>Aktuelle Versicherungsnummer</strong> – finden Sie auf der letzten Beitragsrechnung</li>
                        <li><strong>Schadenfreiheitsklasse (SF-Klasse)</strong> – bestimmt Ihren Rabatt</li>
                        <li><strong>Jahreskilometerleistung</strong> – wie viele Kilometer fahren Sie pro Jahr?</li>
                        <li><strong>Wunschbeitrag</strong> – welche Deckungssumme und Selbstbeteiligung möchten Sie?</li>
                    </ul>

                    <div className="mt-6 rounded-xl border border-holz-medium/40 bg-holz-very-dark/50 p-5">
                        <p className="text-sm text-zinc-400">
                            <strong className="text-gold-primary">💡 Tipp:</strong> Legen Sie Ihren Fahrzeugschein und die letzte
                            Beitragsrechnung bereit. Damit haben Sie alle wichtigen Daten für den Vergleich auf CHECK24 zur Hand.
                            Der gesamte Vorgang dauert nur etwa 5 Minuten.
                        </p>
                    </div>
                </section>

                {/* CHAPTER 3 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Schritt 2: Den Vergleich durchführen
                    </h2>
                    <p>
                        Der schnellste Weg zur günstigeren Kfz-Versicherung führt über einen Vergleichsrechner wie CHECK24.
                        Hier werden <strong className="text-gold-primary">über 150 Tarife</strong> von mehr als 30 Versicherern
                        gegenübergestellt – von bekannten Namen wie HUK24, Allianz und DEVK bis zu günstigen Direktversicherern.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">
                        Worauf sollten Sie beim Vergleich achten?
                    </h3>
                    <ol className="ml-6 list-decimal space-y-2 text-zinc-300">
                        <li><strong>Deckungssumme:</strong> Die Kfz-Haftpflicht ist Pflicht, eine Teil- oder Vollkasko empfehlenswert bei neueren Fahrzeugen.</li>
                        <li><strong>Selbstbeteiligung:</strong> Eine höhere Selbstbeteiligung senkt den Beitrag – aber Sie zahlen im Schadenfall mehr.</li>
                        <li><strong>Leistungsumfang:</strong> Achten Sie auf Zusatzleistungen wie Fahrerschutz, Mallorca-Police oder GAP-Deckung bei Leasing.</li>
                        <li><strong>Kundenservice:</strong> Bei Schäden ist ein guter Service entscheidend – prüfen Sie Bewertungen und Erreichbarkeit.</li>
                        <li><strong>Beitragsgarantie:</strong> Manche Tarife garantieren den Beitrag für 1–2 Jahre – das schützt vor Preiserhöhungen.</li>
                    </ol>

                    <div className="mt-6 rounded-xl border border-gold-accent/30 bg-gradient-to-r from-holz-dark/60 to-surface p-5">
                        <h4 className="font-semibold text-gold-primary">🔥 Praxis-Tipp für {today}</h4>
                        <p className="mt-2 text-sm text-zinc-400">
                            Viele Versicherer bieten in {today} besonders attraktive Neukundenprämien.
                            Kombinieren Sie den Tarifvergleich mit einem Wechsel zu einem Anbieter mit
                            <strong className="text-gold-primary"> bis zu 500 Euro Prämie</strong> – so maximieren Sie Ihre Ersparnis.
                            Diese Boni werden oft schon bei Vertragsabschluss ausgezahlt.
                        </p>
                    </div>
                </section>

                {/* CHAPTER 4 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Schritt 3: Die Kündigung der alten Versicherung
                    </h2>
                    <p>
                        Ein großer Vorteil beim Wechsel über CHECK24: Der neue Anbieter kümmert sich um die Kündigung Ihres
                        alten Vertrags. Sie müssen selbst <strong className="text-gold-primary">kein Kündigungsschreiben verfassen</strong>.
                        Dennoch sollten Sie die Kündigungsfristen kennen.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">
                        Wichtige Kündigungsfristen
                    </h3>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li><strong>Ordentliche Kündigung:</strong> Bis zum 30. November zum 1. Januar des Folgejahres möglich</li>
                        <li><strong>Sonderkündigungsrecht nach Beitragserhöhung:</strong> Innerhalb von 4 Wochen nach Erhalt der Erhöhungsmitteilung</li>
                        <li><strong>Sonderkündigungsrecht nach Schaden:</strong> Innerhalb von 4 Wochen nach Schadenregulierung</li>
                        <li><strong>Bei Fahrzeugwechsel:</strong> Kündigung zum Zeitpunkt der Fahrzeugabmeldung möglich</li>
                    </ul>

                    <div className="mt-6 rounded-xl border border-holz-medium/40 bg-holz-very-dark/50 p-5">
                        <p className="text-sm text-zinc-400">
                            <strong className="text-gold-primary">⚡ Wichtig:</strong> Wenn Sie Ihr Auto im Laufe des Jahres verkaufen
                            oder abmelden, haben Sie ein außerordentliches Kündigungsrecht. Die Versicherung muss den Betrag
                            anteilig zurückerstatten – <strong className="text-gold-primary">ohne Vorfälligkeitsentschädigung</strong>.
                        </p>
                    </div>
                </section>

                {/* CHAPTER 5 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Schritt 4: Die Schadenfreiheitsklasse (SF-Klasse)
                    </h2>
                    <p>
                        Die Schadenfreiheitsklasse ist der größte Hebel für günstige Kfz-Versicherungsbeiträge.
                        Je länger Sie unfallfrei fahren, desto höher steigen Sie in der SF-Klasse – und desto niedriger wird Ihr Beitrag.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">
                        SF-Klassen und ihre Rabatte (Beispiele für {today})
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gold-accent/30">
                                    <th className="py-2 pr-4 text-left font-semibold text-gold-primary">SF-Klasse</th>
                                    <th className="py-2 pr-4 text-left font-semibold text-gold-primary">Unfallfreie Jahre</th>
                                    <th className="py-2 text-left font-semibold text-gold-primary">Rabatt (ca.)</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">SF 0</td>
                                    <td className="py-2 pr-4">0 (Fahranfänger)</td>
                                    <td className="py-2">0% (Grundbeitrag)</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">SF 1/2</td>
                                    <td className="py-2 pr-4">1 Jahr</td>
                                    <td className="py-2">ca. 30%</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">SF 10</td>
                                    <td className="py-2 pr-4">10 Jahre</td>
                                    <td className="py-2">ca. 50%</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">SF 25</td>
                                    <td className="py-2 pr-4">25+ Jahre</td>
                                    <td className="py-2">ca. 70%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-4">
                        <strong className="text-gold-primary">Achtung:</strong> Bei einem Versicherungswechsel wird Ihre
                        SF-Klasse vom neuen Anbieter übernommen. Sie verlieren also keine Rabatte durch den Wechsel –
                        ein häufiges Missverständnis!
                    </p>
                </section>

                {/* CHAPTER 6 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Schritt 5: Den neuen Vertrag abschließen
                    </h2>
                    <p>
                        Haben Sie den passenden Tarif gefunden, können Sie den Vertrag direkt online abschließen.
                        Der Ablauf ist denkbar einfach:
                    </p>
                    <ol className="ml-6 mt-3 list-decimal space-y-2 text-zinc-300">
                        <li>Gewünschten Tarif auswählen und auf "Antrag stellen" klicken</li>
                        <li>Persönliche Daten eingeben (Name, Adresse, Geburtsdatum)</li>
                        <li>Fahrzeugdaten aus dem Fahrzeugschein übertragen</li>
                        <li>Gewünschte Deckung und Selbstbeteiligung festlegen</li>
                        <li>Vertragsbedingungen prüfen und Antrag absenden</li>
                        <li>Bestätigung abwarten – der Wechsel erfolgt zum gewünschten Termin</li>
                    </ol>
                    <p className="mt-4">
                        Der neue Anbieter kümmert sich um die Kündigung des alten Vertrags und die Anmeldung bei der
                        neuen Versicherung. Sie müssen <strong className="text-gold-primary">nichts weiter tun</strong>.
                        Die alte Versicherung wird automatisch zum Wechseltermin gekündigt.
                    </p>
                </section>

                {/* CHAPTER 7 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Häufige Fehler beim Kfz-Versicherungswechsel
                    </h2>
                    <p>
                        Damit der Wechsel reibungslos gelingt, sollten Sie diese typischen Fehler vermeiden:
                    </p>
                    <ul className="ml-6 mt-3 list-disc space-y-2 text-zinc-300">
                        <li><strong>Zu kurzfristig handeln:</strong> Die Kündigungsfrist endet meist am 30. November – beginnen Sie rechtzeitig mit dem Vergleich.</li>
                        <li><strong>Nur auf den Preis schauen:</strong> Ein billiger Tarif bringt nichts, wenn der Service bei Schäden schlecht ist.</li>
                        <li><strong>SF-Klasse falsch angeben:</strong> Eine falsche Angabe kann zu Nachzahlungen oder Vertragsstrafen führen.</li>
                        <li><strong>Doppelversicherung übersehen:</strong> Achten Sie darauf, dass der alte Vertrag rechtzeitig endet.</li>
                        <li><strong>Nebenkosten ignorieren:</strong> Manche Tarife haben Ratenzahlungsaufschläge oder Beitragsgarantie-Zuschläge.</li>
                    </ul>
                </section>

                {/* CHAPTER 8 - FAQ */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Häufig gestellte Fragen (FAQ)
                    </h2>

                    <div className="space-y-6">
                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Kann ich meine Kfz-Versicherung jederzeit wechseln?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                In der Regel nur zum Ende der Vertragslaufzeit, also meist zum 31. Dezember bei Kündigung bis 30. November.
                                Ein Sonderkündigungsrecht besteht bei Beitragserhöhung, nach einem Schaden oder bei Fahrzeugwechsel.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Verliere ich meine Schadenfreiheitsklasse beim Wechsel?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Nein. Die SF-Klasse wird vom neuen Versicherer übernommen. Sie müssen lediglich eine
                                Bestätigung Ihrer alten Versicherung vorlegen – die sogenannte <strong className="text-gold-primary">Rückstufungskarte</strong>.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Wie viel kann ich wirklich sparen?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Die durchschnittliche Ersparnis liegt bei 200 bis 500 Euro pro Jahr. Bei jungen Fahrern oder
                                teuren Fahrzeugen kann die Ersparnis sogar noch höher ausfallen.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Übernimmt der neue Anbieter die Kündigung?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Ja, bei vielen Vergleichsportalen wie CHECK24 ist das automatisch enthalten.
                                Sie müssen kein separates Kündigungsschreiben verfassen.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Was passiert bei einem Unfall kurz vor dem Wechsel?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Der Schaden wird noch über die alte Versicherung abgewickelt. Für den Wechsel bedeutet das,
                                dass Sie die SF-Klasse verlieren können – prüfen Sie die Bedingungen für den Schadenfreiheitsrabatt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">
                        Fazit: Kfz-Versicherung wechseln lohnt sich
                    </h2>
                    <p>
                        Ein Wechsel der Kfz-Versicherung ist eine der einfachsten Möglichkeiten, im Jahr {today} mehrere
                        Hundert Euro zu sparen. Der Aufwand ist minimal: Ein Vergleich auf CHECK24 dauert nur wenige Minuten,
                        der neue Anbieter kümmert sich um die Kündigung, und die Ersparnis kann sich sehen lassen.
                    </p>
                    <p className="mt-3">
                        <strong className="text-gold-primary">Unser Tipp:</strong> Vergleichen Sie die Tarife bereits im Oktober oder November,
                        um von der regulären Kündigungsfrist zum 30. November zu profitieren. Wer den Wechsel verpasst,
                        kann bei Beitragserhöhungen jederzeit sonderkündigen.
                    </p>
                    <p className="mt-3">
                        Nutzen Sie jetzt den CHECK24-Vergleich und sichern Sie sich die besten Konditionen für Ihre Kfz-Versicherung
                        in {today}. Bis zu <strong className="text-gold-primary">500 Euro Prämie</strong> warten auf Sie!
                    </p>
                </section>
            </article>

            {/* Final CTA */}
            <div className="mt-10 rounded-xl border border-gold-accent/40 bg-gradient-to-r from-surface via-holz-dark/50 to-surface p-6 text-center">
                <h2 className="text-xl font-bold text-gold-primary">
                    Jetzt wechseln & bis zu 500€ sparen
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                    Über 150 Kfz-Versicherungstarife vergleichen und den besten Tarif sichern.
                </p>
                <a
                    href={check24Link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-gold mt-4 inline-block"
                >
                    Jetzt vergleichen →
                </a>
            </div>

            {/* Affiliate Disclosure */}
            <div className="mt-8 border-t border-gold-accent/20 pt-6">
                <p className="text-xs leading-relaxed text-zinc-600">
                    {AFFILIATE_DISCLOSURE_TEXT}
                </p>
            </div>
        </div>
    )
}
