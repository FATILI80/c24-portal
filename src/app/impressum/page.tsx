import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, buildSEOData } from "@/lib/seo"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"
import LegalSection from "@/components/legal/LegalSection"

export const metadata: Metadata = generatePageMetadata(
    buildSEOData({
        title: "Impressum",
        description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG – Anbieter, Kontakt, Verantwortlichkeit und Haftungshinweise von BudgetScout.de.",
        slug: "impressum",
        keywords: ["Impressum", "Anbieterkennzeichnung", "§ 5 DDG", "Kontakt", "BudgetScout"],
        noindex: true,
    })
)

/**
 * Build-time date for the "Stand:" line – stays current with every build,
 * no manual maintenance required.
 */
const STAND = new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric",
}).format(new Date())

/**
 * Operator data – mandatory disclosures per § 5 DDG.
 * Address, owner and e-mail are the real, verified values. Only the phone
 * number and the VAT ID are still placeholders and must be completed or
 * removed before the site goes live.
 */
const OPERATOR = {
    owner: "Fatih Özhan",
    brand: "BudgetScout.de",
    street: "Obere Firstalm 1",
    postalCode: "83727",
    city: "Schliersee",
    country: "Deutschland",
    email: "Oezhanfatih@gmail.com",
    phone: "[+49 (0) 000 000 000]",
    vatId: "[DE 000 000 000]",
} as const

