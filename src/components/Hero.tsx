import Image from "next/image";

import { cuates, heroImage } from "@/data/cuates";

import { OrderButton } from "./OrderDialog";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="papel h-5" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">{cuates.neighborhood} · San Antonio</p>
          <h1 id="hero-title" className="mt-4 font-sign text-5xl leading-[0.95] sm:text-7xl">
            Taqueria <span className="glow-pink block text-pink">Los Cuates</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed font-semibold sm:text-2xl">{cuates.tagline}.</p>
          <p className="mt-3 font-bold text-neon">Open late: Friday and Saturday until 2am</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#menu"
              className="w-full rounded-full bg-pink px-8 py-4 text-center text-lg font-bold text-night transition-colors hover:bg-neon sm:w-auto"
            >
              See the menu
            </a>
            <a
              href="#hours"
              className="w-full rounded-full border-2 border-neon px-8 py-3.5 text-center text-lg font-bold text-neon transition-colors hover:bg-neon hover:text-night sm:w-auto"
            >
              Find us
            </a>
            <OrderButton className="w-full rounded-full border-2 border-snow/30 px-8 py-3.5 text-lg font-bold transition-colors hover:border-snow sm:w-auto">
              Order Now
            </OrderButton>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-2 rotate-2 rounded-[2rem] bg-pink/80 sm:-inset-3" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border-4 border-night">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="relative mt-5 text-center font-sign text-sm text-neon">Off the trompo</figcaption>
        </figure>
      </div>
    </section>
  );
}
