
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Network,
  Code2,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Terminal,
  Database,
  Braces,
  BrainCircuit,
  Layers,
  BriefcaseBusiness,
} from "lucide-react";

import "./ClassroomHero.css";

export function Hero() {
  const [dark, setDark] = useState(true);
  const [flipped, setFlipped] = useState(false);

  const skills = [
    { name: "Java", icon: <Code2 size={15} /> },
    { name: "Spring Boot", icon: <Braces size={15} /> },
    { name: "Full Stack", icon: <Layers size={15} /> },
    { name: "Python & AI", icon: <BrainCircuit size={15} /> },
    { name: "DSA", icon: <Terminal size={15} /> },
    { name: "Database", icon: <Database size={15} /> },
  ];

  return (
    <section
      className={`classroom-hero ${dark ? "dark-mode" : "light-mode"}`}
    >
      {/* TOP NAVIGATION */}
      <div className="hero-topbar">
        <div className="hero-brand">
          <span className="brand-mark">S</span>
          <span>
            SWANAND<span className="brand-dot">.</span>
          </span>
        </div>

        {/* CLASSROOM WALL SWITCH */}
        <button
          className={`classroom-switch ${
            dark ? "switch-dark" : "switch-light"
          }`}
          onClick={() => setDark(!dark)}
          aria-label="Toggle classroom lights"
          title={dark ? "Turn classroom lights on" : "Turn classroom lights off"}
        >
          <span className="switch-label">LIGHTS</span>
          <span className="switch-plate">
            <span className="switch-lever" />
          </span>
          <span className="switch-state">{dark ? "OFF" : "ON"}</span>
        </button>
      </div>

      {/* MAIN PRESENTATION AREA */}
      <div className="hero-stage">
        {/* DIGITAL BOARD */}
        <div className="presentation-board">
          <div className="board-topline">
            <span className="board-live">
              <i />
              LIVE PRESENTATION
            </span>
            <span className="board-index">01 / INTRODUCTION</span>
          </div>

          <div className="board-content">
            <div className="board-kicker">
              <Sparkles size={15} />
              HELLO, I&apos;M
            </div>

            {/* TYPING NAME */}
            <h1 className="board-name">
              <span className="typing-line">Swanand</span>
              <span className="typing-line typing-gradient">
                Kulkarni
              </span>
            </h1>

            <div className="board-role">
              <span className="role-line" />
              <span className="role-changing">
                SOFTWARE DEVELOPER
              </span>
              <span className="role-separator">/</span>
              <span>TECHNICAL TRAINER</span>
            </div>

            <p className="board-description">
              I build software, simplify technology and help the next
              generation of developers turn ideas into real-world skills.
            </p>

            <div className="board-skills-title">
              <span>MY TECH STACK</span>
              <span className="board-spark">✳</span>
            </div>

            <div className="board-skills">
              {skills.map((skill, index) => (
                <div
                  className="skill-chip"
                  key={skill.name}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>

            <div className="board-bottom">
              <div className="board-stat">
                <strong>01</strong>
                <span>DEVELOPER</span>
              </div>

              <div className="stat-divider" />

              <div className="board-stat">
                <strong>02</strong>
                <span>TRAINER</span>
              </div>

              <div className="stat-divider" />

              <div className="board-stat">
                <strong>03</strong>
                <span>BUILDER</span>
              </div>
            </div>
          </div>

          <div className="board-scan" />
          <div className="board-corner board-corner-one" />
          <div className="board-corner board-corner-two" />
          <div className="board-glow" />
        </div>

        {/* PROFILE CARD */}
        <div className="portrait-side">
          <div className="portrait-caption">
            <span className="caption-dot" />
            THE PERSON BEHIND THE CODE
          </div>

          <button
            className={`portrait-flip ${flipped ? "is-flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
            aria-label="Flip profile card"
          >
            <span className="flip-inner">
              {/* FRONT */}
              <span className="portrait-face portrait-front">
                <span className="portrait-number">SK / 01</span>

                <span className="portrait-image-wrap">
                  <Image
                    src="/images/profile.png"
                    alt="Swanand Kulkarni"
                    fill
                    priority
                    sizes="(max-width: 900px) 80vw, 340px"
                    className="profile-image"
                  />
                </span>

                <span className="portrait-name">
                  SWANAND KULKARNI
                  <small>DEVELOPER • TRAINER • BUILDER</small>
                </span>

                <span className="flip-hint">
                  CLICK TO FLIP ↗
                </span>
              </span>

              {/* BACK */}
              <span className="portrait-face portrait-back">
                <span className="back-icon">
                  <GraduationCap size={30} />
                </span>

                <strong>A LITTLE ABOUT ME</strong>

                <span className="back-copy">
                  Passionate about building useful software and making
                  technology easier to understand.
                </span>

                <span className="back-divider" />

                <span className="back-point">
                  <Code2 size={16} />
                  Software Development
                </span>

                <span className="back-point">
                  <GraduationCap size={16} />
                  Technical Training
                </span>

                <span className="back-point">
                  <BriefcaseBusiness size={16} />
                  Product Building
                </span>

                <span className="flip-hint">
                  CLICK TO RETURN ↗
                </span>
              </span>
            </span>
          </button>

          {/* FLOATING LABELS */}
          <div className="floating-label label-developer">
            <Code2 size={16} />
            Developer
          </div>

          <div className="floating-label label-trainer">
            <GraduationCap size={16} />
            Trainer
          </div>

          <div className="floating-label label-builder">
            <Sparkles size={16} />
            Idea to Product
          </div>
        </div>
      </div>

      {/* CLASSROOM WITH TEACHER AND STUDENTS */}
      <div className="classroom-scene">
        <div className="classroom-floor" />

        {/* TEACHER */}
        <div className="classroom-teacher">
          <div className="teacher-shadow" />

          <div className="teacher-character">
            <div className="teacher-head">
              <span className="teacher-hair" />
              <span className="teacher-eye eye-left" />
              <span className="teacher-eye eye-right" />
              <span className="teacher-smile" />
            </div>

            <div className="teacher-neck" />

            <div className="teacher-body">
              <span className="teacher-shirt-detail" />
              <span className="teacher-arm teacher-arm-left" />
              <span className="teacher-arm teacher-arm-right" />
              <span className="teacher-hand" />
            </div>

            <div className="teacher-legs">
              <span />
              <span />
            </div>

            {/* TEACHER'S STICK */}
            <span className="teacher-stick" />
          </div>

          <span className="teacher-tag">
            YOUR INSTRUCTOR
          </span>
        </div>

        {/* STUDENTS */}
        <div className="classroom-students">
          {["one", "two", "three", "four"].map((student) => (
            <div
              className={`student student-${student}`}
              key={student}
            >
              <span className="student-head" />
              <span className="student-body" />
              <span className="student-desk" />
            </div>
          ))}
        </div>

        <div className="classroom-floor-label">
          <span />
          LEARN · BUILD · CREATE
        </div>
      </div>

      {/* SOCIAL AND RESUME LINKS */}
      <div className="hero-actions">
        <a
          className="action-primary"
          href="/resume.pdf"
          download
        >
          <Download size={17} />
          Download Resume
        </a>

        <a
          className="action-secondary"
          href="https://www.linkedin.com/in/swanandtrainer/"
          target="_blank"
          rel="noreferrer"
        >
          <Network size={17} />
          LinkedIn
          <ArrowUpRight size={14} />
        </a>

        <a
          className="action-secondary"
          href="https://github.com/swanandsanjaykulkarni-alt"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} />
          GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* FOOTER */}
      <div className="hero-footer">
        <span>
          <i />
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <span>BUILDING • TEACHING • LEARNING</span>
      </div>
    </section>
  );
}
