"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const subscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function Footer() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, getServerYear);
  const [contactStatus, setContactStatus] = useState("");

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setContactStatus("Your email app should open with your message ready to send.");
  };

  return (
    <footer id="contact" className="portfolio-footer">
      <div className="section-wrap">
        <div className="footer-cta">
          <span className="section-kicker">
            Freelance &amp; training enquiries
          </span>
          <h2>Have a project?<br />Let&apos;s build it together.</h2>
          <div className="footer-contact-layout">
            <p className="footer-contact-intro">
              Software development, technical training, and Java &amp; DSA mentorship.
            </p>
            <form className="footer-contact-form" onSubmit={submitContactForm}>
              <label>
                Your name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                What would you like to discuss?
                <textarea name="message" rows={3} required />
              </label>
              <button className="footer-cta-button" type="submit">
                <Mail size={16} /> Prepare email <ArrowUpRight size={16} />
              </button>
              <p className="footer-contact-status" role="status" aria-live="polite">
                {contactStatus}
              </p>
            </form>
          </div>
        </div>

        <div className="footer-sitemap">
          <div className="footer-brand">
            <a href="#home" className="nav-mark">{site.shortName}</a>
            <p>{site.role}</p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            {site.nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="footer-links">
            <span>Elsewhere</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{site.name} · {year ?? ""}</p>
          <p>Built with Next.js</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
