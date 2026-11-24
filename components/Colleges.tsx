
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import "./Colleges.css";

const colleges = [
  { name: "KDK College of Engineering", city: "Nagpur", mark: "KDK", color: "#e5a45d" },
  { name: "Yeshwantrao Chavan College of Engineering", city: "Nagpur", mark: "YCCE", color: "#70c9a1" },
  { name: "Priyadarshini College of Engineering", city: "Nagpur", mark: "PCE", color: "#d58cbb" },
  { name: "Pimpri Chinchwad University", city: "Pune", mark: "PCU", color: "#83b9ed" },
  { name: "BLDEA College of Engineering & Technology", city: "Vijayapura", mark: "BLDEA", color: "#d9b66c" },
  { name: "Vidya Vikas Institute of Engineering & Technology", city: "Mysuru", mark: "VVIT", color: "#8cc6b2" },
  { name: "AIT College", city: "Vita", mark: "AIT", color: "#d99b79" },
  { name: "D. Y. Patil College of Engineering & Technology", city: "Kolhapur", mark: "DYP", color: "#8eafe5" },
  { name: "DKTE Society's Textile & Engineering Institute", city: "Ichalkaranji", mark: "DKTE", color: "#d8a2c9" },
  { name: "Rajarambapu Institute of Technology", city: "Islampur", mark: "RIT", color: "#83c79a" },
  { name: "PVPIT", city: "Budhgaon", mark: "PVPIT", color: "#d6ae75" },
  { name: "Lokmanya Tilak College of Engineering", city: "Mumbai", mark: "LTCE", color: "#8eb9d8" },
  { name: "Vishveshwarya Technological College", city: "Bagalkot", mark: "VTC", color: "#c89bdf" },
  { name: "Bapuji Institute of Engineering & Technology", city: "Davangere", mark: "BIET", color: "#d7a27e" },
  { name: "KIT's College of Engineering", city: "Kolhapur", mark: "KIT", color: "#83c9bb" },
  { name: "Sipna College of Engineering and Technology", city: "Amravati", mark: "SIPNA", color: "#d6b16d" },
  { name: "Dr. Vithalrao Vikhe Patil College of Engineering", city: "Ahmednagar", mark: "VVP", color: "#91b6e5" },
  { name: "N. K. Orchid College of Engineering & Technology", city: "Solapur", mark: "ORCHID", color: "#d39ac0" },
  { name: "SNJB's Late Sau. K. B. Jain College of Engineering", city: "Chandwad", mark: "SNJB", color: "#88c7a1" },
  { name: "SVERI's College of Engineering", city: "Pandharpur", mark: "SVERI", color: "#d6a276" },
  { name: "Sreenidhi Institute of Science & Technology", city: "Hyderabad", mark: "SNIST", color: "#8db6dc" },
];

export function Colleges() {
  const movingColleges = [...colleges, ...colleges];

  return (
    <section id="campuses" className="campuses-section">
      <div className="campuses-wrap">
        <Reveal>
          <div className="campuses-heading">
            <div>
              <span className="campuses-eyebrow">THE LEARNING NETWORK</span>
              <SectionHeading
                eyebrow=""
                title="Institutions I've worked with."
              />
            </div>
            <span className="campuses-count">21 INSTITUTIONS</span>
          </div>
        </Reveal>

        <div className="campuses-marquee" aria-label="Colleges and institutions">
          <div className="campuses-track">
            {movingColleges.map((college, index) => (
              <article
                className="campus-item"
                key={`${college.mark}-${index}`}
                aria-hidden={index >= colleges.length}
              >
                <div
                  className="campus-mark"
                  style={{ "--campus-accent": college.color } as React.CSSProperties}
                >
                  {college.mark}
                </div>

                <div className="campus-info">
                  <h3>{college.name}</h3>
                  <span>{college.city}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="campuses-note">
          A growing network of learning, training and collaboration.
        </p>
      </div>
    </section>
  );
}
