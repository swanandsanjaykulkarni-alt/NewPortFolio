"use client";

import {
  Code2,
  GraduationCap,
  Presentation,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    role: "Freelance Technical Trainer",
    organization: "Multi-college Training Programs",
    location: "Maharashtra · Telangana · Uttar Pradesh",
    type: "Training & Mentorship",
    icon: Presentation,
    color: "cyan",
    description:
      "Delivered programming and placement-oriented training to engineering and diploma students through training agencies and college programs.",
    highlights: [
      "Conducted workshops on Java, C++, DSA and Web Development.",
      "Delivered coding practice, resume-building and placement preparation sessions.",
      "Adapted teaching methods to student batches and college requirements.",
    ],
  },
  {
    role: "Technical Trainer",
    organization: "Apt-Tech Solutions",
    location: "Kolhapur, Maharashtra",
    type: "Technical Education",
    icon: GraduationCap,
    color: "violet",
    description:
      "Delivered programming and computer fundamentals training to diploma and degree students.",
    highlights: [
      "Taught C, C++, Core Java, HTML/CSS and DBMS.",
      "Prepared students for job-oriented assessments.",
    ],
  },
  {
    role: "Technical Trainer",
    organization: "Insta IQ",
    location: "Nagpur, Maharashtra",
    type: "Technical Training",
    icon: Presentation,
    color: "blue",
    description:
      "Worked on technical training programs across multiple states, combining classroom teaching with practical lab sessions.",
    highlights: [
      "Conducted hands-on labs and coding practice.",
      "Designed projects and assignments aligned with company-specific syllabi.",
    ],
  },
  {
    role: "Technical Trainer",
    organization: "Gnosis Plus",
    location: "Nagpur, Maharashtra",
    type: "Programming & DSA",
    icon: GraduationCap,
    color: "pink",
    description:
      "Delivered focused programming sessions with an emphasis on practical implementation and student learning outcomes.",
    highlights: [
      "Conducted Python and DSA training with hands-on coding exercises.",
      "Customized sessions for batch size and college requirements.",
      "Collaborated with faculty to align training with academic and placement goals.",
    ],
  },
  {
    role: "Technical Trainer",
    organization: "FACE Prep",
    location: "Coimbatore, Tamil Nadu",
    type: "Coding & Placement Preparation",
    icon: Presentation,
    color: "orange",
    description:
      "Delivered technical training focused on programming fundamentals, algorithms and coding assessments.",
    highlights: [
      "Trained students in C, C++, Java and Python.",
      "Designed lab exercises, coding assignments and problem-solving activities.",
      "Prepared company-specific technical test patterns and coding assessments.",
    ],
  },
  {
    role: "Generative AI Trainer",
    organization: "Campus Credentials",
    location: "Mumbai, Maharashtra",
    type: "Generative AI",
    icon: GraduationCap,
    color: "violet",
    description:
      "Conducted practical Generative AI training to help engineering students apply AI tools in academic and professional workflows.",
    highlights: [
      "Delivered sessions on AI tools, prompt engineering and productivity.",
      "Created practical exercises based on real-world use cases.",
      "Guided students in using AI for coding, documentation, presentations and career development.",
    ],
  },
  {
    role: "Technical Trainer",
    organization: "Talent Battle",
    location: "Kolhapur, Maharashtra",
    type: "DSA & Interview Preparation",
    icon: Presentation,
    color: "cyan",
    description:
      "Delivered placement-focused technical training to help students improve coding skills and prepare for technical interviews.",
    highlights: [
      "Conducted DSA, C++ and Java training.",
      "Designed coding assignments, mock assessments and company-specific practice problems.",
      "Mentored students in logical thinking and coding efficiency.",
    ],
  },
  {
    role: "Freelance Software Developer",
    organization: "InstaIQ",
    location: "Software Development",
    type: "Development & Projects",
    icon: Code2,
    color: "blue",
    description:
      "Worked as a freelance software developer, contributing to application development alongside technical training work.",
    highlights: [
      "Worked on software development projects.",
      "Applied programming and problem-solving skills to practical development tasks.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="section-wrap">
        <Reveal>
          <div className="experience-heading">
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Learning, teaching & building."
                description="A journey across technical training, placement preparation, and freelance software development."
              />
            </div>
            <div className="experience-count">
              <strong>{String(experiences.length).padStart(2, "0")}</strong>
              chapters
            </div>
          </div>
        </Reveal>

        <div className="experience-list">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={`${item.organization}-${item.role}`} delay={index * 0.035}>
                <article className="experience-entry">
                  <span className="experience-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="experience-topline">
                      <h3 className="experience-org">{item.organization}</h3>
                      <span className="experience-type">
                        <Icon aria-hidden="true" size={13} /> {item.type}
                      </span>
                    </div>
                    <p className="experience-role">{item.role}</p>
                    <p className="experience-location">{item.location}</p>
                    <p className="experience-description">{item.description}</p>
                    <ul className="experience-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
