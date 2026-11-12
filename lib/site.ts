export const site = {
  name: "Swanand Sanjay Kulkarni",
  shortName: "SWANAND",
  initials: "SK",
  role: "Software Developer · Technical Trainer · Java & DSA Mentor",
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
  identity: [
    "Software Developer",
    "Technical Trainer",
    "Java & DSA Mentor",
    "Full Stack Developer",
    "GenAI Enthusiast",
  ],
  stats: [
    { value: "50+", label: "Workshops delivered" },
    { value: "10,000+", label: "Students trained" },
    { value: "2", label: "Tracks: SDE and trainer" },
  ],
  skills: [
    "Java",
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React.js",
    "Next.js",
    "HTML",
    "CSS",
    "SQL",
    "REST APIs",
    "Git",
    "DSA",
    "GitHub",
    "VS Code",
    "Postman",
    "OOP",
    "Problem Solving",
    "Full Stack",
    "Debugging",
    "API Integration",
  ],
  nav: [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "My Story" },
    { href: "#contact", label: "Contact" },
  ],
  services: [
    {
      title: "Web Development",
      color: "blue",
      details: ["JavaScript, React.js & Next.js", "HTML, CSS & REST APIs"],
    },
    {
      title: "Software Development",
      color: "charcoal",
      details: ["Java, C, C++ & Python", "OOP, SQL & problem solving"],
    },
    {
      title: "Java & DSA Training",
      color: "green",
      details: ["Hands-on programming and DSA practice", "Coding assignments and placement preparation"],
    },
    {
      title: "Technical Training",
      color: "amber",
      details: ["Campus workshops and practical labs", "Programming, DSA & web fundamentals"],
    },
    {
      title: "GenAI & Emerging Technologies",
      color: "slate",
      details: ["Generative AI tools and prompt engineering", "Practical AI productivity workflows"],
    },
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
