import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0C0F] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Introduction */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#F4A261]">
              03 / SELECTED WORK
            </p>

            <h2 className="font-display text-6xl font-black leading-[0.95] tracking-[-0.06em] text-[#F1EEE7] sm:text-8xl">
              Things
              <br />
              I&apos;ve <span className="text-[#77736D]">Built.</span>
            </h2>
          </div>

          <div className="max-w-xs md:pb-2">
            <div className="mb-5 h-[2px] w-12 bg-[#F4A261]" />

            <p className="text-sm leading-7 text-[#A6A29B] sm:text-base">
              Ideas transformed into digital experiences. A collection of
              projects built with curiosity, creativity and code.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="border-t border-[#F1EEE7]/20">
          {site.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="group relative grid gap-5 border-b border-[#F1EEE7]/15 py-9 transition-all duration-500 md:grid-cols-[100px_1.2fr_1fr_40px] md:items-center md:gap-8 md:py-12">

                {/* Project Number */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-4xl font-light tracking-tighter text-[#77736D] transition-colors duration-300 group-hover:text-[#ac29f8] sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Name */}
                <div>
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6190f4]">
                    {project.tag}
                  </p>

                  <h3 className="max-w-md font-sans text-2xl font-bold leading-tight tracking-tight text-[#E8E3DA] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#ac29f8] sm:text-3xl">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-lg text-sm leading-7 text-[#A6A29B] transition-colors duration-300 group-hover:text-[#D1CBC1] md:pl-4">
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="hidden md:flex md:justify-end">
                  <ArrowUpRight
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#77736D] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ac29f8]"
                  />
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#ac29f8] transition-all duration-700 group-hover:w-full" />

              </article>
            </Reveal>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#77736D]">
            Designed with purpose. Built with code.
          </p>

          <p className="font-mono text-xs tracking-wider text-[#F4A261]">
            {String(site.projects.length).padStart(2, "0")} PROJECTS
          </p>
        </div>

      </div>
    </section>
  );
}