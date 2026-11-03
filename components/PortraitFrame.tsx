import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Replaceable portrait slot.
 * 1. Add an image to /public (for example public/swanand.jpg).
 * 2. Set site.photoSrc in lib/site.ts to that path.
 */
export function PortraitFrame() {
  return (
    <div className="portrait-frame">
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
        <>
          <span className="portrait-initials">{site.initials}</span>
          <span className="portrait-label">Ideas into impact</span>
        </>
      )}
    </div>
  );
}
