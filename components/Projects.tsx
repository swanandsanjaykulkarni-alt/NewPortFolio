
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Code2,
  Lightbulb,
  Layers3,
  Target,
  X,
} from "lucide-react";
import { site } from "@/lib/site";
import "./Projects.css";

type ProjectStory = {
  subtitle: string;
  introduction: string;
  idea: string;
  approach: string;
  features: string[];
  contribution: string;
  accent: string;
  accentSoft: string;
  chapter: string;
};

const projectStories: Record<string, ProjectStory> = {
  teachtrack: {
    subtitle: "A smarter way to manage education",
    introduction:
      "A coaching-class management solution designed to bring everyday academic and administrative activities into one organised digital workspace.",
    idea:
      "Managing multiple branches, student admissions, fees and academic records can become difficult when information is scattered across registers and separate systems.",
    approach:
      "The solution brings student information, branch operations, fee tracking and academic records together through a role-based management experience.",
    features: [
      "Student admission and profile management",
      "Branch-wise administration",
      "Fee structures and installment tracking",
      "Examination and result management",
      "Role-based access for administrators and students",
    ],
    contribution:
      "Worked on the application structure, user workflows, database integration and the implementation of core management modules.",
    accent: "#3b9c83",
    accentSoft: "#d8f1e8",
    chapter: "THE EDUCATION EDITION",
  },

  "tailor-shop-management": {
    subtitle: "Bringing tailoring operations together",
    introduction:
      "A business management application focused on organising customer details, tailoring orders and everyday shop operations.",
    idea:
      "A tailoring business handles customer measurements, garment requirements, delivery dates and payment records. Keeping these details organised is essential for smooth operations.",
    approach:
      "The application focuses on maintaining structured customer and order records, making important information easier to access and manage.",
    features: [
      "Customer information management",
      "Measurement and order records",
      "Order status organisation",
      "Billing and payment records",
      "Centralised shop information",
    ],
    contribution:
      "Worked on the application workflow, database-backed records and the implementation of business management functionality.",
    accent: "#bd8650",
    accentSoft: "#f5e6d4",
    chapter: "THE BUSINESS EDITION",
  },

  sparktrack: {
    subtitle: "A clearer view of business transactions",
    introduction:
      "A billing and inventory management application designed to help organise sales transactions and stock-related activities.",
    idea:
      "Businesses need a reliable way to maintain billing information and keep track of inventory. Manual tracking can make it harder to maintain accurate records.",
    approach:
      "The application combines billing and inventory workflows to make everyday transaction and stock information easier to manage.",
    features: [
      "Billing and transaction records",
      "Inventory information management",
      "Product and item records",
      "Organised sales information",
      "Simplified business workflows",
    ],
    contribution:
      "Worked on the application structure and the development of billing and inventory-related functionality.",
    accent: "#c28b42",
    accentSoft: "#f5e8ce",
    chapter: "THE COMMERCE EDITION",
  },

  medileaf: {
    subtitle: "Technology with a healthcare perspective",
    introduction:
      "A machine-learning based plant-leaf classification project exploring how image-based inputs can be used for automated classification.",
    idea:
      "Visual identification can be challenging when different leaf conditions or categories have similar appearances. This project explores an automated approach to classification.",
    approach:
      "The project uses image-based classification concepts to process leaf images and predict their corresponding category.",
    features: [
      "Image-based input",
      "Leaf classification workflow",
      "Machine-learning model integration",
      "Prediction-oriented output",
      "Exploration of practical AI applications",
    ],
    contribution:
      "Worked on the project workflow and explored the application of machine-learning concepts to image classification.",
    accent: "#6e9b59",
    accentSoft: "#e3efd9",
    chapter: "THE INTELLIGENCE EDITION",
  },

  "qr-generator": {
    subtitle: "Turning information into a scannable identity",
    introduction:
      "A simple utility that converts supplied information into a QR code that can be scanned and accessed through compatible devices.",
    idea:
      "Sharing information manually can be inconvenient. A QR code provides a compact way to make digital information accessible with a scan.",
    approach:
      "The application takes user-provided content and generates a corresponding QR code that can be used for quick access.",
    features: [
      "User-input based QR generation",
      "Quick conversion of information",
      "Scannable QR output",
      "Simple and focused user workflow",
      "Convenient information sharing",
    ],
    contribution:
      "Worked on the input-to-output workflow and the implementation of QR code generation functionality.",
    accent: "#8c78bb",
    accentSoft: "#eae3f6",
    chapter: "THE DIGITAL UTILITY EDITION",
  },
};

