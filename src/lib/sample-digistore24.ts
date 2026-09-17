// ============================================================================
// Digistore24 Produkte — Adapter auf die zentrale Angebotsliste
// ============================================================================
// Diese Datei übersetzt die gepflegten Angebote aus `digistore-products.ts`
// in das ältere `Digistore24Product`-Modell. Damit existiert nur noch EINE
// Quelle für Digistore24-Links (inklusive Affiliate-ID und Sub-IDs).
//
// Preise und Provisionen werden hier bewusst nicht mehr geführt: sie ändern
// sich laufend und würden in der Anzeige schnell falsch werden.
// ============================================================================

import type { Digistore24Category, Digistore24Product } from "@/types/affiliate"
import {
    DIGISTORE_OFFERS,
    getDigistoreOfferUrl,
    type DigistoreOfferCategory,
} from "@/lib/digistore-products"

/** Übersetzung der Angebots-Kategorien in das ältere Produkt-Modell */
const CATEGORY_MAP: Record<DigistoreOfferCategory, Digistore24Category> = {
    finanzen: "ebook",
    gesundheit: "ebook",
    haushalt: "template",
    vorsorge: "template",
    "online-business": "course",
}

/** Alle gepflegten Digistore24-Angebote als Produkt-Liste */
export const ALL_DIGISTORE24_PRODUCTS: Digistore24Product[] =
    DIGISTORE_OFFERS.map((offer) => ({
        id: offer.id,
        title: offer.name,
        description: offer.description,
        icon: offer.icon,
        tagline: offer.claim,
        badge: offer.badge,
        vendor: "Digistore24-Partner",
        currency: "EUR",
        category: CATEGORY_MAP[offer.category],
        affiliateUrl: getDigistoreOfferUrl(offer, `produktliste-${offer.id}`),
    }))

/** Produkte einer Kategorie */
export function getDigistore24ByCategory(
    category: Digistore24Product["category"]
): Digistore24Product[] {
    return ALL_DIGISTORE24_PRODUCTS.filter((p) => p.category === category)
}

/** Empfohlene Produkte (Angebote mit Badge zuerst) */
export function getFeaturedDigistore24(count = 4): Digistore24Product[] {
    return [...ALL_DIGISTORE24_PRODUCTS]
        .sort((a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge)))
        .slice(0, count)
}

/** Human-readable category labels */
export const DIGISTORE24_CATEGORY_LABELS: Record<
    Digistore24Product["category"],
    { label: string; icon: string; description: string }
> = {
    ebook: {
        label: "E-Books & Ratgeber",
        icon: "📚",
        description: "Ratgeber & Guides zum Thema Sparen",
    },
    course: {
        label: "Online-Kurse",
        icon: "🎓",
        description: "Videokurse für finanzielle Bildung",
    },
    software: {
        label: "Software",
        icon: "⚙️",
        description: "Tools und Apps für den Geldbeutel",
    },
    template: {
        label: "Vorlagen",
        icon: "📑",
        description: "Excel, PDF & Co. für Dein Budget",
    },
}
