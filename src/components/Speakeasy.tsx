import Image from "next/image";

import { speakeasy } from "@/data/cuates";

export function Speakeasy() {
  return (
    <section id="secret" aria-labelledby="secret-title" className="border-t border-snow/10 bg-panel py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neon/30">
          <Image src={speakeasy.photo.src} alt={speakeasy.photo.alt} fill sizes="(min-width: 1024px) 32rem, 92vw" className="object-cover" />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">The secret</p>
          <h2 id="secret-title" className="glow-neon mt-3 font-sign text-4xl leading-tight text-neon sm:text-5xl">
            Behind the Cooler Door
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fog">{speakeasy.description}</p>

          <p className="mt-6 inline-block rounded-2xl border-2 border-dashed border-pink px-5 py-3 font-sign text-lg text-pink">
            &ldquo;Ask the taquero if there&apos;s space&rdquo;
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-bold lg:justify-start">
            <li className="rounded-full bg-neon px-3 py-1 text-night">Walk-ins only</li>
            <li className="rounded-full border border-snow/20 px-3 py-1">Capacity {speakeasy.capacity}</li>
            <li className="rounded-full border border-snow/20 px-3 py-1">{speakeasy.address}</li>
          </ul>

          <dl className="mx-auto mt-6 max-w-sm divide-y divide-snow/10 border-y border-snow/10 lg:mx-0">
            {speakeasy.hours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4 py-2.5">
                <dt className="font-bold">{entry.days}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>

          <a
            href={speakeasy.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full border-2 border-neon px-6 py-3 font-bold text-neon transition-colors hover:bg-neon hover:text-night"
          >
            {speakeasy.instagramHandle} on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
