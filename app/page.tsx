import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ClassroomEntrance } from "@/components/ClassroomEntrance";
import { MagicDoors } from "@/components/MagicDoors";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { SiteShell } from "@/components/SiteShell";
import { Colleges } from "@/components/Colleges";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main id="main">
        <Hero />
        <ClassroomEntrance />
        <MagicDoors />
        <Projects />
        <Experience />
        <Colleges/>
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}