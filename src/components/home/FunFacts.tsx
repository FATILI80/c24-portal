"use client"

import { useState, useEffect } from "react"

interface FunFact {
  emoji: string
  text: string
}

const FUN_FACTS: FunFact[] = [
  {
    emoji: "🥟",
    text: "Mit einem Stromvergleich sparst Du genug für 237 Döner im Jahr!",
  },
  {
    emoji: "🅿️",
    text: "Kreditkarten ohne Gebühren gibt's häufiger als einen freien Parkplatz in Berlin!",
  },
  {
    emoji: "🐄",
    text: "Unser Sparrechner hat heute schon 14 Kühe glücklich gemacht. Muh!",
  },
  {
    emoji: "☕",
    text: "Ein Tagesgeld mit 3,5% Zinsen finanziert Dir 47 Latte Macchiato im Jahr!",
  },
  {
    emoji: "🐌",
    text: "DSL wechseln ist einfacher als eine Schnecke im Salatlauf – versprochen!",
  },
  {
    emoji: "🚗",
    text: "KFZ-Versicherung wechseln spart mehr als 200 Dosen Energy-Drinks!",
  },
  {
    emoji: "🦸",
    text: "Wer vergleicht, ist der Superheld seines Geldbeutels!",
  },
  {
    emoji: "🐧",
    text: "Pinguine sparen auch – aber nur bei uns gibt's den besten Tarif!",
  },
]

export default function FunFacts() {
  const [current, setCurrent] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % FUN_FACTS.length)
        setIsFading(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fact = FUN_FACTS[current]

  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-8 dark:from-amber-950/20 dark:to-orange-950/20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          ⚡ Fun-Fact des Moments
        </div>
        <div
          className={`transition-all duration-400 ${
            isFading ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <span className="inline-block text-4xl" role="img" aria-label="fact icon">
            {fact.emoji}
          </span>
          <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-300">
            {fact.text}
          </p>
        </div>
        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {FUN_FACTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsFading(true)
                setTimeout(() => {
                  setCurrent(i)
                  setIsFading(false)
                }, 400)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-amber-500"
                  : "bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700"
              }`}
              aria-label={`Fact ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
