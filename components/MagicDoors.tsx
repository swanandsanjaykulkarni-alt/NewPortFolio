"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function MagicDoors() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const selectedIndex = activeIndex ?? 0;
  const activeService = site.services[selectedIndex];

  return (
    <section id="services" className="magic-doors-section">
      <div className="section-wrap">
        <Reveal>
          <div className="magic-doors-heading">
            <span className="section-kicker">What I do</span>
            <h2>Magic happens behind the doors.</h2>
            <p>Five ways I build software and help people grow through technology.</p>
          </div>
        </Reveal>

        <div className="magic-doors-layout">
          <div className="magic-doors-grid" aria-label="Services">
            {site.services.map((service, index) => (
              <button
                type="button"
                key={service.title}
                className={`magic-door magic-door-${service.color}`}
                aria-expanded={activeIndex === index}
                aria-controls="service-detail"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex((current) => current === index ? null : index)}
              >
                <span className="magic-door-number">
                  Door / {String(index + 1).padStart(2, "0")}
                </span>
                <span className="magic-door-frame" aria-hidden="true">
                  <span className="magic-door-inner">
                    <span className="magic-door-nameplate">{service.title}</span>
                    <span className="magic-door-handle" />
                  </span>
                </span>
                <span className="magic-door-title">{service.title}</span>
              </button>
            ))}
          </div>

          <div id="service-detail" className="magic-door-detail" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeService.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <span className="magic-door-detail-label">
                  Behind door / {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <h3>{activeService.title}</h3>
                <ul>
                  {activeService.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {activeIndex === 2 || activeIndex === 3 ? (
                  <p>{site.training.points[0]}</p>
                ) : activeIndex === 4 ? (
                  <p>
                    Generative AI Trainer experience at Campus Credentials.
                  </p>
                ) : null}
              </motion.div>
            </AnimatePresence>
            {activeIndex === null ? (
              <p className="magic-door-closed-message">Choose a door to explore the work behind it.</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
