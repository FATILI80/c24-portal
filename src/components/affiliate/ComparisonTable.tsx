import type { ComparisonTable as ComparisonTableType } from "@/types/affiliate"
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate-links"

interface ComparisonTableProps {
    table: ComparisonTableType
    showDisclosure?: boolean
}

/**
 * Renders a comparison table with dynamic columns and rows.
 * Handles formatting for price, percentage, rating, and boolean value types.
 */
export default function ComparisonTable({
    table,
    showDisclosure = true,
}: ComparisonTableProps) {
    if (!table.columns.length || !table.rows.length) {
        return (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-zinc-500 dark:text-zinc-400">
                    Für diese Kategorie liegen noch keine Vergleichsdaten vor.
                </p>
            </div>
        )
    }

    return (
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            {/* Table Title */}
            {table.title && (
                <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {table.title}
                    </h3>
                </div>
            )}

            {/* Scrollable Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    {/* Header */}
                    <thead>
                        <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                            {table.columns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ${col.highlighted
                                            ? "bg-green-50 dark:bg-green-950"
                                            : ""
                                        }`}
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {table.rows.map((row, rowIndex) => (
                            <tr
                                key={`${row.name}-${rowIndex}`}
                                className={`border-b border-zinc-100 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 ${row.recommended
                                        ? "bg-green-50/50 dark:bg-green-950/20"
                                        : ""
                                    }`}
                            >
                                {table.columns.map((col) => {
                                    const value = row.values[col.key]
                                    return (
                                        <td
                                            key={col.key}
                                            className={`px-4 py-3 ${col.highlighted
                                                    ? "bg-green-50/50 dark:bg-green-950/30 font-medium"
                                                    : ""
                                                }`}
                                        >
                                            <div className="flex flex-col gap-1">
                                                {/* Product name and description */}
                                                {col.key === table.columns[0]?.key && (
                                                    <>
                                                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                                            {row.name}
                                                        </span>
                                                        {row.description && (
                                                            <span className="text-xs text-zinc-500">
                                                                {row.description}
                                                            </span>
                                                        )}
                                                    </>
                                                )}

                                                {/* Badge */}
                                                {col.key === table.columns[0]?.key && row.badge && (
                                                    <span className="mt-1 inline-flex w-fit rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                                        {row.badge}
                                                    </span>
                                                )}

                                                {/* Value formatting based on type */}
                                                {col.key !== table.columns[0]?.key && (
                                                    <FormatValue value={value} type={col.type} />
                                                )}
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            {table.footer && (
                <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-3 dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {table.footer}
                    </p>
                </div>
            )}

            {/* Pros/Cons for each row */}
            {table.rows.some((r) => (r.pros?.length ?? 0) > 0 || (r.cons?.length ?? 0) > 0) && (
                <div className="divide-y divide-zinc-100 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                    {table.rows
                        .filter((r) => (r.pros?.length ?? 0) > 0 || (r.cons?.length ?? 0) > 0)
                        .map((row, index) => (
                            <div key={`pc-${index}`} className="px-6 py-4">
                                <p className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                    {row.name}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {row.pros && row.pros.length > 0 && (
                                        <ul className="space-y-1">
                                            {row.pros.map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-green-700 dark:text-green-400">
                                                    <span className="mt-0.5">✓</span>
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {row.cons && row.cons.length > 0 && (
                                        <ul className="space-y-1">
                                            {row.cons.map((con, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-red-600 dark:text-red-400">
                                                    <span className="mt-0.5">✗</span>
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            )}

            {/* Disclosure */}
            {showDisclosure && (
                <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-3 dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        {table.disclosure || AFFILIATE_DISCLOSURE_SHORT}
                    </p>
                </div>
            )}
        </div>
    )
}

// ─── Value Formatter ───────────────────────────────────────────────────────

function FormatValue({
    value,
    type,
}: {
    value: string | number | boolean | undefined | null
    type?: string
}) {
    if (value === undefined || value === null) {
        return <span className="text-zinc-300 dark:text-zinc-600">&mdash;</span>
    }

    switch (type) {
        case "price": {
            const num = typeof value === "number" ? value : Number(value)
            if (isNaN(num)) return <span>{String(value)}</span>
            if (num === 0) return <span className="text-green-600 dark:text-green-400 font-medium">Kostenlos</span>
            return (
                <span className="font-medium tabular-nums">
                    {num.toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2,
                    })}
                </span>
            )
        }

        case "percentage": {
            const num = typeof value === "number" ? value : Number(value)
            if (isNaN(num)) return <span>{String(value)}</span>
            return (
                <span className="font-medium tabular-nums">
                    {num.toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                    %
                </span>
            )
        }

        case "rating": {
            const num = typeof value === "number" ? value : Number(value)
            if (isNaN(num)) return <span>{String(value)}</span>
            return (
                <span className="tabular-nums font-medium">
                    {num.toFixed(1)}
                    <span className="text-yellow-500">★</span>
                </span>
            )
        }

        case "boolean":
            return value === true || value === "true" ? (
                <span className="text-green-600 dark:text-green-400">✓ Ja</span>
            ) : (
                <span className="text-red-600 dark:text-red-400">✗ Nein</span>
            )

        default:
            return <span className="text-zinc-900 dark:text-zinc-50">{String(value)}</span>
    }
}
