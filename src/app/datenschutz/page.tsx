import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"
import LegalSection from "@/components/legal/LegalSection"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Datenschutzerklärung",
        description: "Datenschutzerklärung nach Art. 13 DSGVO: Hosting, Cookies, Google Analytics, Microsoft Clarity, Affiliate-Links und Deine Rechte als betroffene Person.",
        slug: "datenschutz",
        keywords: ["Datenschutzerklärung", "DSGVO", "Art. 13 DSGVO", "Cookies", "Google Analytics", "Betroffenenrechte"],
        noindex: true,
    })
)

/** Build-time date for the "Stand:" line – stays current with every build. */
const STAND = new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric",
}).format(new Date())

/** Real operator data – kept in sync with the Impressum (§ 5 DDG). */
const OPERATOR = {
    owner: "Fatih Özhan",
    brand: "BudgetScout.de",
    street: "Obere Firstalm 1",
    postalCode: "83727",
    city: "Schliersee",
    country: "Deutschland",
    email: "Oezhanfatih@gmail.com",
} as const

/** Table of contents – keeps headings and anchors in sync in one place. */
const SECTIONS = [
    { id: "verantwortlicher", label: "1. Verantwortlicher für die Datenverarbeitung" },
    { id: "grundlagen", label: "2. Begriffe, Rechtsgrundlagen & Pflichtangaben" },
    { id: "hosting", label: "3. Hosting & Server-Logfiles" },
    { id: "cookies", label: "4. Cookies & lokale Speicherung im Browser" },
    { id: "google-analytics", label: "5. Google Analytics 4" },
    { id: "clarity", label: "6. Microsoft Clarity" },
    { id: "affiliate", label: "7. Affiliate-Links & Partnerprogramme" },
    { id: "kontaktformular", label: "8. Kontaktformular, E-Mail & Kontaktanfragen" },
    { id: "newsletter", label: "9. Newsletter" },
    { id: "fonts", label: "10. Schriftarten, Bilder & externe Inhalte" },
    { id: "empfaenger", label: "11. Empfänger & Übermittlung in Drittländer" },
    { id: "speicherdauer", label: "12. Speicherdauer & Löschung" },
    { id: "rechte", label: "13. Deine Rechte als betroffene Person" },
    { id: "widerruf", label: "14. Widerruf & Widerspruch" },
    { id: "sicherheit", label: "15. Datensicherheit" },
    { id: "aenderungen", label: "16. Aktualität & Änderungen" },
] as const

