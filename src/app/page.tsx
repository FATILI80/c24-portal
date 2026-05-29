import type { Metadata } from "next"
import { getAllCategories } from "@/lib/content-loader"
import { SEO_CONFIG, generatePageMetadata, buildSEOData } from "@/lib/seo"
import HomeClient from "@/components/home/HomeClient"

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

  return <HomeClient categories={categories} />
}
