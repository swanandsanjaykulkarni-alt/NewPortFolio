// Runtime validation coverage for portfolio identity, projects, and service doors.
import { describe, expect, it } from "vitest";
import { site } from "../lib/site";

describe("portfolio content", () => {
  it("uses the supplied professional identity and contact details", () => {
    expect(site.name).toBe("Swanand Sanjay Kulkarni");
    expect(site.identity).toEqual([
      "Software Developer",
      "Technical Trainer",
      "Java & DSA Mentor",
      "Full Stack Developer",
      "GenAI Enthusiast",
    ]);
    expect(site.email).toBe("swanandsanjaykulkarni@gmail.com");
  });

  it("defines all five requested service doors", () => {
    expect(site.services.map(({ title }) => title)).toEqual([
      "Web Development",
      "Software Development",
      "Java & DSA Training",
      "Technical Training",
      "GenAI & Emerging Technologies",
    ]);
    expect(site.services.every(({ details }) => details.length > 0)).toBe(true);
  });

  it("keeps the showcase grounded in the existing project data", () => {
    expect(site.projects.map(({ name }) => name)).toEqual([
      "InstaIQ",
      "Campus Training Automation Portal",
      "TeachTrack",
      "SparkTrack",
    ]);
    expect(site.projects.every(({ description }) => description.length > 0)).toBe(true);
  });
});
