"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const feedback = site.feedback[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + site.feedback.length) % site.feedback.length);
  };

  return (
    <section id="feedback" className="feedback-section">
      <div className="section-wrap">
        <div className="feedback-heading">
          <div>
            <SectionHeading eyebrow="Voice of the room" title="Learning, together." />
          </div>
          <p>
            These are clearly marked layout samples, not real testimonials or
            representations of any student.
          </p>
        </div>
        <Reveal>
          <div className="feedback-stage">
            <div className="feedback-counter" aria-hidden="true">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="feedback-counter-rule" />
              {String(site.feedback.length).padStart(2, "0")}
            </div>
            <figure className="feedback-quote" aria-live="polite">
              <span className="feedback-quote-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>{feedback.body}</blockquote>
              <figcaption>{feedback.label}</figcaption>
            </figure>
            <div className="feedback-controls" aria-label="Feedback navigation">
              <button type="button" onClick={() => move(-1)} aria-label="Previous feedback">
                <ArrowLeft size={17} />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next feedback">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
          <div className="feedback-progress" aria-hidden="true">
            {site.feedback.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className={index === activeIndex ? "is-active" : undefined}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
