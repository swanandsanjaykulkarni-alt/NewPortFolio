
"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  // useScroll,
} from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const introStorageKey = "swannytech-intro-seen";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () =>
  sessionStorage.getItem(introStorageKey) === "true";

const getServerSnapshot = () => false;

/* Pixel-art character */
function PixelCharacter({ variant }: { variant: "blue" | "violet" }) {
  const colors =
    variant === "blue"
      ? {
          main: "#38bdf8",
          dark: "#075985",
          light: "#bae6fd",
          skin: "#f5c49a",
          shadow: "#082f49",
        }
      : {
          main: "#a78bfa",
          dark: "#6d28d9",
          light: "#ddd6fe",
          skin: "#f5c49a",
          shadow: "#2e1065",
        };

  return (
    <svg
      viewBox="0 0 96 128"
      width="96"
      height="128"
      shapeRendering="crispEdges"
      className="pixel-character-svg"
      aria-hidden="true"
    >
      {/* Hair */}
      <rect x="30" y="8" width="36" height="8" fill={colors.shadow} />
      <rect x="22" y="16" width="52" height="20" fill={colors.shadow} />
      <rect x="26" y="32" width="8" height="8" fill={colors.shadow} />
      <rect x="66" y="32" width="8" height="8" fill={colors.shadow} />

      {/* Face */}
      <rect x="30" y="24" width="36" height="32" fill={colors.skin} />
      <rect x="38" y="40" width="5" height="5" fill="#172554" />
      <rect x="55" y="40" width="5" height="5" fill="#172554" />
      <rect x="43" y="50" width="13" height="3" fill="#b45353" />

      {/* Neck */}
      <rect x="42" y="56" width="14" height="10" fill={colors.skin} />

      {/* Body */}
      <rect x="22" y="66" width="52" height="36" fill={colors.main} />
      <rect x="30" y="66" width="36" height="8" fill={colors.light} />
      <rect x="39" y="78" width="18" height="19" fill={colors.dark} />

      {/* Arms */}
      <rect x="10" y="69" width="12" height="28" fill={colors.dark} />
      <rect x="74" y="69" width="12" height="28" fill={colors.dark} />
      <rect x="10" y="91" width="12" height="8" fill={colors.skin} />
      <rect x="74" y="91" width="12" height="8" fill={colors.skin} />

      {/* Legs */}
      <rect x="28" y="102" width="15" height="18" fill={colors.shadow} />
      <rect x="53" y="102" width="15" height="18" fill={colors.shadow} />
      <rect x="23" y="118" width="22" height="7" fill={colors.main} />
      <rect x="52" y="118" width="22" height="7" fill={colors.main} />

      {/* Digital highlights */}
      <rect x="30" y="74" width="5" height="5" fill={colors.light} />
      <rect x="62" y="83" width="5" height="5" fill={colors.light} />
    </svg>
  );
}

