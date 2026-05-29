import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SEO_CONFIG } from "@/lib/seo"
import { initCategories } from "@/lib/categories-index"
import { initBlogPosts } from "@/lib/blog-posts"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"

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
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Zum Hauptinhalt springen
        </a>

        {/* Header placeholder — will be replaced with Header.tsx component */}
        <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/95">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <span className="text-blue-600">Budget</span>
              <span className="text-zinc-600 dark:text-zinc-400">Scout</span>
              <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                CHECK24
              </span>
            </a>
            <div className="hidden md:flex md:items-center md:gap-6">
              <a href="/kategorien/finanzen" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Finanzen
              </a>
              <a href="/kategorien/energie" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Energie
              </a>
              <a href="/kategorien/telecom" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Telecom
              </a>
              <a href="/blog" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Blog
              </a>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Kategorien
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/kategorien/finanzen" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Finanzen</a></li>
                  <li><a href="/kategorien/energie" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Energie</a></li>
                  <li><a href="/kategorien/versicherungen" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Versicherungen</a></li>
                  <li><a href="/kategorien/telecom" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Telecom</a></li>
                  <li><a href="/kategorien/reisen" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Reisen</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Blog
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/blog" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Alle Artikel</a></li>
                  <li><a href="/blog/kreditkarten-vergleich-2026" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Kreditkarten-Vergleich 2026</a></li>
                  <li><a href="/blog/stromtarif-vergleich-2026" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Stromtarif-Vergleich 2026</a></li>
                  <li><a href="/blog/tagesgeld-top-zinsen-2026" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Tagesgeld Top-Zinsen 2026</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Rechtliches
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/impressum" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Impressum</a></li>
                  <li><a href="/datenschutz" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Datenschutz</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Über uns
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/ueber-uns" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Über dieses Portal</a></li>
                </ul>
              </div>
            </div>
            {/* Affiliate Disclosure in Footer */}
            <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {AFFILIATE_DISCLOSURE_TEXT}
              </p>
              <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
                &copy; {SEO_CONFIG.currentYear} BudgetScout.de – CHECK24 Partner. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
