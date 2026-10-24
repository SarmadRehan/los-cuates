"use client";

import { useEffect, useState } from "react";

import { cuates, hoursDisplayOrder, howItWorks, phoneHref, services, weekHours } from "@/data/cuates";

import { SectionHeading } from "./SectionHeading";

const shortWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekdayInSanAntonio = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: cuates.timeZone });

export function HoursVisit() {
  // Unknown on the static render; set after mount, from San Antonio's date rather than the visitor's.
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(shortWeekdays.indexOf(weekdayInSanAntonio.format(new Date())));
  }, []);

  return (
    <section id="hours" aria-labelledby="hours-title" className="border-t border-snow/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="hours-title"
          eyebrow="Hours & visit"
          title="Open Late"
          intro="Until midnight Tuesday to Thursday, and until 2am on Fridays and Saturdays."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-pink/30 bg-panel p-6 sm:p-8">
            <h3 className="font-sign text-2xl text-neon">Hours</h3>
            <dl className="mt-5 divide-y divide-snow/10">
              {hoursDisplayOrder.map((index) => {
                const entry = weekHours[index];
                const isToday = index === today;
                return (
                  <div
                    key={entry.day}
                    className={`-mx-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl px-3 py-3 ${
                      isToday ? "bg-pink text-night" : ""
                    }`}
                  >
                    <dt className="flex items-center gap-2 text-lg font-bold">
                      {entry.day}
                      {isToday && <span className="text-xs font-bold uppercase tracking-wider">Today</span>}
                    </dt>
                    <dd className="flex items-center gap-2 text-lg">
                      {entry.late && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                            isToday ? "bg-night text-neon" : "bg-neon text-night"
                          }`}
                        >
                          Late night
                        </span>
                      )}
                      <span className={entry.hours || isToday ? "" : "text-fog"}>{entry.hours ?? "Closed"}</span>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="overflow-hidden rounded-3xl border border-snow/10 bg-panel">
            <div className="p-6 sm:p-8">
              <h3 className="font-sign text-2xl text-pink">Find us</h3>
              <address className="mt-3 text-lg not-italic leading-relaxed">
                {cuates.street}
                <br />
                {cuates.city}, {cuates.state} {cuates.postalCode}
              </address>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
                {services.map((service) => (
                  <li key={service} className="rounded-full border border-snow/20 px-3 py-1">
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref(cuates.phone)}
                  className="rounded-full bg-pink px-5 py-3 text-center font-bold text-night transition-colors hover:bg-neon"
                >
                  Call {cuates.phone}
                </a>
                <a
                  href={cuates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neon px-5 py-2.5 text-center font-bold text-neon transition-colors hover:bg-neon hover:text-night"
                >
                  Directions
                </a>
              </div>
              <ol className="mt-7 grid gap-3 sm:grid-cols-3">
                {howItWorks.map((step, index) => (
                  <li key={step.title} className="rounded-2xl bg-night p-4">
                    <span className="font-sign text-neon">{index + 1}</span>
                    <p className="mt-1 font-bold">{step.title}</p>
                    <p className="mt-1 text-sm text-fog">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <iframe
              title={`Map of ${cuates.name} at ${cuates.street}, ${cuates.city}`}
              src={cuates.mapEmbedUrl}
              className="h-64 w-full border-0 border-t border-snow/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
