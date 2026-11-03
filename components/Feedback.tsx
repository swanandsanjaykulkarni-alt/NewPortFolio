import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Feedback() {
  return (
    <section id="feedback" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Voice of the room"
          title="Student feedback preview"
          description="These cards are layout samples only. They are not real testimonials and do not represent any student."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {site.feedback.map((item, index) => (
            <Reveal key={`${item.label}-${index}`} delay={index * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-amber-300/25 bg-amber-300/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-200">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.body}</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
