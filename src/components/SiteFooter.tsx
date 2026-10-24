import { cuates, hoursDisplayOrder, phoneHref, weekHours } from "@/data/cuates";

import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-night text-fog">
      <div aria-hidden="true" className="papel h-5" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo className="w-52" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{cuates.bio}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neon">Visit</h2>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {cuates.street}
            <br />
            {cuates.city}, {cuates.state} {cuates.postalCode}
            <br />
            <a href={phoneHref(cuates.phone)} className="font-bold text-snow hover:text-pink">
              {cuates.phone}
            </a>
            <br />
            <a href={cuates.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
              Instagram
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neon">Hours</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            {hoursDisplayOrder.map((index) => (
              <li key={weekHours[index].day}>
                {weekHours[index].short}: {weekHours[index].hours ?? "Closed"}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 md:pb-10">
        <p className="rounded-full bg-pink px-4 py-2.5 text-center text-sm font-bold text-night">{cuates.demoNotice}</p>
      </div>
    </footer>
  );
}
