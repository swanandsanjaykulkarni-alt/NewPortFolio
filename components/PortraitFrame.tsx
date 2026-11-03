import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Replaceable portrait slot.
 * 1. Add an image to /public (for example public/swanand.jpg).
 * 2. Set site.photoSrc in lib/site.ts to that path.
 */
export function PortraitFrame() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        aria-hidden
        className="glow-orb absolute inset-6 rounded-full bg-[radial-gradient(circle_at_30%_20%,var(--glow-blue),transparent_45%),radial-gradient(circle_at_70%_80%,var(--glow-violet),transparent_50%)]"
      />
      <div
        aria-hidden
        className="portrait-ring pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-dashed border-cyan-300/30"
      />
      <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#070914] shadow-[0_0_80px_rgba(56,189,248,0.12)]">
        {site.photoSrc ? (
          <Image
            src={site.photoSrc}
            alt={`Portrait of ${site.name}`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 420px, 80vw"
            priority
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.18),rgba(167,139,250,0.22),rgba(5,6,10,0.9),rgba(56,189,248,0.18))]">
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-cyan-300/20" />
            <span className="font-display text-7xl font-extrabold tracking-tight text-white sm:text-8xl">
              {site.initials}
            </span>
            <p className="mt-3 max-w-[12rem] text-center font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
              Abstract portrait placeholder
            </p>
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a]/40 via-transparent to-cyan-300/5"
        />
      </div>
    </div>
  );
}
