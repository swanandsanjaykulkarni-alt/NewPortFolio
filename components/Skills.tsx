
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Terminal,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Writing clean logic and solving problems.",
    icon: Code2,
    skills: ["Java", "C++", "Python", "JavaScript"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Web Development",
    description: "Building responsive web experiences.",
    icon: Braces,
    skills: ["React", "JavaScript", "HTML", "CSS"],
    accent: "from-blue-400 to-indigo-500",
  },
  {
    title: "Databases & APIs",
    description: "Working with data and application services.",
    icon: Database,
    skills: ["SQL", "REST APIs"],
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Tools & Workflow",
    description: "Tools that support everyday development.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Computer Science",
    description: "Core concepts behind reliable software.",
    icon: Terminal,
    skills: ["DSA", "OOP", "Problem Solving"],
    accent: "from-amber-300 to-orange-500",
  },
  {
    title: "Development Practice",
    description: "From planning an idea to building a solution.",
    icon: Layers3,
    skills: ["Full Stack", "Debugging", "API Integration"],
    accent: "from-pink-400 to-violet-500",
  },
];

export function Skills() {
  const allSkills = new Set(site.skills.map((skill) => skill.toLowerCase()));

  const groups = skillGroups.map((group) => ({
    ...group,
    skills: group.skills.filter((skill) => allSkills.has(skill.toLowerCase())),
  }));

  const displayedSkills = new Set(
    groups.flatMap((group) => group.skills.map((skill) => skill.toLowerCase()))
  );

  const otherSkills = site.skills.filter(
    (skill) => !displayedSkills.has(skill.toLowerCase())
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-11 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Technical Expertise"
                title="The tools behind what I build."
                description="A practical mix of programming, web development, databases, and problem-solving skills."
              />
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
              Continuous learning
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups
            .filter((group) => group.skills.length > 0)
            .map((group, index) => {
              const Icon = group.icon;

              return (
                <Reveal key={group.title} delay={index * 0.07}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#171b35] via-[#101429] to-[#0b0e20] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] sm:p-7">
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${group.accent} opacity-[0.08] blur-3xl transition-opacity duration-300 group-hover:opacity-20`}
                    />

                    <div className="relative flex items-start justify-between">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br ${group.accent} bg-opacity-10 text-white shadow-lg`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                      />
                    </div>

                    <h3 className="relative mt-6 text-lg font-bold tracking-tight text-white">
                      {group.title}
                    </h3>

                    <p className="relative mt-2 min-h-12 text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                       <span
                       key={skill}
                       className="rounded-xl border border-violet-400/25 bg-gradient-to-br from-violet-500/20 via-indigo-500/15 to-purple-500/20 px-4 py-2.5 text-sm font-semibold tracking-wide text-violet-100 shadow-[0_0_14px_rgba(139,92,246,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:from-violet-500/30 hover:via-indigo-500/25 hover:to-purple-500/30 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.18)]"
                     >
                       {skill}
                     </span>
                      ))}
                    </div>

                    <div className="relative mt-6 h-px overflow-hidden bg-white/[0.07]">
                      <div
                        className={`h-full w-1/4 bg-gradient-to-r ${group.accent} transition-all duration-500 group-hover:w-full`}
                      />
                    </div>
                  </article>
                </Reveal>
              );
            })}
        </div>

        {otherSkills.length > 0 && (
          <Reveal>
            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Additional Skills
              </p>

              <div className="flex flex-wrap gap-2.5">
                {otherSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-300/15 bg-indigo-400/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
