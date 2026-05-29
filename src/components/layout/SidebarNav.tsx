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
            <aside className="fixed left-0 top-0 z-50 hidden h-full w-16 flex-col items-center border-r border-gold-primary/20 bg-surface/90 backdrop-blur-xl md:flex">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold-primary/30 via-yellow-500/50 to-gold-primary/30" />

                {/* Logo mini */}
                <a
                    href="/"
                    className="flex h-16 w-full items-center justify-center border-b border-gold-primary/20 transition-colors hover:bg-gold-dark/30"
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
                                ? "bg-gold-dark/60 text-gold-primary shadow-sm shadow-gold-primary/20"
                                : "text-zinc-500 hover:bg-gold-accent/50 hover:text-gold-primary"
                                }`}
                        >
                            {cat.icon}
                            {/* Tooltip */}
                            <span className="absolute left-full ml-3 whitespace-nowrap rounded-lg border border-gold-primary/30 bg-surface px-3 py-1.5 text-xs font-medium text-gold-primary opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                                {cat.name}
                                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-surface" />
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Bottom links */}
                <div className="flex flex-col items-center gap-1 border-t border-gold-primary/20 py-3">
                    <a
                        href="/deals"
                        title="Deals"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-base text-zinc-500 transition-all hover:bg-gold-accent/50 hover:text-gold-primary"
                    >
                        🔥
                    </a>
                    <a
                        href="/blog"
                        title="Blog"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-base text-zinc-500 transition-all hover:bg-gold-accent/50 hover:text-gold-primary"
                    >
                        📖
                    </a>
                </div>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold-primary/30 via-yellow-500/50 to-gold-primary/30" />
            </aside>

            {/* ─── Mobile Bottom Navigation ────────────────────────────────── */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-gold-primary/30 bg-surface/95 backdrop-blur-xl px-2 py-2 md:hidden">
                {categories.slice(0, 4).map((cat) => (
                    <a
                        key={cat.id}
                        href={`/kategorien/${cat.id}`}
                        className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs transition-all ${isActive(cat.id)
                            ? "bg-gold-dark/50 text-gold-primary"
                            : "text-zinc-500 hover:text-gold-primary"
                            }`}
                    >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-[10px]">{cat.shortName || cat.name.split(" ")[0]}</span>
                    </a>
                ))}
                <a
                    href="/deals"
                    className="flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs text-zinc-500 transition-all hover:text-gold-primary"
                >
                    <span className="text-lg">🔥</span>
                    <span className="text-[10px]">Deals</span>
                </a>
                <a
                    href="/blog"
                    className="flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs text-zinc-500 transition-all hover:text-gold-primary"
                >
                    <span className="text-lg">📖</span>
                    <span className="text-[10px]">Blog</span>
                </a>
            </nav>
        </>
    )
}

