"use client"

import { useState, type FormEvent } from "react"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus("sending")

        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus("error")
            setErrorMsg("Bitte fülle alle Pflichtfelder aus.")
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error")
            setErrorMsg("Bitte gib eine gültige E-Mail-Adresse ein.")
            return
        }

        // Simulate sending (no backend configured yet)
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setStatus("success")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")

        // Reset success message after 8 seconds
        setTimeout(() => setStatus("idle"), 8000)
    }

    return (
        <form onSubmit={handleSubmit} className="card-base card-holz-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary">
                ✉️ Nachricht senden
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
                Alle Felder mit * sind Pflichtfelder.
            </p>

            <div className="mt-6 space-y-5">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-zinc-400"
                    >
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dein Name"
                        className="mt-1 w-full rounded-lg border border-holz-accent/30 bg-card-bg px-4 py-2.5 text-sm text-text-primary placeholder-zinc-600 outline-none transition-all focus:border-gold-primary/50 focus:ring-2 focus:ring-gold-primary/20"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-400"
                    >
                        E-Mail *
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine@email.de"
                        className="mt-1 w-full rounded-lg border border-holz-accent/30 bg-card-bg px-4 py-2.5 text-sm text-text-primary placeholder-zinc-600 outline-none transition-all focus:border-gold-primary/50 focus:ring-2 focus:ring-gold-primary/20"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-zinc-400"
                    >
                        Betreff
                    </label>
                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Optional: Worum geht es?"
                        className="mt-1 w-full rounded-lg border border-holz-accent/30 bg-card-bg px-4 py-2.5 text-sm text-text-primary placeholder-zinc-600 outline-none transition-all focus:border-gold-primary/50 focus:ring-2 focus:ring-gold-primary/20"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-zinc-400"
                    >
                        Nachricht *
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Deine Nachricht an uns..."
                        className="mt-1 w-full resize-y rounded-lg border border-holz-accent/30 bg-card-bg px-4 py-2.5 text-sm text-text-primary placeholder-zinc-600 outline-none transition-all focus:border-gold-primary/50 focus:ring-2 focus:ring-gold-primary/20"
                    />
                </div>

                {/* Status feedback */}
                {status === "success" && (
                    <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
                        <p className="text-sm font-medium text-green-400">
                            ✅ Nachricht erfolgreich gesendet! Wir melden uns innerhalb
                            von 24 Stunden bei Dir.
                        </p>
                    </div>
                )}

                {status === "error" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                        <p className="text-sm font-medium text-red-400">
                            ⚠️ {errorMsg}
                        </p>
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-gold w-full disabled:opacity-60"
                >
                    {status === "sending" ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-surface border-t-transparent" />
                            Wird gesendet...
                        </span>
                    ) : (
                        "Nachricht senden"
                    )}
                </button>

                <p className="text-xs text-zinc-600">
                    Mit dem Absenden erklärst Du Dich mit der Verarbeitung Deiner
                    Daten zur Bearbeitung Deiner Anfrage einverstanden.{" "}
                    <a href="/datenschutz" className="text-gold-primary underline">
                        Datenschutzerklärung
                    </a>
                    .
                </p>
            </div>
        </form>
    )
}
