import { cuates, speakeasy } from "@/data/cuates";

const links = [
  { href: cuates.instagramUrl, label: "The taqueria", handle: cuates.instagramHandle },
  { href: speakeasy.instagramUrl, label: "The speakeasy", handle: speakeasy.instagramHandle },
];

export function Follow() {
  return (
    <section id="follow" aria-labelledby="follow-title" className="border-t border-snow/10 bg-panel py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">Follow along</p>
        <h2 id="follow-title" className="glow-pink mt-3 font-sign text-4xl text-pink sm:text-5xl">
          On Instagram
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((link, index) => (
            <li key={link.handle} className="min-w-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block h-full rounded-3xl border bg-night p-7 text-left transition-colors ${
                  index === 0 ? "border-pink/40 hover:border-pink" : "border-neon/40 hover:border-neon"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-fog">{link.label}</span>
                <span className={`mt-2 block font-sign text-xl break-words sm:text-2xl ${index === 0 ? "text-pink" : "text-neon"}`}>
                  {link.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