export default function DatenschutzPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            🔒 Datenschutz
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Datenschutzerklärung
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Diese Erklärung informiert Dich nach Art. 13 und 14 DSGVO
                            darüber, welche personenbezogenen Daten wir beim Besuch von{" "}
                            {OPERATOR.brand} verarbeiten, zu welchem Zweck das geschieht,
                            wie lange wir sie speichern und welche Rechte Dir zustehen.
                        </p>
                        <p className="mt-4 text-sm text-zinc-500">Stand: {STAND}</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {/* Kurzfassung */}
                        <LegalSection title="Das Wichtigste in Kürze">
                            <ul className="list-disc space-y-2 pl-5">
                                <li>
                                    Wir verarbeiten personenbezogene Daten nur, soweit das
                                    für den Betrieb dieses Vergleichsportals erforderlich ist
                                    oder Du eingewilligt hast.
                                </li>
                                <li>
                                    Ein Nutzerkonto, ein Login oder die Angabe von Zahlungs-
                                    bzw. Bankdaten sind für die Nutzung unseres Angebots
                                    nicht erforderlich.
                                </li>
                                <li>
                                    Ergebnisse unserer Rechner und Vergleiche werden in
                                    Deinem Browser berechnet, nicht auf unseren Servern
                                    gespeichert.
                                </li>
                                <li>
                                    Reichweitenmessung und Nutzungsanalyse erfolgen über
                                    Google Analytics 4 und Microsoft Clarity.
                                </li>
                                <li>
                                    Komfortfunktionen (z. B. „Zuletzt angesehen“) speichern
                                    Daten ausschließlich lokal in Deinem Browser.
                                </li>
                                <li>
                                    Deine Betroffenenrechte kannst Du jederzeit unter{" "}
                                    <a
                                        href={`mailto:${OPERATOR.email}`}
                                        className="font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                    >
                                        {OPERATOR.email}
                                    </a>{" "}
                                    geltend machen.
                                </li>
                            </ul>
                        </LegalSection>

                        {/* Inhaltsverzeichnis */}
                        <LegalSection title="Inhaltsverzeichnis">
                            <ol className="grid gap-1.5 sm:grid-cols-2">
                                {SECTIONS.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className="text-sm text-zinc-400 transition-colors hover:text-gold-primary"
                                        >
                                            {section.label}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </LegalSection>

                        {/* 1 — Verantwortlicher */}
                        <LegalSection
                            id="verantwortlicher"
                            title="1. Verantwortlicher für die Datenverarbeitung"
                        >
                            <p>
                                Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO für die
                                Verarbeitung personenbezogener Daten auf dieser Website ist:
                            </p>
                            <address className="not-italic">
                                <p className="text-base font-semibold text-text-primary">
                                    {OPERATOR.owner}
                                </p>
                                <p>{OPERATOR.brand} – Vergleichsportal für Verbrauchertarife</p>
                                <p className="pt-3">
                                    {OPERATOR.street}
                                    <br />
                                    {OPERATOR.postalCode} {OPERATOR.city}
                                    <br />
                                    {OPERATOR.country}
                                </p>
                            </address>
                            <p>
                                E-Mail:{" "}
                                <a
                                    href={`mailto:${OPERATOR.email}`}
                                    className="font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                >
                                    {OPERATOR.email}
                                </a>
                            </p>
                            <p>
                                Die vollständigen Anbieterangaben findest Du in unserem{" "}
                                <Link
                                    href="/impressum"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Impressum
                                </Link>
                                .
                            </p>

                            <h3 className="pt-1 font-semibold text-text-primary">
                                Datenschutzbeauftragte/r
                            </h3>
                            <p>
                                Wir verarbeiten personenbezogene Daten nicht in einem Umfang,
                                der die Benennung einer Datenschutzbeauftragten oder eines
                                Datenschutzbeauftragten erforderlich macht (Art. 37 DSGVO i.
                                V. m. § 38 BDSG). Fragen zum Datenschutz richtest Du daher
                                bitte direkt an die oben genannte E-Mail-Adresse. Wir
                                antworten in der Regel innerhalb weniger Werktage.
                            </p>
                        </LegalSection>

                        {/* 2 — Rechtsgrundlagen */}
                        <LegalSection
                            id="grundlagen"
                            title="2. Begriffe, Rechtsgrundlagen & Pflichtangaben"
                        >
                            <p>
                                „Personenbezogene Daten“ sind alle Informationen, die sich auf
                                eine identifizierte oder identifizierbare natürliche Person
                                beziehen (Art. 4 Nr. 1 DSGVO) – zum Beispiel IP-Adresse,
                                E-Mail-Adresse oder Name.
                            </p>
                            <p>
                                Wir verarbeiten personenbezogene Daten ausschließlich auf
                                Grundlage der folgenden Rechtsgrundlagen:
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Art. 6 Abs. 1 lit. a DSGVO
                                    </span>{" "}
                                    – Deine Einwilligung (z. B. Newsletter-Anmeldung,
                                    optionale Reichweitenmessung)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Art. 6 Abs. 1 lit. b DSGVO
                                    </span>{" "}
                                    – Erfüllung eines Vertrags oder Durchführung
                                    vorvertraglicher Maßnahmen (z. B. Bearbeitung Deiner
                                    Kontaktanfrage)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Art. 6 Abs. 1 lit. c DSGVO
                                    </span>{" "}
                                    – Erfüllung rechtlicher Verpflichtungen (z. B. handels-
                                    und steuerrechtliche Aufbewahrungsfristen)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Art. 6 Abs. 1 lit. f DSGVO
                                    </span>{" "}
                                    – Wahrung unserer berechtigten Interessen (sicherer,
                                    stabiler und wirtschaftlicher Betrieb der Website sowie
                                    Reichweitenmessung)
                                </li>
                            </ul>
                            <p>
                                Für das Speichern von Informationen auf Deinem Endgerät bzw.
                                den Zugriff darauf (Cookies, localStorage) gilt zusätzlich{" "}
                                <span className="font-semibold text-text-primary">
                                    § 25 TDDDG
                                </span>
                                : Ein solcher Zugriff ist nur mit Deiner Einwilligung
                                zulässig, sofern er nicht unbedingt erforderlich ist, damit
                                wir den von Dir gewünschten Dienst bereitstellen können
                                (§ 25 Abs. 2 Nr. 2 TDDDG).
                            </p>
                            <p>
                                Die Angabe personenbezogener Daten ist weder gesetzlich noch
                                vertraglich vorgeschrieben. Ohne die Angabe der in unseren
                                Formularen als Pflichtfeld markierten Daten können wir Deine
                                Anfrage jedoch nicht bearbeiten (Art. 13 Abs. 2 lit. e
                                DSGVO).
                            </p>
                        </LegalSection>

                        {/* 3 — Hosting */}
                        <LegalSection id="hosting" title="3. Hosting & Server-Logfiles">
                            <p>
                                Diese Website wird bei einem externen Dienstleister gehostet:{" "}
                                <span className="font-semibold text-text-primary">
                                    Vercel Inc.
                                </span>
                                , 440 N Barranca Ave #4133, Covina, CA 91723, USA („Vercel“).
                                Alle Daten, die beim Aufruf dieser Website anfallen, werden
                                über die Serverinfrastruktur von Vercel verarbeitet und
                                ausgeliefert. Mit Vercel besteht ein Vertrag zur
                                Auftragsverarbeitung nach Art. 28 DSGVO.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Server-Logfiles
                            </h3>
                            <p>
                                Beim Aufruf unserer Seiten erhebt das Hosting-System
                                automatisch Informationen, die Dein Browser übermittelt
                                (sogenannte Server-Logfiles):
                            </p>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>gekürzte bzw. anonymisierte IP-Adresse des anfragenden Geräts</li>
                                <li>Datum und Uhrzeit des Zugriffs</li>
                                <li>Name und URL der abgerufenen Datei bzw. Seite</li>
                                <li>übertragene Datenmenge und HTTP-Statuscode</li>
                                <li>Referrer-URL (zuvor besuchte Seite)</li>
                                <li>Browsertyp, Browserversion und Betriebssystem</li>
                                <li>verwendeter Internetanbieter sowie ungefähre Region</li>
                            </ul>
                            <p>
                                Diese Daten werden nicht mit anderen Datenquellen
                                zusammengeführt. Eine Zuordnung zu Deiner Person nehmen wir
                                nicht vor.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Zweck, Rechtsgrundlage & Speicherdauer
                            </h3>
                            <p>
                                Die Verarbeitung dient der technischen Auslieferung der
                                Website, der Sicherstellung eines stabilen und schnellen
                                Betriebs sowie der Erkennung und Aufklärung von Angriffen oder
                                Missbrauch. Rechtsgrundlage ist unser berechtigtes Interesse
                                an einem sicheren und funktionsfähigen Internetangebot nach
                                Art. 6 Abs. 1 lit. f DSGVO.
                            </p>
                            <p>
                                Die Logdaten werden von Vercel nur kurzzeitig vorgehalten und
                                anschließend automatisch gelöscht. Eine längere Speicherung
                                erfolgt ausschließlich dann, wenn konkrete Anhaltspunkte für
                                einen rechtswidrigen Zugriff vorliegen und wir die Daten zur
                                Rechtsverfolgung benötigen.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Hosting-Anbieter, vertraglich gewählte
                                Serverregion (z. B. Frankfurt / EU-Central) und die konkreten
                                Aufbewahrungsfristen der Logdaten bitte vor dem Livegang
                                prüfen und hier ergänzen. Wird ein anderer Hoster genutzt, ist
                                dieser Abschnitt vollständig anzupassen.
                            </p>
                        </LegalSection>

                        {/* 4 — Cookies & lokale Speicherung */}
                        <LegalSection
                            id="cookies"
                            title="4. Cookies & lokale Speicherung im Browser"
                        >
                            <p>
                                Cookies sind kleine Textdateien, die Dein Browser beim
                                Besuch einer Website speichert. Daneben nutzen wir die
                                Speicherfunktionen Deines Browsers (
                                <span className="font-semibold text-text-primary">
                                    localStorage
                                </span>{" "}
                                und{" "}
                                <span className="font-semibold text-text-primary">
                                    sessionStorage
                                </span>
                                ).
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Lokale Komfortfunktionen (unbedingt erforderlich)
                            </h3>
                            <p>
                                Für einige Funktionen speichern wir Informationen
                                ausschließlich auf Deinem Gerät – ohne Übermittlung an unsere
                                Server:
                            </p>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        budgetscout-recently-viewed
                                    </span>{" "}
                                    – Liste der zuletzt von Dir angesehenen Angebote (maximal
                                    5 Einträge), bleibt bis zum Löschen der Websitedaten in
                                    Deinem Browser gespeichert
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        budgetscout-badges
                                    </span>{" "}
                                    – Fortschritt der Spar-Challenges auf der Startseite
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        budgetscout-exit-intent-dismissed
                                    </span>{" "}
                                    – merkt sich für die Dauer der Sitzung, dass Du ein
                                    Hinweisfenster bereits geschlossen hast
                                </li>
                            </ul>
                            <p>
                                Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit
                                Art. 6 Abs. 1 lit. f DSGVO: Die Speicherung ist unbedingt
                                erforderlich, um die von Dir gewünschte Funktion
                                bereitzustellen. Eine Einwilligung ist dafür nicht
                                erforderlich. Du kannst diese Daten jederzeit über die
                                Einstellungen Deines Browsers löschen.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Cookies von Drittanbietern
                            </h3>
                            <p>
                                Darüber hinaus setzen die von uns eingesetzten Dienste Google
                                Analytics 4 (Abschnitt 5) und Microsoft Clarity (Abschnitt 6)
                                Cookies bzw. vergleichbare Technologien ein. Diese
                                verarbeiten Informationen über die Nutzung unseres Angebots,
                                unter anderem die gekürzte IP-Adresse, Kennungen des
                                Endgeräts und Interaktionen auf den Seiten.
                            </p>
                            <p>
                                Zusätzlich können nach einem Klick auf einen Werbe- oder
                                Partnerlink (z. B. zu CHECK24) dort Cookies gesetzt werden,
                                mit denen die Vermittlung Dir zugeordnet wird. Auf die
                                Speicherung durch diese Anbieter haben wir keinen Einfluss;
                                es gelten die Datenschutzhinweise des jeweiligen Anbieters.
                            </p>
                            <p>
                                Rechtsgrundlage für Analyse- und Marketing-Cookies ist Deine
                                Einwilligung nach § 25 Abs. 1 TDDDG sowie Art. 6 Abs. 1
                                lit. a DSGVO. Du kannst Deine Einwilligung jederzeit mit
                                Wirkung für die Zukunft widerrufen (siehe Abschnitt 14).
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Google Analytics 4 und Microsoft Clarity
                                werden im Layout des Portals eingebunden. Vor dem Livegang
                                muss ein Einwilligungsbanner (Consent-Management) vorgeschaltet
                                werden, das diese Skripte erst nach Deiner Einwilligung lädt
                                und „Ablehnen“ ebenso einfach ermöglicht wie „Zustimmen“
                                (Art. 7 DSGVO, § 25 TDDDG). Erteilte Einwilligungen sind
                                nachweisbar zu protokollieren.
                            </p>
                        </LegalSection>

                        {/* 5 — Google Analytics 4 */}
                        <LegalSection id="google-analytics" title="5. Google Analytics 4">
                            <p>
                                Zur Analyse der Nutzung unseres Angebots setzen wir Google
                                Analytics 4 ein, einen Webanalysedienst der Google Ireland
                                Limited, Gordon House, Barrow Street, Dublin 4, Irland
                                („Google“). Müttergesellschaft ist die Google LLC, 1600
                                Amphitheatre Parkway, Mountain View, CA 94043, USA.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Verarbeitete Daten
                            </h3>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>gekürzte IP-Adresse (eine vollständige Speicherung der IP-Adresse findet nicht statt)</li>
                                <li>ungefähre geografische Herkunft (Land, Region, Stadt)</li>
                                <li>Informationen zu Gerät, Betriebssystem, Browser und Sprache</li>
                                <li>aufgerufene Seiten, Verweildauer, Absprungpunkte und Conversion-Ereignisse</li>
                                <li>
                                    pseudonyme Kennungen (Cookies{" "}
                                    <span className="font-semibold text-text-primary">_ga</span>{" "}
                                    und{" "}
                                    <span className="font-semibold text-text-primary">
                                        _ga_[Container-ID]
                                    </span>{" "}
                                    mit einer Laufzeit von bis zu 2 Jahren)
                                </li>
                            </ul>
                            <p>
                                Die aus Deinem Browser übermittelten Daten werden von Google
                                in unserem Auftrag verarbeitet, um die Nutzung unseres
                                Angebots auszuwerten, Berichte zu erstellen und unsere Inhalte
                                zu verbessern. Eine Zusammenführung mit anderen Daten von Google
                                nehmen wir nicht vor.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Speicherdauer, Empfänger & Drittland
                            </h3>
                            <p>
                                Die Ereignisdaten werden in Google Analytics 4 nach der von
                                uns eingestellten Aufbewahrungsfrist gespeichert (Standard: 2
                                Monate, maximal 14 Monate) und danach automatisch gelöscht.
                                Empfänger der Daten ist Google Ireland Limited als
                                Auftragsverarbeiterin nach Art. 28 DSGVO. Eine Übermittlung in
                                die USA kann erfolgen; Google LLC ist nach dem EU-US Data
                                Privacy Framework zertifiziert, ergänzend stützt sich die
                                Übermittlung auf die Standardvertragsklauseln der
                                EU-Kommission (Art. 46 DSGVO).
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Rechtsgrundlage & Widerspruch
                            </h3>
                            <p>
                                Die Verarbeitung erfolgt ausschließlich auf Grundlage Deiner
                                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                                TDDDG. Ohne Deine Einwilligung werden keine Analyse-Cookies
                                gesetzt.
                            </p>
                            <p>
                                Du kannst Deine Einwilligung jederzeit widerrufen (siehe
                                Abschnitt 14). Zusätzlich kannst Du die Erfassung durch Google
                                Analytics unabhängig davon verhindern, indem Du das
                                Browser-Add-on zur Deaktivierung von Google Analytics
                                installierst (verfügbar unter{" "}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    tools.google.com/dlpage/gaoptout
                                </a>
                                ) oder die Übermittlung generell über die Einstellungen Deines
                                Browsers unterbindest.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Mess-ID und Aufbewahrungsfrist in der
                                Google-Analytics-Oberfläche prüfen und hier eintragen.
                                Ebenfalls zu prüfen: die Einstellungen zur Datenweitergabe
                                (Google-Signale, Personalisierung von Anzeigen,
                                Datenaufbewahrung) sowie das Vorhandensein eines
                                Auftragsverarbeitungsvertrags im Google-Konto.
                            </p>
                        </LegalSection>

                        {/* 6 — Microsoft Clarity */}
                        <LegalSection id="clarity" title="6. Microsoft Clarity">
                            <p>
                                Zusätzlich nutzen wir das Analysetool Microsoft Clarity der
                                Microsoft Ireland Operations Limited, One Microsoft Place,
                                South County Business Park, Leopardstown, Dublin 18, Irland
                                („Microsoft“). Müttergesellschaft ist die Microsoft
                                Corporation, One Microsoft Way, Redmond, WA 98052, USA.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Zweck & verarbeitete Daten
                            </h3>
                            <p>
                                Clarity hilft uns zu verstehen, wie Besucherinnen und Besucher
                                mit unserer Website interagieren. Dazu werden unter anderem
                                Seitenaufrufe, Klicks, Mausbewegungen, Scrollverhalten,
                                Verweildauer, technische Gerätedaten sowie die gekürzte
                                IP-Adresse erfasst. Die Ergebnisse werden uns aggregiert als
                                Heatmaps und als sitzungsbezogene Aufzeichnungen bereitgestellt,
                                mit denen wir Bedienprobleme erkennen und unser Angebot
                                verbessern. Clarity zeichnet keine Tastatureingaben auf; die
                                Wiedergabe von Sitzungen erfolgt pseudonymisiert ohne
                                Klarnamen.
                            </p>
                            <p>
                                Clarity setzt hierfür Cookies ein, insbesondere{" "}
                                <span className="font-semibold text-text-primary">_clck</span>{" "}
                                (Laufzeit bis zu einem Jahr) und{" "}
                                <span className="font-semibold text-text-primary">_clsk</span>{" "}
                                (Laufzeit bis zu einem Tag).
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Rechtsgrundlage, Speicherdauer & Drittland
                            </h3>
                            <p>
                                Rechtsgrundlage ist Deine Einwilligung nach Art. 6 Abs. 1
                                lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Speicherdauer richtet
                                sich nach den Vorgaben von Microsoft; Details findest Du in der
                                Datenschutzerklärung von Microsoft. Eine Übermittlung von Daten
                                in die USA ist möglich; Microsoft stützt diese Übermittlung auf
                                das EU-US Data Privacy Framework bzw. auf
                                Standardvertragsklauseln nach Art. 46 DSGVO.
                            </p>
                            <p>
                                Du kannst Deine Einwilligung jederzeit für die Zukunft
                                widerrufen (siehe Abschnitt 14). Bereits gespeicherte
                                Analyse-Cookies kannst Du zusätzlich über die Einstellungen
                                Deines Browsers löschen.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: In den Clarity-Projekteinstellungen prüfen
                                bzw. aktivieren, dass Formularfelder (E-Mail, Name, Nachricht
                                und Kontaktdaten) maskiert werden („Mask mode“), damit keine
                                Eingaben in Sitzungsaufzeichnungen sichtbar werden. Zusätzlich
                                den Auftragsverarbeitungsvertrag mit Microsoft ablegen.
                            </p>
                        </LegalSection>

                        {/* 7 — Affiliate-Links */}
                        <LegalSection
                            id="affiliate"
                            title="7. Affiliate-Links & Partnerprogramme"
                        >
                            <p>
                                BudgetScout.de finanziert sich unter anderem über
                                Affiliate-Vergütungen. Wir nehmen dazu an Partnerprogrammen
                                teil, insbesondere von{" "}
                                <span className="font-semibold text-text-primary">
                                    CHECK24
                                </span>{" "}
                                (CHECK24 Vergleichsportal GmbH, Erika-Mann-Straße 62–66,
                                80636 München),{" "}
                                <span className="font-semibold text-text-primary">
                                    Digistore24
                                </span>{" "}
                                (Digistore24 GmbH, St.-Godehard-Straße 32, 31139 Hildesheim)
                                und{" "}
                                <span className="font-semibold text-text-primary">
                                    Amazon
                                </span>{" "}
                                (Amazon EU S.à r.l., 38 avenue John F. Kennedy, L-1855
                                Luxemburg).
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Was passiert beim Klick auf einen Partnerlink?
                            </h3>
                            <p>
                                Die Vergütung erfolgt nur, wenn Du über unseren Link ein
                                Angebot abschließt bzw. nutzt. Technisch rufen wir die
                                Partnerseite nicht selbst auf: Dein Browser baut beim Klick
                                eine direkte Verbindung zum Anbieter auf. Dabei werden die
                                üblichen Verbindungsdaten (insbesondere Deine IP-Adresse,
                                Datum und Uhrzeit, Referrer-URL sowie Browser- und
                                Geräteinformationen) an den Anbieter übermittelt. Zusätzlich
                                hängen wir Kennungen an die Ziel-URL an – unsere Partner-ID und
                                eine pseudonyme Sub-ID (z. B. <em>subid=c24-portal</em>), damit
                                die Vermittlung Dir nicht persönlich, aber der Herkunft der
                                Klicks zugeordnet werden kann.
                            </p>
                            <p>
                                Die Anbieter können zu diesem Zweck eigene Cookies oder
                                vergleichbare Technologien einsetzen. Nach einem Klick gilt für
                                diese Verarbeitung die Datenschutzerklärung des jeweiligen
                                Anbieters. Auf die Speicherung und Verarbeitung dort haben wir
                                keinen Einfluss und erhalten von den Netzwerken keine
                                personenbezogenen Daten von Dir – wir sehen nur aggregierte
                                Statistiken zu Klicks, Leads und Verkäufen sowie ggf. die Höhe
                                der Provision.
                            </p>
                            <p>
                                Bei Digistore24 werden digitale Produkte unmittelbar über die
                                Digistore24 GmbH als Verkäuferin abgewickelt. Alle Angaben, die
                                Du dort im Bestellprozess (z. B. Name, E-Mail-Adresse,
                                Zahlungsdaten) machst, verarbeitet Digistore24 in eigener
                                Verantwortung; wir erhalten davon keine Kenntnis. Dasselbe gilt
                                für eine Buchung oder Bestellung bei CHECK24, Amazon oder
                                anderen Partnern.
                            </p>
                            <p>
                                Rechtsgrundlage für den Einsatz der Partnerlinks und die
                                beschriebene Verarbeitung ist unser berechtigtes Interesse an
                                der Refinanzierung unseres kostenlos nutzbaren Angebots nach
                                Art. 6 Abs. 1 lit. f DSGVO. Soweit Partner eigene Cookies nach
                                § 25 Abs. 1 TDDDG einsetzen, geschieht dies nach den dortigen
                                Consent-Vorgaben.
                            </p>
                            <p>
                                Partnerlinks und Empfehlungen kennzeichnen wir deutlich (z. B.
                                als „Anzeige“, „Werbung“ oder „Partnerlink“). Ausführliche
                                Hinweise zur Unabhängigkeit und Kennzeichnung findest Du unter{" "}
                                <a
                                    href="/affiliate-hinweis"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    /affiliate-hinweis
                                </a>
                                .
                            </p>
                        </LegalSection>

                        {/* 8 — Kontakt */}
                        <LegalSection
                            id="kontaktformular"
                            title="8. Kontaktformular, E-Mail & Kontaktanfragen"
                        >
                            <p>
                                Über unser Kontaktformular kannst Du uns eine Nachricht
                                senden. Verarbeitet werden dabei die von Dir eingegebenen
                                Angaben: <span className="font-semibold text-text-primary">
                                    Name
                                </span>
                                , <span className="font-semibold text-text-primary">
                                    E-Mail-Adresse
                                </span>
                                , optional der{" "}
                                <span className="font-semibold text-text-primary">
                                    Betreff
                                </span>{" "}
                                sowie Deine{" "}
                                <span className="font-semibold text-text-primary">
                                    Nachricht
                                </span>
                                . Pflichtfelder sind entsprechend gekennzeichnet.
                            </p>
                            <p>
                                Die Angaben nutzen wir ausschließlich, um Deine Anfrage zu
                                bearbeiten, Dir zu antworten und – soweit erforderlich – für
                                Rückfragen. Eine Weitergabe an Dritte erfolgt nicht, es sei
                                denn, sie ist zur Bearbeitung Deines Anliegens erforderlich
                                (z. B. an den zuständigen Anbieter) oder wir sind gesetzlich
                                dazu verpflichtet.
                            </p>
                            <p>
                                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Deine
                                Anfrage auf den Abschluss oder die Durchführung eines Vertrags
                                gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO auf Basis
                                unseres berechtigten Interesses an der Beantwortung der an uns
                                gerichteten Anfragen.
                            </p>
                            <p>
                                Wir löschen die Daten, sobald Deine Anfrage abschließend
                                bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
                                entgegenstehen. Handelt es sich um Handels- oder
                                Geschäftsbriefe, gelten die Aufbewahrungsfristen nach § 257 HGB
                                (6 Jahre) bzw. § 147 AO (10 Jahre).
                            </p>
                            <p>
                                Du kannst uns auch direkt per E-Mail an{" "}
                                <a
                                    href={`mailto:${OPERATOR.email}`}
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    {OPERATOR.email}
                                </a>{" "}
                                oder postalisch über die im{" "}
                                <a
                                    href="/impressum"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Impressum
                                </a>{" "}
                                genannten Anschrift erreichen. Bitte beachte, dass die
                                unverschlüsselte E-Mail-Kommunikation Sicherheitslücken
                                aufweisen kann; für vertrauliche Inhalte empfehlen wir den
                                Postweg.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Das Kontaktformular ist derzeit noch
                                nicht an ein Backend angebunden und versendet keine echten
                                Nachrichten. Vor dem Livegang muss der Versand (z. B. über
                                einen E-Mail-Dienst) eingerichtet und abgesichert werden,
                                einschließlich Auftragsverarbeitungsvertrag und Löschkonzept.
                                Die Zustellung muss an die oben genannte Adresse erfolgen.
                            </p>
                        </LegalSection>

                        {/* 9 — Newsletter */}
                        <LegalSection id="newsletter" title="9. Newsletter">
                            <p>
                                Auf unserer Website kannst Du Dich für unseren
                                Spar-Newsletter anmelden. Verarbeitet werden dabei Deine{" "}
                                <span className="font-semibold text-text-primary">
                                    E-Mail-Adresse
                                </span>{" "}
                                sowie die technischen Angaben, die beim Absenden anfallen
                                (insbesondere IP-Adresse und Zeitpunkt der Anmeldung). Diese
                                Angaben benötigen wir, um Deine Anmeldung nachzuweisen, die
                                Einwilligung zu dokumentieren und Missbrauch zu verhindern.
                            </p>
                            <p>
                                Wir verwenden Deine E-Mail-Adresse ausschließlich für den
                                Versand unseres Newsletters mit Spar-Tipps, Vergleichs- und
                                Deals-Hinweisen. Rechtsgrundlage ist Deine Einwilligung nach
                                Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 7 Abs. 2 UWG.
                            </p>
                            <p>
                                Die Anmeldung erfolgt im sogenannten Double-Opt-In-Verfahren:
                                Nach Deiner Anmeldung erhältst Du eine E-Mail, in der Du die
                                Anmeldung noch einmal ausdrücklich bestätigen musst. Erst
                                danach nehmen wir Dich in den Verteiler auf. Erfolgt keine
                                Bestätigung, löschen wir die Anmeldedaten wieder.
                            </p>
                            <p>
                                Du kannst den Newsletter jederzeit abbestellen – über den
                                Abmeldelink am Ende jeder E-Mail oder per Nachricht an{" "}
                                <a
                                    href={`mailto:${OPERATOR.email}`}
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    {OPERATOR.email}
                                </a>
                                . Deine Einwilligung kannst Du damit jederzeit mit Wirkung für
                                die Zukunft widerrufen; die Rechtmäßigkeit der bis dahin
                                erfolgten Verarbeitung bleibt unberührt. Nach der Abmeldung
                                löschen wir Deine Daten, sofern wir sie nicht zur
                                Geltendmachung, Ausübung oder Verteidigung von
                                Rechtsansprüchen benötigen (Nachweis der Einwilligung,
                                längstens bis zum Ablauf der gesetzlichen Verjährungsfristen).
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Die Newsletter-Anmeldung ist derzeit eine
                                Demonstration ohne Anbindung an einen Versanddienst. Vor dem
                                Livegang sind ein Versanddienstleister inklusive
                                Auftragsverarbeitungsvertrag, das Double-Opt-In-Verfahren mit
                                protokollierter Einwilligung sowie – falls Öffnungs- und
                                Klickraten gemessen werden sollen – die entsprechende
                                Information und Einwilligung nach § 25 Abs. 1 TDDDG
                                erforderlich.
                            </p>
                        </LegalSection>

                        {/* 10 — Schriften & externe Inhalte */}
                        <LegalSection
                            id="fonts"
                            title="10. Schriftarten, Bilder & externe Inhalte"
                        >
                            <p>
                                Wir setzen auf dieser Website keine Social-Media-Plugins,
                                keine eingebetteten Videos, keine externen Karten und keine
                                Skripte von Werbenetzwerken ein. Schon durch das bloße
                                Aufrufen unserer Seiten werden daher – abgesehen von den
                                Analysewerkzeugen aus den Abschnitten 5 und 6 – keine Daten an
                                sonstige Dritte übermittelt.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Schriftarten
                            </h3>
                            <p>
                                Die verwendeten Schriftarten („Plus Jakarta Sans“ und „Geist
                                Mono“) werden über die Schriftarten-Einbindung unseres
                                Frameworks beim Erstellen der Website heruntergeladen und von
                                unserem eigenen Server ausgeliefert. Beim Aufruf der Seiten
                                findet deshalb keine direkte Verbindung zu Servern von Google
                                statt, und es werden dabei keine Daten wie Deine IP-Adresse an
                                Google übermittelt.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Grafiken und Bilder
                            </h3>
                            <p>
                                Grafiken, Icons und Bilder werden ebenfalls von unserem
                                eigenen Server ausgeliefert oder direkt gestalterisch erzeugt
                                (z. B. Farbverläufe und Texturen). Beim Aufruf werden keine
                                externen Bild-Dienste kontaktiert.
                            </p>
                            <p>
                                Rechtsgrundlage für die technische Auslieferung dieser Inhalte
                                ist unser berechtigtes Interesse an der Darstellung und
                                Funktionsfähigkeit der Website nach Art. 6 Abs. 1 lit. f
                                DSGVO; soweit dabei Informationen auf Deinem Endgerät
                                gespeichert oder abgerufen werden, ist dies nach § 25 Abs. 2
                                Nr. 2 TDDDG unbedingt erforderlich.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Dieser Abschnitt gilt nur, solange keine
                                externen Dienste hinzukommen. Werden künftig Videos, Karten,
                                Werbenetzwerke, Chat-Tools oder externe Bild-CDNs
                                eingebunden, muss dieser Abschnitt vor der Aktivierung
                                entsprechend ergänzt werden.
                            </p>
                        </LegalSection>

                        {/* 11 — Empfänger */}
                        <LegalSection
                            id="empfaenger"
                            title="11. Empfänger & Übermittlung in Drittländer"
                        >
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Kategorien von Empfängern
                            </h3>
                            <p>
                                Innerhalb unseres Angebots erhalten nur die Stellen Zugriff auf
                                Deine Daten, die sie zur Erfüllung ihrer Aufgaben benötigen.
                                Empfänger können sein:
                            </p>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>unser Hosting-Anbieter für den Betrieb und die Auslieferung der Website</li>
                                <li>Anbieter von Webanalyse- und Auswertungsdiensten (Abschnitte 5 und 6)</li>
                                <li>unser E-Mail- bzw. Kommunikationsanbieter sowie – nach Einrichtung – der Newsletter-Versanddienst</li>
                                <li>Betreiber von Partnerprogrammen, jedoch nur in Form aggregierter Vermittlungsstatistiken</li>
                                <li>Steuerberatung, Rechtsanwältinnen und Rechtsanwälte sowie Behörden, soweit dies gesetzlich erforderlich ist</li>
                            </ul>
                            <p>
                                Dienstleister, die in unserem Auftrag personenbezogene Daten
                                verarbeiten, sind vertraglich nach Art. 28 DSGVO gebunden und
                                dürfen die Daten nur für die vertraglich vereinbarten Zwecke
                                verwenden.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Übermittlung in Drittländer
                            </h3>
                            <p>
                                Eine Verarbeitung außerhalb der EU bzw. des EWR kann im Rahmen
                                der oben genannten Dienste stattfinden, insbesondere in den
                                USA. Wir achten darauf, dass hierfür ein
                                Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy
                                Framework) vorliegt oder – hilfsweise – geeignete Garantien im
                                Sinne des Art. 46 DSGVO, insbesondere die Standardvertragsklauseln
                                der EU-Kommission, vereinbart sind. Soweit erforderlich, prüfen
                                und dokumentieren wir zusätzliche Schutzmaßnahmen.
                            </p>
                            <p>
                                Eine Weitergabe Deiner Daten zu Werbezwecken an Dritte ohne
                                Deine Einwilligung oder ein Verkauf Deiner Daten findet nicht
                                statt.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Vor dem Livegang alle Auftragsverarbeiter
                                und Übermittlungen vollständig erfassen (Verzeichnis der
                                Verarbeitungstätigkeiten nach Art. 30 DSGVO) und prüfen, ob für
                                Vercel, Google, Microsoft und Amazon aktuelle
                                Auftragsverarbeitungsverträge vorliegen und – falls verfügbar –
                                eine EU-Serverregion gewählt wurde.
                            </p>
                        </LegalSection>

                        {/* 12 — Speicherdauer */}
                        <LegalSection id="speicherdauer" title="12. Speicherdauer & Löschung">
                            <p>
                                Wir speichern personenbezogene Daten nur so lange, wie es für
                                die genannten Zwecke erforderlich ist oder gesetzliche
                                Aufbewahrungsfristen dies vorschreiben. Danach werden die Daten
                                gelöscht oder so anonymisiert, dass ein Personenbezug nicht
                                mehr hergestellt werden kann. Im Einzelnen gilt:
                            </p>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Server-Logfiles:
                                    </span>{" "}
                                    nur kurzfristige Speicherung beim Hosting-Anbieter, danach
                                    automatische Löschung (siehe Abschnitt 3)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Google Analytics 4:
                                    </span>{" "}
                                    gemäß der von uns eingestellten Aufbewahrungsfrist
                                    (Standard 2 Monate, maximal 14 Monate)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Microsoft Clarity:
                                    </span>{" "}
                                    gemäß den Vorgaben von Microsoft
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Kontaktanfragen:
                                    </span>{" "}
                                    bis zur abschließenden Bearbeitung, anschließend unter
                                    Beachtung der handels- und steuerrechtlichen Fristen
                                    (§ 257 HGB: 6 Jahre, § 147 AO: 10 Jahre)
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Newsletter:
                                    </span>{" "}
                                    bis zum Widerruf der Einwilligung; Nachweise über erteilte
                                    Einwilligungen bewahren wir für die Dauer der gesetzlichen
                                    Verjährungsfristen auf
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Lokale Speicherung im Browser:
                                    </span>{" "}
                                    bis Du die Websitedaten in Deinem Browser löschst
                                    (siehe Abschnitt 4)
                                </li>
                            </ul>
                            <p>
                                Sicherungskopien (Backups) unseres Systems werden turnusmäßig
                                überschrieben. Daten aus Sicherungen werden für die aktive
                                Verarbeitung nicht mehr genutzt und mit dem regulären
                                Sicherungszyklus gelöscht.
                            </p>
                        </LegalSection>

                        {/* 13 — Betroffenenrechte */}
                        <LegalSection id="rechte" title="13. Deine Rechte als betroffene Person">
                            <p>
                                Dir stehen gegenüber uns die folgenden Rechte hinsichtlich
                                Deiner personenbezogenen Daten zu:
                            </p>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Auskunft (Art. 15 DSGVO)
                                    </span>{" "}
                                    – Du kannst eine Bestätigung darüber verlangen, ob und
                                    welche Daten wir zu Deiner Person verarbeiten, sowie eine
                                    Kopie dieser Daten.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Berichtigung (Art. 16 DSGVO)
                                    </span>{" "}
                                    – Du kannst die Korrektur unrichtiger oder die
                                    Vervollständigung unvollständiger Daten verlangen.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Löschung (Art. 17 DSGVO)
                                    </span>{" "}
                                    – Du kannst die Löschung Deiner Daten verlangen, sofern
                                    keine gesetzlichen Aufbewahrungspflichten oder anderen
                                    Gründe der Löschung entgegenstehen.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                                    </span>{" "}
                                    – Du kannst verlangen, dass wir die Verarbeitung Deiner
                                    Daten vorübergehend einschränken, etwa solange die
                                    Richtigkeit der Daten geprüft wird.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                                    </span>{" "}
                                    – Du kannst Daten, die wir auf Grundlage einer Einwilligung
                                    oder eines Vertrags automatisiert verarbeiten, in einem
                                    gängigen, maschinenlesbaren Format erhalten oder deren
                                    Übertragung an eine andere Stelle verlangen.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Widerspruch (Art. 21 DSGVO)
                                    </span>{" "}
                                    – Du kannst der Verarbeitung widersprechen, die auf
                                    berechtigten Interessen beruht; Einzelheiten findest Du im
                                    folgenden Abschnitt.
                                </li>
                                <li>
                                    <span className="font-semibold text-text-primary">
                                        Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)
                                    </span>{" "}
                                    – Eine erteilte Einwilligung kannst Du jederzeit mit
                                    Wirkung für die Zukunft widerrufen.
                                </li>
                            </ul>
                            <p>
                                Zur Ausübung Deiner Rechte genügt eine formlose Nachricht an
                                die im Abschnitt 1 genannten Kontaktdaten. Wir bearbeiten
                                Dein Anliegen unverzüglich, spätestens innerhalb eines Monats
                                nach Eingang. Bei berechtigten Zweifeln an Deiner Identität
                                können wir eine Identitätsprüfung verlangen, um eine
                                unbefugte Offenlegung zu verhindern.
                            </p>
                            <p>
                                Außerdem steht Dir nach Art. 77 DSGVO ein Beschwerderecht bei
                                einer Datenschutz-Aufsichtsbehörde zu, insbesondere bei der
                                Behörde an Deinem Aufenthaltsort, Deinem Arbeitsplatz oder am
                                Ort des vermuteten Verstoßes. Für uns zuständig ist das
                                Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
                                Promenade 18, 91522 Ansbach.
                            </p>
                            <p>
                                Eine automatisierte Entscheidungsfindung einschließlich
                                Profiling im Sinne des Art. 22 DSGVO findet bei uns nicht
                                statt.
                            </p>
                        </LegalSection>

                        {/* 14 — Widerruf & Widerspruch */}
                        <LegalSection id="widerruf" title="14. Widerruf & Widerspruch">
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Widerruf einer Einwilligung
                            </h3>
                            <p>
                                Soweit wir Daten auf Grundlage Deiner Einwilligung verarbeiten
                                (z. B. Newsletter, Google Analytics 4, Microsoft Clarity),
                                kannst Du diese Einwilligung jederzeit mit Wirkung für die
                                Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Eine formlose
                                Nachricht an die im Abschnitt 1 genannten Kontaktdaten genügt.
                                Für Analyse-Cookies kannst Du Deine Auswahl außerdem jederzeit
                                über die Cookie-Einstellungen dieser Website anpassen. Bereits
                                gespeicherte Cookies kannst Du zusätzlich in den Einstellungen
                                Deines Browsers löschen. Der Widerruf berührt nicht die
                                Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Betreiberhinweis: Der Hinweis auf die Cookie-Einstellungen
                                gilt erst, sobald das in Abschnitt 5 geforderte
                                Einwilligungsbanner live ist. Bis dahin muss als Widerrufsweg
                                ausschließlich der Kontaktweg in Abschnitt 1 benannt werden.
                            </p>
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Widerspruch gegen Verarbeitungen
                            </h3>
                            <p>
                                Verarbeiten wir Daten auf Grundlage von Art. 6 Abs. 1 lit. e
                                oder lit. f DSGVO, hast Du nach Art. 21 DSGVO das Recht, aus
                                Gründen, die sich aus Deiner besonderen Situation ergeben,
                                jederzeit Widerspruch einzulegen. Wir verarbeiten die Daten
                                danach nicht mehr, es sei denn, wir können zwingende
                                schutzwürdige Gründe nachweisen, die Deine Interessen, Rechte
                                und Freiheiten überwiegen, oder die Verarbeitung dient der
                                Geltendmachung, Ausübung oder Verteidigung von
                                Rechtsansprüchen.
                            </p>
                            <p>
                                Der Widerspruch gegen die Verarbeitung Deiner Daten zu Zwecken
                                der Direktwerbung ist jederzeit ohne Begründung möglich
                                (Art. 21 Abs. 2 DSGVO). Wir stellen die Verarbeitung dann
                                unverzüglich ein. Wenn Du unseren Newsletter abbestellst,
                                entfällt damit automatisch auch die damit verbundene
                                Werbeansprache.
                            </p>
                            <p>
                                Sende Deinen Widerspruch bitte an die im Abschnitt 1 genannten
                                Kontaktdaten oder nutze die im{" "}
                                <Link
                                    href="/impressum"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Impressum
                                </Link>{" "}
                                angegebenen Kontaktwege.
                            </p>
                        </LegalSection>

                        {/* 15 — Datensicherheit */}
                        <LegalSection id="sicherheit" title="15. Datensicherheit">
                            <p>
                                Wir treffen technische und organisatorische Maßnahmen, um
                                Deine Daten gegen Verlust, Missbrauch und unberechtigten
                                Zugriff zu schützen (Art. 32 DSGVO). Dazu gehören unter
                                anderem:
                            </p>
                            <ul className="list-disc space-y-1.5 pl-5">
                                <li>
                                    verschlüsselte Übertragung der Website über HTTPS (TLS),
                                    erkennbar am Schloss-Symbol in Deinem Browser
                                </li>
                                <li>
                                    Beschränkung der Zugriffsrechte auf die Personen, die die
                                    Daten für ihre Aufgaben benötigen, sowie Verpflichtung zur
                                    Vertraulichkeit
                                </li>
                                <li>
                                    regelmäßige Aktualisierung der eingesetzten Software und
                                    Abhängigkeiten sowie sparsame Erhebung personenbezogener
                                    Daten
                                </li>
                                <li>
                                    datenschutzfreundliche Voreinstellungen und Ausführung der
                                    Rechner- und Vergleichsfunktionen direkt in Deinem Browser,
                                    ohne Übermittlung Deiner Eingaben an unsere Server
                                </li>
                            </ul>
                            <p>
                                Bitte beachte, dass die Datenübertragung im Internet – etwa
                                bei der unverschlüsselten E-Mail-Kommunikation – grundsätzlich
                                Sicherheitslücken aufweisen kann; ein vollständiger Schutz vor
                                dem Zugriff durch Dritte ist nicht möglich. Vertrauliche
                                Anliegen kannst Du uns deshalb auch per Post zusenden.
                            </p>
                        </LegalSection>

                        {/* 16 — Aktualität & Änderungen */}
                        <LegalSection id="aenderungen" title="16. Aktualität & Änderungen">
                            <p>
                                Diese Datenschutzerklärung ist aktuell gültig (Stand: {STAND}).
                                Durch die Weiterentwicklung unseres Angebots – etwa neue
                                Funktionen, Vergleichsrechner oder Dienste – kann es notwendig
                                werden, sie anzupassen, damit sie den tatsächlichen
                                Verhältnissen und den rechtlichen Anforderungen entspricht.
                            </p>
                            <p>
                                Wir veröffentlichen die jeweils aktuelle Version auf dieser
                                Seite. Wir empfehlen Dir, die Datenschutzerklärung bei einem
                                erneuten Besuch unseres Angebots zur Kenntnis zu nehmen.
                            </p>
                            <p>
                                Ergänzende Informationen zur Anbieterkennzeichnung findest Du
                                im{" "}
                                <Link
                                    href="/impressum"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Impressum
                                </Link>{" "}
                                und zur Kennzeichnung von Werbung in unserem{" "}
                                <Link
                                    href="/affiliate-hinweis"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Affiliate-Hinweis
                                </Link>
                                . Bei Fragen zum Datenschutz schreib uns an{" "}
                                <Link
                                    href={`mailto:${OPERATOR.email}`}
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    {OPERATOR.email}
                                </Link>
                                .
                            </p>
                        </LegalSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
