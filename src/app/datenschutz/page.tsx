import type { Metadata } from "next"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Datenschutzerklärung",
        description: "Datenschutzerklärung – Informationen zur Verarbeitung Ihrer Daten gemäß DSGVO.",
        slug: "datenschutz",
        noindex: true,
    })
)

export default function DatenschutzPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Datenschutzerklärung
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
                Stand: Mai 2026
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        1. Datenschutz auf einen Blick
                    </h2>
                    <div className="mt-2 space-y-3">
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>

                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Datenerfassung auf dieser Website</h3>
                        <p>
                            <strong>Wer ist verantwortlich für die Datenerfassung?</strong> Die Datenverarbeitung
                            auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
                            Sie dem Impressum entnehmen.
                        </p>
                        <p>
                            <strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten werden zum einen dadurch
                            erhoben, dass Sie uns diese mitteilen (z.B. per Kontaktformular). Andere Daten werden
                            automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B.
                            Browsertyp, Betriebssystem, Uhrzeit).
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        2. Hosting & Server-Logfiles
                    </h2>
                    <p className="mt-2">
                        Diese Website wird bei Vercel Inc. gehostet. Beim Besuch dieser Website werden
                        automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser automatisch
                        übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem,
                        Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                        Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        3. Cookies
                    </h2>
                    <p className="mt-2">
                        Diese Website verwendet nur technisch notwendige Cookies. Das sind kleine Textdateien,
                        die für den Betrieb der Website erforderlich sind (z.B. Session-Cookies). Für die
                        Verarbeitung dieser Cookies ist keine Einwilligung erforderlich. Darüber hinaus
                        werden keine Tracking-Cookies, Analyse-Cookies oder Werbe-Cookies gesetzt.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        4. Affiliate-Links (CHECK24)
                    </h2>
                    <p className="mt-2">
                        Diese Website enthält Affiliate-Links zu CHECK24. Wenn Sie auf einen Affiliate-Link
                        klicken und einen Vertrag abschließen, erhalten wir eine Provision.
                        Beim Klick auf einen Affiliate-Link werden Sie auf die Website von CHECK24
                        weitergeleitet. Für die dortige Datenverarbeitung ist CHECK24 verantwortlich.
                        Bitte informieren Sie sich in der Datenschutzerklärung von CHECK24 über die
                        dortige Datenverarbeitung.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        5. Ihre Rechte
                    </h2>
                    <p className="mt-2">
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder
                        Löschung Ihrer Daten. Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie
                        sich jederzeit an uns wenden.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        6. Drittlandtransfer
                    </h2>
                    <p className="mt-2">
                        Vercel Inc. mit Sitz in den USA hostet diese Website. Ein angemessenes
                        Datenschutzniveau wird durch das EU-US Data Privacy Framework (DPF) gewährleistet.
                        Vercel ist nach dem DPF zertifiziert.
                    </p>
                </section>
            </div>
        </div>
    )
}
