import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { generateAffiliateLink, getAffiliateLinkAttributes } from "@/lib/affiliate-links"

const seo = buildSEOData({
    title: "Kreditkarten-Vergleich 2026 – Die besten Karten ohne Jahresgebühr",
    description: "Kreditkarte ohne Jahresgebühr ✓ Bis 100€ Bonus ✓ Top-Konditionen ✓ Jetzt vergleichen und bis zu 300€ sparen – mit CHECK24 ✓",
    slug: "ratgeber/kreditkarten-vergleich",
    keywords: ["Kreditkarte", "Kreditkartenvergleich", "Kreditkarte ohne Jahresgebühr", "CHECK24 Kreditkarte"],
    ogType: "article",
})

export const metadata: Metadata = generatePageMetadata(seo)

const linkAttrs = getAffiliateLinkAttributes()
const check24Link = generateAffiliateLink({ categorySlug: "kreditkarten" as any, subid: "ratgeber-kreditkarten" }).url

const articleSchema = generateArticleSchema(seo, {
    headline: "Kreditkarten-Vergleich 2026 – Die besten Karten ohne Jahresgebühr",
    datePublished: "2026-01-15",
    dateModified: "2026-05-15",
    author: "Redaktion",
})

const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Kreditkarten-Vergleich", href: "/ratgeber/kreditkarten-vergleich" },
])

const BANKS = [
    { name: "Barclays Visa", gebuehr: "0€", zins: "19,99% eff.", bonus: "Bis 100€ Willkommensbonus", highlight: "Kostenlos weltweit" },
    { name: "Gebührenfrei Mastercard", gebuehr: "0€", zins: "20,57% eff.", bonus: "Keine Transaktionsgebühren", highlight: "100% gebührenfrei" },
    { name: "Hanseatic Bank GenialCard", gebuehr: "0€", zins: "19,89% eff.", bonus: "Kostenlose Bargeldabhebungen", highlight: "Flexibel + günstig" },
    { name: "Commerzbank Kreditkarte", gebuehr: "0€ ab 50€ Umsatz", zins: "18,99% eff.", bonus: "Bargeld weltweit kostenlos", highlight: "Filialbank" },
]

