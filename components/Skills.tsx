"use client";

import {
  Braces,
  Code2,
  Database,
  Layers3,
  Terminal,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const skillGroups = [
  {
    title: "Programming",
    description: "Core languages for logic, algorithms, and problem solving.",
    icon: Code2,
    skills: ["Java", "C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Web craft",
    description: "Building responsive interfaces and full-stack applications.",
    icon: Braces,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Full Stack"],
  },
  {
    title: "Data & APIs",
    description: "Connecting application experiences to useful data.",
    icon: Database,
    skills: ["SQL", "REST APIs", "API Integration"],
  },
  {
    title: "Tools",
    description: "The everyday toolkit behind a considered workflow.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Foundations",
    description: "The fundamentals behind reliable, maintainable software.",
    icon: Terminal,
    skills: ["DSA", "OOP", "Problem Solving"],
  },
  {
    title: "Practice",
    description: "From first idea through implementation and debugging.",
    icon: Layers3,
    skills: ["Debugging"],
  },
].map((group) => ({
  ...group,
  skills: group.skills.filter((skill) =>
    site.skills.some((availableSkill) => availableSkill === skill),
  ),
}));

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);
  const active = skillGroups[activeGroup];
  const Icon = active.icon;

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <Reveal>
          <div className="skills-intro">
            <div>
              <SectionHeading
                eyebrow="Technical expertise"
                title="A toolkit in motion."
                description="The technologies and practices I use to build, teach, and keep learning."
              />
            </div>
            <p className="skills-side-note">
              Not a scorecard.
              <br />
              A work in progress.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="skills-explorer">
            <div className="skill-tabs" role="tablist" aria-label="Skill areas">
              {skillGroups.map((group, index) => {
                const GroupIcon = group.icon;

                return (
                  <button
                    key={group.title}
                    type="button"
                    id={`skill-tab-${index}`}
                    className="skill-tab"
                    role="tab"
                    aria-selected={activeGroup === index}
                    aria-controls="skill-panel"
                    tabIndex={activeGroup === index ? 0 : -1}
                    onClick={() => setActiveGroup(index)}
                    onKeyDown={(event) => {
                      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                      event.preventDefault();
                      const direction = event.key === "ArrowDown" ? 1 : -1;
                      const next = (activeGroup + direction + skillGroups.length) % skillGroups.length;
                      setActiveGroup(next);
                      document.getElementById(`skill-tab-${next}`)?.focus();
                    }}
                  >
                    <span className="skill-tab-icon">
                      <GroupIcon size={16} aria-hidden="true" />
                    </span>
                    <span className="skill-tab-title">{group.title}</span>
                    <span className="skill-tab-count">
                      {String(group.skills.length).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="skill-orbit-panel"
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${activeGroup}`}
              aria-live="polite"
            >
              <div className="skill-orbit-lines" aria-hidden="true" />
              <div className="skill-orbit-core">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <span>{active.title}</span>
              </div>
              <p className="skill-orbit-description">{active.description}</p>
              <div className="skill-orbit-nodes" aria-label={`${active.title} skills`}>
                {active.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`skill-node skill-node-${index % 5}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
