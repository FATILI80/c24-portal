"use client"

import { useCallback, useRef, useState } from "react"

interface ConfettiParticle {
    id: number
    x: number
    y: number
    color: string
    rotation: number
    speed: number
    size: number
}

const CONFETTI_COLORS = [
    "#3B82F6", // blue-500
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#EF4444", // red-500
    "#8B5CF6", // violet-500
    "#EC4899", // pink-500
    "#06B6D4", // cyan-500
    "#F97316", // orange-500
]

let nextId = 0

export function useConfetti() {
    const [particles, setParticles] = useState<ConfettiParticle[]>([])
    const animFrameRef = useRef<number | null>(null)

    const fire = useCallback((originX = 50, originY = 50) => {
        const newParticles: ConfettiParticle[] = []
        for (let i = 0; i < 60; i++) {
            newParticles.push({
                id: nextId++,
                x: originX,
                y: originY,
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                rotation: Math.random() * 360,
                speed: 3 + Math.random() * 6,
                size: 6 + Math.random() * 8,
            })
        }
        setParticles((prev) => [...prev, ...newParticles])

        // Auto-cleanup after animation
        setTimeout(() => {
            setParticles([])
        }, 3000)
    }, [])

    return { particles, fire }
}

export default function ConfettiOverlay({
    particles,
}: {
    particles: ConfettiParticle[]
}) {
    if (particles.length === 0) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute animate-confetti-fall"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size * 0.6,
                        backgroundColor: p.color,
                        borderRadius: "2px",
                        transform: `rotate(${p.rotation}deg)`,
                        animationDuration: `${1.5 + p.speed * 0.15}s`,
                        animationDelay: `${Math.random() * 0.3}s`,
                        opacity: 0.9,
                    }}
                />
            ))}
        </div>
    )
}
