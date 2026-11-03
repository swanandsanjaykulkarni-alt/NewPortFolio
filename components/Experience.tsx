"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
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

const colorStyles: Record<
  string,
  { dot: string; icon: string; label: string }
> = {
  cyan: {
    dot: "border-cyan-300 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.5)]",
    icon: "border-cyan-300/20 bg-cyan-400/10 text-cyan-300",
    label: "text-cyan-300",
  },
  violet: {
    dot: "border-violet-300 bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.5)]",
    icon: "border-violet-300/20 bg-violet-400/10 text-violet-300",
    label: "text-violet-300",
  },
  blue: {
    dot: "border-blue-300 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.5)]",
    icon: "border-blue-300/20 bg-blue-400/10 text-blue-300",
    label: "text-blue-300",
  },
  pink: {
    dot: "border-pink-300 bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.5)]",
    icon: "border-pink-300/20 bg-pink-400/10 text-pink-300",
    label: "text-pink-300",
  },
  orange: {
    dot: "border-orange-300 bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.5)]",
    icon: "border-orange-300/20 bg-orange-400/10 text-orange-300",
    label: "text-orange-300",
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                My Professional Journey
              </p>

              <SectionHeading
                eyebrow="Experience & Journey"
                title="Learning, teaching & building."
                description="My journey across technical training, placement preparation, and freelance software development."
              />
            </div>

            <div className="flex items-center gap-3 border-l-2 border-violet-400/60 pl-4">
              <div>
                <p className="font-display text-3xl font-bold text-white">2</p>
                <p className="text-xs text-slate-400">Professional tracks</p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <BriefcaseBusiness size={22} className="text-violet-300" />
                <p className="mt-1 text-xs text-slate-400">
                  Multiple organisations
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent sm:left-[23px]"
          />

          <div className="space-y-12 sm:space-y-14">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const colors = colorStyles[item.color];

              return (
                <Reveal key={`${item.organization}-${item.role}`} delay={0.04}>
                 <article className="group relative grid grid-cols-[32px_minmax(0,1fr)] gap-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-7">
                    {/* Timeline milestone */}
                    <div className="relative z-10 flex justify-start pt-2">
                      <span
                        className={`h-8 w-8 rounded-full border-[5px] border-[#0b0e19] ${colors.dot} sm:h-12 sm:w-12`}
                      />
                    </div>

                    {/* Editorial layout, not another card grid */}
                    <div className="min-w-0 border-b border-white/[0.09] pb-10 sm:pb-12">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p
                            className={`text-xs font-bold uppercase tracking-[0.17em] ${colors.label}`}
                          >
                            {String(index + 1).padStart(2, "0")} / {item.type}
                          </p>

                          {/* Company name — highlighted violet */}
                          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-violet-300 transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
                            {item.organization}
                          </h3>

                          {/* Role — contrasting white */}
                          <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                            {item.role}
                          </p>
                        </div>

                        <div
                          className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:flex ${colors.icon}`}
                        >
                          <Icon size={25} strokeWidth={1.7} />
                        </div>
                      </div>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                        {item.description}
                      </p>

                      <ul className="mt-5 max-w-3xl space-y-3">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                          >
                            <span
                              className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span>Experience & contribution</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
