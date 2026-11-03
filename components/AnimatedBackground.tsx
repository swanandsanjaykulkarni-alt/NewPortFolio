"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) return;

    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        background.style.setProperty("--mouse-x", `${event.clientX}px`);
        background.style.setProperty("--mouse-y", `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="animated-background"
      aria-hidden="true"
    >
      <div className="animated-background-grid" />

      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />

      <div className="animated-cursor-glow" />

      <div className="animated-particles">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            className="animated-particle"
            style={
              {
                "--particle-x": `${(index * 37 + 11) % 100}%`,
                "--particle-delay": `${-((index % 8) * 0.8)}s`,
                "--particle-duration": `${8 + (index % 7)}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}