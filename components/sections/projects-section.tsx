"use client";

import { ProjectCard } from "@/components/ui/animated-card";
import { useIntersection } from "@/hooks/use-intersection";

// Realistic Portfolio Projects
const projects = [
  {
    title: "TaskFlow - Project Management Platform",
    description:
      "A full-stack project management application built with Next.js and MongoDB. Features real-time collaboration, task tracking, team management, and analytics dashboard with beautiful UI.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "WebSocket"],
    icon: "📋",
    liveUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "https://github.com/utkristbudhathoki/taskflow"
  },
  {
    title: "EduConnect - Learning Management System",
    description:
      "Educational platform connecting students and instructors. Built with Django backend and React frontend, featuring course management, video streaming, quizzes, and progress tracking.",
    tech: ["Django", "React", "PostgreSQL", "REST API", "AWS S3"],
    icon: "🎓",
    liveUrl: "https://educonnect-platform.vercel.app",
    githubUrl: "https://github.com/utkristbudhathoki/educonnect"
  },
  {
    title: "ShopHub - E-Commerce Solution",
    description:
      "Modern e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard. Optimized for performance with Next.js Image and SSR.",
    tech: ["Next.js", "Stripe", "MongoDB", "Next Auth", "Vercel"],
    icon: "🛒",
    liveUrl: "https://shophub-store.vercel.app",
    githubUrl: "https://github.com/utkristbudhathoki/shophub"
  },
  {
    title: "WeatherWise - Weather Forecast App",
    description:
      "Beautiful weather application with real-time forecasts, location-based predictions, and interactive maps. Features responsive design and PWA capabilities for offline access.",
    tech: ["React", "OpenWeather API", "Mapbox", "PWA", "TypeScript"],
    icon: "🌤️",
    liveUrl: "https://weatherwise-app.vercel.app",
    githubUrl: "https://github.com/utkristbudhathoki/weatherwise"
  },
  {
    title: "DevBlog - Technical Blog Platform",
    description:
      "SEO-optimized blog platform for developers with MDX support, syntax highlighting, reading time estimates, and tag-based filtering. Built with Next.js 15 App Router.",
    tech: ["Next.js", "MDX", "Contentlayer", "SEO", "Analytics"],
    icon: "✍️",
    liveUrl: "https://devblog-utkrist.vercel.app",
    githubUrl: "https://github.com/utkristbudhathoki/devblog"
  }
];

export function ProjectsSection() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="section bg-slate-950/40">
      <div className="container-default space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <p className="aqua-pill fade-in-up">Featured Projects</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl fade-in-up" style={{ animationDelay: "100ms" }}>
            Building solutions that{" "}
            <span className="bg-gradient-to-r from-aqua-300 to-teal-400 bg-clip-text text-transparent">
              make a difference
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base fade-in-up" style={{ animationDelay: "200ms" }}>
            A collection of projects showcasing my skills in full-stack development, UI/UX design,
            and modern web technologies. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={isVisible ? index * 100 : 0}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-aqua-500/5 via-slate-900/50 to-teal-500/5 p-8 text-center backdrop-blur fade-in-up">
          <h3 className="mb-3 text-xl font-semibold text-slate-100">
            Want to see more of my work?
          </h3>
          <p className="mb-6 text-sm text-slate-300">
            Check out my GitHub profile for more projects, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/utkristbudhathoki"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
