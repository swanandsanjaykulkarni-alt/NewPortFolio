
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import "./Colleges.css";


const colleges = [
  { name: "KDK College of Engineering", city: "Nagpur", mark: "KDK", color: "#FF8066" },
  { name: "Yeshwantrao Chavan College of Engineering", city: "Nagpur", mark: "YCCE", color: "#B5F36D" },
  { name: "Priyadarshini College of Engineering", city: "Nagpur", mark: "PCE", color: "#DCA4FF" },
  { name: "Pimpri Chinchwad University", city: "Pune", mark: "PCU", color: "#65D9F2" },
  { name: "BLDEA College of Engineering & Technology", city: "Vijayapura", mark: "BLDEA", color: "#FFC36E" },
  { name: "Vidya Vikas Institute of Engineering & Technology", city: "Mysuru", mark: "VVIT", color: "#FF91BD" },
  { name: "AIT College", city: "Vita", mark: "AIT", color: "#8DA7FF" },
  { name: "D. Y. Patil College of Engineering & Technology", city: "Kolhapur", mark: "DYP", color: "#A7E6A1" },
  { name: "DKTE Society's Textile & Engineering Institute", city: "Ichalkaranji", mark: "DKTE", color: "#F5A6E8" },
  { name: "Rajarambapu Institute of Technology", city: "Islampur", mark: "RIT", color: "#F4B56A" },
  { name: "PVPIT", city: "Budhgaon", mark: "PVPIT", color: "#71E0CE" },
  { name: "Lokmanya Tilak College of Engineering", city: "Mumbai", mark: "LTCE", color: "#FF9B72" },
  { name: "Vishveshwarya Technological College", city: "Bagalkot", mark: "VTC", color: "#C3A0FF" },
  { name: "Bapuji Institute of Engineering & Technology", city: "Davangere", mark: "BIET", color: "#B8E76C" },
  { name: "KIT's College of Engineering", city: "Kolhapur", mark: "KIT", color: "#73BFFF" },
  { name: "Sipna College of Engineering and Technology", city: "Amravati", mark: "SIPNA", color: "#FFB5A5" },
  { name: "Dr. Vithalrao Vikhe Patil College of Engineering", city: "Ahmednagar", mark: "VVP", color: "#E5C66E" },
  { name: "N. K. Orchid College of Engineering & Technology", city: "Solapur", mark: "ORCHID", color: "#E7A3FF" },
  { name: "SNJB's Late Sau. K. B. Jain College of Engineering", city: "Chandwad", mark: "SNJB", color: "#70D9A9" },
  { name: "SVERI's College of Engineering", city: "Pandharpur", mark: "SVERI", color: "#FFA45E" },
  { name: "Sreenidhi Institute of Science & Technology", city: "Hyderabad", mark: "SNIST", color: "#8EA9FF" },
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
