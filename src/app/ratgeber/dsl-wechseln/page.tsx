import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, buildSEOData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { generateAffiliateLink, getAffiliateLinkAttributes } from "@/lib/affiliate-links"

const seo = buildSEOData({
    title: "DSL-Wechseln leicht gemacht – So sparst Du bis zu 240€ im Jahr",
    description: "DSL-Wechsel in 3 Schritten ✓ Kündigungsfristen ✓ Kostenloser Tarifvergleich ✓ Die besten Highspeed-Tarife ✓ Bis zu 240€ sparen – mit CHECK24 ✓",
    slug: "ratgeber/dsl-wechseln",
    keywords: ["DSL", "DSL wechseln", "Internet", "Tarifvergleich", "CHECK24 DSL"],
    ogType: "article",
})

export const metadata: Metadata = generatePageMetadata(seo)

const linkAttrs = getAffiliateLinkAttributes()
const check24Link = generateAffiliateLink({ categorySlug: "dsl" as any, subid: "ratgeber-dsl-wechseln" }).url

const articleSchema = generateArticleSchema(seo, {
    headline: "DSL-Wechseln leicht gemacht – So sparst Du bis zu 240€ im Jahr",
    datePublished: "2026-03-10",
    dateModified: "2026-05-18",
    author: "Redaktion",
})

const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "DSL-Wechseln", href: "/ratgeber/dsl-wechseln" },
])

const TARIFFE = [
    { anbieter: "Telekom", speed: "100 Mbit/s", preis: "39,95€", highlight: "Beste Stabilität" },
    { anbieter: "Vodafone", speed: "250 Mbit/s", preis: "34,99€", highlight: "Bester Preis" },
    { anbieter: "O2", speed: "100 Mbit/s", preis: "33,99€", highlight: "Günstiger Einstieg" },
    { anbieter: "1&1", speed: "250 Mbit/s", preis: "36,99€", highlight: "Top Geschwindigkeit" },
]

