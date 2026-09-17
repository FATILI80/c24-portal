import Link from "next/link"
import {
    AFFILIATE_DISCLOSURE_TEXT,
    AMAZON_DISCLOSURE_SHORT,
} from "@/lib/affiliate-links"
import { SEO_CONFIG } from "@/lib/seo"
import {
    AMAZON_PRODUCT_BUDGET_PLANNER,
    AMAZON_PRODUCT_ENERGY_METER,
    AMAZON_PRODUCT_THERMOSTAT,
    getAmazonProductUrl,
} from "@/lib/amazon-products"

// ─── Link Data ─────────────────────────────────────────────────────────────

const COMPARISON_LINKS = [
    { href: "https://www.check24.de/kfz-versicherung/", label: "Kfz-Versicherung" },
    { href: "https://www.check24.de/strom/", label: "Stromvergleich" },
    { href: "https://www.check24.de/dsl/", label: "DSL & Internet" },
    { href: "https://www.check24.de/kredit/", label: "Kreditvergleich" },
    { href: "https://www.check24.de/krankenversicherung/", label: "Krankenversicherung" },
] as const

const SERVICE_LINKS = [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/blog", label: "Ratgeber & Blog" },
    { href: "/mediadaten", label: "Mediadaten" },
    { href: "/kontakt", label: "Kontakt" },
] as const

/**
 * Legal pages. These are linked twice on purpose: once in the "Rechtliches"
 * column and once in the always-visible legal bar at the very bottom.
 * Both are reachable from every page because this footer is rendered by the
 * root layout (`src/app/layout.tsx`).
 */
const LEGAL_LINKS = [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/affiliate-hinweis", label: "Affiliate-Hinweis" },
] as const

/**
 * Kuratierte Amazon-Spargadgets. Diese Links stehen über die im Root-Layout
 * eingebundene Fußzeile auf jeder Seite zur Verfügung – inklusive aller
 * Untermenüs (Vergleiche, Ratgeber, Blog, Deals und Rechtstexte).
 */
const AMAZON_GADGET_LINKS = [
    {
        label: "Energiekosten-Messgerät",
        href: getAmazonProductUrl(
            AMAZON_PRODUCT_ENERGY_METER,
            "footer-energiekosten-messgeraet"
        ),
    },
    {
        label: "Smartes Heizkörperthermostat",
        href: getAmazonProductUrl(
            AMAZON_PRODUCT_THERMOSTAT,
            "footer-smart-thermostat"
        ),
    },
    {
        label: "Budget-Planer (Haushaltsbuch)",
        href: getAmazonProductUrl(
            AMAZON_PRODUCT_BUDGET_PLANNER,
            "footer-budget-planer"
        ),
    },
] as const

// ─── Shared Class Names ────────────────────────────────────────────────────

const COLUMN_HEADING_CLASS = "text-sm font-semibold text-gold-primary"

const COLUMN_LINK_CLASS =
    "text-sm text-zinc-500 transition-colors hover:text-gold-primary"

const LEGAL_LINK_CLASS =
    "text-xs font-semibold text-zinc-400 underline-offset-4 transition-colors hover:text-gold-primary hover:underline"

// ─── Component ─────────────────────────────────────────────────────────────

export default function Footer() {
    return (
        <footer className="border-t border-gold-accent/30 bg-surface">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight">
                            <span className="text-gold-primary">Budget</span>
                            <span className="text-text-primary">Scout</span>
                            <span className="ml-0.5 text-xs font-normal text-zinc-500">.de</span>
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                            Unabhängige Vergleiche für Kfz-Versicherung, Strom, DSL, Kredite und Krankenversicherung.
                            Sparen mit einem Klick.
                        </p>
                    </div>

                    {/* Vergleich Column */}
                    <div>
                        <h3 className={COLUMN_HEADING_CLASS}>Vergleiche</h3>
                        <ul className="mt-4 space-y-2.5">
                            {COMPARISON_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className={COLUMN_LINK_CLASS}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Amazon Spar-Gadgets Column */}
                    <div>
                        <h3 className={COLUMN_HEADING_CLASS}>Spar-Gadgets</h3>
                        <ul className="mt-4 space-y-2.5">
                            {AMAZON_GADGET_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="sponsored nofollow noopener noreferrer"
                                        className={COLUMN_LINK_CLASS}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                            {AMAZON_DISCLOSURE_SHORT}
                        </p>
                    </div>

                    {/* Service Column */}
                    <div>
                        <h3 className={COLUMN_HEADING_CLASS}>Service</h3>
                        <ul className="mt-4 space-y-2.5">
                            {SERVICE_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={COLUMN_LINK_CLASS}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className={COLUMN_HEADING_CLASS}>Rechtliches</h3>
                        <ul className="mt-4 space-y-2.5">
                            {LEGAL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={COLUMN_LINK_CLASS}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Affiliate Disclosure, Copyright & Legal Bar */}
                <div className="mt-10 border-t border-gold-accent/30 pt-8">
                    <p className="text-xs leading-relaxed text-zinc-600">
                        {AFFILIATE_DISCLOSURE_TEXT}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                        {AMAZON_DISCLOSURE_SHORT}
                    </p>
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-zinc-600">
                            &copy; {SEO_CONFIG.currentYear} BudgetScout.de – Alle Rechte vorbehalten.
                        </p>
                        <nav
                            aria-label="Rechtliche Informationen"
                            className="flex flex-wrap items-center gap-x-4 gap-y-2"
                        >
                            {LEGAL_LINKS.map((link) => (
                                <Link key={link.href} href={link.href} className={LEGAL_LINK_CLASS}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <p className="text-xs text-zinc-700">
                            Mit ❤️ in Deutschland gemacht
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
