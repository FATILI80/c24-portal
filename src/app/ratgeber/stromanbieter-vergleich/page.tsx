import type { Metadata } from "next"
import Link from "next/link"
import { SEO_CONFIG, generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT, generateAffiliateLink } from "@/lib/affiliate-links"
import type { Breadcrumb } from "@/types/affiliate"

const SLUG = "ratgeber/stromanbieter-vergleich"
const CANONICAL = `https://budgetscout.de/${SLUG}`

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: `Stromanbieter-Vergleich ${SEO_CONFIG.currentYear} – Bis zu 500€ sparen`,
        description: `Stromanbieter vergleichen und wechseln: Die besten Stromtarife ${SEO_CONFIG.currentYear} von E.ON, Vattenfall, ENBW. Schritt-für-Schritt-Anleitung. Jetzt bis zu 500€ sparen!`,
        slug: SLUG,
        keywords: [
            "Stromvergleich",
            "Stromanbieter wechseln",
            `Stromtarife ${SEO_CONFIG.currentYear}`,
            "CHECK24 Strom",
            "Ökostrom",
            "Strompreis vergleichen",
            "Stromanbieter wechseln Anleitung",
            "Neukundenbonus Strom",
        ],
        ogType: "article",
    })
)

const breadcrumbs: Breadcrumb[] = [
    { label: "BudgetScout.de", href: "/" },
    { label: "Ratgeber", href: "/#ratgeber" },
    { label: "Stromanbieter-Vergleich", href: `/${SLUG}` },
]

const articleSchema = generateArticleSchema(
    {
        title: `Stromanbieter-Vergleich ${SEO_CONFIG.currentYear}`,
        description: "Die besten Stromtarife vergleichen und wechseln. Schritt-für-Schritt-Anleitung.",
        canonicalUrl: CANONICAL,
        ogType: "article",
    },
    {
        headline: `Stromanbieter-Vergleich ${SEO_CONFIG.currentYear}: In 5 Minuten wechseln und sparen`,
        datePublished: "2026-06-01",
        dateModified: "2026-06-01",
        author: "Redaktion",
    }
)

