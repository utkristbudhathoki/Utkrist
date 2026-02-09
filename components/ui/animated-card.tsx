"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * AnimatedCard - Card with hover animations and tilt effect
 */
export function AnimatedCard({
    children,
    className = "",
    delay = 0
}: AnimatedCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`card group relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-aqua-400/30 hover:shadow-xl hover:shadow-aqua-500/10 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                transform: isHovered ? "translateY(-4px) scale(1.01)" : "translateY(0)"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aqua-400/0 to-teal-500/0 opacity-0 transition-opacity duration-300 group-hover:from-aqua-400/5 group-hover:to-teal-500/5 group-hover:opacity-100" />

            {/* Shimmer effect */}
            <div className="pointer-events-none absolute -inset-full -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

            <div className="relative z-10">{children}</div>
        </article>
    );
}

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    icon?: string;
    delay?: number;
}

/**
 * ProjectCard - Animated project showcase card
 */
export function ProjectCard({
    title,
    description,
    tech,
    liveUrl,
    githubUrl,
    icon = "🚀",
    delay = 0
}: ProjectCardProps) {
    return (
        <AnimatedCard delay={delay}>
            <div className="space-y-4">
                {/* Project Icon */}
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/20 to-teal-500/20 text-xl">
                        {icon}
                    </span>
                    <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-aqua-200">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-300">{description}</p>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                        <li
                            key={t}
                            className="rounded-full bg-aqua-500/10 px-2.5 py-0.5 text-[11px] font-medium text-aqua-200 ring-1 ring-aqua-400/20 transition-all duration-200 hover:bg-aqua-500/20 hover:ring-aqua-400/40"
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            <div className="mt-5 flex gap-4 border-t border-white/5 pt-4 text-xs font-medium">
                {liveUrl && (
                    <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 transition-all duration-200 hover:text-aqua-300"
                    >
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        <span>Live Demo</span>
                        <svg
                            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </Link>
                )}
                {githubUrl && (
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 transition-all duration-200 hover:text-aqua-300"
                    >
                        <span>Source</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                )}
            </div>
        </AnimatedCard>
    );
}
