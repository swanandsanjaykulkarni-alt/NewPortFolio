
"use client";

import { useEffect, useState } from "react";
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
  Monitor,
  Zap,
} from "lucide-react";

import "./ClassroomHero.css";

export function Hero() {
  const [introVisible, setIntroVisible] = useState(true);
  const [zooming, setZooming] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const zoomTimer = window.setTimeout(() => {
      setZooming(true);
    }, 1650);

    const finishTimer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 3250);

    return () => {
      window.clearTimeout(zoomTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  const skipIntro = () => {
    setIntroVisible(false);
  };

  const skills = [
    { name: "Java", icon: <Code2 size={15} /> },
    { name: "Spring Boot", icon: <Braces size={15} /> },
    { name: "Full Stack", icon: <Layers size={15} /> },
    { name: "Python & AI", icon: <BrainCircuit size={15} /> },
    { name: "DSA", icon: <Terminal size={15} /> },
    { name: "Database", icon: <Database size={15} /> },
  ];

  return (
    <>
      {/* CINEMATIC LAPTOP INTRO */}
      {introVisible && (
        <div className={`laptop-intro ${zooming ? "intro-zoom" : ""}`}>
          <div className="intro-atmosphere" />

          <div className="intro-top">
            <span className="intro-brand">
              <span className="intro-brand-icon">S</span>
              SWANAND<span>.</span>
            </span>

            <span className="intro-status">
              <i />
              PORTFOLIO EXPERIENCE
            </span>
          </div>

          <div className="laptop-scene">
            <div className="laptop-halo" />

            <div className="laptop-device">
              {/* SCREEN LID */}
              <div className="laptop-lid">
                <div className="laptop-screen">
                  <div className="screen-content">
                    <div className="screen-nav">
                      <span className="screen-logo">S.</span>
                      <span>PORTFOLIO / 2026</span>
                    </div>

                    <div className="screen-main">
                      <span className="screen-eyebrow">
                        <i />
                        WELCOME TO MY DIGITAL SPACE
                      </span>

                      <h1>
                        Hello, I&apos;m
                        <strong>Swanand Kulkarni</strong>
                      </h1>

                      <p>
                        Software Developer · Technical Trainer · Builder
                      </p>

                      <div className="screen-code">
                        <span className="code-purple">const</span>{" "}
                        <span className="code-blue">passion</span>{" "}
                        = {"{"}
                        <br />
                        &nbsp;&nbsp;build:{" "}
                        <span className="code-green">"Software"</span>,
                        <br />
                        &nbsp;&nbsp;teach:{" "}
                        <span className="code-green">"Technology"</span>,
                        <br />
                        &nbsp;&nbsp;create:{" "}
                        <span className="code-green">"Impact"</span>
                        <br />
                        {"}"};
                      </div>
                    </div>

                    <div className="screen-bottom">
                      <span>JAVA</span>
                      <span>SPRING BOOT</span>
                      <span>FULL STACK</span>
                      <span>AI / ML</span>
                    </div>
                  </div>
                  <div className="screen-reflection" />
                </div>
              </div>

              {/* KEYBOARD BASE */}
              <div className="laptop-base">
                <div className="laptop-keyboard">
                  {Array.from({ length: 4 }).map((_, row) => (
                    <div className="keyboard-row" key={row}>
                      {Array.from({ length: row === 3 ? 10 : 14 }).map(
                        (_, key) => (
                          <span key={key} />
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div className="laptop-trackpad" />
                <div className="laptop-notch" />
              </div>
            </div>

            <div className="intro-floor-shadow" />
          </div>

          <div className="intro-bottom">
            <div>
              <span className="intro-loading-line" />
              <p>
                {zooming ? "ENTERING PORTFOLIO..." : "INITIALIZING EXPERIENCE..."}
              </p>
            </div>

            <button onClick={skipIntro} className="skip-intro">
              SKIP INTRO <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* MAIN PORTFOLIO HERO */}
      <section className={`classroom-hero ${introVisible ? "hero-hidden" : "hero-visible"}`}>
        <div className="hero-background-glow" />

        <div className="hero-topbar">
          <div className="hero-brand">
            <span className="brand-mark">S</span>
            <span>
              SWANAND<span className="brand-dot">.</span>
            </span>
          </div>

          <div className="hero-top-status">
            <span />
            DEVELOPER PORTFOLIO
          </div>
        </div>

        <div className="hero-stage">
          {/* DIGITAL PRESENTATION BOARD */}
          <div className="presentation-board">
            <div className="board-topline">
              <span className="board-live">
                <i />
                DIGITAL INTRODUCTION
              </span>
              <span>01 / ABOUT ME</span>
            </div>

            <div className="board-content">
              <div className="board-kicker">
                <Sparkles size={15} />
                HELLO, I&apos;M
              </div>

              <h1 className="board-name">
                <span className="typing-line">Swanand</span>
                <span className="typing-line typing-gradient">
                  Kulkarni
                </span>
              </h1>

              <div className="board-role">
                <span className="role-line" />
                <span className="role-changing">SOFTWARE DEVELOPER</span>
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
                    style={{ animationDelay: `${index * 100}ms` }}
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

          {/* PROFILE FLIP CARD */}
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

                  <span className="flip-hint">CLICK TO FLIP ↗</span>
                </span>

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

                  <span className="flip-hint">CLICK TO RETURN ↗</span>
                </span>
              </span>
            </button>

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

        {/* ACTION LINKS */}
        <div className="hero-actions">
          <a className="action-primary" href="/resume.pdf" download>
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

        <div className="hero-footer">
          <span>
            <i />
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <span>BUILDING • TEACHING • LEARNING</span>
        </div>
      </section>
    </>
  );
}
