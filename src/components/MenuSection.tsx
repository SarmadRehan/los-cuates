import Image from "next/image";

import { menu } from "@/data/cuates";

import { SectionHeading } from "./SectionHeading";

// Items with a photo get cards; the rest sit in a slim strip below, so no card is left half empty.
const withPhotos = menu.filter((item) => item.photo);
const textOnly = menu.filter((item) => !item.photo);

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="border-t border-snow/10 bg-panel py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="We do one thing right"
          title="Al Pastor"
          intro="Marinated pork, carved straight off the trompo. Here's how to eat it."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withPhotos.map((item, index) => (
            <li
              key={item.name}
              className={`flex flex-col overflow-hidden rounded-3xl border border-snow/10 bg-night ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {item.photo && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className={`font-sign text-3xl ${index % 2 === 0 ? "text-pink" : "text-neon"}`}>{item.name}</h3>
                <p className="mt-2 text-lg leading-relaxed text-fog">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {textOnly.length > 0 && (
          <ul className="mt-5 grid gap-5">
            {textOnly.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-2 rounded-3xl border border-neon/40 bg-night px-6 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <h3 className="shrink-0 font-sign text-3xl text-neon">{item.name}</h3>
                <p className="text-lg leading-relaxed text-fog">{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
