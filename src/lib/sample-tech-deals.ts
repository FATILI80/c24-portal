// ============================================================================
// Sample Tech Deals — Amazon Affiliate Products (Säule C)
// ============================================================================
// Laptops, Monitore und Zubehör für die /deals Seite.
// Diese Daten werden später durch die Amazon Product Advertising API ersetzt.
// ============================================================================

import type { AmazonProduct } from "@/types/affiliate"

// ─── Affiliate-Konfiguration ──────────────────────────────────────────────
// TODO: Durch echte Amazon PartnerNet-ID ersetzen
const AMAZON_PARTNER_ID = "budgetscout02-21"
const AMAZON_BASE = "https://www.amazon.de/dp"

function amazonUrl(asin: string): string {
    return `${AMAZON_BASE}/${asin}?tag=${AMAZON_PARTNER_ID}`
}

// ─── Laptops ──────────────────────────────────────────────────────────────

const LAPTOPS: AmazonProduct[] = [
    {
        id: "lenovo-ideapad-1",
        title: 'Lenovo IdeaPad 1 15ALC7',
        description:
            "15,6-Zoll-Laptop mit AMD Ryzen 5, 16 GB RAM, 512 GB SSD – perfekt für Homeoffice und Studium.",
        imageUrl: "/images/deals/lenovo-ideapad.jpg",
        price: 399,
        originalPrice: 549,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0BQ9Q9Q9Q"),
        category: "laptop",
        rating: 4.3,
        reviewCount: 2847,
        badge: "-27%",
        features: [
            "AMD Ryzen 5 5500U",
            "16 GB DDR4 RAM",
            "512 GB SSD",
            "Full-HD Display",
            "Windows 11 Home",
        ],
    },
    {
        id: "hp-pavilion-15",
        title: 'HP Pavilion 15-eg3001ng',
        description:
            "Vielseitiger 15,6-Zoll-Laptop mit Intel Core i5, 16 GB RAM und IR-Webcam für Gesichtserkennung.",
        imageUrl: "/images/deals/hp-pavilion.jpg",
        price: 599,
        originalPrice: 749,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0C4Y8Y8Y8"),
        category: "laptop",
        rating: 4.5,
        reviewCount: 1632,
        badge: "Bestseller",
        features: [
            "Intel Core i5-1235U",
            "16 GB DDR4 RAM",
            "512 GB SSD",
            "15,6\" Full-HD IPS",
            "IR-Webcam + Fingerabdruck",
        ],
    },
    {
        id: "dell-inspiron-16",
        title: 'Dell Inspiron 16 5635',
        description:
            "Großzügiges 16-Zoll-Display mit AMD Ryzen 7 für anspruchsvolle Multitasking-Anwender.",
        imageUrl: "/images/deals/dell-inspiron.jpg",
        price: 749,
        originalPrice: 899,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0C6Z6Z6Z6"),
        category: "laptop",
        rating: 4.4,
        reviewCount: 915,
        badge: "-17%",
        features: [
            "AMD Ryzen 7 7730U",
            "16 GB DDR4 RAM",
            "1 TB SSD",
            "16\" 16:10 WUXGA",
            "Aluminium-Gehäuse",
        ],
    },
    {
        id: "asus-vivobook-15",
        title: 'ASUS Vivobook 15 X1504ZA',
        description:
            "Leichter 15,6-Zoll-Laptop mit Intel Core i3 für Alltag und Büro zum kleinen Preis.",
        imageUrl: "/images/deals/asus-vivobook.jpg",
        price: 349,
        originalPrice: 449,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0BZ4Z4Z4Z"),
        category: "laptop",
        rating: 4.2,
        reviewCount: 3561,
        badge: "Preis-Tipp",
        features: [
            "Intel Core i3-1215U",
            "8 GB DDR4 RAM",
            "256 GB SSD",
            "15,6\" Full-HD",
            "1,7 kg leicht",
        ],
    },
    {
        id: "macbook-air-m2",
        title: 'Apple MacBook Air M2 (2024)',
        description:
            "Das ultimative Premium-Notebook mit M2-Chip, 15,3-Zoll-Liquid-Retina-Display und atemberaubender Akkulaufzeit.",
        imageUrl: "/images/deals/macbook-air-m2.jpg",
        price: 1249,
        originalPrice: 1499,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0CB8Y8Y8Y"),
        category: "laptop",
        rating: 4.7,
        reviewCount: 8421,
        badge: "Top bewertet",
        features: [
            "Apple M2 Chip (8-Core)",
            "16 GB Unified Memory",
            "256 GB SSD",
            "15,3\" Liquid Retina",
            "Bis zu 18h Akku",
        ],
    },
    {
        id: "acer-swift-3",
        title: 'Acer Swift 3 SF314-512',
        description:
            "Kompaktes 14-Zoll-Notebook mit Intel Evo-Plattform und langer Akkulaufzeit für unterwegs.",
        imageUrl: "/images/deals/acer-swift-3.jpg",
        price: 649,
        originalPrice: 799,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0BZ8Z8Z8Z"),
        category: "laptop",
        rating: 4.3,
        reviewCount: 1247,
        badge: "Evo-zertifiziert",
        features: [
            "Intel Core i5-1340P (Evo)",
            "16 GB LPDDR5 RAM",
            "512 GB SSD",
            "14\" 2K IPS",
            "1,2 kg Leichtbau",
        ],
    },
]

// ─── Monitore ─────────────────────────────────────────────────────────────

