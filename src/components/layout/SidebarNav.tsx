"use client"

import { usePathname } from "next/navigation"

interface SidebarCategory {
    id: string
    name: string
    shortName?: string
    icon: string
}

interface SidebarNavProps {
    categories: SidebarCategory[]
}

export default function SidebarNav({ categories }: SidebarNavProps) {
    const pathname = usePathname()

    const isActive = (categoryId: string) => pathname === `/kategorien/${categoryId}`

    return (
        <>
            {/* ─── Desktop Sidebar ─────────────────────────────────────────── */}
            <aside className="fixed left-0 top-0 z-50 hidden h-full w-16 flex-col items-center border-r border-amber-900/20 bg-zinc-950/90 backdrop-blur-xl md:flex">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/30 via-yellow-500/50 to-amber-500/30" />

                {/* Logo mini */}
                <a
                    href="/"
                    className="flex h-16 w-full items-center justify-center border-b border-amber-900/20 transition-colors hover:bg-amber-950/30"
                >
                    <span className="text-lg">🐷</span>
                </a>

                {/* Category navigation */}
                <nav className="flex flex-1 flex-col items-center gap-1 py-4">
                    {categories.map((cat) => (
                        <a
                            key={cat.id}
                            href={`/kategorien/${cat.id}`}
                            title={cat.name}
                            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-all duration-200 ${isActive(cat.id)
                                ? "bg-amber-950/60 text-amber-400 shadow-sm shadow-amber-900/20"
                                : "text-zinc-500 hover:bg-zinc-800/50 hover:text-amber-400"
                                }`}
                        >
                            {cat.icon}
                            {/* Tooltip */}
                            <span className="absolute left-full ml-3 whitespace-nowrap rounded-lg border border-amber-800/30 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-amber-400 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                                {cat.name}
                                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-950" />
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Bottom links */}
                <div className="flex flex-col items-center gap-1 border-t border-amber-900/20 py-3">
                    <a
                        href="/deals"
                        title="Deals"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-base text-zinc-500 transition-all hover:bg-zinc-800/50 hover:text-amber-400"
                    >
                        🔥
                    </a>
                    <a
                        href="/blog"
                        title="Blog"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-base text-zinc-500 transition-all hover:bg-zinc-800/50 hover:text-amber-400"
                    >
                        📖
                    </a>
                </div>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/30 via-yellow-500/50 to-amber-500/30" />
            </aside>

            {/* ─── Mobile Bottom Navigation ────────────────────────────────── */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-amber-900/30 bg-zinc-950/95 backdrop-blur-xl px-2 py-2 md:hidden">
                {categories.slice(0, 4).map((cat) => (
                    <a
                        key={cat.id}
                        href={`/kategorien/${cat.id}`}
                        className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs transition-all ${isActive(cat.id)
                            ? "bg-amber-950/50 text-amber-400"
                            : "text-zinc-500 hover:text-amber-400"
                            }`}
                    >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-[10px]">{cat.shortName || cat.name.split(" ")[0]}</span>
                    </a>
                ))}
                <a
                    href="/deals"
                    className="flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs text-zinc-500 transition-all hover:text-amber-400"
                >
                    <span className="text-lg">🔥</span>
                    <span className="text-[10px]">Deals</span>
                </a>
                <a
                    href="/blog"
                    className="flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs text-zinc-500 transition-all hover:text-amber-400"
                >
                    <span className="text-lg">📖</span>
                    <span className="text-[10px]">Blog</span>
                </a>
            </nav>
        </>
    )
}

