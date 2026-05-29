import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Impressum",
        description: "Impressum und Kontaktdaten – Angaben gemäß §5 TMG.",
        slug: "impressum",
        noindex: true,
    })
)

export default function ImpressumPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Impressum
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
                Angaben gemäß §5 TMG (Telemediengesetz)
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Betreiber der Website
                    </h2>
                    <div className="mt-2 space-y-1">
                        <p>BudgetScout.de</p>
                        <p>CHECK24 Partner-Vergleichsportal</p>
                        <p className="mt-4 text-zinc-500">
                            (Adresse bitte hier ergänzen)
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Kontakt
                    </h2>
                    <div className="mt-2 space-y-1">
                        <p>E-Mail: [bitte ergänzen]</p>
                        <p>Telefon: [bitte ergänzen]</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
                    </h2>
                    <p className="mt-2">
                        Wie vorstehend (Betreiber).
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Haftungsausschluss
                    </h2>
                    <div className="mt-2 space-y-3">
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Haftung für Inhalte</h3>
                        <p>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                            Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                            nach den allgemeinen Gesetzen verantwortlich.
                        </p>

                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Haftung für Links</h3>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                            mögliche Rechtsverstöße überprüft.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Partnerkennzeichnung (Affiliate)
                    </h2>
                    <p className="mt-2">
                        Diese Website ist ein CHECK24-Partnerportal. Alle mit * oder "Anzeige" gekennzeichneten
                        Links sind Affiliate-Links. Wenn Sie über diese Links einen Vertrag abschließen oder
                        einen Kauf tätigen, erhalten wir eine Provision. Für Sie entstehen dadurch keine
                        Mehrkosten.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Urheberrecht
                    </h2>
                    <p className="mt-2">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                        dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                        der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </section>
            </div>
        </div>
    )
}
