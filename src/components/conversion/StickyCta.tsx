"use client"

import { useEffect, useState } from "react"

export default function StickyCta() {
    const [visible, setVisible] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show after scrolling down past 600px
            if (currentScrollY > 600) {
                // Show when scrolling up, hide when scrolling down (to not obscure content)
                if (currentScrollY < lastScrollY) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            } else {
                setVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 border-t border-gold-primary/20 bg-surface/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden ${visible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-gold-primary">
                        🏆 Bis zu 500€ sparen
                    </span>
                    <span className="text-xs text-zinc-500">
                        Kostenlos vergleichen
                    </span>
                </div>
                <a
                    href="#check24-vergleiche"
                    className="btn-gold rounded-lg px-5 py-2 text-sm font-bold"
                >
                    Jetzt vergleichen
                </a>
            </div>
        </div>
    )
}
