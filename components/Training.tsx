import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Training() {
  return (
    <section id="training" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Training" title={site.training.heading} />
        <Reveal>
          <div className="mt-10 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-500/10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              {site.training.body}
            </p>
            <ul className="space-y-4">
              {site.training.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-200">
                  <GraduationCap className="mt-0.5 shrink-0 text-accent" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
