"use client";

import { ReactNode, CSSProperties, useEffect, useState } from "react";

/* ============================================================
   Types
============================================================ */

type FloatDuration = "slow" | "medium" | "fast";
type FloatIntensity = "subtle" | "normal" | "strong";

interface FloatingElementProps {
  children: ReactNode;
  duration?: FloatDuration;
  intensity?: FloatIntensity;
  delay?: number;
  className?: string;
}

interface FloatingOrbProps {
  size?: "sm" | "md" | "lg";
  color?: "aqua" | "teal" | "cyan";
  className?: string;
}

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "aqua" | "teal" | "cyan";
}

/* ============================================================
   Config Maps
============================================================ */

const durationMap: Record<FloatDuration, number> = {
  slow: 8,
  medium: 5,
  fast: 3,
};

const intensityMap: Record<FloatIntensity, number> = {
  subtle: 8,
  normal: 15,
  strong: 25,
};

const orbSizeMap = {
  sm: "h-16 w-16",
  md: "h-32 w-32",
  lg: "h-48 w-48",
};

const orbColorMap = {
  aqua: "from-aqua-400/30 to-aqua-600/10",
  teal: "from-teal-400/30 to-teal-600/10",
  cyan: "from-cyan-400/30 to-cyan-600/10",
};

const glowColorMap = {
  aqua: "from-aqua-400/20 to-aqua-600/20",
  teal: "from-teal-400/20 to-teal-600/20",
  cyan: "from-cyan-400/20 to-cyan-600/20",
};

/* ============================================================
   FloatingElement
============================================================ */

export function FloatingElement({
  children,
  duration = "medium",
  intensity = "normal",
  delay,
  className = "",
}: FloatingElementProps) {
  const [clientDelay, setClientDelay] = useState<number | null>(null);

  useEffect(() => {
    setClientDelay(delay ?? Math.random() * 2);
  }, [delay]);

  // Prevent SSR hydration mismatch
  if (clientDelay === null) return null;

  const style: CSSProperties = {
    "--float-duration": `${durationMap[duration]}s`,
    "--float-intensity": `${intensityMap[intensity]}px`,
    "--float-delay": `${clientDelay}s`,
    animation:
      "antigravity-float var(--float-duration) ease-in-out var(--float-delay) infinite",
  } as CSSProperties;

  return (
    <div className={`will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ============================================================
   FloatingOrb
============================================================ */

export function FloatingOrb({
  size = "md",
  color = "aqua",
  className = "",
}: FloatingOrbProps) {
  return (
    <FloatingElement duration="slow" intensity="subtle" className={className}>
      <div
        className={`rounded-full bg-gradient-to-br blur-2xl ${orbSizeMap[size]} ${orbColorMap[color]}`}
      />
    </FloatingElement>
  );
}

/* ============================================================
   GlowingCard
============================================================ */

export function GlowingCard({
  children,
  className = "",
  glowColor = "aqua",
}: GlowingCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:border-white/20 ${className}`}
    >
      {/* Glow overlay */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${glowColorMap[glowColor]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
