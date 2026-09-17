import type { Metadata } from "next"
import Link from "next/link"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { SEO_CONFIG, generateOrganizationSchema } from "@/lib/seo"
import { initCategories } from "@/lib/categories-index"
import { initBlogPosts } from "@/lib/blog-posts"
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate-links"
import Footer from "@/components/layout/Footer"
import AdBannerDuo from "@/components/affiliate/AdBannerDuo"
import AmazonDealBar from "@/components/affiliate/AmazonDealBar"
import AmazonStickyBanner from "@/components/affiliate/AmazonStickyBanner"

// Initialize all categories and blog posts on app load
initCategories()
initBlogPosts()

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const ogImageUrl = `${SEO_CONFIG.baseUrl}/images/og-default.jpg`

export const metadata: Metadata = {
  title: {
    default: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    template: `%s | BudgetScout.de`,
  },
  description: `Vergleichen Sie Kfz-Versicherung, Stromtarife, DSL, Kredite und Krankenversicherung. Aktuelle Vergleiche für ${SEO_CONFIG.currentYear}. Jetzt bis zu 500€ sparen!`,
  keywords: [
    "CHECK24",
    "Vergleich",
    "Kfz-Versicherung",
    "Stromvergleich",
    "DSL-Vergleich",
    "Kreditvergleich",
    "Krankenversicherung",
    `Vergleich ${SEO_CONFIG.currentYear}`,
  ],
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kfz-Versicherung, Stromtarife, DSL, Kredite und Krankenversicherung. Aktuelle Vergleiche für ${SEO_CONFIG.currentYear}.`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.baseUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "BudgetScout.de – Vergleiche & Sparen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kfz-Versicherung, Stromtarife, DSL, Kredite und Krankenversicherung.`,
    images: [ogImageUrl],
    site: SEO_CONFIG.twitterHandle,
    creator: SEO_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: SEO_CONFIG.googleVerification,
  },
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
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SEO_CONFIG.siteName,
              url: SEO_CONFIG.baseUrl,
              description: `Aktuelle Vergleiche für ${SEO_CONFIG.currentYear}`,
              inLanguage: "de",
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        {/* GA4 – Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID || "00000000000"}");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-text-primary">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-primary focus:text-surface focus:rounded"
        >
          Zum Hauptinhalt springen
        </a>

        {/* ─── Header / Navigation ─────────────────────────────────────── */}
        <header className="sticky top-0 z-40 w-full border-b border-gold-accent/40 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight">
              <span className="text-gold-primary">Budget</span>
              <span className="text-text-primary">Scout</span>
              <span className="text-xs font-normal text-zinc-500 ml-1">.de</span>
            </Link>
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link
                href="/#check24-vergleiche"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-gold-primary"
              >
                Vergleiche
              </Link>
              <Link
                href="/#digistore-deals"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-gold-primary"
              >
                Deals
              </Link>
              <Link
                href="/#ratgeber"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-gold-primary"
              >
                Ratgeber
              </Link>
              <a
                href="/ueber-uns"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-gold-primary"
              >
                Über uns
              </a>
              <a
                href="/kontakt"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-gold-primary"
              >
                Kontakt
              </a>
            </div>
            {/* Mobile menu placeholder — simple anchor for now */}
            <div className="md:hidden">
              <a
                href="#check24-vergleiche"
                className="btn-gold text-sm !px-4 !py-2"
              >
                Vergleichen
              </a>
            </div>
          </nav>
        </header>

        {/* ─── Amazon-Partner-Banner (auf jeder Route) ─────────────────── */}
        <AmazonDealBar />

        {/* ─── Main Content ─────────────────────────────────────────────── */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* ─── Mobiler Amazon-CTA (Unterseiten) ────────────────────────── */}
        <AmazonStickyBanner />

        {/* ─── Werbebanner: Digistore24 + Amazon (auf jeder Route) ─────── */}
        <AdBannerDuo />

        {/* ─── Footer ───────────────────────────────────────────────────── */}
        <Footer />
      </body>
    </html>
  )
}
