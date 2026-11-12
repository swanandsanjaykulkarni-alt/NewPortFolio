"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Character3D } from "@/components/Character3D";
import { site } from "@/lib/site";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const characterX = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const characterY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const characterScale = useTransform(scrollYProgress, [0, 1], [1, 0.68]);
  const characterRotate = useTransform(scrollYProgress, [0, 1], [0, 9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, 0.4]);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % site.identity.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const toggleCard = () => setCardFlipped((flipped) => !flipped);

  return (
    <section ref={heroRef} id="home" className="hero-section">
      <div className="section-wrap">
        <div className="hero-grid">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-copy"
            style={{
              y: reduceMotion ? 0 : textY,
              opacity: reduceMotion ? 1 : textOpacity,
            }}
          >
            <p className="hero-eyebrow">Independent developer & educator</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Hey, I&apos;m</span>
              <span className="hero-title-line hero-name">{site.name.split(" ")[0]}</span>
              <span className="hero-title-line hero-surname">
                {site.name.split(" ").slice(1).join(" ")}.
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
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="hero-art"
            style={{
              x: reduceMotion ? 0 : characterX,
              y: reduceMotion ? 0 : characterY,
              scale: reduceMotion ? 1 : characterScale,
              rotate: reduceMotion ? 0 : characterRotate,
            }}
          >
            <motion.div
              className={`hero-profile-card${cardFlipped ? " is-flipped" : ""}`}
              onClick={toggleCard}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleCard();
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={cardFlipped}
              aria-label={cardFlipped ? "Show portrait placeholder" : "Show skills and professional roles"}
            >
              <div className="hero-profile-card-inner">
                <div className="hero-profile-card-face hero-profile-card-front">
                  <Character3D className="character-stage-hero" />
                  <div className="hero-art-caption">
                    <span />
                    Digital profile · click to explore
                  </div>
                </div>
                <div className="hero-profile-card-face hero-profile-card-back">
                  <span className="profile-card-label">The work behind the title</span>
                  <h2>{site.name}</h2>
                  <p>{site.role}</p>
                  <div className="profile-card-skills">
                    {site.skills.slice(0, 8).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  <span className="profile-card-flip-hint">Click to turn back</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <a className="hero-bottomline" href="#services">
          Scroll to explore <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}