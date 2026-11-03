import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Training() {
  return (
    <section id="training" className="training-section">
      <div className="section-wrap">
        <Reveal>
          <span className="section-kicker">Training & mentorship</span>
          <div className="training-layout">
            <div className="training-statement">
              <h3>
                Training that travels from the whiteboard to <em>shipped code.</em>
              </h3>
              <p>{site.training.body}</p>
            </div>
            <ol className="training-points">
              {site.training.points.map((point, index) => (
                <li key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
