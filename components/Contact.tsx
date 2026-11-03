
import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap">
        <Reveal>
          <div className="contact-panel">
            <div>
              <span className="section-kicker">Have something in mind?</span>
              <h2 className="contact-title">
                Let&apos;s make
                <br />
                good things.
              </h2>
              <p className="contact-description">
                The fastest way to reach me is email. LinkedIn and GitHub are
                public and active.
              </p>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${site.email}`} className="contact-email">
                <Mail size={17} />
                {site.email}
                <ArrowUpRight size={15} />
              </a>
              <div className="contact-socials">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={15} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
