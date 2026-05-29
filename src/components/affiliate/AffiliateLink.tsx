import type { AffiliateLink as AffiliateLinkType } from "@/types/affiliate"
import { getAffiliateLinkAttributes } from "@/lib/affiliate-links"

interface AffiliateLinkProps {
    link: AffiliateLinkType
    children?: React.ReactNode
    className?: string
    /** Show external link indicator icon */
    showExternalIcon?: boolean
    /** Variant style */
    variant?: "primary" | "secondary" | "outline"
}

const variantStyles: Record<string, string> = {
    primary:
        "inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors",
    secondary:
        "inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
    outline:
        "inline-flex items-center justify-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
}

/**
 * Renders an affiliate link as a styled anchor element.
 * Automatically applies nofollow, noopener, noreferrer for SEO compliance.
 */
export default function AffiliateLink({
    link,
    children,
    className = "",
    showExternalIcon = true,
    variant = "primary",
}: AffiliateLinkProps) {
    const attrs = getAffiliateLinkAttributes()

    return (
        <a
            href={link.url}
            {...attrs}
            className={`${variantStyles[variant]} ${className}`}
            data-subid={link.subid}
        >
            {children || "Jetzt vergleichen"}
            {showExternalIcon && (
                <svg
                    className="ml-2 h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
            )}
        </a>
    )
}
