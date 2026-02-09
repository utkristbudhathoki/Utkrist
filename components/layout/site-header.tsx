"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled
            ? "border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border-white/5 bg-slate-950/80 backdrop-blur"
          }`}
      >
        <div className="container-default flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform hover:scale-105"
            onClick={handleNavClick}
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-aqua-400 to-teal-500 shadow-lg shadow-aqua-500/30 ring-2 ring-aqua-400/50 transition-all group-hover:shadow-aqua-400/50">
              <span className="text-sm font-bold text-slate-950">UB</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-50 transition-colors group-hover:text-aqua-200">
              Utkrist Budhathoki
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-aqua-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden text-xs font-medium text-aqua-200 underline-offset-4 transition-all hover:text-aqua-300 hover:underline md:inline"
          >
            Let&apos;s work together →
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900/50 text-slate-300 transition-all hover:border-aqua-400/40 hover:bg-aqua-500/10 hover:text-aqua-200 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <nav className="container-default flex flex-col gap-1 py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/40 px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:border-aqua-400/40 hover:bg-aqua-500/10 hover:text-aqua-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <div className="mt-4 rounded-xl border border-aqua-500/20 bg-aqua-500/5 p-4">
              <p className="mb-2 text-xs font-medium text-aqua-200">Ready to collaborate?</p>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="btn-primary w-full justify-center text-sm"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
