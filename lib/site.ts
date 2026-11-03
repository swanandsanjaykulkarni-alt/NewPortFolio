export const site = {
  name: "Swanand Sanjay Kulkarni",
  shortName: "SWANAND",
  initials: "SK",
  role: "Software Developer · Technical Trainer · Builder",
  email: "swanandsanjaykulkarni@gmail.com",
  linkedin: "https://www.linkedin.com/in/swanandtrainer/",
  github: "https://github.com/swanandsanjaykulkarni-alt",
  resumeHref: "/resume.pdf",
  /**
   * Set this to a public image path (for example "/swanand.jpg")
   * when a real portrait is available. Leave null to keep the abstract frame.
   */
  photoSrc: null as string | null,
  intro:
    "I design and ship software with the same care I bring to a classroom: clear systems, honest craft, and momentum that other people can actually use. As a Software Development Engineer and freelance technical trainer, I move between product work and teaching — building platforms, then helping students and engineers grow the skills behind them.",
  stats: [
    { value: "50+", label: "Workshops delivered" },
    { value: "10,000+", label: "Students trained" },
    { value: "2", label: "Tracks: SDE and trainer" },
  ],
  skills: [
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "SQL",
    "REST APIs",
    "Git",
    "DSA",
  ],
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#training", label: "Training" },
    { href: "#feedback", label: "Feedback" },
    { href: "#contact", label: "Contact" },
  ],
  experience: [
    {
      title: "Software Development Engineer",
      period: "Product and platform work",
      summary:
        "Building web applications, APIs, and internal tools with an emphasis on structure, reliability, and interfaces people can trust.",
    },
    {
      title: "Freelance Technical Trainer",
      period: "Campus programs and workshops",
      summary:
        "Designing and delivering technical training — from programming fundamentals and DSA to full-stack practice — for students across campus programs.",
    },
  ],
  projects: [
    {
      name: "InstaIQ",
      tag: "AI · Interviews",
      description:
        "An AI-powered online interview platform for structured practice, evaluation, and feedback.",
    },
    {
      name: "Campus Training Automation Portal",
      tag: "Education · Ops",
      description:
        "A portal that streamlines campus training operations — scheduling, cohorts, and program coordination.",
    },
    {
      name: "TeachTrack",
      tag: "Education",
      description:
        "A class management system for tracking sessions, attendance, and teaching workflows.",
    },
    {
      name: "SparkTrack",
      tag: "Commerce · Ops",
      description:
        "A billing and inventory system for day-to-day operations, stock, and invoices.",
    },
  ],
  training: {
    heading: "Training that travels from the whiteboard to shipped code",
    body: "Campus workshops and freelance programs focused on programming, data structures, and building real software. The same standards I use as an engineer — clarity, repetition, and honest feedback — show up in every session.",
    points: [
      "Hands-on workshops in programming, DSA, and web fundamentals",
      "Campus cohorts designed around practice, not slide decks alone",
      "Mentorship that treats students as future colleagues",
    ],
  },
  colleges: [
    { label: "Sample campus A", note: "Placeholder — not a real institute name" },
    { label: "Sample campus B", note: "Placeholder — not a real institute name" },
    { label: "Sample campus C", note: "Placeholder — not a real institute name" },
    { label: "Sample campus D", note: "Placeholder — not a real institute name" },
  ],
  feedback: [
    {
      label: "Sample placeholder — not a real testimonial",
      body: "Student feedback will appear here once real quotes are collected and approved.",
    },
    {
      label: "Sample placeholder — not a real testimonial",
      body: "This card is a layout sample only. No student name, rating, or quote is implied.",
    },
    {
      label: "Sample placeholder — not a real testimonial",
      body: "Replace these blocks with consented testimonials. Until then they stay clearly labelled.",
    },
  ],
} as const;
