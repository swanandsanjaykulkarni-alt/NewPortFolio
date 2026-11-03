"use client";

import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {new Date().getFullYear()}
        </p>
        <p>Software Developer · Technical Trainer · Builder</p>
      </div>
    </footer>
  );
}
