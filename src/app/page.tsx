import type { Metadata } from "next"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"
import HomeClient from "@/components/home/HomeClient"

export const metadata: Metadata = generatePageMetadata(
  buildSEOData({
    title: `BudgetScout.de – Vergleiche & Sparen ${SEO_CONFIG.currentYear}`,
    description: `Vergleichen Sie Kfz-Versicherung, Stromtarife, DSL, Kredite und Krankenversicherung. Aktuelle Vergleiche für ${SEO_CONFIG.currentYear}. Jetzt bis zu 500€ sparen!`,
    slug: "",
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
    ogType: "website",
  })
)

export default function HomePage() {
  return <HomeClient />
}