export function CinematicIntro() {
  const [dismissed, setDismissed] = useState(false);
  const reduceMotion = useReducedMotion();

  const hasSeenIntro = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const visible = !dismissed && !hasSeenIntro && !reduceMotion;

  const firstName = site.name.split(" ")[0];
  const lastName = site.name.split(" ").slice(1).join(" ");

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(introStorageKey, "true");
      setDismissed(true);
    }, 12500);

    return () => window.clearTimeout(timer);
  }, [visible]);

  const enterPortfolio = () => {
    sessionStorage.setItem(introStorageKey, "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cinematic-intro"
          role="dialog"
          aria-modal="true"
          aria-label={`Welcome to ${site.name}'s portfolio`}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
          }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background portrait — appears after title */}
          <motion.div
            className="intro-portrait"
            initial={{ opacity: 0, scale: 1.18 }}
            animate={{ opacity: [0, 0, 0.28, 0.48], scale: 1 }}
            transition={{
              duration: 3,
              delay: 5.1,
              ease: "easeOut",
            }}
          >
            <img
              src="/images/profile.jpg"
              alt=""
              className="intro-portrait-image"
            />
          </motion.div>

          {/* Cinematic background */}
          <div className="intro-dark-overlay" />
          <div className="intro-grid" />
          <div className="intro-vignette" />

          {/* Moving light beam */}
          <motion.div
            className="intro-light-beam"
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.8, 0] }}
            transition={{
              duration: 2,
              delay: 4.4,
              ease: "easeInOut",
            }}
          />

          {/* Scene 1: Characters */}
          <div className="intro-character-stage">

            <motion.div
              className="intro-character intro-character-left"
              initial={{ x: -500, opacity: 0, rotate: -15 }}
              animate={{
                x: [ -500, 0, 0 ],
                opacity: [0, 1, 1, 0],
                rotate: [-15, 0, 0, -10],
                scale: [0.7, 1, 1, 0.5],
              }}
              transition={{
                duration: 4.1,
                times: [0, 0.5, 0.78, 1],
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              <PixelCharacter variant="blue" />
              <span className="pixel-character-name">DEVELOPER</span>
            </motion.div>

            <motion.div
              className="intro-character intro-character-right"
              initial={{ x: 500, opacity: 0, rotate: 15 }}
              animate={{
                x: [500, 0, 0],
                opacity: [0, 1, 1, 0],
                rotate: [15, 0, 0, 10],
                scale: [0.7, 1, 1, 0.5],
              }}
              transition={{
                duration: 4.1,
                times: [0, 0.5, 0.78, 1],
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              <PixelCharacter variant="violet" />
              <span className="pixel-character-name">CREATOR</span>
            </motion.div>

          </div>

          {/* Digital particle explosion */}
          <motion.div
            className="intro-particle-burst"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.1, 1.5, 2.5],
            }}
            transition={{ duration: 1.4, delay: 3.6 }}
          >
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.span
                key={i}
                className="intro-particle"
                style={{
                  left: `${50 + Math.cos((i * Math.PI) / 16) * 45}%`,
                  top: `${50 + Math.sin((i * Math.PI) / 16) * 45}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{ duration: 1.3, delay: 3.6 }}
              />
            ))}
          </motion.div>

          {/* Scene 2: Main title */}
          <motion.div
            className="intro-title-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.5 }}
          >
            <motion.div
              className="intro-title-content"
              initial={{ y: 0, scale: 1 }}
              animate={{
                y: [0, 0, -125],
                scale: [1, 1, 0.72],
              }}
              transition={{
                duration: 2.4,
                delay: 4.7,
                times: [0, 0.25, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <motion.p
                className="intro-title-overline"
                initial={{ opacity: 0, letterSpacing: "0px" }}
                animate={{ opacity: 1, letterSpacing: "8px" }}
                transition={{ delay: 3.2, duration: 1 }}
              >
                PRESENTING
              </motion.p>

              <motion.h1 className="intro-main-title">
                <motion.span
                  className="intro-title-first"
                  initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                    letterSpacing: "35px",
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    letterSpacing: "8px",
                    y: 0,
                  }}
                  transition={{
                    duration: 1.3,
                    delay: 3.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {firstName.toUpperCase()}
                </motion.span>

                <motion.span
                  className="intro-title-last"
                  initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                    letterSpacing: "25px",
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    letterSpacing: "5px",
                    y: 0,
                  }}
                  transition={{
                    duration: 1.3,
                    delay: 4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {lastName.toUpperCase()}
                  <span className="intro-title-dot">.</span>
                </motion.span>
              </motion.h1>

              <motion.div
                className="intro-title-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 4.5, duration: 1 }}
              />

              <motion.p
                className="intro-title-subtitle"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.8, duration: 0.8 }}
              >
                SOFTWARE DEVELOPER
                <i />
                TECHNICAL TRAINER
                <i />
                BUILDER
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Scene 3: Photo reveal caption */}
          <motion.div
            className="intro-final-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: [0, 0, 1], y: [35, 35, 0] }}
            transition={{ duration: 1.3, delay: 6.7 }}
          >
            <div className="intro-final-label">
              <Sparkles size={14} />
              THE JOURNEY BEGINS
            </div>

            <p>
              Turning ideas into code.
              <br />
              Turning knowledge into impact.
            </p>

            <motion.button
              type="button"
              className="cinematic-intro-enter"
              onClick={enterPortfolio}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              ENTER PORTFOLIO
              <ArrowRight size={17} />
            </motion.button>
          </motion.div>

          {/* Progress bar */}
          <div className="cinematic-intro-progress">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 12, ease: "linear" }}
            />
          </div>

          <span className="cinematic-intro-credit">
            SWANNYTECH <i /> ORIGINAL PORTFOLIO EXPERIENCE
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
