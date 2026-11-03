
import { ArrowUpRight, GraduationCap, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const achievementIcons = [Users, GraduationCap, Trophy];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="achievements-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionHeading
                eyebrow="Impact & Achievements"
                title="Turning knowledge into impact."
              />
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                A journey of building software, sharing knowledge, and helping
                aspiring developers grow through practical learning.
              </p>
            </div>

            <div className="hidden items-center gap-2 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
              Measurable impact
            </div>
          </div>
        </Reveal>

        <h3 id="achievements-title" className="sr-only">
          Achievements
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.stats.map((stat, index) => {
            const Icon = achievementIcons[index] ?? Trophy;

            return (
              <Reveal key={stat.label} delay={index * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#171b35] via-[#101429] to-[#0b0e20] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_20px_55px_rgba(79,70,229,0.12)] sm:p-8">
                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.09] blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/[0.14]"
                  />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 to-indigo-400/15 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>

                  {/* Number */}
                  <p className="relative mt-7 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </p>

                  {/* Label */}
                  <p className="relative mt-3 text-sm font-semibold tracking-wide text-slate-300">
                    {stat.label}
                  </p>

                  {/* Bottom accent */}
                  <div className="relative mt-7 h-px w-full overflow-hidden bg-white/[0.07]">
                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
