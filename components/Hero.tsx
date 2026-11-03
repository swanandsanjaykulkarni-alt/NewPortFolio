"use client";

import {
  ArrowUpRight,
  Code2,
  Download,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { PortraitFrame } from "@/components/PortraitFrame";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="about"
      className="hero-section relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:pt-28"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="hero-glow hero-glow-blue"
      />
      <div
        aria-hidden="true"
        className="hero-glow hero-glow-purple"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* LEFT: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="badge mb-6">
            <Sparkles size={14} />
            <span>SOFTWARE · TRAINING · INNOVATION</span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Swanand
            <span className="hero-name-gradient mt-1 block">
              Kulkarni.
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-base font-semibold sm:text-lg">
            <span className="text-slate-100">Software Developer</span>
            <span className="text-cyan-400">/</span>
            <span className="text-slate-300">Technical Trainer</span>
          </div>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
            I build useful software and help students turn technical
            knowledge into real-world skills through hands-on training.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="hero-primary-btn">
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href={site.resumeHref}
              className="hero-secondary-btn"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <ArrowUpRight size={15} />
              LinkedIn
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Code2 size={16} />
              GitHub
            </a>
          </div>

          {/* Achievement cards */}
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:gap-4">
            <div className="hero-stat-card">
              <span className="hero-stat-number">10,000+</span>
              <span className="hero-stat-label">Students Trained</span>
            </div>

            <div className="hero-stat-card">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Workshops Delivered</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="hero-portrait-card relative">
            <div className="hero-portrait-glow" />

            <div className="relative z-10">
              <PortraitFrame />
            </div>

            {/* Floating role card */}
            <div className="hero-floating-card hero-floating-top">
              <span className="hero-floating-icon">
                <Code2 size={19} />
              </span>

              <span>
                <strong>Developer</strong>
                <small>Building digital products</small>
              </span>
            </div>

            <div className="hero-floating-card hero-floating-bottom">
              <span className="hero-status-dot" />

              <span>
                <strong>Trainer & Mentor</strong>
                <small>10K+ learners reached</small>
              </span>
            </div>
          </div>

          <p className="mt-5 text-center text-xs tracking-wide text-slate-500">
            Turning ideas into software and knowledge into impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}