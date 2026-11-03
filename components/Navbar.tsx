"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

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
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mobile-nav"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
