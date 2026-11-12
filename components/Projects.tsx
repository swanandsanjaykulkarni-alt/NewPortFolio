"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

function ProjectPreview({ index, name, tag, description }: {
  index: number;
  name: string;
  tag: string;
  description: string;
}) {
  return (
    <div
      className={`project-device project-device-${index + 1}`}
      role="img"
      aria-label={`${name} illustrative interface preview`}
    >
      <div className="project-device-topbar">
        <span />
        <span />
        <span />
        <span className="project-device-address">swannytech / {name.toLowerCase().replaceAll(" ", "-")}</span>
      </div>
      <div className="project-device-screen">
        <div className="project-preview-nav">
          <span className="project-preview-mark">{name.slice(0, 1)}</span>
          <span>{name}</span>
          <span className="project-preview-menu"><i /><i /><i /></span>
        </div>
        <div className="project-preview-content">
          <span className="project-preview-tag">{tag}</span>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="project-preview-lines" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="project-preview-panels" aria-hidden="true">
            <span><i /><i /><i /></span>
            <span><i /><i /></span>
          </div>
        </div>
      </div>
      <span className="project-preview-caption">Interface preview · not a production screenshot</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-wrap">
        <div className="projects-heading">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 className="section-title mt-4">Software, made useful.</h2>
          </div>
          <p className="section-description">
            A selection of software and training tools, built around practical
            needs. Each screen below is an illustrative preview.
          </p>
        </div>
        <nav className="project-index-nav" aria-label="Project navigation">
          {site.projects.map((project, index) => (
            <a key={project.name} href={`#project-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {project.name}
            </a>
          ))}
        </nav>

        <div className="project-showcase-list">
          {site.projects.map((project, index) => (
            <article
              key={project.name}
              id={`project-${index + 1}`}
              className={`project-showcase-item${index % 2 ? " project-showcase-reverse" : ""}`}
            >
              <div className="project-showcase-copy">
                <span className="project-showcase-index">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{project.name}</h3>
                <span className="project-showcase-tag">{project.tag}</span>
                <p>{project.description}</p>
                <a href="#contact" className="project-showcase-link">
                  Discuss a project <ArrowUpRight size={16} />
                </a>
              </div>
              <ProjectPreview
                index={index}
                name={project.name}
                tag={project.tag}
                description={project.description}
              />
            </article>
          ))}
        </div>
        <a className="projects-back-link" href="#services">
          <ArrowDown size={15} /> Back to the doors
        </a>
      </div>
    </section>
  );
}
