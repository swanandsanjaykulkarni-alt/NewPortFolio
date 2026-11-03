import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Colleges() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="colleges-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Campuses"
          title="Colleges served"
          description="Institute names are sample placeholders until a verified list is added. Nothing here is a real college name."
        />
        <h3 id="colleges-title" className="sr-only">
          Colleges served preview
        </h3>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.colleges.map((campus, index) => (
            <Reveal key={campus.label} delay={index * 0.05}>
              <article className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {campus.label}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  {campus.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
