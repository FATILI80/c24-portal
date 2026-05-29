import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "404 – Seite nicht gefunden | BudgetScout.de",
    description: "Die gesuchte Seite existiert leider nicht. Starte einen neuen Vergleich und finde den besten Tarif.",
    robots: { index: false, follow: true },
}

export default function NotFound() {
    return (
        <div className="flex flex-col">
            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-surface">
                {/* Wood texture overlay */}
                <div className="absolute inset-0 bg-holz-texture opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.04),transparent_60%)]" />

                <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
                    {/* Large 404 */}
                    <div className="text-8xl font-extrabold tracking-tighter sm:text-9xl">
                        <span className="text-gold-primary">4</span>
                        <span className="text-holz-accent">0</span>
                        <span className="text-gold-primary">4</span>
                    </div>

                    {/* Wooden divider */}
                    <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-holz-dark via-holz-medium to-holz-dark" />

                    <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                        Seite nicht gefunden
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                        Die Seite, die Du suchst, existiert leider nicht mehr oder
                        wurde verschoben. Aber keine Sorge – hier findest Du garantiert,
                        was Du suchst:
                    </p>

                    {/* Quick links */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link href="/" className="btn-gold">
                            ← Zur Startseite
                        </Link>
                        <Link href="/#check24-vergleiche" className="btn-outline">
                            Jetzt vergleichen
                        </Link>
                    </div>

                    {/* Category shortcuts */}
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                        {[
                            { href: "/#check24-vergleiche", icon: "🚗", label: "Kfz-Versicherung" },
                            { href: "/#check24-vergleiche", icon: "⚡", label: "Stromvergleich" },
                            { href: "/#check24-vergleiche", icon: "🌐", label: "DSL & Internet" },
                            { href: "/#check24-vergleiche", icon: "💰", label: "Kredite" },
                            { href: "/#check24-vergleiche", icon: "🛡️", label: "Krankenversicherung" },
                        ].map((cat, i) => (
                            <Link
                                key={i}
                                href={cat.href}
                                className="card-base card-holz-border flex flex-col items-center p-3 transition-all hover:-translate-y-1"
                            >
                                <span className="text-2xl">{cat.icon}</span>
                                <span className="mt-1 text-xs font-medium text-zinc-400">
                                    {cat.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Humor */}
                    <p className="mt-10 text-sm text-zinc-600">
                        🐾 Keine Panik – selbst die besten Spürnasen verlieren mal die Spur.
                    </p>
                </div>
            </section>
        </div>
    )
}
