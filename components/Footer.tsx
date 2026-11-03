"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const subscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function Footer() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, getServerYear);

  return (
    <footer className="portfolio-footer">
      <div className="section-wrap footer-inner">
        <p>
          {site.name} · {year ?? ""}
        </p>
        <p>Software Developer · Technical Trainer · Builder</p>
      </div>
    </footer>
  );
}