export default function KreditkartenVergleichPage() {
    return (
        <div className="flex flex-col">
            {/* Article */}
            <article className="relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-holz-texture" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.06),transparent_60%)]" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
                        <Link href="/" className="transition-colors hover:text-gold-primary">Home</Link>
                        <span>/</span>
                        <Link href="/ratgeber" className="transition-colors hover:text-gold-primary">Ratgeber</Link>
                        <span>/</span>
                        <span className="text-zinc-400">Kreditkarten-Vergleich</span>
                    </nav>

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                        💳 Kreditkarten
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Kreditkarten-Vergleich 2026 – Die besten Karten ohne Jahresgebühr
                    </h1>

                    {/* Meta */}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                        <span>📅 15. Mai 2026</span>
                        <span>•</span>
                        <span>⏱️ 8 Min Lesezeit</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">✍️ Von der Redaktion</span>
                    </div>

                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                        Eine Kreditkarte ohne Jahresgebühr ist heute kein Luxus mehr, sondern
                        eine clevere Entscheidung. Wir vergleichen die besten Karten und zeigen
                        Dir, worauf es ankommt.
                    </p>
                </div>
            </article>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 text-base leading-relaxed text-zinc-400">
                        {/* 1. Warum kostenlose Kreditkarte */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">1. Warum eine kostenlose Kreditkarte?</h2>
                            <p className="mt-4">
                                Immer mehr Banken bieten Kreditkarten ohne Jahresgebühr an. Das ist gut für
                                Verbraucher, denn die Zeiten, in denen man 20€ bis 50€ pro Jahr für eine
                                Kreditkarte bezahlt hat, sind vorbei. Eine kostenlose Kreditkarte lohnt sich
                                besonders für:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li><strong className="text-text-primary">Vielreisende:</strong> Keine Gebühren für Auslandseinsätze</li>
                                <li><strong className="text-text-primary">Online-Shopper:</strong> Sicheres Bezahlen im Internet</li>
                                <li><strong className="text-text-primary">Gelegenheitsnutzer:</strong> Keine Fixkosten bei geringem Umsatz</li>
                            </ul>
                        </div>

                        {/* 2. Vergleichstabelle */}
                        <div className="card-base card-holz-border overflow-hidden p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">2. Die besten Kreditkarten im Vergleich</h2>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-holz-accent/30">
                                            <th className="pb-3 text-left font-semibold text-text-primary">Karte</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Jahresgebühr</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Sollzins</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Highlights</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {BANKS.map((bank, i) => (
                                            <tr key={i} className="border-b border-holz-accent/20 last:border-0">
                                                <td className="py-3 pr-4 font-medium text-text-primary">{bank.name}</td>
                                                <td className="py-3 pr-4 text-gold-primary font-semibold">{bank.gebuehr}</td>
                                                <td className="py-3 pr-4 text-zinc-400">{bank.zins}</td>
                                                <td className="py-3 text-xs text-zinc-500">{bank.highlight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. Tipps */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">3. Worauf solltest Du achten?</h2>
                            <p className="mt-4">
                                Nicht jede kostenlose Kreditkarte ist wirklich kostenlos. Achte auf
                                versteckte Gebühren wie:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li>Transaktionsgebühren im Ausland (3-4% sind üblich)</li>
                                <li>Bargeldgebühren (am Automaten oder am Schalter)</li>
                                <li>Zahlungsverzugszinsen (oft über 20% effektiv)</li>
                                <li>Mindestumsatz für kostenlose Kontoführung</li>
                            </ul>
                            <p className="mt-4">
                                Eine gute Kreditkarte erkennst Du daran, dass sie <strong className="text-text-primary">keine versteckten
                                    Kosten</strong> hat und weltweit akzeptiert wird. Die Karten von Barclays,
                                Hanseatic Bank und Gebührenfrei.de sind hier die Spitzenreiter.
                            </p>
                        </div>

                        {/* 4. Bonus */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">4. Willkommensboni & Prämien</h2>
                            <p className="mt-4">
                                Viele Kreditkarten locken mit attraktiven Willkommensboni. Barclays
                                bietet bis zu 100€ für Neukunden, andere Karten punkten mit
                                Bonusprogrammen oder Reiseversicherungen. Allerdings: Ein Bonus ist
                                nur dann ein guter Deal, wenn die Karte auch langfristig zu Deinen
                                Bedürfnissen passt.
                            </p>
                            <p className="mt-3">
                                Unser Tipp: Lass Dich nicht vom Bonus blenden. Entscheidend sind
                                die <strong className="text-text-primary">langfristigen Kosten</strong> und die Akzeptanz der Karte.
                            </p>
                        </div>

                        {/* 5. Sicherheit */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">5. Sicherheit bei Kreditkarten</h2>
                            <p className="mt-4">
                                Moderne Kreditkarten bieten umfassenden Schutz vor Missbrauch:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li><strong className="text-text-primary">3D Secure:</strong> Zusätzliche Authentifizierung bei Online-Zahlungen</li>
                                <li><strong className="text-text-primary">Haftungsbegrenzung:</strong> Bei Verlust haftest Du maximal 50€</li>
                                <li><strong className="text-text-primary">Kostenlose Sperrhotline:</strong> 116 116 – rund um die Uhr erreichbar</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="card-base card-holz-border relative overflow-hidden border border-gold-primary/20 p-6 sm:p-8">
                            <div className="absolute inset-0 bg-holz-texture opacity-20" />
                            <div className="relative text-center">
                                <span className="text-3xl">💳</span>
                                <h3 className="mt-3 text-xl font-bold text-text-primary">
                                    Jetzt Kreditkarten vergleichen
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Finde die beste Kreditkarte für Deine Bedürfnisse –
                                    kostenlos und unverbindlich über CHECK24.
                                </p>
                                <a
                                    href={check24Link}
                                    {...linkAttrs}
                                    className="btn-gold mt-4 inline-flex"
                                >
                                    Jetzt vergleichen & sparen →
                                </a>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">6. Häufige Fragen (FAQ)</h2>
                            <div className="mt-6 space-y-6">
                                {[
                                    {
                                        q: "Welche Kreditkarte ist wirklich kostenlos?",
                                        a: "Die Barclays Visa und die Gebührenfrei Mastercard sind dauerhaft kostenlos – ohne versteckte Bedingungen. Die Hanseatic Bank GenialCard ist ebenfalls kostenlos, erfordert aber ein Girokonto."
                                    },
                                    {
                                        q: "Kann ich mit einer kostenlosen Kreditkarte im Ausland bezahlen?",
                                        a: "Ja, die meisten kostenlosen Kreditkarten sind weltweit akzeptiert. Barclays und Hanseatic Bank erheben keine Fremdwährungsgebühren."
                                    },
                                    {
                                        q: "Was ist der effektive Jahreszins?",
                                        a: "Der effektive Jahreszins gibt die Gesamtkosten eines Kredits an. Bei Kreditkarten liegt er meist zwischen 18% und 22%. Wenn Du Deine Rechnung immer vollständig bezahlst, fallen keine Zinsen an."
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
                            <strong>Affiliate-Hinweis:</strong> Die mit 💳 markierten Links führen zu CHECK24.
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
