"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent } from "react";

type Character3DProps = {
  className?: string;
};

export function Character3D({ className }: Character3DProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    rotateX.set((0.5 - y) * 12);
    rotateY.set((x - 0.5) * 16);
  };

  const resetPose = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className={`character-stage${className ? ` ${className}` : ""}`}
      role="img"
      aria-label="Stylized digital character illustration, not a portrait"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPose}
    >
      <span className="character-stage-glow" aria-hidden="true" />
      <span className="character-stage-orbit character-stage-orbit-one" aria-hidden="true" />
      <span className="character-stage-orbit character-stage-orbit-two" aria-hidden="true" />
      <span className="character-stage-platform" aria-hidden="true" />
      <motion.div
        className="character-figure"
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
        }}
        aria-hidden="true"
      >
        <span className="character-shadow" />
        <span className="character-arm character-arm-left"><i /></span>
        <span className="character-arm character-arm-right"><i /></span>
        <span className="character-neck" />
        <span className="character-body">
          <i className="character-hood" />
          <i className="character-stitch character-stitch-left" />
          <i className="character-stitch character-stitch-right" />
          <i className="character-emblem">SK</i>
        </span>
        <span className="character-head">
          <i className="character-hair" />
          <i className="character-ear character-ear-left" />
          <i className="character-ear character-ear-right" />
          <i className="character-visor">
            <b />
            <b />
            <em />
          </i>
          <i className="character-face-highlight" />
        </span>
      </motion.div>
      <span className="character-stage-caption" aria-hidden="true">DIGITAL AVATAR · INTERACTIVE</span>
    </div>
  );
}