const MONITORE: AmazonProduct[] = [
    {
        id: "lg-27gp850",
        title: 'LG 27GP850-B UltraGear',
        description:
            "27-Zoll-QHD-Gaming-Monitor mit 165 Hz, 1 ms Reaktionszeit und Nano-IPS-Panel für farbtreue Darstellung.",
        imageUrl: "/images/deals/lg-27gp850.jpg",
        price: 349,
        originalPrice: 449,
        currency: "EUR",
        affiliateUrl: amazonUrl("B09H9Z9Z9Z"),
        category: "monitor",
        rating: 4.6,
        reviewCount: 4192,
        badge: "Bestseller",
        features: [
            "27\" QHD (2560x1440)",
            "165 Hz / 1 ms",
            "Nano-IPS Panel",
            "HDR10 / DCI-P3 98%",
            "Höhenverstellbar",
        ],
    },
    {
        id: "dell-s2722qc",
        title: 'Dell S2722QC 4K USB-C',
        description:
            "27-Zoll-4K-USB-C-Monitor mit integrierten Lautsprechern und hervorragender Bildqualität fürs Homeoffice.",
        imageUrl: "/images/deals/dell-s2722qc.jpg",
        price: 399,
        originalPrice: 529,
        currency: "EUR",
        affiliateUrl: amazonUrl("B09T9T9T9T"),
        category: "monitor",
        rating: 4.5,
        reviewCount: 2834,
        badge: "-25%",
        features: [
            "27\" 4K UHD (3840x2160)",
            "USB-C 65W PD",
            "2x 3W Lautsprecher",
            "IPS Panel",
            "VESA kompatibel",
        ],
    },
    {
        id: "samsung-odyssey-g5",
        title: 'Samsung Odyssey G5 G50D',
        description:
            "32-Zoll-WQHD-Curved-Gaming-Monitor mit 165 Hz und 1 ms für immersives Gaming-Erlebnis.",
        imageUrl: "/images/deals/samsung-odyssey-g5.jpg",
        price: 329,
        originalPrice: 429,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0CQ9Q9Q9Q"),
        category: "monitor",
        rating: 4.4,
        reviewCount: 1876,
        badge: "Curved",
        features: [
            "32\" WQHD (2560x1440)",
            "165 Hz / 1 ms",
            "1000R Curved VA",
            "HDR10 / FreeSync",
            "HDMI 2.1 + DP 1.4",
        ],
    },
    {
        id: "lg-24mk430h",
        title: 'LG 24MK430H-B',
        description:
            "Günstiger 24-Zoll-Full-HD-Monitor mit IPS-Panel für Büro und Alltag zum absoluten Sparpreis.",
        imageUrl: "/images/deals/lg-24mk430h.jpg",
        price: 99,
        originalPrice: 139,
        currency: "EUR",
        affiliateUrl: amazonUrl("B07Y9Y9Y9Y"),
        category: "monitor",
        rating: 4.3,
        reviewCount: 5632,
        badge: "Preis-Tipp",
        features: [
            "24\" Full-HD (1920x1080)",
            "IPS Panel",
            "75 Hz",
            "AMD FreeSync",
            "HDMI + D-Sub",
        ],
    },
]

// ─── Zubehör ──────────────────────────────────────────────────────────────

const ZUBEHOER: AmazonProduct[] = [
    {
        id: "logitech-mx-master-3s",
        title: 'Logitech MX Master 3S',
        description:
            "Kabellose Performance-Maus mit 8000-DPI-Sensor, leisen Klicks und USB-C-Ladung – die meistverkaufte Büromaus.",
        imageUrl: "/images/deals/logitech-mx-master-3s.jpg",
        price: 89,
        originalPrice: 119,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0B6B6B6B6"),
        category: "zubehoer",
        rating: 4.7,
        reviewCount: 9241,
        badge: "Bestseller",
        features: [
            "8.000 DPI optisch",
            "Leise Klicks",
            "USB-C (bis 70 Tage)",
            "Multi-Device (3x)",
            "Ergonomisches Design",
        ],
    },
    {
        id: "logitech-c920s",
        title: 'Logitech C920s HD Pro',
        description:
            "Full-HD-Webcam mit 1080p, Stereo-Mikrofon und Privatsphäre-Abdeckung – der Klassiker für Homeoffice.",
        imageUrl: "/images/deals/logitech-c920s.jpg",
        price: 59,
        originalPrice: 89,
        currency: "EUR",
        affiliateUrl: amazonUrl("B0B4B4B4B4"),
        category: "zubehoer",
        rating: 4.5,
        reviewCount: 14231,
        badge: "-34%",
        features: [
            "Full-HD 1080p @ 30fps",
            "Stereo-Mikrofon",
            "79° Sichtfeld",
            "Autofokus",
            "Privatsphäre-Abdeckung",
        ],
    },
]

// ─── Export: Alle Produkte ───────────────────────────────────────────────

export const ALL_TECH_DEALS: AmazonProduct[] = [
    ...LAPTOPS,
    ...MONITORE,
    ...ZUBEHOER,
]

/** Get products by category */
export function getTechDealsByCategory(
    category: AmazonProduct["category"]
): AmazonProduct[] {
    return ALL_TECH_DEALS.filter((p) => p.category === category)
}

/** Get featured deals (top picks for homepage) */
export function getFeaturedTechDeals(count = 4): AmazonProduct[] {
    // Sort by rating descending, then pick top N
    return [...ALL_TECH_DEALS]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, count)
}

/** Get best-value deals (biggest discount) */
export function getBestValueDeals(count = 4): AmazonProduct[] {
    return [...ALL_TECH_DEALS]
        .filter((p) => p.originalPrice && p.originalPrice > p.price)
        .sort((a, b) => {
            const discA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100
            const discB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100
            return discB - discA
        })
        .slice(0, count)
}
