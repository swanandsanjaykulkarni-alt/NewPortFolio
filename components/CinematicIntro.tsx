"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "swannytech-intro-seen";

const subscribeToIntro = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getIntroSeen = () => sessionStorage.getItem(STORAGE_KEY) === "true";
const getServerIntroSeen = () => false;

function PixelCharacter({ purple = false }: { purple?: boolean }) {
  const main = purple ? "#c084fc" : "#38bdf8";
  const dark = purple ? "#581c87" : "#075985";
  const glow = purple ? "#e9d5ff" : "#bae6fd";

  return (
    <svg
      viewBox="0 0 64 80"
      width="100"
      height="125"
      shapeRendering="crispEdges"
      className="movie-pixel"
      aria-hidden="true"
    >
      <rect x="20" y="3" width="24" height="7" fill="#111827" />
      <rect x="13" y="10" width="38" height="13" fill="#111827" />
      <rect x="17" y="20" width="30" height="20" fill="#eab994" />
      <rect x="22" y="27" width="5" height="5" fill="#111827" />
      <rect x="37" y="27" width="5" height="5" fill="#111827" />
      <rect x="27" y="36" width="12" height="3" fill="#9f1239" />
      <rect x="26" y="40" width="12" height="7" fill="#eab994" />
      <rect x="12" y="47" width="40" height="23" fill={main} />
      <rect x="20" y="47" width="24" height="5" fill={glow} />
      <rect x="5" y="49" width="7" height="19" fill={dark} />
      <rect x="52" y="49" width="7" height="19" fill={dark} />
      <rect x="19" y="70" width="10" height="8" fill={dark} />
      <rect x="36" y="70" width="10" height="8" fill={dark} />
    </svg>
  );
}

