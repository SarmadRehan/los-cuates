import Image from "next/image";

import { story, storyImage } from "@/data/cuates";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="border-t border-snow/10 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl">
          <Image src={storyImage.src} alt={storyImage.alt} fill sizes="(min-width: 768px) 24rem, 92vw" className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">Our story</p>
          <h2 id="story-title" className="glow-pink mt-3 font-sign text-4xl leading-tight text-pink sm:text-5xl">
            Los Cuates
          </h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-fog">cuates: Mexican Spanish for twins</p>
          <p className="mt-5 text-xl leading-relaxed">{story}</p>
        </div>
      </div>
    </section>
  );
}
