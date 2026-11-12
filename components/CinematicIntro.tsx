"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Character3D } from "@/components/Character3D";
import { site } from "@/lib/site";

const introStorageKey = "swannytech-intro-seen";
const subscribeToIntro = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};
const getIntroSeen = () => sessionStorage.getItem(introStorageKey) === "true";
const getServerIntroSeen = () => false;

export function CinematicIntro() {
  const [dismissed, setDismissed] = useState(false);
  const reduceMotion = useReducedMotion();
  const hasSeenIntro = useSyncExternalStore(
    subscribeToIntro,
    getIntroSeen,
    getServerIntroSeen,
  );
  const visible = !dismissed && !hasSeenIntro && !reduceMotion;

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(introStorageKey, "true");
      setDismissed(true);
    }, 5200);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const enterPortfolio = () => {
    sessionStorage.setItem(introStorageKey, "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && !reduceMotion ? (
        <motion.div
          className="cinematic-intro"
          role="dialog"
          aria-modal="true"
          aria-label={`Welcome to ${site.name}'s portfolio`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="cinematic-intro-light" aria-hidden="true" />
          <div className="cinematic-intro-grid" aria-hidden="true" />
          <div className="cinematic-intro-content">
            <motion.div
              className="cinematic-intro-character"
              initial={{ opacity: 0, x: -45, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Character3D className="character-stage-intro" />
            </motion.div>
            <div className="cinematic-intro-copy">
              <motion.div
                className="cinematic-intro-mark"
                initial={{ opacity: 0, scale: 0.72, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                SK
              </motion.div>
              <motion.p
                className="cinematic-intro-overline"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                A portfolio premiere
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.65, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                SWANAND
                <span>KULKARNI</span>
              </motion.h1>
              <motion.p
                className="cinematic-intro-role"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25, duration: 0.8 }}
              >
                Software Developer <i /> Technical Trainer <i /> Java &amp; DSA Mentor
              </motion.p>
              <motion.button
                className="cinematic-intro-enter"
                type="button"
                onClick={enterPortfolio}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.65, duration: 0.6 }}
              >
                Enter portfolio <ArrowRight size={16} />
              </motion.button>
              <p className="cinematic-intro-disclaimer">Stylized digital avatar · not a portrait</p>
            </div>
          </div>
          <div className="cinematic-intro-progress" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5.2, ease: "linear" }}
            />
          </div>
          <span className="cinematic-intro-credit">SWANNYTECH · 01 / 01</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
