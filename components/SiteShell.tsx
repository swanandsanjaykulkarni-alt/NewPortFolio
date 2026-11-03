"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-full overflow-x-hidden">
        <div aria-hidden className="site-grid pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="glow-orb pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="glow-orb pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        />
        <div className="relative">{children}</div>
      </div>
    </MotionConfig>
  );
}
