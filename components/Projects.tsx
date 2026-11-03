"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = site.projects[activeIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrap">
        <Reveal>
          <div className="projects-heading">
            <div>
              <span className="section-kicker">Selected work</span>
              <h2 className="section-title mt-4">
                Ideas, made
                <br />
                <span className="text-[#8f867b]">useful.</span>
              </h2>
            </div>
            <p className="section-description">
              A collection of products and practical tools shaped by curiosity,
              creativity, and code. Choose a project to take a closer look.
            </p>
          </div>
        </Reveal>

        <div className="projects-showcase">
          <div className="project-list" aria-label="Project showcase">
            {site.projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.06}>
                <button
                  type="button"
                  className="project-trigger"
                  aria-pressed={activeIndex === index}
                  aria-controls="project-detail"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="project-name">{project.name}</span>
                    <span className="project-tag">{project.tag}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} className="project-arrow" />
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <article
              id="project-detail"
              className="project-detail"
              aria-live="polite"
            >
              <div>
                <span className="project-detail-index">
                  PROJECT / {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <h3>{activeProject.name}</h3>
                <p>{activeProject.description}</p>
              </div>
              <div className="project-detail-footer">
                <span />
                {activeProject.tag}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
