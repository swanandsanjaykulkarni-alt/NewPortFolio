
"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Network,
  Sparkles,
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

const floatingSkills = [
  { name: "JAVA", icon: "☕", className: "skill-java" },
  { name: "REACT", icon: "⚛", className: "skill-react" },
  { name: "SPRING BOOT", icon: "◆", className: "skill-spring" },
  { name: "DATABASE", icon: "◉", className: "skill-db" },
  { name: "TYPESCRIPT", icon: "TS", className: "skill-ts" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const characterY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const characterScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.8, 0.1]
  );

  useEffect(() => {
    if (reduceMotion || site.identity.length < 2) return;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % site.identity.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section ref={heroRef} id="home" className="hero-section">

      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/code.mp4" type="video/mp4" />
      </video>

      {/* Background effects */}
      <div className="hero-overlay" />
      <div className="hero-grid-pattern" />
      <div className="hero-noise" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="section-wrap hero-container">

        {/* Top introduction */}
        <motion.div
          className="hero-top-label"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="availability-dot" />
          OPEN TO EXCITING OPPORTUNITIES
          <span className="hero-label-divider">/</span>
          PORTFOLIO 2026
        </motion.div>

        <div className="hero-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="hero-copy"
            style={{
              y: reduceMotion ? 0 : textY,
              opacity: reduceMotion ? 1 : textOpacity,
            }}
          >

            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Sparkles size={15} />
              HELLO, WORLD! I&apos;M
            </motion.div>

            <h1 className="hero-title">
              <motion.span
                className="hero-title-line"
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
              >
                Swanand
              </motion.span>

              <motion.span
                className="hero-title-line hero-gradient-name"
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
              >
                Kulkarni<span className="hero-period">.</span>
              </motion.span>
            </h1>

            <div className="hero-role-area">
              <span className="hero-role-prefix">I AM A</span>

              <div className="hero-role-window">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={site.identity[roleIndex]}
                    className="hero-role"
                    initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -25 }}
                    transition={{ duration: 0.4 }}
                  >
                    {site.identity[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {site.intro}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="hero-button hero-button-primary"
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore my work
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href={site.resumeHref}
                className="hero-button hero-button-secondary"
                whileHover={reduceMotion ? {} : { scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={17} />
                Download resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <Network size={17} />
                LinkedIn
              </a>

              <a href={site.github} target="_blank" rel="noreferrer">
                <Code2 size={18} />
                GitHub
              </a>

              <span className="hero-social-separator" />
              <span className="hero-social-caption">
                LET&apos;S BUILD SOMETHING GREAT
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="hero-art"
            style={{
              y: reduceMotion ? 0 : characterY,
              scale: reduceMotion ? 1 : characterScale,
            }}
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.35 }}
          >

            {/* Orbital rings */}
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-orbit hero-orbit-three" />

            <div className="hero-profile-glow" />

            {/* Character flip card */}
            <motion.div
              className={`hero-profile-card ${cardFlipped ? "is-flipped" : ""}`}
              onClick={() => setCardFlipped(!cardFlipped)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setCardFlipped(!cardFlipped);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={cardFlipped}
              aria-label="Flip profile card to explore skills"
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <div className="hero-profile-card-inner">

                <div className="hero-profile-card-face hero-profile-card-front">
                  <Character3D className="character-stage-hero" />

                  <div className="hero-art-caption">
                    <span className="caption-pulse" />
                    DIGITAL CREATOR
                    <span className="caption-click">CLICK TO EXPLORE ↗</span>
                  </div>
                </div>

                <div className="hero-profile-card-face hero-profile-card-back">
                  <span className="profile-card-label">
                    THE MIND BEHIND THE CODE
                  </span>

                  <h2>{site.name}</h2>
                  <p>{site.role}</p>

                  <div className="profile-card-skills">
                    {site.skills.slice(0, 8).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <span className="profile-card-flip-hint">
                    ↩ CLICK TO RETURN
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating technology badges */}
            {floatingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`floating-skill ${skill.className}`}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -15, 0],
                        rotate: [0, 3, 0],
                      }
                }
                transition={{
                  duration: 4 + index * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <span className="floating-skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}

            <div className="hero-art-index">01 / CREATIVE DEVELOPER</div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.a
          href="#services"
          className="hero-bottomline"
          animate={reduceMotion ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </motion.a>

        <div className="hero-side-index">SWANAND KULKARNI — PORTFOLIO</div>
      </div>
    </section>
  );
}
