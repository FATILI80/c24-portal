"use client"

import { useState, type FormEvent } from "react"

export default function NewsletterSignup() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // Basic email validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error")
            setErrorMsg("Bitte gib eine gültige E-Mail-Adresse ein.")
            return
        }

        // Simulate success (no actual endpoint configured yet)
        setStatus("success")
        setEmail("")

        // Reset after 5 seconds
        setTimeout(() => setStatus("idle"), 5000)
    }

    return (
        <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
            {/* Wood grain background accent */}
            <div className="absolute inset-0 bg-holz-texture opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.03),transparent_60%)]" />

            <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
                {/* Section badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-holz-dark/50 px-4 py-1 text-sm font-medium text-gold-primary">
                    📬 Sparchancen sichern
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                    Keine Spar-Chance mehr verpassen
                </h2>

                <p className="mt-3 text-lg text-zinc-400">
                    Erhalte aktuelle Vergleichstipps, exklusive Deals und
                    Spar-Strategien direkt in Dein Postfach.{" "}
                    <span className="text-gold-primary font-medium">
                        Jederzeit kündbar.
                    </span>
                </p>

                {/* Form */}
                {status === "success" ? (
                    <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4">
                        <p className="text-sm font-medium text-green-400">
                            ✅ Erfolgreich eingetragen! Wir melden uns bei Dir.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                    >
                        <div className="flex-1">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (status === "error") setStatus("idle")
                                }}
                                placeholder="Deine E-Mail-Adresse"
                                className={`w-full rounded-lg border bg-card-bg px-4 py-3 text-sm text-text-primary placeholder-zinc-600 outline-none transition-all focus:ring-2 focus:ring-gold-primary/40 ${status === "error"
                                        ? "border-red-500/50"
                                        : "border-holz-accent/30 hover:border-gold-primary/30"
                                    }`}
                                aria-label="E-Mail-Adresse"
                            />
                            {status === "error" && (
                                <p className="mt-1 text-left text-xs text-red-400">
                                    {errorMsg}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn-gold shrink-0 rounded-lg px-6 py-3 text-sm font-bold"
                        >
                            Abonnieren
                        </button>
                    </form>
                )}

                {/* Trust note */}
                <p className="mt-4 text-xs text-zinc-600">
                    ✉️ Kein Spam. Maximal 2 E-Mails pro Woche. Abmeldung jederzeit
                    mit einem Klick.
                </p>
            </div>
        </section>
    )
}
