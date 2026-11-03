import { Achievements } from "@/components/Achievements";
import { Colleges } from "@/components/Colleges";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SiteShell } from "@/components/SiteShell";
import { Skills } from "@/components/Skills";
import { Training } from "@/components/Training";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main id="main">
        <Hero />
        <Achievements />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Colleges />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}