function getStory(name: string, description: string, tag: string): ProjectStory {
  const key = name.toLowerCase().replaceAll(" ", "-");
  const matchedKey = Object.keys(projectStories).find(
    (item) => key.includes(item) || item.includes(key),
  );

  return (
    (matchedKey ? projectStories[matchedKey] : undefined) ?? {
      subtitle: "An idea developed into a practical solution",
      introduction: description,
      idea:
        "The project focuses on addressing a practical requirement through a structured software solution.",
      approach:
        "The application is organised around its core workflow, with an emphasis on usability, maintainability and clear information flow.",
      features: [
        "Structured application workflow",
        "Organised information management",
        "User-focused functionality",
        "Practical software implementation",
      ],
      contribution:
        "Worked on understanding the requirements and developing the application functionality.",
      accent: "#478d82",
      accentSoft: "#dceee8",
      chapter: tag.toUpperCase(),
    }
  );
}

export function Projects() {
  const projects = site.projects;
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[current];

  const story = project
    ? getStory(project.name, project.description, project.tag)
    : null;

  const nextProject = () => {
    if (current < projects.length - 1) {
      setDirection(1);
      setCurrent((value) => value + 1);
    }
  };

  const previousProject = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((value) => value - 1);
    }
  };

  const closeBook = () => {
    setIsOpen(false);
    setCurrent(0);
    setDirection(1);
  };

  return (
    <section id="projects" className="project-library">
      <div className="library-grain" />
      <div className="library-glow library-glow-left" />
      <div className="library-glow library-glow-right" />

      <div className="library-container">
        <header className="library-heading">
          <span className="library-eyebrow">
            <i />
            A COLLECTION OF IDEAS
            <i />
          </span>

          <h2>
            Not just projects.
            <br />
            <span>Stories of creation.</span>
          </h2>

          <p>
            Every application begins with a problem, grows through ideas
            and becomes something useful. Open the archive to explore.
          </p>
        </header>

        <div className={`book-stage ${isOpen ? "book-is-open" : ""}`}>
          <div className="book-light" />
          <div className="book-shadow" />

          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button
                key="book-cover"
                type="button"
                className="archive-cover"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, rotateY: -18, y: 20 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  rotateY: -100,
                  x: -80,
                  transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] },
                }}
                whileHover={{ y: -8, rotateY: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformOrigin: "left center" }}
              >
                <span className="cover-edge" />

                <span className="cover-border">
                  <span className="cover-topline">
                    <span>SWANNAND KULKARNI</span>
                    <Bookmark size={15} />
                  </span>

                  <span className="cover-emblem">
                    <span className="emblem-ring emblem-ring-one" />
                    <span className="emblem-ring emblem-ring-two" />
                    <BookOpen size={34} strokeWidth={1.1} />
                  </span>

                  <span className="cover-title">
                    THE
                    <strong>CREATIVE</strong>
                    <strong>ARCHIVE</strong>
                  </span>

                  <span className="cover-subtitle">
                    SOFTWARE · IDEAS · EXPERIENCES
                  </span>

                  <span className="cover-bottom">
                    <span>VOLUME 01 — SELECTED WORKS</span>
                    <span>2026</span>
                  </span>
                </span>

                <span className="cover-spine" />

                <span className="cover-open-hint">
                  <BookOpen size={15} />
                  OPEN THE COLLECTION
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="open-book"
                className="open-book"
                initial={{ opacity: 0, rotateY: -12, scale: 0.88, y: 25 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {project && story && (
                  <>
                    <div
                      className="book-pages"
                      style={
                        {
                          "--project-accent": story.accent,
                          "--project-accent-soft": story.accentSoft,
                        } as React.CSSProperties
                      }
                    >
                      {/* LEFT PAGE — PROJECT COVER */}
                      <div className="book-page book-left">
                        <div className="left-page-top">
                          <span>THE CREATIVE ARCHIVE</span>
                          <span>№ {String(current + 1).padStart(2, "0")}</span>
                        </div>

                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={`left-${current}`}
                            className="left-page-content"
                            custom={direction}
                            initial={{
                              opacity: 0,
                              rotateY: direction > 0 ? -20 : 20,
                              x: direction > 0 ? -35 : 35,
                            }}
                            animate={{
                              opacity: 1,
                              rotateY: 0,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              rotateY: direction > 0 ? 20 : -20,
                              x: direction > 0 ? 30 : -30,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="left-chapter">
                              {story.chapter}
                            </span>

                            <div className="left-project-number">
                              {String(current + 1).padStart(2, "0")}
                            </div>

                            <span className="left-project-label">
                              FEATURED PROJECT
                            </span>

                            <h3>{project.name}</h3>

                            <span className="left-project-subtitle">
                              {story.subtitle}
                            </span>

                            <div className="left-artwork">
                              <div className="artwork-orbit artwork-orbit-one" />
                              <div className="artwork-orbit artwork-orbit-two" />
                              <div className="artwork-center">
                                {project.name.slice(0, 1)}
                              </div>
                              <span className="artwork-dot artwork-dot-one" />
                              <span className="artwork-dot artwork-dot-two" />
                              <span className="artwork-dot artwork-dot-three" />
                            </div>

                            <p className="left-introduction">
                              {story.introduction}
                            </p>

                            <span className="left-category">
                              {project.tag}
                            </span>
                          </motion.div>
                        </AnimatePresence>

                        <div className="left-page-footer">
                          <span>SWANNAND KULKARNI</span>
                          <span>DESIGN / DEVELOPMENT</span>
                        </div>
                      </div>

                      <div className="book-gutter" />

                      {/* RIGHT PAGE — PROJECT STORY */}
                      <div className="book-page book-right">
                        <div className="right-page-top">
                          <span>INSIDE THE PROJECT</span>
                          <span>CHAPTER {current + 1}</span>
                        </div>

                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={`right-${current}`}
                            className="right-page-content"
                            custom={direction}
                            initial={{
                              opacity: 0,
                              rotateY: direction > 0 ? 15 : -15,
                              x: direction > 0 ? 35 : -35,
                            }}
                            animate={{
                              opacity: 1,
                              rotateY: 0,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              rotateY: direction > 0 ? -15 : 15,
                              x: direction > 0 ? -25 : 25,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="story-heading">
                              <span>01 — THE CONCEPT</span>
                              <Lightbulb size={19} />
                            </div>

                            <h4>The idea behind it.</h4>
                            <p>{story.idea}</p>

                            <div className="story-divider" />

                            <div className="story-heading">
                              <span>02 — THE APPROACH</span>
                              <Layers3 size={19} />
                            </div>

                            <h4>From idea to application.</h4>
                            <p>{story.approach}</p>

                            <div className="story-divider" />

                            <div className="story-heading">
                              <span>03 — WHAT IT OFFERS</span>
                              <Target size={19} />
                            </div>

                            <ul className="story-features">
                              {story.features.map((feature, index) => (
                                <li key={feature}>
                                  <span>{String(index + 1).padStart(2, "0")}</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <div className="contribution-block">
                              <div className="contribution-heading">
                                <Code2 size={16} />
                                MY DEVELOPMENT FOCUS
                              </div>
                              <p>{story.contribution}</p>
                            </div>

                            <div className="project-description-block">
                              <span>PROJECT NOTE</span>
                              <p>{project.description}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <div className="right-page-footer">
                          <span>SELECTED WORKS</span>
                          <span>
                            {String(current + 1).padStart(2, "0")} /{" "}
                            {String(projects.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="book-navigation">
                      <button
                        type="button"
                        className="book-nav-button"
                        onClick={previousProject}
                        disabled={current === 0}
                      >
                        <ArrowLeft size={15} />
                        Previous
                      </button>

                      <div className="book-page-indicator">
                        {projects.map((item, index) => (
                          <button
                            type="button"
                            key={item.name}
                            className={current === index ? "active" : ""}
                            onClick={() => {
                              setDirection(index > current ? 1 : -1);
                              setCurrent(index);
                            }}
                            aria-label={`Go to ${item.name}`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        className="book-nav-button book-next-button"
                        onClick={nextProject}
                        disabled={current === projects.length - 1}
                      >
                        Next Chapter
                        <ArrowRight size={15} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="book-close"
                      onClick={closeBook}
                    >
                      <X size={15} />
                      Close archive
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="library-footer">
          <span className="library-footer-line" />
          <span>
            {isOpen
              ? "TURN THE CHAPTER · DISCOVER THE PROCESS"
              : "A LITTLE CURIOSITY OPENS A LOT OF POSSIBILITIES"}
          </span>
          <span className="library-footer-line" />
        </div>

        {/* <a className="projects-back-link" href="#services">
          <ArrowDown size={15} />
          Back to the doors
        </a> */}
      </div>
    </section>
  );
}
