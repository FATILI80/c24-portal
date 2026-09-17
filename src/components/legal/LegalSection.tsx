import type { ReactNode } from "react"

interface LegalSectionProps {
    /** Anchor id – used by the table of contents on long legal pages */
    id?: string
    /** Section heading (rendered as h2) */
    title: string
    /** Section body */
    children: ReactNode
}

/**
 * Consistent card wrapper for the legal pages (Impressum, Datenschutzerklärung).
 * Uses the same dark-lounge design tokens as the rest of BudgetScout.de
 * (`card-base`, `card-holz-border`, gold headings).
 */
export default function LegalSection({ id, title, children }: LegalSectionProps) {
    return (
        <section
            id={id}
            className="card-base card-holz-border scroll-mt-24 p-6 sm:p-8"
        >
            <h2 className="text-xl font-bold text-text-primary">{title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
                {children}
            </div>
        </section>
    )
}
