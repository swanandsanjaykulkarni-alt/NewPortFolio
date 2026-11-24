"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Send,
  Check,
  MapPin,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import "./Contact.css";

type Stage = "closed" | "open" | "sending" | "sent" | "error";

export function Contact() {
  const [stage, setStage] = useState<Stage>("closed");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [delivered, setDelivered] = useState(false);

  const openLetter = () => {
    if (stage === "closed" || stage === "error") {
      setStage("open");
      setError("");
    }
  };

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setDelivered(false);
    setStage("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New Portfolio Message from ${name}`,
            _template: "table",
            _captcha: "true",
            _honey: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error("Your letter could not be sent. Please try again.");
      }

      setStage("sent");

      window.setTimeout(() => {
        setDelivered(true);
      }, 4200);
    } catch {
      setError("Something went wrong. Please try sending your letter again.");
      setStage("error");
    }
  };

  const resetLetter = () => {
    setStage("closed");
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setDelivered(false);
  };

  return (
    <section className="post-section" id="contact">
      <div className="post-background-glow" />

      <div className="post-container">
        <Reveal>
          <div className="post-heading">
            <span className="post-eyebrow">
              <Sparkles size={15} />
              LET'S CONNECT
            </span>

            <h2>
              Every great connection
              <br />
              starts with a <span>letter.</span>
            </h2>

            <p>
              Have an idea, opportunity, or just want to say hello?
              Leave me a letter. I'll be happy to hear from you.
            </p>
          </div>
        </Reveal>

        <div className={`post-office post-stage-${stage}`}>
          <div className="post-office-top">
            <div className="post-office-label">
              <span className="post-status-dot" />
              <span>THE DIGITAL POST OFFICE</span>
            </div>

            <span className="post-office-code">STATION NO. 01</span>
          </div>

          <div className="post-workspace">
            <div className="post-letter-area">
              {stage === "closed" && (
                <button
                  type="button"
                  className="post-envelope"
                  onClick={openLetter}
                  aria-label="Open your letter"
                >
                  <div className="post-envelope-back" />
                  <div className="post-envelope-paper" />
                  <div className="post-envelope-flap" />
                  <div className="post-envelope-front" />
                  <div className="post-envelope-seal">
                    <Mail size={25} />
                  </div>
                  <div className="post-envelope-address">
                    <span>A LETTER FOR</span>
                    <strong>SWANAND</strong>
                    <small>OPEN TO CONNECT</small>
                  </div>
                  <span className="post-envelope-hint">CLICK TO OPEN</span>
                </button>
              )}

              {(stage === "open" || stage === "error") && (
                <div className="post-letter">
                  <div className="post-letter-top">
                    <div>
                      <span className="post-letter-kicker">PERSONAL CORRESPONDENCE</span>
                      <h3>Dear Visitor,</h3>
                    </div>
                    <span className="post-letter-stamp">✳</span>
                  </div>

                  <p className="post-letter-intro">
                    I'm glad you stopped by. Write your thoughts below
                    and send this letter my way.
                  </p>

                  <form className="post-form" onSubmit={handleSend}>
                    <div className="post-form-row">
                      <label>
                        <span>YOUR NAME</span>
                        <input
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          placeholder="Enter your name"
                          required
                          minLength={2}
                        />
                      </label>

                      <label>
                        <span>YOUR EMAIL</span>
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="you@example.com"
                          required
                        />
                      </label>
                    </div>

                    <label>
                      <span>YOUR MESSAGE</span>
                      <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        minLength={5}
                      />
                    </label>

                    {error && <p className="post-error">{error}</p>}

                    <div className="post-form-bottom">
                      <span className="post-letter-note">
                        <Mail size={15} />
                        YOUR MESSAGE WILL BE SENT DIRECTLY
                      </span>

                      <button type="submit" className="post-send-button">
                        <span>SEND LETTER</span>
                        <Send size={17} />
                      </button>
                    </div>
                  </form>

                  <div className="post-letter-signature">
                    Warm regards,
                    <strong>Swanand Kulkarni</strong>
                  </div>
                </div>
              )}

              {(stage === "sending" || stage === "sent") && (
                <div className="post-flight-scene">
                  <div className="post-flight-orbit orbit-one" />
                  <div className="post-flight-orbit orbit-two" />

                  <div className="post-flight-envelope">
                    <div className="post-flight-envelope-flap" />
                    <Mail size={38} />
                  </div>

                  <div className="post-flight-caption">
                    {stage === "sending"
                      ? "PREPARING YOUR LETTER..."
                      : delivered
                        ? "YOUR LETTER HAS ARRIVED"
                        : "TRAVELLING THROUGH THE NETWORK..."}
                  </div>
                </div>
              )}
            </div>

            <div className="post-network-area">
              <div className="post-network-heading">
                <span>DELIVERY NETWORK</span>
                <span className="post-network-live">
                  <i />
                  {stage === "sending" || (stage === "sent" && !delivered)
                    ? "ACTIVE"
                    : delivered
                      ? "DELIVERED"
                      : "STANDBY"}
                </span>
              </div>

              <div className={`post-network ${stage === "sending" || stage === "sent" ? "network-active" : ""}`}>
                <svg
                  className="post-network-lines"
                  viewBox="0 0 360 230"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M28 112 L92 48 L155 112 L220 48 L330 112" />
                  <path d="M28 112 L92 180 L155 112 L220 180 L330 112" />
                  <path d="M92 48 L92 180" />
                  <path d="M220 48 L220 180" />
                  <path d="M155 112 L330 112" />
                  <path className="post-network-travel-line" d="M28 112 L92 48 L155 112 L220 48 L330 112" />
                </svg>

                <span className="post-node node-a"><Mail size={15} /></span>
                <span className="post-node node-b" />
                <span className="post-node node-c" />
                <span className="post-node node-d" />
                <span className="post-node node-e" />
                <span className="post-node node-f" />
                <span className="post-node node-g" />
                <span className="post-node node-h"><MapPin size={17} /></span>

                <span className="post-network-packet" />
              </div>

              <div className="post-network-endpoints">
                <div>
                  <span className="post-endpoint-icon"><Send size={15} /></span>
                  <strong>SENDER</strong>
                  <small>YOUR DEVICE</small>
                </div>

                <div className="post-endpoint-line" />

                <div>
                  <span className="post-endpoint-icon"><Mail size={15} /></span>
                  <strong>DESTINATION</strong>
                  <small>SWANAND'S INBOX</small>
                </div>
              </div>

              <div className="post-mailbox">
                <div className="post-mailbox-top">
                  <span className="post-mailbox-light" />
                  <span>INCOMING MAIL</span>
                </div>
                <div className="post-mailbox-body">
                  <div className="post-mailbox-slot" />
                  <div className="post-mailbox-flag" />
                  <Mail size={31} />
                </div>
                <div className="post-mailbox-base" />
              </div>

              {delivered && (
                <div className="post-delivered-message">
                  <span><Check size={18} /></span>
                  <div>
                    <strong>MESSAGE DELIVERED</strong>
                    <small>Your letter is on its way to my inbox.</small>
                  </div>
                </div>
              )}
            </div>
          </div>

          {stage === "closed" && (
            <div className="post-office-footer">
              <span>ONE LETTER CAN START SOMETHING GREAT.</span>
              <span>✦</span>
            </div>
          )}

          {stage === "sent" && delivered && (
            <div className="post-success-actions">
              <p>Thank you for reaching out. I'll get back to you soon.</p>
              <button type="button" onClick={resetLetter}>
                <RotateCcw size={15} />
                SEND ANOTHER LETTER
              </button>
            </div>
          )}
        </div>

        <div className="post-contact-bottom">
          <span>OR REACH ME DIRECTLY</span>
          <a href={`mailto:${site.email}`}>
            {site.email}
            <Send size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}