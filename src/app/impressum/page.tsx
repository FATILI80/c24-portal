import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"

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
        <div className="flex flex-col">
            <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-text-primary">
                        Impressum
                    </h1>
                    <p className="mt-2 text-sm text-zinc-500">
                        Angaben gemäß §5 TMG (Telemediengesetz)
                    </p>

                    <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-400">
                        {/* Betreiber */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Betreiber der Website
                            </h2>
                            <div className="mt-2 space-y-1">
                                <p>BudgetScout.de</p>
                                <p>CHECK24 Partner-Vergleichsportal</p>
                                <p className="mt-4 text-xs text-zinc-600">
                                    (Adresse bitte hier ergänzen)
                                </p>
                            </div>
                        </div>

                        {/* Kontakt */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Kontakt
                            </h2>
                            <div className="mt-2 space-y-1">
                                <p>E-Mail: <span className="text-zinc-500">[bitte ergänzen]</span></p>
                                <p>Telefon: <span className="text-zinc-500">[bitte ergänzen]</span></p>
                            </div>
                        </div>

                        {/* Inhalt Verantwortlich */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
                            </h2>
                            <p className="mt-2">
                                Wie vorstehend (Betreiber).
                            </p>
                        </div>

                        {/* Haftungsausschluss */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Haftungsausschluss
                            </h2>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <h3 className="font-medium text-text-primary">Haftung für Inhalte</h3>
                                    <p className="mt-1">
                                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                                        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                                        Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                                        nach den allgemeinen Gesetzen verantwortlich.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-text-primary">Haftung für Links</h3>
                                    <p className="mt-1">
                                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                                        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                                        der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                                        mögliche Rechtsverstöße überprüft.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Partnerkennzeichnung */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Partnerkennzeichnung (Affiliate)
                            </h2>
                            <p className="mt-2">
                                {AFFILIATE_DISCLOSURE_TEXT}
                            </p>
                        </div>

                        {/* Urheberrecht */}
                        <div className="card-base card-holz-border p-6">
                            <h2 className="text-lg font-semibold text-text-primary">
                                Urheberrecht
                            </h2>
                            <p className="mt-2">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                                Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
