"use client";

import Link from "next/link";
import { FloatingElement, FloatingOrb } from "@/components/ui/floating-element";
import { GradientText } from "@/components/ui/animated-text";

// Tech stack badges for display
const techStack = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Django", icon: "🐍" }
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="section container-default relative flex min-h-[calc(100vh-4rem)] flex-col items-start gap-10 overflow-hidden md:flex-row md:items-center"
    >
      {/* Background Floating Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <FloatingOrb size="lg" color="aqua" className="absolute -left-20 top-20 opacity-40" />
        <FloatingOrb size="md" color="teal" className="absolute -right-10 bottom-40 opacity-30" />
        <FloatingOrb size="sm" color="cyan" className="absolute left-1/3 top-1/4 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Availability Badge */}
        <div className="fade-in-up">
          <span className="aqua-pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Opportunities
          </span>
        </div>

        {/* Hero Heading */}
        <div className="space-y-4 fade-in-up" style={{ animationDelay: "100ms" }}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&apos;m{" "}
            <GradientText>Utkrist Budhathoki</GradientText>
          </h1>
          <p className="text-lg font-medium text-aqua-200 sm:text-xl lg:text-2xl">
            Software Engineer & Full-Stack Developer
          </p>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            I build modern, performant web applications with a passion for clean code,
            beautiful interfaces, and exceptional user experiences. Currently pursuing
            my Bachelor&apos;s in CSIT at Academia International College.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: "200ms" }}>
          <Link href="#projects" className="btn-primary group">
            <span>View My Work</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href="#contact" className="btn-secondary">
            Get In Touch
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="fade-in-up pt-4" style={{ animationDelay: "300ms" }}>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
            Tech I Work With
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-aqua-400/40 hover:bg-aqua-500/10"
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="flex-1">
        <FloatingElement duration="slow" intensity="subtle">
          <div className="glass-card mx-auto flex h-72 w-72 flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 p-6 shadow-2xl shadow-aqua-500/20 backdrop-blur-xl sm:h-80 sm:w-80">
            {/* Avatar Placeholder */}
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-aqua-400 via-teal-500 to-aqua-600 text-4xl font-bold text-slate-950 shadow-lg shadow-aqua-500/40">
              UB
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-slate-100">Utkrist Budhathoki</h2>
            <p className="text-sm text-aqua-200">Software Engineer</p>

            {/* Quick Stats */}
            <div className="mt-4 grid w-full grid-cols-2 gap-2 text-center">
              <div className="rounded-xl bg-white/5 py-2">
                <p className="text-lg font-semibold text-aqua-300">CSIT</p>
                <p className="text-[10px] text-slate-400">Bachelor&apos;s Degree</p>
              </div>
              <div className="rounded-xl bg-white/5 py-2">
                <p className="text-lg font-semibold text-aqua-300">5+</p>
                <p className="text-[10px] text-slate-400">Projects Built</p>
              </div>
            </div>

            {/* Status indicator */}
            <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-emerald-300">Open to work</span>
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  );
}