export default function DslWechselnPage() {
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
                        <span className="text-zinc-400">DSL-Wechseln</span>
                    </nav>

                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
                        🌐 DSL & Internet
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        DSL-Wechseln leicht gemacht – So sparst Du bis zu 240€ im Jahr
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                        <span>📅 18. Mai 2026</span>
                        <span>•</span>
                        <span>⏱️ 7 Min Lesezeit</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">✍️ Von der Redaktion</span>
                    </div>

                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                        Die meisten Deutschen zahlen zu viel für ihren Internetanschluss.
                        Ein Wechsel lohnt sich fast immer – und ist einfacher als Du denkst.
                        Wir zeigen Dir, wie Du in 3 Schritten den besten Tarif findest.
                    </p>
                </div>
            </article>

            {/* Content */}
            <section className="relative overflow-hidden bg-surface py-12 sm:py-16">
                <div className="absolute inset-0 bg-holz-texture opacity-20" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 text-base leading-relaxed text-zinc-400">
                        {/* 1. Warum wechseln? */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">1. Warum sich ein DSL-Wechsel lohnt</h2>
                            <p className="mt-4">
                                Viele Verbraucher zahlen nach Ablauf der Mindestvertragslaufzeit den
                                regulären Tarif – und das oft <strong className="text-text-primary">doppelt so teuer</strong> wie
                                ein Neukunden-Angebot. Dabei könnten sie durch einen Wechsel oder eine
                                Verlängerung mit Neuvertrag hunderte Euro sparen.
                            </p>
                            <p className="mt-3">
                                Die durchschnittliche Ersparnis durch einen Anbieterwechsel liegt bei
                                etwa <strong className="text-gold-primary">20€ pro Monat</strong> – das sind 240€ im Jahr!
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li><strong className="text-text-primary">Neukunden-Boni:</strong> Bis zu 200€ Startguthaben oder Gratis-Monate</li>
                                <li><strong className="text-text-primary">Schnelleres Internet:</strong> Oft mehr Speed zum gleichen Preis</li>
                                <li><strong className="text-text-primary">Bessere Technik:</strong> Neue Router-Technologie inklusive</li>
                            </ul>
                        </div>

                        {/* 2. Vergleichstabelle */}
                        <div className="card-base card-holz-border overflow-hidden p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">2. Top-Tarife im Vergleich</h2>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-holz-accent/30">
                                            <th className="pb-3 text-left font-semibold text-text-primary">Anbieter</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Geschwindigkeit</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Ø Preis/Monat</th>
                                            <th className="pb-3 text-left font-semibold text-text-primary">Highlight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TARIFFE.map((tarif, i) => (
                                            <tr key={i} className="border-b border-holz-accent/20 last:border-0">
                                                <td className="py-3 pr-4 font-medium text-text-primary">{tarif.anbieter}</td>
                                                <td className="py-3 pr-4 text-zinc-400">{tarif.speed}</td>
                                                <td className="py-3 pr-4 text-gold-primary font-semibold">{tarif.preis}</td>
                                                <td className="py-3 text-xs text-zinc-500">{tarif.highlight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. Kündigungsfristen */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">3. Kündigungsfristen beachten</h2>
                            <p className="mt-4">
                                Die gesetzliche Kündigungsfrist für DSL-Verträge beträgt <strong className="text-text-primary">einen
                                    Monat zum Ende der Vertragslaufzeit</strong>. Die typische Erstlaufzeit beträgt
                                24 Monate. Danach verlängert sich der Vertrag monatlich.
                            </p>
                            <p className="mt-3">
                                <strong className="text-gold-primary">Wichtig:</strong> Kündige Deinen alten Vertrag erst, wenn der neue
                                Anbieter den Anschlusstermin bestätigt hat. Die meisten Anbieter
                                übernehmen die Kündigung für Dich.
                            </p>
                        </div>

                        {/* 4. Wechselprozess */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">4. So läuft der Wechsel ab</h2>
                            <div className="mt-4 space-y-4">
                                {[
                                    { step: "1", title: "Tarif vergleichen", desc: "Nutze CHECK24, um die besten Tarife in Deiner Region zu finden. Filtere nach Geschwindigkeit, Preis und Vertragslaufzeit." },
                                    { step: "2", title: "Bestellen & Kündigung übergeben", desc: "Der neue Anbieter kümmert sich in der Regel um die Kündigung des alten Vertrags. Du musst nichts weiter tun." },
                                    { step: "3", title: "Router bereitstellen", desc: "Der neue Router wird Dir kostenlos zugeschickt. Meist ist er Plug & Play – einfach anschließen und loslegen." },
                                    { step: "4", title: "Freischaltung genießen", desc: "Die Freischaltung erfolgt zum gewünschten Termin. Ab dann surfst Du mit dem neuen Tarif – und sparst bares Geld." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-primary/10 text-sm font-bold text-gold-primary">
                                            {item.step}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-text-primary">{item.title}</p>
                                            <p className="mt-0.5 text-sm text-zinc-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. Glasfaser vs DSL */}
                        <div className="card-base card-holz-border p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">5. Glasfaser oder DSL – was ist besser?</h2>
                            <p className="mt-4">
                                Glasfaser bietet deutlich höhere Geschwindigkeiten (bis zu 1.000 Mbit/s)
                                und eine stabilere Verbindung als herkömmliches DSL. Allerdings ist
                                Glasfaser noch nicht überall verfügbar.
                            </p>
                            <p className="mt-3">
                                Unser Tipp: <strong className="text-text-primary">Prüfe zuerst, ob Glasfaser bei Dir verfügbar ist</strong>.
                                Wenn nicht, sind DSL-Tarife mit 100-250 Mbit/s für die meisten Haushalte
                                völlig ausreichend.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="card-base card-holz-border relative overflow-hidden border border-gold-primary/20 p-6 sm:p-8">
                            <div className="absolute inset-0 bg-holz-texture opacity-20" />
                            <div className="relative text-center">
                                <span className="text-3xl">🌐</span>
                                <h3 className="mt-3 text-xl font-bold text-text-primary">
                                    Jetzt DSL-Tarife vergleichen
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Finde den besten Tarif für Deine Adresse –
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
                                        q: "Wie lange dauert ein DSL-Wechsel?",
                                        a: "In der Regel 2-4 Wochen. Der neue Anbieter stimmt den Schaltungstermin mit Dir ab. Ein nahtloser Wechsel am gleichen Tag ist meist möglich."
                                    },
                                    {
                                        q: "Kann ich meine Rufnummer mitnehmen?",
                                        a: "Ja, die Rufnummernmitnahme ist gesetzlich garantiert. Beantrage sie einfach beim neuen Anbieter."
                                    },
                                    {
                                        q: "Was passiert mit meinem alten Router?",
                                        a: "Der alte Router muss zurückgegeben werden, sofern Du ihn gemietet hast. Bei Kauf gehört er Dir."
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
                            <strong>Affiliate-Hinweis:</strong> Die mit 🌐 markierten Links führen zu CHECK24.
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
