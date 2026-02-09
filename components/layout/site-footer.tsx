import { socialLinks } from "@/lib/seo";

const footerLinks = [
  { name: "GitHub", url: socialLinks.github },
  { name: "LinkedIn", url: socialLinks.linkedin },
  { name: "Twitter", url: socialLinks.twitter },
  { name: "Instagram", url: socialLinks.instagram },
  { name: "Discord", url: socialLinks.discord }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="container-default py-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aqua-400 to-teal-500 text-xs font-bold text-slate-950">
                UB
              </div>
              <span className="text-sm font-semibold text-slate-100">Utkrist Budhathoki</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Software Engineer crafting modern web experiences with Next.js, React, and TypeScript.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-xs">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-aqua-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Connect</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className="block text-xs text-slate-400 transition-colors hover:text-aqua-200"
              >
                {socialLinks.email}
              </a>
              <div className="flex flex-wrap gap-2 pt-1">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-slate-900/40 px-2.5 py-1 text-xs text-slate-400 transition-all hover:border-aqua-400/40 hover:bg-aqua-500/10 hover:text-aqua-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} Utkrist Budhathoki.{" "}
            <span className="opacity-80">All rights reserved.</span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
