"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import "./MagicDoors.css";

const symbols = ["⌘", "◈", "⌬", "⟡", "⏣", "⌁"];

export function MagicDoors() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [run, setRun] = useState(0);

  const services = site.services;
  const total = services.length;

  const replay = () => {
    setRun((value) => value + 1);
    setIsPaused(false);
    setSelected(0);
  };

  return (
    <section className="tech-universe" id="skills">
      <div className="universe-grid" />
      <div className="universe-noise" />
      <div className="universe-glow universe-glow-one" />
      <div className="universe-glow universe-glow-two" />

      <div className="universe-inner">
        <Reveal>
          <header className="universe-header">
            <span className="universe-overline">
              <i />
              EXPLORE MY TECH UNIVERSE
              <i />
            </span>

            <h2>
              Beyond <span>the Code.</span>
            </h2>

            <p>
              A collection of skills, technologies and ideas
              powering everything I create.
            </p>
          </header>
        </Reveal>

        <div
          key={run}
          className={`holo-scene ${
            isPaused ? "scene-paused" : ""
          } ${reduceMotion ? "scene-reduced-motion" : ""}`}
        >
          <div className="scene-atmosphere" />

          {/* Background 3D rings */}
          <div className="scene-orbit orbit-back" />
          <div className="scene-orbit orbit-middle" />
          <div className="scene-orbit orbit-front" />

          {/* Floating particles */}
          <div className="scene-particles">
            {Array.from({ length: 38 }, (_, index) => (
              <span
                key={index}
                style={{
                  left: `${(index * 31 + 7) % 100}%`,
                  top: `${(index * 47 + 5) % 90}%`,
                  animationDelay: `${(index % 9) * -0.7}s`,
                  animationDuration: `${4 + (index % 5)}s`,
                }}
              />
            ))}
          </div>

          {/* Circular 3D carousel */}
          <div className="carousel-perspective">
            <div className="carousel-track">
              {services.map((service, index) => {
                const angle = (360 / total) * index;
                const isSelected = selected === index;

                return (
                  <div
                    className="carousel-position"
                    key={service.title}
                    style={
                      {
                        "--card-angle": `${angle}deg`,
                        "--counter-angle": `${-angle}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <motion.button
                      type="button"
                      className={`holo-card ${
                        isSelected ? "holo-card-selected" : ""
                      }`}
                      onClick={() =>
                        setSelected(isSelected ? null : index)
                      }
                      aria-expanded={isSelected}
                      whileHover={{ y: -8, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="holo-card-border" />
                      <span className="holo-card-scan" />
                      <span className="holo-card-glare" />

                      <span className="holo-card-top">
                        <span className="holo-symbol">
                          {symbols[index % symbols.length]}
                        </span>

                        <span className="holo-index">
                          SKILL / 0{index + 1}
                        </span>
                      </span>

                      <span className="holo-card-title">
                        {service.title}
                      </span>

                      <span className="holo-card-divider">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>

                      <span className="holo-card-bottom">
                        <span>ACCESS MODULE</span>
                        <span className="holo-arrow">
                          {isSelected ? "−" : "↗"}
                        </span>
                      </span>

                      <span className="holo-corner holo-corner-tl" />
                      <span className="holo-corner holo-corner-tr" />
                      <span className="holo-corner holo-corner-bl" />
                      <span className="holo-corner holo-corner-br" />
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Portal below the cards */}
          <div className="energy-portal">
            <div className="portal-light-beam" />

            <div className="portal-ring portal-ring-one" />
            <div className="portal-ring portal-ring-two" />
            <div className="portal-ring portal-ring-three" />
            <div className="portal-ring portal-ring-four" />
            <div className="portal-ring portal-ring-five" />

            <div className="portal-core">
              <span />
            </div>

            <div className="portal-reflection" />
          </div>

          <div className="scene-coordinates coordinate-left">
            <span>01 / {String(total).padStart(2, "0")}</span>
            <i />
            <span>SKILL MATRIX</span>
          </div>

          <div className="scene-coordinates coordinate-right">
            <span>TECHNOLOGY</span>
            <i />
            <span>EXPLORE MODULES</span>
          </div>
        </div>

        {/* Skill information */}
        <AnimatePresence mode="wait">
          {selected !== null && services[selected] && (
            <motion.div
              key={services[selected].title}
              className="holo-details"
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 15,
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.45 }}
            >
              <div className="details-topline">
                <span>◈ MODULE DETAILS</span>
                <span>
                  0{selected + 1} / 0{total}
                </span>
              </div>

              <div className="details-heading">
                <div>
                  <span className="details-kicker">
                    TECHNOLOGY & EXPERTISE
                  </span>
                  <h3>{services[selected].title}</h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close skill details"
                >
                  ×
                </button>
              </div>

              <div className="details-skills">
                {services[selected].details.map((detail, index) => (
                  <motion.span
                    key={detail}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <i />
                    {detail}
                  </motion.span>
                ))}
              </div>

              {(selected === 2 || selected === 3) && (
                <p className="details-extra">
                  {site.training.points[0]}
                </p>
              )}

              {selected === 4 && (
                <p className="details-extra">
                  Generative AI Trainer experience at Campus Credentials.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="universe-controls">
          <div className="controls-caption">
            <span className="controls-pulse" />
            <span>MOVE THROUGH THE ORBIT</span>
          </div>

          <div className="controls-actions">
            <button
              type="button"
              onClick={() => setIsPaused((value) => !value)}
            >
              <span>{isPaused ? "▶" : "Ⅱ"}</span>
              {isPaused ? "Resume" : "Pause"}
            </button>

            <button type="button" onClick={replay}>
              <span>↻</span>
              Replay orbit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}