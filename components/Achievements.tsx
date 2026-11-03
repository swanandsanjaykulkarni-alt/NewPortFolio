
import { GraduationCap, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { site } from "@/lib/site";

const achievementIcons = [Users, GraduationCap, Trophy];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="impact-section"
      aria-labelledby="achievements-title"
    >
      <div className="section-wrap">
        <h3 id="achievements-title" className="sr-only">
          Achievements
        </h3>
        <Reveal>
          <div className="impact-heading">
            <div>
              <span className="section-kicker">Impact & achievements</span>
              <h2>Knowledge in motion.</h2>
            </div>
            <p>
              A growing footprint across software, workshops, and the people
              reached through practical learning.
            </p>
          </div>
        </Reveal>
        <div className="impact-list">
          {site.stats.map((stat, index) => {
            const Icon = achievementIcons[index] ?? Trophy;

            return (
              <Reveal key={stat.label} delay={index * 0.1}>
                <article className="impact-item">
                  <Icon aria-hidden="true" size={16} className="sr-only" />
                  <CountUp value={stat.value} className="impact-number" />
                  <span className="impact-label">{stat.label}</span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