export default function ImpressumPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                            ⚖️ Rechtliches
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            Impressum
                        </h1>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                            Anbieterkennzeichnung gemäß § 5 DDG (Digitale-Dienste-Gesetz).
                            Transparenz gehört bei uns zum Geschäftsmodell – hier findest Du
                            alle Pflichtangaben zu diesem Angebot.
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
                        {/* 1 — Anbieter */}
                        <LegalSection id="anbieter" title="Angaben gemäß § 5 DDG">
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
                        </LegalSection>

                        {/* 2 — Kontakt */}
                        <LegalSection id="kontakt" title="Kontakt">
                            <ul className="space-y-2">
                                <li>
                                    E-Mail:{" "}
                                    <a
                                        href={`mailto:${OPERATOR.email}`}
                                        className="font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                    >
                                        {OPERATOR.email}
                                    </a>
                                </li>
                                <li>
                                    Telefon:{" "}
                                    <span className="text-zinc-300">{OPERATOR.phone}</span>
                                </li>
                            </ul>
                            <p>
                                Am schnellsten erreichst Du uns über das{" "}
                                <Link
                                    href="/kontakt"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Kontaktformular
                                </Link>
                                . Anfragen beantworten wir in der Regel innerhalb von 24
                                Stunden.
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Platzhalter: Die Telefonnummer ist optional. Wird keine
                                Nummer angegeben, muss eine E-Mail-Adresse vorhanden sein, über
                                die eine schnelle elektronische Kontaktaufnahme und unmittelbare
                                Kommunikation möglich ist (§ 5 Abs. 1 Nr. 2 DDG).
                            </p>
                        </LegalSection>

                        {/* 3 — Verantwortlichkeit & Steuern */}
                        <LegalSection
                            id="verantwortlich"
                            title="Vertretung, Verantwortlichkeit & Umsatzsteuer"
                        >
                            <h3 className="pt-1 font-semibold text-text-primary">
                                Vertretungsberechtigter / Inhaber
                            </h3>
                            <p>
                                {OPERATOR.owner}, Anschrift wie oben. Das Angebot wird als
                                Einzelunternehmen betrieben.
                            </p>

                            <h3 className="pt-1 font-semibold text-text-primary">
                                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                            </h3>
                            <p>
                                {OPERATOR.owner}, {OPERATOR.street},{" "}
                                {OPERATOR.postalCode} {OPERATOR.city}.
                            </p>

                            <h3 className="pt-1 font-semibold text-text-primary">
                                Umsatzsteuer-Identifikationsnummer
                            </h3>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                                Umsatzsteuergesetz: {OPERATOR.vatId}
                            </p>
                            <p className="rounded-xl border border-gold-primary/30 bg-gold-primary/5 px-4 py-3 text-xs leading-relaxed text-gold-primary/90">
                                ⚠️ Platzhalter: Wird die Kleinunternehmerregelung nach § 19
                                UStG genutzt und keine USt-IdNr. erteilt, ist dieser Abschnitt
                                durch folgenden Hinweis zu ersetzen: „Als Kleinunternehmer im
                                Sinne des § 19 UStG wird keine Umsatzsteuer ausgewiesen.“
                            </p>
                        </LegalSection>

                        {/* 4 — Streitbeilegung */}
                        <LegalSection
                            id="streitbeilegung"
                            title="Verbraucherstreitbeilegung"
                        >
                            <p>
                                Wir sind nicht verpflichtet und nicht bereit, an einem
                                Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen (§ 36 Abs. 1 Nr. 1
                                VSBG).
                            </p>
                            <p>
                                Hinweis: Die von der EU-Kommission bereitgestellte Plattform
                                zur Online-Streitbeilegung (OS-Plattform) wurde zum 20. Juli
                                2025 dauerhaft eingestellt. Ein Link auf diese Plattform ist
                                daher nicht mehr erforderlich.
                            </p>
                            <p>
                                Beschwerden, Hinweise zu fehlerhaften Inhalten oder Kritik an
                                unseren Vergleichen kannst Du gerne direkt an{" "}
                                <a
                                    href={`mailto:${OPERATOR.email}`}
                                    className="font-semibold text-gold-primary transition-colors hover:text-gold-primary/80"
                                >
                                    {OPERATOR.email}
                                </a>{" "}
                                richten. Wir prüfen jede Nachricht und melden uns innerhalb von
                                24 Stunden zurück.
                            </p>
                        </LegalSection>

                        {/* 5 — Haftung für Inhalte */}
                        <LegalSection id="haftung-inhalte" title="Haftung für Inhalte">
                            <p>
                                Die Inhalte dieses Angebots werden mit größter Sorgfalt
                                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                                der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                                Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
                                nach den allgemeinen Gesetzen verantwortlich (§ 7 Abs. 1 DDG).
                                Eine Verpflichtung zur Überwachung übermittelter oder
                                gespeicherter fremder Informationen besteht nicht (§§ 8 bis 10
                                DDG).
                            </p>
                            <p>
                                Tarif-, Preis- und Zinsangaben auf dieser Website dienen der
                                Orientierung. Maßgeblich sind ausschließlich die aktuellen
                                Bedingungen, Preisangaben und Vertragsunterlagen des jeweiligen
                                Anbieters. Prüfe diese daher bitte vor Vertragsabschluss direkt
                                beim Anbieter.
                            </p>
                        </LegalSection>

                        {/* 6 — Haftung für Links */}
                        <LegalSection id="haftung-links" title="Haftung für Links">
                            <p>
                                Unser Angebot enthält Links zu externen Websites Dritter
                                (insbesondere zu CHECK24, Digistore24 und Amazon), auf deren
                                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                                der verlinkten Seiten ist stets der jeweilige Anbieter oder
                                Betreiber verantwortlich.
                            </p>
                            <p>
                                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                                mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren
                                zu diesem Zeitpunkt nicht erkennbar. Eine permanente
                                inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
                                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                                Bekanntwerden von Rechtsverletzungen entfernen wir derartige
                                Links unverzüglich.
                            </p>
                        </LegalSection>

                        {/* 7 — Urheberrecht */}
                        <LegalSection id="urheberrecht" title="Urheberrecht & Bildnachweise">
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                                diesen Seiten (Texte, Grafiken, Layout, Quellcode) unterliegen
                                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                                Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                                des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                                jeweiligen Autors bzw. Erstellers.
                            </p>
                            <p>
                                Downloads und Kopien dieser Seite sind nur für den privaten,
                                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                                Dritter als solche gekennzeichnet.
                            </p>
                            <p>
                                Für Icons und Illustrationen dieses Portals verwenden wir
                                lizenzfreie Quellen bzw. eigene oder systemeigene
                                Emoji-Darstellungen. Marken und Logos Dritter (z. B. CHECK24,
                                Digistore24, Amazon) sind Eigentum der jeweiligen Rechteinhaber
                                und werden nur zur Beschreibung der Partnerschaft genannt.
                            </p>
                        </LegalSection>

                        {/* 8 — Affiliate */}
                        <LegalSection
                            id="partnerkennzeichnung"
                            title="Partnerkennzeichnung (Affiliate-Hinweis)"
                        >
                            <p>{AFFILIATE_DISCLOSURE_TEXT}</p>
                            <p>
                                Konkret bedeutet das: Wir sind Partner des CHECK24-Vergleichs
                                sowie weiterer Affiliate-Netzwerke (u. a. Digistore24 und Amazon
                                PartnerNet). Klickst Du auf einen entsprechenden Link und
                                schließt anschließend einen Vertrag oder tätigst einen Kauf,
                                erhalten wir eine Provision. Für Dich entstehen dadurch{" "}
                                <span className="font-semibold text-text-primary">
                                    keine zusätzlichen Kosten
                                </span>
                                .
                            </p>
                            <p>
                                Unsere Vergleiche und Empfehlungen erstellen wir unabhängig von
                                der Höhe einer möglichen Provision. Details zur
                                Werbekennzeichnung findest Du in unserem{" "}
                                <Link
                                    href="/affiliate-hinweis"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Affiliate-Hinweis
                                </Link>
                                .
                            </p>
                        </LegalSection>

                        {/* 9 — Vergleichsergebnisse */}
                        <LegalSection
                            id="vergleichsergebnisse"
                            title="Hinweis zu Vergleichsergebnissen"
                        >
                            <p>
                                BudgetScout.de ist ein Informations- und Vergleichsportal. Wir
                                stellen Dir Rechenwege, Marktüberblicke und Spartipps zur
                                Verfügung. Unsere Inhalte sind{" "}
                                <span className="font-semibold text-text-primary">
                                    keine Rechts-, Steuer-, Anlage- oder Finanzberatung
                                </span>{" "}
                                und ersetzen keine individuelle Beratung durch hierfür
                                zugelassene Fachleute.
                            </p>
                            <p>
                                Ergebnisse von Rechnern und Vergleichen beruhen auf den von Dir
                                eingegebenen Daten sowie auf Annahmen und Marktwerten, die sich
                                jederzeit ändern können. Sie sind unverbindliche Beispielrechnungen
                                und stellen kein Angebot im Rechtssinne dar.
                            </p>
                            <p>
                                Vertragsverhältnisse kommen ausschließlich zwischen Dir und dem
                                jeweiligen Anbieter zustande. Erfüllungsgehilfe oder
                                Vertragspartner des Vertrags bist nicht wir – Rückfragen zu
                                Tarifen, Verträgen, Kündigungen oder Reklamationen richtest Du
                                bitte direkt an den Anbieter.
                            </p>
                        </LegalSection>

                        {/* 10 — Datenschutz */}
                        <LegalSection id="datenschutz-link" title="Datenschutz">
                            <p>
                                Informationen dazu, welche personenbezogenen Daten wir beim
                                Besuch dieser Website verarbeiten, wie wir Cookies und
                                Webanalyse einsetzen und welche Rechte Du hast, findest Du in
                                unserer{" "}
                                <Link
                                    href="/datenschutz"
                                    className="font-semibold text-gold-primary underline-offset-4 hover:underline"
                                >
                                    Datenschutzerklärung
                                </Link>
                                .
                            </p>
                        </LegalSection>

                        {/* 11 — Betreiber-Hinweis */}
                        <LegalSection
                            id="platzhalter"
                            title="Hinweis für den Betreiber dieses Portals"
                        >
                            <p>
                                Diese Reihenfolge der Abschnitte orientiert sich an den
                                gesetzlichen Vorgaben für Diensteanbieter in Deutschland.
                                Name, Anschrift ({OPERATOR.street}, {OPERATOR.postalCode}{" "}
                                {OPERATOR.city}) und E-Mail-Adresse sind bereits
                                eingetragen. Vor der Veröffentlichung sind noch folgende
                                Angaben zu prüfen und zu ergänzen:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Telefonnummer oder Entfernung dieses Eintrags</li>
                                <li>USt-IdNr. oder Kleinunternehmer-Hinweis (§ 19 UStG)</li>
                                <li>
                                    Angaben zur Teilnahmebereitschaft an einem
                                    Streitbeilegungsverfahren (VSBG)
                                </li>
                                <li>
                                    Zuständige Aufsichts- bzw. Erlaubnisbehörde, sofern eine
                                    erlaubnispflichtige Tätigkeit ausgeübt wird
                                </li>
                            </ul>
                            <p className="text-xs text-zinc-500">
                                Nach dem Ausfüllen der Platzhalter sollte dieser Abschnitt
                                vollständig entfernt werden.
                            </p>
                        </LegalSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