function SpaceParticles() {
  return (
    <div className="space-particles" aria-hidden="true">
      {Array.from({ length: 65 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37.71) % 100}%`,
            top: `${(i * 61.13) % 100}%`,
            animationDelay: `${(i % 9) * -0.4}s`,
            animationDuration: `${2 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

function PixelArrival({ variant }: { variant: "developer" | "trainer" }) {
  return (
    <div className="pixel-arrival">
      <motion.div
        className="pixel-person pixel-person-left"
        initial={{ x: -250, opacity: 0, rotate: -25 }}
        animate={{
          x: [-250, 0, 0, 120],
          opacity: [0, 1, 1, 0],
          rotate: [-25, 0, 0, 25],
          y: [0, -15, 0, -70],
        }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      >
        <PixelCharacter />
      </motion.div>

      <motion.div
        className="pixel-person pixel-person-right"
        initial={{ x: 250, opacity: 0, rotate: 25 }}
        animate={{
          x: [250, 0, 0, -120],
          opacity: [0, 1, 1, 0],
          rotate: [25, 0, 0, -25],
          y: [0, -15, 0, -70],
        }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      >
        <PixelCharacter purple />
      </motion.div>

      <motion.div
        className={`energy-explosion ${variant}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 2.7],
          opacity: [0, 1, 0],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 2, delay: 0.6 }}
      />
    </div>
  );
}

function MovieScene({
  phase,
  onEnter,
}: {
  phase: number;
  onEnter: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      {phase === 0 && (
        <motion.div
          key="universe"
          className="movie-scene universe-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2.5, filter: "blur(12px)" }}
          transition={{ duration: 0.8 }}
        >
          <div className="universe-glow" />
          <div className="wormhole" />
          <div className="warp-tunnel" />
          <motion.div
            className="universe-caption"
            initial={{ opacity: 0, letterSpacing: "2px" }}
            animate={{ opacity: [0, 1, 1, 0], letterSpacing: "10px" }}
            transition={{ duration: 3.2 }}
          >
            A NEW JOURNEY BEGINS
          </motion.div>
        </motion.div>
      )}

      {phase === 1 && (
        <motion.div
          key="developer"
          className="movie-scene developer-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2.3, filter: "blur(15px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portal portal-blue" />
          <div className="scene-lightning blue-lightning" />
          <PixelArrival variant="developer" />

          <motion.div
            className="role-title"
            initial={{ opacity: 0, scale: 0.1, z: -800, filter: "blur(25px)" }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.1, 1.2, 1],
              z: [-800, 100, 0],
              filter: ["blur(25px)", "blur(0px)", "blur(0px)"],
            }}
            transition={{ duration: 2.1, delay: 0.45, ease: "easeOut" }}
          >
            <span className="role-small">THE ART OF BUILDING</span>
            <h2>DEVELOPER</h2>
            <div className="role-underline blue-line" />
          </motion.div>

          <motion.div
            className="portal-flash blue-flash"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 2, 5] }}
            transition={{ duration: 1.3, delay: 2.2 }}
          />
        </motion.div>
      )}

      {phase === 2 && (
        <motion.div
          key="trainer"
          className="movie-scene trainer-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2.5, filter: "blur(15px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portal portal-purple" />
          <div className="scene-lightning purple-lightning" />
          <PixelArrival variant="trainer" />

          <motion.div
            className="role-title"
            initial={{ opacity: 0, scale: 0.1, z: -800, filter: "blur(25px)" }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.1, 1.2, 1],
              z: [-800, 100, 0],
              filter: ["blur(25px)", "blur(0px)", "blur(0px)"],
            }}
            transition={{ duration: 2.1, delay: 0.45, ease: "easeOut" }}
          >
            <span className="role-small">THE POWER OF SHARING KNOWLEDGE</span>
            <h2>TRAINER</h2>
            <div className="role-underline purple-line" />
          </motion.div>

          <motion.div
            className="portal-flash purple-flash"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 2, 5] }}
            transition={{ duration: 1.3, delay: 2.2 }}
          />
        </motion.div>
      )}

      {phase === 3 && (
        <motion.div
          key="name"
          className="movie-scene name-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="name-energy" />

          <motion.div
            className="name-impact"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="swanand-title"
            initial={{
              opacity: 0,
              scale: 2.5,
              y: 100,
              filter: "blur(30px)",
              letterSpacing: "40px",
            }}
            animate={{
              opacity: 1,
              scale: [2.5, 0.9, 1],
              y: 0,
              filter: "blur(0px)",
              letterSpacing: "10px",
            }}
            transition={{
              duration: 2.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>SWANAND</span>
            <div className="name-shine" />
          </motion.div>

          <motion.div
            className="name-subline"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "75%", opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          />
        </motion.div>
      )}

      {phase === 4 && (
        <motion.div
          key="final"
          className="movie-scene final-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="final-photo">
            <img src="/images/profile.jpg" alt="Swanand Kulkarni" />
          </div>

          <div className="final-overlay" />

          <motion.div
            className="final-frame"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <motion.div
              className="frame-corner top-left"
              initial={{ width: 0, height: 0 }}
              animate={{ width: 45, height: 45 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div
              className="frame-corner top-right"
              initial={{ width: 0, height: 0 }}
              animate={{ width: 45, height: 45 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
            <motion.div
              className="frame-corner bottom-left"
              initial={{ width: 0, height: 0 }}
              animate={{ width: 45, height: 45 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.div
              className="frame-corner bottom-right"
              initial={{ width: 0, height: 0 }}
              animate={{ width: 45, height: 45 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />

            <motion.p
              className="final-overline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              THE MIND BEHIND THE CODE
            </motion.p>

            <motion.h1
              className="final-name"
              initial={{ opacity: 0, scale: 1.5, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              SWANAND
            </motion.h1>

            <motion.p
              className="final-profession"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              SOFTWARE DEVELOPER <i /> TECHNICAL TRAINER <i /> BUILDER
            </motion.p>

            <motion.button
              type="button"
              className="final-enter"
              onClick={onEnter}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ scale: 1.07, boxShadow: "0 0 45px #38bdf8" }}
              whileTap={{ scale: 0.96 }}
            >
              ENTER PORTFOLIO
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CinematicIntro() {
  const [phase, setPhase] = useState(0);
  const hasSeenIntro = useSyncExternalStore(
    subscribeToIntro,
    getIntroSeen,
    getServerIntroSeen,
  );
  const visible = !hasSeenIntro;

  // Run the cinematic sequence while the intro is visible.
  useEffect(() => {
    if (!visible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const sequence = [
      { nextPhase: 1, delay: 3500 },
      { nextPhase: 2, delay: 3700 },
      { nextPhase: 3, delay: 3700 },
      { nextPhase: 4, delay: 3500 },
    ];

    let elapsed = 0;

    sequence.forEach(({ nextPhase, delay }) => {
      elapsed += delay;
      const timer = setTimeout(() => setPhase(nextPhase), elapsed);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cinematic-intro"
          className="movie-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(15px)",
          }}
          transition={{ duration: 1.2 }}
        >
          <SpaceParticles />
          <div className="movie-noise" />
          <MovieScene
            phase={phase}
            onEnter={() => {
              sessionStorage.setItem(STORAGE_KEY, "true");
              window.dispatchEvent(new Event("storage"));
            }}
          />

          <div className="movie-progress">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: phase === 4 ? 1 : (phase + 1) / 5,
              }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <span className="movie-credit">
            SWANNYTECH <i /> CINEMATIC EXPERIENCE
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
