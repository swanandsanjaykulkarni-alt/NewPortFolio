import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-wrap">
        <Reveal>
          <div className="about-grid">
            <div className="about-aside">
              <span className="section-kicker">A little about me</span>
              <p className="about-aside-mark" aria-hidden="true">
                SK<span>.</span>
              </p>
              <p className="about-aside-caption">
                Engineering <span>×</span> education
              </p>
            </div>
            <div className="about-story">
              <h2>
                I build things
                <br />
                <span>and help people</span>
                <br />
                build their own.
              </h2>
              <p>{site.intro}</p>
              <a href="#experience" className="about-link">
                The journey so far <ArrowDownRight size={16} />
              </a>
            </div>
          </div>
          <div className="identity-strip" aria-label="Professional roles">
            {site.identity.map((item, index) => (
              <span key={item}>
                <span className="identity-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
