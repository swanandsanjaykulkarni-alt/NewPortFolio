
"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

import { site } from "@/lib/site";
import "./Footer.css";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="portfolio-footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-ending">
            <span className="footer-kicker">
              <Sparkles size={14} />
              THE END OF THE PAGE, NOT THE JOURNEY
            </span>

            <h2>
              THANKS FOR
              <br />
              <span>SCROLLING.</span>
            </h2>

            <p>
              Keep learning. Keep creating. Keep moving forward.
            </p>
          </div>

          <div className="footer-identity">
            <div className="footer-identity-top">
              <span className="footer-small-label">
                A LITTLE ABOUT ME
              </span>

              <div className="footer-identity-mark">
                {site.shortName}
              </div>
            </div>

            <h3>{site.name}</h3>
            <p className="footer-role">{site.role}</p>

            <p className="footer-description">
              Building software, sharing knowledge and helping people
              grow through technology.
            </p>

            <a
              className="footer-email-link"
              href={`mailto:${site.email}`}
            >
              <Mail size={17} />
              <span>{site.email}</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="footer-divider">
          <span />
          <span className="footer-divider-symbol">✳</span>
          <span />
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand-logo">
              {site.shortName}
              <span>.</span>
            </a>

            <p>
              Curiosity driven.
              <br />
              Technology focused.
            </p>
          </div>

          <div className="footer-link-column">
            <span className="footer-column-title">EXPLORE</span>

            <div className="footer-link-list">
              {site.nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-link-column">
            <span className="footer-column-title">CONNECT</span>

            <div className="footer-link-list">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-social-text">in</span>
                LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={15} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a href={`mailto:${site.email}`}>
                <Mail size={15} />
                Email
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <a href="#home" className="footer-back-top">
            <span>BACK TO TOP</span>

            <div>
              <ArrowUp size={21} />
            </div>
          </a>
        </nav>

        <div className="footer-bottom">
          <p>
            © {year ?? "2026"} {site.name}. All rights reserved.
          </p>

          <p className="footer-built">
            DESIGNED WITH PURPOSE <span>✳</span> BUILT WITH NEXT.JS
          </p>

          <a href="#home">BACK TO BEGINNING ↑</a>
        </div>
      </div>
    </footer>
  );
}
