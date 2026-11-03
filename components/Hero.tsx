"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { PortraitFrame } from "@/components/PortraitFrame";
import { site } from "@/lib/site";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % site.identity.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="home" className="hero-section">
      <div className="section-wrap">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-copy"
          >
            <p className="hero-eyebrow">Independent developer & educator</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Hey, I&apos;m</span>
              <span className="hero-title-line hero-name">{site.name.split(" ")[0]}</span>
              <span className="hero-title-line hero-surname">
                {site.name.split(" ").slice(-1)[0]}.
              </span>
            </h1>
            <p className="hero-role-label">I work as a</p>
            <div className="hero-role-window" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={site.identity[roleIndex]}
                  className="hero-role"
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -22 }}
                  transition={{ duration: 0.3 }}
                >
                  {site.identity[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="hero-intro">{site.intro}</p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button hero-button-primary">
                Explore my work
                <ArrowUpRight size={16} />
              </a>
              <a href={site.resumeHref} className="hero-button hero-button-secondary">
                <Download size={16} />
                Download resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={15} />
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="hero-art"
          >
            <PortraitFrame />
            <div className="hero-art-caption">
              <span />
              Turning knowledge into impact
            </div>
          </motion.div>
        </div>
        <a className="hero-bottomline" href="#achievements">
          Scroll to explore <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}