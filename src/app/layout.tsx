import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SEO_CONFIG } from "@/lib/seo"
import { initCategories, getCategoryDefinitions } from "@/lib/categories-index"
import { initBlogPosts } from "@/lib/blog-posts"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"
import SidebarNav from "@/components/layout/SidebarNav"

// Initialize all categories and blog posts on app load
initCategories()
initBlogPosts()

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    template: `%s | BudgetScout.de`,
  },
  description: `Vergleichen Sie Kreditkarten, Stromtarife, DSL, Versicherungen und mehr. Aktuelle Tests und Vergleiche für ${SEO_CONFIG.currentYear}. Jetzt bis zu 500€ sparen!`,
  keywords: [
    "CHECK24",
    "Vergleich",
    "Kreditkartenvergleich",
    "Stromvergleich",
    "DSL-Vergleich",
    "KFZ-Versicherung",
    "Tagesgeld",
    "Mietwagen",
    `Vergleich ${SEO_CONFIG.currentYear}`,
  ],
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kreditkarten, Stromtarife, DSL, Versicherungen und mehr. Aktuelle Tests und Vergleiche für ${SEO_CONFIG.currentYear}.`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kreditkarten, Stromtarife, DSL, Versicherungen und mehr.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Affiliate disclosure meta tag for transparency
  other: {
    "affiliate-disclosure": AFFILIATE_DISCLOSURE_TEXT,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const categories = getCategoryDefinitions().map((cat) => ({
    id: cat.id,
    name: cat.name,
    shortName: cat.shortName,
    icon: cat.icon,
  }))

  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Affiliate Disclosure structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SEO_CONFIG.siteName,
              url: SEO_CONFIG.baseUrl,
              description: `Aktuelle Vergleiche und Tests für ${SEO_CONFIG.currentYear}`,
              inLanguage: "de",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {/* ─── Yellow Border Frame ────────────────────────────────────────── */}
        <div className="fixed inset-0 z-[9999] pointer-events-none border-[6px] border-amber-500/20 md:border-[8px] md:border-amber-500/20 animate-border-glow rounded-none" />

        {/* ─── Sidebar Navigation ─────────────────────────────────────────── */}
        <SidebarNav categories={categories} />

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-zinc-950 focus:rounded"
        >
          Zum Hauptinhalt springen
        </a>

        {/* ─── Main Content Wrapper (with sidebar padding) ────────────────── */}
        <div className="flex-1 md:pl-16 pb-16 md:pb-0">
          {/* ─── Header - BudgetScout Lounge ─────────────────────────────── */}
          <header className="sticky top-0 z-40 w-full border-b border-amber-900/20 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <a href="/" className="group flex items-center gap-2 text-xl font-bold tracking-tight">
                <span className="text-amber-400 transition-colors group-hover:text-amber-300">Budget</span>
                <span className="text-zinc-300 transition-colors group-hover:text-zinc-100">Scout</span>
                <span className="ml-2 rounded-full border border-amber-700/40 bg-amber-950/50 px-2 py-0.5 text-xs font-medium text-amber-400">
                  Lounge 🥂
                </span>
              </a>
              <div className="hidden md:flex md:items-center md:gap-6">
                <a href="/kategorien/finanzen" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-400">
                  Finanzen
                </a>
                <a href="/kategorien/energie" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-400">
                  Energie
                </a>
                <a href="/kategorien/telecom" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-400">
                  Telecom
                </a>
                <a href="/blog" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-400">
                  Blog
                </a>
                <a href="/deals" className="inline-flex items-center gap-1.5 rounded-lg border border-amber-700/40 bg-amber-950/30 px-3 py-1.5 text-sm font-medium text-amber-400 transition-all hover:bg-amber-950/60 hover:text-amber-300">
                  🔥 Deals
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* ─── Footer - BudgetScout Lounge ─────────────────────────────── */}
          <footer className="border-t border-amber-900/10 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                    🗂️ Kategorien
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/kategorien/finanzen" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Finanzen</a></li>
                    <li><a href="/kategorien/energie" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Energie</a></li>
                    <li><a href="/kategorien/versicherungen" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Versicherungen</a></li>
                    <li><a href="/kategorien/telecom" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Telecom</a></li>
                    <li><a href="/kategorien/reisen" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Reisen</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                    📖 Blog
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/blog" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Alle Artikel</a></li>
                    <li><a href="/blog/kreditkarten-vergleich-2026" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Kreditkarten-Vergleich 2026</a></li>
                    <li><a href="/blog/stromtarif-vergleich-2026" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Stromtarif-Vergleich 2026</a></li>
                    <li><a href="/blog/tagesgeld-top-zinsen-2026" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Tagesgeld Top-Zinsen 2026</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                    ⚖️ Rechtliches
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/impressum" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Impressum</a></li>
                    <li><a href="/datenschutz" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Datenschutz</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                    🐷 Über uns
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/ueber-uns" className="text-sm text-zinc-500 transition-colors hover:text-amber-400">Über dieses Portal</a></li>
                    <li className="mt-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-950/50 px-3 py-1 text-xs text-amber-500">
                        🥂 Lounge-Mitglied
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Affiliate Disclosure in Footer */}
              <div className="mt-8 border-t border-amber-900/10 pt-8">
                <p className="text-xs leading-relaxed text-zinc-600">
                  {AFFILIATE_DISCLOSURE_TEXT}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-zinc-600">
                    &copy; {SEO_CONFIG.currentYear} BudgetScout.de – Deine Spar-Lounge 🥂
                  </p>
                  <p className="text-xs text-zinc-700">
                    Mit ❤️ und 🐷 gemacht
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
