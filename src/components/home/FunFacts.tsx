"use client"

import { useState, useEffect } from "react"

interface FunFact {
  emoji: string
  text: string
}

const FUN_FACTS: FunFact[] = [
  {
    emoji: "🥟",
    text: "Mit einem Stromvergleich sparst Du genug für 237 Döner im Jahr – das ist ein ganzer Döner-Urlaub!",
  },
  {
    emoji: "🅿️",
    text: "Kreditkarten ohne Gebühren gibt's häufiger als einen freien Parkplatz in Berlin – und das will was heißen!",
  },
  {
    emoji: "🍸",
    text: "Ein Tagesgeld mit 3,5% Zinsen finanziert Dir 47 Lounge-Cocktails im Jahr. Prost! 🥂",
  },
  {
    emoji: "🐄",
    text: "Unser Sparrechner hat heute schon 14 Kühe glücklich gemacht. Die machen jetzt Muh statt Muh-sen!",
  },
  {
    emoji: "☕",
    text: "DSL wechseln spart Dir 27 Latte Macchiato – oder 13 Döner. Die Qual der Wahl!",
  },
  {
    emoji: "🐌",
    text: "Versicherung wechseln ist einfacher als 'ner Schnecke beim Rennen zuzusehen – versprochen!",
  },
  {
    emoji: "🚗",
    text: "KFZ-Versicherung wechseln spart mehr als 200 Energy-Drinks. Wach bleiben & sparen!",
  },
  {
    emoji: "🦸",
    text: "Wer vergleicht, ist der Superheld seines Geldbeutels. Umhang nicht vergessen! 🦸‍♂️",
  },
  {
    emoji: "🐧",
    text: "Pinguine sparen auch – aber nur bei uns gibt's den besten Tarif und 'nen Fisch dazu!",
  },
  {
    emoji: "🛋️",
    text: "In der BudgetScout-Lounge vergleichst Du Tarife im liegen. Bequemer geht's nicht!",
  },
  {
    emoji: "🎵",
    text: "Sparen ist wie Deine Lieblingsplaylist – einmal angefangen, willste nicht mehr aufhören!",
  },
  {
    emoji: "🧊",
    text: "Unser Service ist so cool, dass selbst ein Eisberg neidisch wird. 🧊❄️",
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
    <section className="relative overflow-hidden bg-gradient-to-r from-surface via-gold-primary/5 to-surface py-10">
      {/* Subtle gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-dark/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-primary">
          💡 Lounge-Wissen des Moments
        </div>
        <div
          className={`transition-all duration-400 ${isFading ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
        >
          <span className="inline-block text-4xl" role="img" aria-label="fact icon">
            {fact.emoji}
          </span>
          <p className="mt-3 text-lg font-medium text-zinc-300">
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
              className={`h-2 rounded-full transition-all ${i === current
                ? "w-6 bg-gold-primary"
                : "w-2 bg-gold-primary/30 hover:bg-gold-primary/60"
                }`}
              aria-label={`Fact ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
