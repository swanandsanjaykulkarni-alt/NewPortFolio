
"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import "./MagicDoors.css";

const fragments = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  x: Math.cos((i / 34) * Math.PI * 2) * (170 + (i % 4) * 32),
  y: Math.sin((i / 34) * Math.PI * 2) * (170 + (i % 4) * 32),
  delay: (i % 11) * 0.045,
  size: 3 + (i % 4) * 2,
  rotate: (i * 47) % 360,
}));

const symbols = ["⌘", "◈", "⌬", "⟡", "✳"];

function Robot({ active }: { active: boolean }) {
  return (
    <motion.svg
      className="hero-robot"
      viewBox="0 0 360 520"
      role="img"
      aria-label="Futuristic humanoid robot"
      initial="hidden"
      animate={active ? "assembled" : "hidden"}
    >
      <defs>
        <linearGradient id="armor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1fbff" />
          <stop offset=".28" stopColor="#9aafc4" />
          <stop offset=".58" stopColor="#425b76" />
          <stop offset="1" stopColor="#17283e" />
        </linearGradient>

        <linearGradient id="armorDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fa9c1" />
          <stop offset=".5" stopColor="#344c67" />
          <stop offset="1" stopColor="#111d30" />
        </linearGradient>

        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#173d58" />
          <stop offset="1" stopColor="#071421" />
        </linearGradient>

        <radialGradient id="core">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".22" stopColor="#b9fbff" />
          <stop offset=".55" stopColor="#27caff" />
          <stop offset="1" stopColor="#07508d" />
        </radialGradient>

        <filter id="blueGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="180" cy="495" rx="94" ry="13" fill="#3bcaff" opacity=".18" />
      <ellipse cx="180" cy="255" rx="125" ry="210" fill="#2469bb" opacity=".08" />

      {/* Legs */}
      <motion.g
        variants={{
          hidden: { opacity: 0, y: 100, rotate: -12 },
          assembled: { opacity: 1, y: 0, rotate: 0 },
        }}
        transition={{ duration: 1, delay: 1.15 }}
      >
        <path d="M135 350 L112 390 L119 454 L151 454 L164 385 L166 350Z"
          fill="url(#armor)" stroke="#9cc9e3" strokeWidth="2" />
        <path d="M194 350 L197 390 L209 454 L241 454 L248 390 L225 350Z"
          fill="url(#armor)" stroke="#9cc9e3" strokeWidth="2" />

        <path d="M119 454 L112 477 L156 477 L158 454Z"
          fill="url(#armorDark)" stroke="#8dc9e7" strokeWidth="2" />
        <path d="M209 454 L212 477 L256 477 L241 454Z"
          fill="url(#armorDark)" stroke="#8dc9e7" strokeWidth="2" />

        <path d="M126 399 L153 399 M215 399 L239 399"
          stroke="#48dfff" strokeWidth="3" opacity=".7" />

        <path d="M137 424 L151 424 M216 424 L230 424"
          stroke="#243d56" strokeWidth="5" />

        <circle cx="139" cy="380" r="13" fill="#243d54" stroke="#91b7d1" strokeWidth="3" />
        <circle cx="220" cy="380" r="13" fill="#243d54" stroke="#91b7d1" strokeWidth="3" />
      </motion.g>

      {/* Waist */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: .5, y: 30 },
          assembled: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: .7, delay: .9 }}
      >
        <path d="M131 318 L229 318 L222 368 L138 368Z"
          fill="url(#armorDark)" stroke="#8daec5" strokeWidth="2" />

        <path d="M150 329 L210 329 L204 356 L156 356Z"
          fill="#172c42" stroke="#4e83a5" />

        <path d="M169 336 L191 336 L187 348 L173 348Z"
          fill="#53eaff" opacity=".75" filter="url(#blueGlow)" />
      </motion.g>

      {/* Left arm */}
      <motion.g
        variants={{
          hidden: { opacity: 0, x: -100, rotate: -40 },
          assembled: { opacity: 1, x: 0, rotate: 0 },
        }}
        transition={{ duration: .9, delay: .65 }}
      >
        <path d="M107 177 L75 192 L56 266 L79 280 L111 218Z"
          fill="url(#armor)" stroke="#9cc9e3" strokeWidth="2" />

        <path d="M56 266 L39 326 L65 338 L88 280Z"
          fill="url(#armorDark)" stroke="#8db6d0" strokeWidth="2" />

        <circle cx="78" cy="205" r="20" fill="url(#armorDark)" stroke="#b2d1e3" strokeWidth="3" />
        <circle cx="68" cy="275" r="15" fill="#1b3c56" stroke="#7eb7d7" strokeWidth="3" />

        <path d="M40 326 L32 345 L69 350 L75 336Z"
          fill="url(#armor)" stroke="#8db6d0" strokeWidth="2" />

        <path d="M56 230 L76 239" stroke="#53dcff" strokeWidth="3" />
      </motion.g>

      {/* Right arm and cannon */}
      <motion.g
        className="robot-weapon-arm"
        variants={{
          hidden: { opacity: 0, x: 100, rotate: 45 },
          assembled: { opacity: 1, x: 0, rotate: 0 },
        }}
        transition={{ duration: 1, delay: .75 }}
      >
        <path d="M253 177 L285 192 L304 266 L281 280 L249 218Z"
          fill="url(#armor)" stroke="#9cc9e3" strokeWidth="2" />

        <path d="M304 266 L321 326 L295 338 L272 280Z"
          fill="url(#armorDark)" stroke="#8db6d0" strokeWidth="2" />

        <circle cx="282" cy="205" r="20" fill="url(#armorDark)" stroke="#b2d1e3" strokeWidth="3" />
        <circle cx="292" cy="275" r="15" fill="#1b3c56" stroke="#7eb7d7" strokeWidth="3" />

        <path d="M292 316 L333 302 L343 317 L302 338Z"
          fill="url(#armorDark)" stroke="#8dc9e7" strokeWidth="2" />

        <path d="M326 306 L352 297 L358 308 L333 322Z"
          fill="#172e45" stroke="#69e7ff" strokeWidth="2" />

        <path d="M348 300 L358 303 L358 313 L348 317Z"
          fill="#8af8ff" filter="url(#blueGlow)" />

        <path d="M315 312 L329 307" stroke="#60eaff" strokeWidth="3" />
      </motion.g>

      {/* Torso */}
      <motion.g
        variants={{
          hidden: { opacity: 0, y: -70, scale: .8 },
          assembled: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 1, delay: .45 }}
      >
        <path d="M119 154 L151 137 L209 137 L241 154 L259 230 L236 326 L124 326 L101 230Z"
          fill="url(#armor)" stroke="#a6c9df" strokeWidth="2.5" />

        <path d="M132 174 L180 158 L228 174 L240 228 L218 302 L142 302 L120 228Z"
          fill="url(#armorDark)" stroke="#5e87a6" strokeWidth="2" />

        <path d="M133 180 L155 171 L144 215 L123 222Z"
          fill="#dcecf4" opacity=".55" />

        <path d="M227 180 L205 171 L216 215 L237 222Z"
          fill="#dcecf4" opacity=".3" />

        <path d="M137 239 L164 222 L180 240 L164 275 L133 278Z"
          fill="#142a40" stroke="#6d9fbe" />

        <path d="M223 239 L196 222 L180 240 L196 275 L227 278Z"
          fill="#142a40" stroke="#6d9fbe" />

        <circle cx="180" cy="228" r="36" fill="#081a2a" stroke="#73eaff" strokeWidth="3" />
        <circle cx="180" cy="228" r="27" fill="url(#core)" filter="url(#blueGlow)" />
        <circle cx="180" cy="228" r="12" fill="#f3ffff" opacity=".9" />

        <path d="M180 184 L180 193 M180 263 L180 272 M136 228 L145 228 M215 228 L224 228"
          stroke="#8df4ff" strokeWidth="3" strokeLinecap="round" />

        <path d="M116 291 L145 305 L180 298 L215 305 L244 291"
          fill="none" stroke="#75dfff" strokeWidth="3" opacity=".7" />

        <path d="M145 316 L180 308 L215 316"
          fill="none" stroke="#142d46" strokeWidth="6" />
      </motion.g>

      {/* Neck */}
      <motion.g
        variants={{
          hidden: { opacity: 0, y: -35 },
          assembled: { opacity: 1, y: 0 },
        }}
        transition={{ duration: .5, delay: .3 }}
      >
        <path d="M160 119 L200 119 L205 150 L155 150Z"
          fill="url(#armorDark)" stroke="#91b6ce" strokeWidth="2" />

        <path d="M168 127 L192 127 L192 143 L168 143Z"
          fill="#12283d" />
      </motion.g>

      {/* Head */}
      <motion.g
        variants={{
          hidden: { opacity: 0, y: -130, rotate: 12, scale: .7 },
          assembled: { opacity: 1, y: 0, rotate: 0, scale: 1 },
        }}
        transition={{ duration: 1.1, delay: .1, type: "spring", stiffness: 85 }}
      >
        <path d="M137 43 L151 22 L209 22 L223 43 L218 111 L197 133 L163 133 L142 111Z"
          fill="url(#armor)" stroke="#b6d5e7" strokeWidth="2.5" />

        <path d="M151 48 L164 34 L196 34 L209 48 L205 104 L190 119 L170 119 L155 104Z"
          fill="url(#glass)" stroke="#6e9fbe" strokeWidth="2" />

        <path d="M145 55 L155 48 L151 95 L140 103Z"
          fill="#e3f3fa" opacity=".35" />

        <path d="M215 55 L205 48 L209 95 L220 103Z"
          fill="#e3f3fa" opacity=".2" />

        <path d="M158 76 L175 69 L177 81 L159 87Z"
          fill="#9cfaff" filter="url(#blueGlow)" />

        <path d="M202 76 L185 69 L183 81 L201 87Z"
          fill="#9cfaff" filter="url(#blueGlow)" />

        <path d="M169 102 L191 102 L184 111 L176 111Z"
          fill="#4b6d86" stroke="#8abbd7" />

        <path d="M180 39 L180 56" stroke="#73eaff" strokeWidth="2" />

        <path d="M128 72 L140 76 L137 105 L127 99Z"
          fill="url(#armorDark)" stroke="#8cb4ce" />

        <path d="M232 72 L220 76 L223 105 L233 99Z"
          fill="url(#armorDark)" stroke="#8cb4ce" />
      </motion.g>

      {/* Animated lights */}
      <motion.g
        animate={active ? { opacity: [0.35, 1, 0.5, 1] } : { opacity: 0 }}
        transition={{ duration: 1.8, repeat: Infinity }}
        filter="url(#blueGlow)"
      >
        <circle cx="116" cy="184" r="3" fill="#7df2ff" />
        <circle cx="244" cy="184" r="3" fill="#7df2ff" />
        <circle cx="145" cy="290" r="3" fill="#7df2ff" />
        <circle cx="215" cy="290" r="3" fill="#7df2ff" />
      </motion.g>
    </motion.svg>
  );
}

