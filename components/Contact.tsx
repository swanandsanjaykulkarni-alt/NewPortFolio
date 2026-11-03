
import { Code2, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build, teach, or ship something next"
          description="The fastest way to reach me is email. LinkedIn and GitHub are public and active."
        />

        <Reveal>
          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 text-lg text-white transition hover:text-accent"
            >
              <Mail className="text-accent" />
              {site.email}
            </a>

            <div className="flex gap-4">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
              >
              
                LinkedIn
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
              >
                <Code2 size={18} />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
