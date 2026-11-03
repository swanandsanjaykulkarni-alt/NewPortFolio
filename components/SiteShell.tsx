"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-shell">
        <div aria-hidden className="site-grid pointer-events-none absolute inset-0" />
        <div className="relative">{children}</div>
      </div>
    </MotionConfig>
  );
}