export function MagicDoors() {
  const reduceMotion = useReducedMotion();

  const [phase, setPhase] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setPhase(4);
      setRevealed(site.services.length);
      return;
    }

    setPhase(0);
    setRevealed(0);
    setSelected(null);

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase(1), 500));
    timers.push(setTimeout(() => setPhase(2), 2700));
    timers.push(setTimeout(() => setPhase(3), 4100));

    site.services.forEach((_, index) => {
      timers.push(
        setTimeout(() => setRevealed(index + 1), 4900 + index * 900)
      );
    });

    timers.push(
      setTimeout(
        () => setPhase(4),
        4900 + site.services.length * 900
      )
    );

    return () => timers.forEach(clearTimeout);
  }, [run, reduceMotion]);

  const replay = () => {
    setRun((value) => value + 1);
  };

  return (
    <section className="tech-universe" id="skills">
      {/* Universe background */}
      <div className="universe-stars" />
      <div className="universe-nebula nebula-a" />
      <div className="universe-nebula nebula-b" />
      <div className="universe-nebula nebula-c" />

      {/* Rotating energy portal */}
      <div className="universe-portal">
        <div className="portal-halo" />
        <div className="portal-ring ring-a" />
        <div className="portal-ring ring-b" />
        <div className="portal-ring ring-c" />
        <div className="portal-ring ring-d" />
        <div className="portal-crosshair" />
      </div>

      <div className="universe-inner">
        <Reveal>
          <header className="universe-header">
            <span className="universe-overline">
              A WORLD OF POSSIBILITIES
            </span>

            <h2>
              Beyond <span>the Code.</span>
            </h2>

            <p>
              Every skill is another world waiting to be explored.
            </p>
          </header>
        </Reveal>

        <div className="universe-scene">
          <div className="scene-vignette" />
          <div className="scene-stars" />

          {/* Mechanical fragments assembling the robot */}
          <div className="robot-fragments">
            {fragments.map((piece) => (
              <motion.span
                key={`${run}-${piece.id}`}
                className="robot-fragment"
                style={{
                  width: piece.size,
                  height: piece.size * 1.7,
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  x: piece.x,
                  y: piece.y,
                  rotate: piece.rotate,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  x: phase >= 1 ? 0 : piece.x,
                  y: phase >= 1 ? 0 : piece.y,
                  rotate: phase >= 1 ? 0 : piece.rotate,
                  opacity:
                    phase >= 1 && phase < 2
                      ? [0, 1, 0.8, 0]
                      : 0,
                  scale:
                    phase >= 1 && phase < 2
                      ? [0.4, 1, 0.7]
                      : 0.2,
                }}
                transition={{
                  duration: 1.8,
                  delay: piece.delay,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
              />
            ))}
          </div>

          {/* Electrical energy */}
          <div className={`electric-arcs ${phase >= 2 ? "arcs-live" : ""}`}>
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Main robot */}
          <motion.div
            className={`robot-stage ${phase >= 2 ? "robot-awake" : ""}`}
            animate={
              phase >= 2
                ? { y: [0, -8, 0], rotateY: [-2, 2, -2] }
                : { y: 0 }
            }
            transition={{
              duration: 4,
              repeat: phase >= 2 ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div className="robot-backlight" />

            <Robot active={phase >= 2} />

            <div className="robot-floor-shadow" />
          </motion.div>

          {/* Weapon muzzle flash */}
          <AnimatePresence>
            {phase >= 3 && (
              <motion.div
                key={`muzzle-${run}`}
                className="muzzle-flash"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0, 1, 0],
                  scale: [0.2, 1.6, 0.5, 1.3, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: 2,
                  repeatDelay: 1,
                }}
              />
            )}
          </AnimatePresence>

          {/* Bullets */}
          <div className={`universe-shots ${phase >= 3 ? "shots-fire" : ""}`}>
            {site.services.map((_, index) => (
              <motion.span
                key={`${run}-shot-${index}`}
                className={`universe-shot shot-${index + 1}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  phase >= 3
                    ? {
                        opacity: [0, 1, 1, 0],
                        scale: [0.2, 1, 1.2, 0.1],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.1,
                  delay: index * 0.85,
                  repeat: phase >= 3 ? 1 : 0,
                  repeatDelay: 2.2,
                }}
              />
            ))}
          </div>

          {/* Impact rings */}
          <div className="impact-layer">
            {site.services.map((_, index) => (
              <span
                key={`${run}-impact-${index}`}
                className={`impact impact-${index + 1} ${
                  revealed > index ? "impact-active" : ""
                }`}
              />
            ))}
          </div>

          {/* Green holographic skill projections */}
          <div className="skill-projections">
            {site.services.map((service, index) => {
              const visible = index < revealed;
              const isSelected = selected === index;

              return (
                <motion.div
                  key={service.title}
                  className={`projection projection-${index + 1} ${
                    visible ? "projection-visible" : ""
                  } ${isSelected ? "projection-selected" : ""}`}
                  initial={false}
                  animate={
                    visible
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          rotateX: 0,
                        }
                      : {
                          opacity: 0,
                          scale: 0.45,
                          y: 30,
                          rotateX: 25,
                        }
                  }
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 85,
                    damping: 16,
                  }}
                >
                  <button
                    className={`projection-card projection-green ${
                      isSelected ? "projection-open" : ""
                    }`}
                    onClick={() =>
                      setSelected(isSelected ? null : index)
                    }
                    type="button"
                    aria-expanded={isSelected}
                  >
                    <span className="projection-scan" />

                    <span className="projection-corner corner-tl" />
                    <span className="projection-corner corner-tr" />
                    <span className="projection-corner corner-bl" />
                    <span className="projection-corner corner-br" />

                    <span className="projection-top">
                      <span className="projection-glyph">
                        {symbols[index % symbols.length]}
                      </span>

                      <span className="projection-number">
                        0{index + 1}
                      </span>
                    </span>

                    <span className="projection-name">
                      {service.title}
                    </span>

                    <span className="projection-bottom">
                      <span className="projection-line" />
                      <span>{isSelected ? "−" : "↗"}</span>
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Floating particles */}
          <div className="foreground-particles">
            {Array.from({ length: 18 }, (_, i) => (
              <span
                key={i}
                style={{
                  left: `${(i * 37 + 9) % 100}%`,
                  top: `${(i * 53 + 11) % 100}%`,
                  animationDelay: `${(i % 7) * -0.8}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Selected skill information */}
        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              className="projection-details"
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -15,
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.45 }}
            >
              <div className="details-heading">
                <div>
                  <span>INSIDE THIS WORLD</span>
                  <h3>{site.services[selected].title}</h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>

              <div className="details-list">
                {site.services[selected].details.map((detail, index) => (
                  <motion.span
                    key={detail}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
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

        {/* Footer */}
        <div className="universe-controls">
          <span>Explore. Experiment. Create.</span>

          <button type="button" onClick={replay}>
            <span>↗</span>
            Continue animation
          </button>
        </div>
      </div>
    </section>
  );
}
