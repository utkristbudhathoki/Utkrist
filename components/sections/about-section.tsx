"use client";

import { GlowingCard } from "@/components/ui/floating-element";
import { useIntersection } from "@/hooks/use-intersection";

// Education Information
const education = [
  {
    degree: "Bachelor of Science in CSIT",
    institution: "Academia International College",
    period: "2022 - Present",
    description: "Pursuing comprehensive computer science curriculum with focus on software development and modern technologies."
  },
  {
    degree: "Higher Secondary (+2)",
    institution: "Nobel Academy",
    period: "2020 - 2022",
    description: "Completed science stream with strong foundation in mathematics and computer science."
  }
];

// Skills with categories
const skills = {
  "Frontend Development": [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML5/CSS3", level: 95 }
  ],
  "Backend Development": [
    { name: "Django", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "PostgreSQL", level: 70 }
  ],
  "Tools & Design": [
    { name: "Git & GitHub", level: 90 },
    { name: "Figma", level: 80 },
    { name: "Canva", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 85 }
  ]
};

// Skill bar component
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div
      className="space-y-1 fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between text-xs">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-aqua-300">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-aqua-500 to-teal-400 transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="about" className="section bg-slate-950/30">
      <div className="container-default space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <p className="aqua-pill fade-in-up">About Me</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl fade-in-up" style={{ animationDelay: "100ms" }}>
            Passionate about building{" "}
            <span className="bg-gradient-to-r from-aqua-300 to-teal-400 bg-clip-text text-transparent">
              exceptional digital experiences
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base fade-in-up" style={{ animationDelay: "200ms" }}>
            I&apos;m a software engineer based in Nepal with a deep passion for creating modern web applications.
            Currently pursuing my Bachelor&apos;s degree in Computer Science & IT, I blend academic knowledge with
            hands-on experience to deliver clean, efficient, and user-focused solutions. I believe in continuous
            learning and staying updated with the latest technologies and best practices.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-100 fade-in-up">📚 Education</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu, index) => (
              <GlowingCard
                key={edu.degree}
                className="fade-in-up"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-100">{edu.degree}</h4>
                    <span className="shrink-0 rounded-full bg-aqua-500/10 px-2 py-0.5 text-[10px] font-medium text-aqua-200">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-aqua-300">{edu.institution}</p>
                  <p className="text-xs leading-relaxed text-slate-400">{edu.description}</p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-100 fade-in-up">💻 Skills & Technologies</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <GlowingCard key={category} className="fade-in-up">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-aqua-500/10 text-xs">
                    {categoryIndex === 0 ? "🎨" : categoryIndex === 1 ? "⚙️" : "🛠️"}
                  </span>
                  {category}
                </h4>
                <div className="space-y-3">
                  {items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={isVisible ? skill.level : 0}
                      delay={(categoryIndex * 100) + (skillIndex * 50)}
                    />
                  ))}
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>

        {/* Fun Facts / Interests */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-100 fade-in-up">🎯 What Drives Me</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🚀", title: "Clean Code", desc: "Writing maintainable and scalable code" },
              { icon: "📱", title: "Responsive Design", desc: "Creating experiences for all devices" },
              { icon: "⚡", title: "Performance", desc: "Optimizing for speed and efficiency" },
              { icon: "🎨", title: "UI/UX", desc: "Crafting beautiful user interfaces" }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-xl border border-white/5 bg-slate-900/30 p-4 transition-all duration-300 hover:border-aqua-400/30 hover:bg-aqua-500/5 fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <span className="mb-2 block text-2xl">{item.icon}</span>
                <h4 className="text-sm font-medium text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
