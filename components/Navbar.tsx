"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="portfolio-nav">
      <a
        href="#main"
        className="skip-link"
      >
        Skip to content
      </a>
      <div className="portfolio-nav-inner">
        <a
          href="#home"
          className="nav-mark"
        >
          {site.shortName}
        </a>
        <nav
          aria-label="Primary"
          className="nav-links"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#contact" ? "nav-contact" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-meta">
          <span className="nav-meta-label">Software · Training</span>
          <span className="nav-meta-name">{site.shortName}.DEV</span>
        </div>
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {site.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <p className="mobile-nav-footer">{site.role}</p>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
