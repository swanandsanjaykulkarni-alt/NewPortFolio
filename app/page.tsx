import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MagicDoors } from "@/components/MagicDoors";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main id="main">
        <Hero />
        <MagicDoors />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </SiteShell>
  );
}
