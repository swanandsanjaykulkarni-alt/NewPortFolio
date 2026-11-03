import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Colleges() {
  return (
    <section id="campuses" className="campuses-section" aria-labelledby="colleges-title">
      <div className="section-wrap">
        <div className="campus-heading">
          <div>
            <SectionHeading eyebrow="Campus programs" title="Where learning happens." />
          </div>
          <p>
            Institute names are sample placeholders until a verified list is
            added. Nothing here is a real college name.
          </p>
        </div>
        <h3 id="colleges-title" className="sr-only">
          Colleges served preview
        </h3>
        <div className="campus-doors">
          {site.colleges.map((campus, index) => (
            <Reveal key={campus.label} delay={index * 0.05}>
              <article className={`campus-door campus-door-${index + 1}`}>
                <div className="campus-door-arch" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="campus-door-knob" />
                </div>
                <div className="campus-door-caption">
                  <p>{campus.label}</p>
                  <small>{campus.note}</small>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