export default function StromanbieterVergleichPage() {
    const check24Link = generateAffiliateLink({
        categorySlug: "strom-gas" as any,
        subid: "ratgeber-strom-wechseln",
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
                            <Link href={crumb.href} className="transition-colors hover:text-gold-primary">{crumb.label}</Link>
                        </li>
                    ))}
                </ol>
            </nav>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Stromanbieter-Vergleich {today} – Bis zu 500€ sparen in 5 Minuten
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <time dateTime="2026-06-01">1. Juni {today}</time>
                <span className="text-zinc-600">•</span>
                <span>14 Minuten Lesezeit</span>
                <span className="text-zinc-600">•</span>
                <span className="text-gold-primary">Ratgeber</span>
            </div>

            {/* Lead */}
            <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-300">
                <p className="text-lg font-medium text-gold-primary/90">
                    Ein Wechsel des Stromanbieters ist eine der einfachsten Möglichkeiten, im Jahr {today} bares Geld zu sparen.
                    Die Preisspanne zwischen günstigen und teuren Tarifen beträgt oft mehrere Hundert Euro pro Jahr.
                    Wir zeigen Ihnen, wie Sie den besten Stromtarif finden und in nur 5 Minuten wechseln.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-xl border border-gold-accent/30 bg-gradient-to-r from-holz-dark/60 to-surface p-6">
                <h2 className="text-xl font-bold text-gold-primary">Stromtarife vergleichen & sparen</h2>
                <p className="mt-2 text-sm text-zinc-400">Alle Tarife im Vergleich – bis zu 500€ Neukundenbonus sichern.</p>
                <a href={check24Link} target="_blank" rel="noopener noreferrer nofollow" className="btn-gold mt-4 inline-block">
                    Jetzt vergleichen →
                </a>
            </div>

            {/* Content */}
            <article className="mt-10 space-y-8 text-base leading-relaxed text-zinc-300">
                {/* CH1 */}
                <section>
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Warum sich ein Stromanbieter-Wechsel lohnt</h2>
                    <p>
                        Deutschland hat mit die höchsten Strompreise in Europa. Während die Grundversorger oft teure Tarife
                        mit langen Kündigungsfristen anbieten, locken Wettbewerber mit günstigen Neukunden-Angeboten.
                        Im Jahr {today} zahlen Verbraucher im bundesweiten Durchschnitt etwa <strong className="text-gold-primary">42 Cent pro Kilowattstunde</strong>.
                        Wer den Anbieter wechselt, spart durchschnittlich 200 bis 500 Euro pro Jahr.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">Die 3 größten Vorteile eines Wechsels</h3>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li><strong className="text-gold-primary">Niedrigere Stromkosten:</strong> Günstige Tarife sind oft 20–30% billiger als die Grundversorgung.</li>
                        <li><strong className="text-gold-primary">Neukundenboni:</strong> Viele Anbieter locken mit einmaligen Boni von 150 bis 300 Euro.</li>
                        <li><strong className="text-gold-primary">Ökostrom-Option:</strong> Wechseln Sie zu 100% Ökostrom aus Wasserkraft oder Sonnenenergie.</li>
                    </ul>
                </section>

                {/* CH2 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Schritt 1: Ihren Stromverbrauch ermitteln</h2>
                    <p>
                        Bevor Sie vergleichen, müssen Sie Ihren <strong className="text-gold-primary">jährlichen Stromverbrauch</strong> kennen.
                        Diesen finden Sie auf Ihrer letzten Jahresabrechnung. Die Angabe erfolgt in Kilowattstunden (kWh).
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">Durchschnittlicher Stromverbrauch in Deutschland</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gold-accent/30">
                                    <th className="py-2 pr-4 text-left font-semibold text-gold-primary">Haushaltsgröße</th>
                                    <th className="py-2 pr-4 text-left font-semibold text-gold-primary">Ø Verbrauch (kWh/Jahr)</th>
                                    <th className="py-2 text-left font-semibold text-gold-primary">Mögliche Ersparnis</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">1 Person</td>
                                    <td className="py-2 pr-4">1.500 – 2.000 kWh</td>
                                    <td className="py-2">bis zu 200 €</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">2 Personen</td>
                                    <td className="py-2 pr-4">2.500 – 3.500 kWh</td>
                                    <td className="py-2">bis zu 300 €</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">3 Personen</td>
                                    <td className="py-2 pr-4">3.500 – 4.500 kWh</td>
                                    <td className="py-2">bis zu 400 €</td>
                                </tr>
                                <tr className="border-b border-holz-medium/20">
                                    <td className="py-2 pr-4">4+ Personen</td>
                                    <td className="py-2 pr-4">4.500 – 6.000 kWh</td>
                                    <td className="py-2">bis zu 500 €</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CH3 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Schritt 2: Den Stromvergleich durchführen</h2>
                    <p>
                        Mit Ihrem Verbrauch und Ihrer Postleitzahl können Sie jetzt auf <strong className="text-gold-primary">CHECK24</strong> die aktuellen
                        Stromtarife vergleichen. Der Vergleich umfasst über 150 Anbieter und mehr als 10.000 Tarife.
                    </p>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">Worauf sollten Sie beim Stromvergleich achten?</h3>
                    <ol className="ml-6 list-decimal space-y-2 text-zinc-300">
                        <li><strong>Arbeitspreis (Cent/kWh):</strong> Der wichtigste Faktor – je niedriger, desto besser.</li>
                        <li><strong>Grundpreis (€/Monat):</strong> Die monatliche Grundgebühr – hier gibt es große Unterschiede.</li>
                        <li><strong>Neukundenbonus:</strong> Einmaliger Bonus bei Vertragsabschluss – oft 150–300 Euro.</li>
                        <li><strong>Preisgarantie:</strong> Schützt vor Preiserhöhungen während der Vertragslaufzeit – mindestens 12 Monate empfohlen.</li>
                        <li><strong>Vertragslaufzeit:</strong> Flexible Verträge mit 12 Monaten Laufzeit und monatlicher Kündigung sind ideal.</li>
                        <li><strong>Ökostrom-Zertifikat:</strong> Achten Sie auf Siegel wie "Grüner Strom" oder "ok-power".</li>
                    </ol>

                    <div className="mt-6 rounded-xl border border-holz-medium/40 bg-holz-very-dark/50 p-5">
                        <p className="text-sm text-zinc-400">
                            <strong className="text-gold-primary">💡 Tipp:</strong> Achten Sie nicht nur auf den Neukundenbonus!
                            Ein Tarif mit niedrigem Arbeitspreis und ohne Bonus ist oft günstiger als ein Tarif mit hohem Bonus,
                            aber teurem Arbeitspreis. Rechnen Sie die <strong className="text-gold-primary">Gesamtkosten für 12 Monate</strong>.
                        </p>
                    </div>

                    <h3 className="mt-6 mb-3 text-xl font-semibold text-gold-primary/90">Die besten Stromtarife {today}</h3>
                    <div className="mt-4 space-y-4">
                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-4">
                            <h4 className="font-semibold text-gold-primary">1. E.ON Stromgarantie</h4>
                            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                                <li>✓ <strong>1 Jahr Preisgarantie</strong> – keine versteckten Preiserhöhungen</li>
                                <li>✓ <strong>200 € Neukundenbonus</strong> für die erste Vertragslaufzeit</li>
                                <li>✓ Regionaler Kundenservice mit deutscher Hotline</li>
                                <li>✓ Flexible Laufzeit: 12 Monate, dann monatlich kündbar</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-4">
                            <h4 className="font-semibold text-gold-primary">2. Vattenfall EasyStrom</h4>
                            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                                <li>✓ <strong>100% Ökostrom</strong> aus Wasserkraft</li>
                                <li>✓ <strong>150 € Sofortbonus</strong> nach Anmeldung</li>
                                <li>✓ Bundesweit verfügbar – auch in den Netzen der Stadtwerke</li>
                                <li>✓ Reine Online-Verwaltung – spart Kosten und gibt's günstiger</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-4">
                            <h4 className="font-semibold text-gold-primary">3. ENBW StromKomfort</h4>
                            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                                <li>✓ <strong>100% CO₂-neutraler Strom</strong> aus erneuerbaren Energien</li>
                                <li>✓ <strong>Bis zu 250 € Bonus</strong> für Neukunden</li>
                                <li>✓ <strong>Preisgarantie bis zu 24 Monate</strong></li>
                                <li>✓ Inklusive Energiespar-Tool zur Verbrauchsoptimierung</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CH4 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Schritt 3: Den Wechsel beauftragen</h2>
                    <p>
                        Haben Sie den passenden Tarif gefunden? Dann können Sie den Wechsel direkt online beauftragen.
                        Der Ablauf ist denkbar einfach:
                    </p>
                    <ol className="ml-6 mt-3 list-decimal space-y-2 text-zinc-300">
                        <li>Gewünschten Tarif auswählen und auf "Antrag stellen" klicken</li>
                        <li>Persönliche Daten eingeben (Name, Adresse, Zählernummer)</li>
                        <li>Bankverbindung für die Lastschrift angeben</li>
                        <li>Wechseltermin bestätigen – meist innerhalb von 2–4 Wochen</li>
                        <li>Bestätigung abwarten – der neue Anbieter kümmert sich um die Kündigung des alten Vertrags</li>
                    </ol>
                    <p className="mt-4">
                        Sie müssen <strong className="text-gold-primary">nichts weiter tun</strong>. Der neue Anbieter
                        kündigt Ihren alten Vertrag und meldet den Wechsel beim Netzbetreiber an.
                        Während des gesamten Wechselprozesses haben Sie <strong className="text-gold-primary">keine Stromunterbrechung</strong>.
                    </p>
                </section>

                {/* CH5 */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Strom und Gas kombinieren – extra sparen</h2>
                    <p>
                        Viele Energieversorger bieten <strong className="text-gold-primary">Kombi-Tarife</strong> für Strom und Gas an.
                        Wenn Sie beide Verträge beim selben Anbieter abschließen, sparen Sie zusätzlich.
                        Die Ersparnis bei kombinierten Tarifen liegt oft bei <strong className="text-gold-primary">50 bis 100 Euro pro Jahr</strong>.
                    </p>
                    <p className="mt-3">
                        Prüfen Sie beim CHECK24 Stromvergleich daher auch immer die Gas-Tarife.
                        Oft erhalten Sie als Stromkunde bei Gas einen zusätzlichen Rabatt.
                    </p>
                </section>

                {/* CH6 - Ökostrom */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Ökostrom – günstig und nachhaltig</h2>
                    <p>
                        Im Jahr {today} muss man für Ökostrom nicht mehr tiefer in die Tasche greifen als für konventionellen Strom.
                        Viele Ökostrom-Tarife sind genauso günstig – manchmal sogar günstiger. Achten Sie auf:
                    </p>
                    <ul className="ml-6 mt-3 list-disc space-y-2 text-zinc-300">
                        <li><strong>Grüner Strom Label</strong> – garantiert Investitionen in erneuerbare Energien</li>
                        <li><strong>ok-power Siegel</strong> – unabhängig zertifizierter Ökostrom</li>
                        <li><strong>TÜV-zertifiziert</strong> – regelmäßige Kontrolle der Stromherkunft</li>
                        <li><strong>100% Wasserkraft</strong> – besonders umweltfreundlich und oft günstiger als Solarstrom</li>
                    </ul>
                </section>

                {/* CH7 - FAQ */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Häufig gestellte Fragen (FAQ)</h2>

                    <div className="space-y-6">
                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Kann ich jederzeit meinen Stromanbieter wechseln?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Ja, in der Regel mit einer Kündigungsfrist von 2–4 Wochen. Die meisten Tarife haben eine
                                Mindestlaufzeit von 12 Monaten, danach sind sie monatlich kündbar. Viele Neukunden-Tarife
                                sind sofort wechselfähig.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Droht mir während des Wechsels ein Stromausfall?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Nein. Der Wechsel des Stromanbieters hat <strong className="text-gold-primary">keine Auswirkungen auf Ihre Stromversorgung</strong>.
                                Der Strom fließt weiterhin über dasselbe Netz – nur der Vertragspartner ändert sich.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Was passiert mit meinem Neukundenbonus nach dem ersten Jahr?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Nach Ablauf der Mindestvertragslaufzeit wechseln Sie entweder in den Grundtarif oder
                                können erneut wechseln. Viele Verbraucher wechseln jährlich, um immer wieder
                                von Neukundenboni zu profitieren.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Muss ich meinen alten Vertrag selbst kündigen?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Nein, der neue Anbieter übernimmt die Kündigung des alten Vertrags für Sie.
                                Sie müssen lediglich den Antrag beim neuen Anbieter stellen.
                            </p>
                        </div>

                        <div className="rounded-xl border border-holz-medium/30 bg-holz-very-dark/40 p-5">
                            <h3 className="font-semibold text-gold-primary">Was ist eine Preisgarantie und brauche ich sie?</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Eine Preisgarantie bedeutet, dass der Strompreis für einen bestimmten Zeitraum (z.B. 12 Monate)
                                garantiert bleibt – auch wenn die Energiepreise steigen. Sie schützt vor bösen Überraschungen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="pt-4">
                    <div className="holz-balken mb-6" />
                    <h2 className="mb-4 text-2xl font-bold text-gold-primary">Fazit: Stromanbieter wechseln lohnt sich immer</h2>
                    <p>
                        Ein Stromanbieterwechsel ist die einfachste Möglichkeit, im Jahr {today} mehrere Hundert Euro zu sparen.
                        Der Aufwand ist minimal – die Ersparnis maximal. Vergleichen Sie jetzt die aktuellen Stromtarife auf
                        CHECK24 und sichern Sie sich Ihren Neukundenbonus von bis zu 500 Euro.
                    </p>
                    <p className="mt-3">
                        Denken Sie daran: Wer einmal wechselt, spart nicht nur Geld, sondern tut auch etwas für die Umwelt,
                        wenn er zu einem Ökostrom-Tarif wechselt. Ein guter Stromvergleich berücksichtigt beides:
                        <strong className="text-gold-primary"> Preis und Nachhaltigkeit</strong>.
                    </p>
                </section>
            </article>

            {/* Final CTA */}
            <div className="mt-10 rounded-xl border border-gold-accent/40 bg-gradient-to-r from-surface via-holz-dark/50 to-surface p-6 text-center">
                <h2 className="text-xl font-bold text-gold-primary">Jetzt wechseln & bis zu 500€ sparen</h2>
                <p className="mt-2 text-sm text-zinc-400">Alle Stromtarife im Vergleich – in 5 Minuten wechseln.</p>
                <a href={check24Link} target="_blank" rel="noopener noreferrer nofollow" className="btn-gold mt-4 inline-block">
                    Jetzt vergleichen →
                </a>
            </div>

            <div className="mt-8 border-t border-gold-accent/20 pt-6">
                <p className="text-xs leading-relaxed text-zinc-600">{AFFILIATE_DISCLOSURE_TEXT}</p>
            </div>
        </div>
    )
}
