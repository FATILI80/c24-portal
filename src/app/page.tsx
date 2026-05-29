import type { Metadata } from "next"
import Image from "next/image"
import { getAllCategories } from "@/lib/content-loader"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"
import { SAMPLE_STROM_GAS_TABLE, SAMPLE_KREDITKARTEN_TABLE } from "@/lib/sample-data"

export const metadata: Metadata = generatePageMetadata(
  buildSEOData({
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kreditkarten, Stromtarife, DSL, Versicherungen und mehr. Aktuelle Tests und Vergleiche für ${SEO_CONFIG.currentYear}. Jetzt bis zu 500€ sparen!`,
    slug: "",
    keywords: [
      "CHECK24",
      "Vergleich",
      "Kreditkartenvergleich",
      "Stromvergleich",
      `Vergleich ${SEO_CONFIG.currentYear}`,
    ],
    ogType: "website",
  })
)

export default function HomePage() {
  const categories = getAllCategories()

  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Der beste Vergleich für{" "}
              <span className="text-yellow-300">{SEO_CONFIG.currentYear}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl">
              Vergleichen Sie Kreditkarten, Stromtarife, DSL, Versicherungen,
              Tagesgeld und mehr. Unabhängig, transparent und kostenlos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kategorien"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors"
              >
                Kategorien entdecken
              </a>
              <a
                href="/blog"
                className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Blog lesen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Category Grid ────────────────────────────────────────── */}
      <section id="kategorien" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Alle Vergleichskategorien
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Wählen Sie Ihre Kategorie und vergleichen Sie die besten Angebote.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/kategorien/${category.id}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950">
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {category.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {category.shortName}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  Jetzt vergleichen
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Comparison Preview ──────────────────────────── */}
      <section className="bg-zinc-50 py-16 sm:py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Top-Vergleiche
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Die besten Produkte und Tarife im Überblick.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Strom/Gas Comparison Preview */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                ⚡ Stromtarife
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                      <th className="py-2 text-left font-medium text-zinc-600 dark:text-zinc-400">Anbieter</th>
                      <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Jahreskosten</th>
                      <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_STROM_GAS_TABLE.rows.slice(0, 3).map((row) => (
                      <tr key={row.name} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3">
                          <div className="font-medium text-zinc-900 dark:text-zinc-50">{row.name}</div>
                          <div className="text-xs text-zinc-500">{row.description}</div>
                        </td>
                        <td className="py-3 text-right font-medium text-zinc-900 dark:text-zinc-50">
                          {typeof row.values.jahreskosten === "number"
                            ? `${row.values.jahreskosten.toFixed(2)} €`
                            : row.values.jahreskosten}
                        </td>
                        <td className="py-3 text-right text-green-600 font-medium">
                          {typeof row.values.wechselbonus === "number"
                            ? `${row.values.wechselbonus} €`
                            : row.values.wechselbonus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="/kategorien/strom-gas"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Alle Stromtarife vergleichen &rarr;
              </a>
            </div>

            {/* Kreditkarten Comparison Preview */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                💳 Kreditkarten
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                      <th className="py-2 text-left font-medium text-zinc-600 dark:text-zinc-400">Karte</th>
                      <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Jahresgebühr</th>
                      <th className="py-2 text-right font-medium text-zinc-600 dark:text-zinc-400">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_KREDITKARTEN_TABLE.rows.slice(0, 3).map((row) => (
                      <tr key={row.name} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3">
                          <div className="font-medium text-zinc-900 dark:text-zinc-50">{row.name}</div>
                          <div className="text-xs text-zinc-500">{row.description}</div>
                        </td>
                        <td className="py-3 text-right font-medium text-zinc-900 dark:text-zinc-50">
                          {typeof row.values.jahresgebuehr === "number" && row.values.jahresgebuehr === 0
                            ? "Kostenlos"
                            : `${row.values.jahresgebuehr} €`}
                        </td>
                        <td className="py-3 text-right text-green-600 font-medium">
                          {typeof row.values.bonus === "number" && row.values.bonus > 0
                            ? `${row.values.bonus} €`
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="/kategorien/kreditkarten"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Alle Kreditkarten vergleichen &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features / Trust Signals ─────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl dark:bg-green-950">
                ✓
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Unabhängig
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Unsere Vergleiche sind redaktionell unabhängig und basieren auf aktuellen Daten.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-950">
                🔒
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Sicher
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Ihre Daten werden vertraulich behandelt. Keine Weitergabe an Dritte.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl dark:bg-yellow-950">
                💰
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Kostenlos
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Der Vergleich ist für Sie kostenlos. Wir finanzieren uns über CHECK24-Provisionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Bereit zu sparen?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Starten Sie jetzt Ihren Vergleich und finden Sie die besten Angebote.
          </p>
          <a
            href="#kategorien"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors"
          >
            Jetzt vergleichen
          </a>
        </div>
      </section>
    </div>
  )
}
