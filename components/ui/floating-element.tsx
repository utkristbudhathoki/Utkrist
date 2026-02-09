"use client";

import { ReactNode, CSSProperties } from "react";

// Animation Types
type FloatDuration = "slow" | "medium" | "fast";
type FloatIntensity = "subtle" | "normal" | "strong";

interface FloatingElementProps {
    children: ReactNode;
    duration?: FloatDuration;
    intensity?: FloatIntensity;
    delay?: number;
    className?: string;
}

// Duration mapping in seconds
const durationMap: Record<FloatDuration, number> = {
    slow: 8,
    medium: 5,
    fast: 3
};

// Intensity mapping for translateY in pixels
const intensityMap: Record<FloatIntensity, number> = {
    subtle: 8,
    normal: 15,
    strong: 25
};

/**
 * FloatingElement - Creates an antigravity floating animation effect
 * Uses pure CSS animations for optimal performance
 */
export function FloatingElement({
    children,
    duration = "medium",
    intensity = "normal",
    delay = 0,
    className = ""
}: FloatingElementProps) {
    const style: CSSProperties = {
        "--float-duration": `${durationMap[duration]}s`,
        "--float-intensity": `${intensityMap[intensity]}px`,
        "--float-delay": `${delay}s`,
        animation: `antigravity-float var(--float-duration) ease-in-out var(--float-delay) infinite`
    } as CSSProperties;

    return (
        <div className={`will-change-transform ${className}`} style={style}>
            {children}
        </div>
    );
}

/**
 * FloatingOrb - A decorative floating orb element
 */
interface FloatingOrbProps {
    size?: "sm" | "md" | "lg";
    color?: "aqua" | "teal" | "cyan";
    className?: string;
}

export function FloatingOrb({
    size = "md",
    color = "aqua",
    className = ""
}: FloatingOrbProps) {
    const sizeClasses = {
        sm: "h-16 w-16",
        md: "h-32 w-32",
        lg: "h-48 w-48"
    };

    const colorClasses = {
        aqua: "from-aqua-400/30 to-aqua-600/10",
        teal: "from-teal-400/30 to-teal-600/10",
        cyan: "from-cyan-400/30 to-cyan-600/10"
    };

    return (
        <FloatingElement
            duration="slow"
            intensity="subtle"
            delay={Math.random() * 2}
            className={className}
        >
            <div
                className={`rounded-full bg-gradient-to-br blur-2xl ${sizeClasses[size]} ${colorClasses[color]}`}
            />
        </FloatingElement>
    );
}

/**
 * GlowingCard - A card with a subtle glow effect
 */
interface GlowingCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowingCard({
    children,
    className = "",
    glowColor = "aqua"
}: GlowingCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:border-aqua-400/40 hover:shadow-aqua-500/10 ${className}`}
        >
            {/* Glow effect on hover */}
            <div
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-${glowColor}-400/0 via-transparent to-${glowColor}-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
