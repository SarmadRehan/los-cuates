# Taqueria Los Cuates: Landing Page Prototype

A demo site for Taqueria Los Cuates, an al pastor taqueria at 732 S Alamo St in Southtown, San
Antonio, with the Boutique speakeasy behind its cooler door. It is built as a client prototype and
is not the official website; banners at the top and bottom of the page say so. It is unlisted
(`noindex`) and meant to be shared only with Los Cuates.

Live demo: https://sarmadrehan.github.io/los-cuates/

**Never link `taquerialoscuates.net`.** The old domain now shows an online-casino page.

## Main features

- **Late-night hours, front and center.** Friday and Saturday until 2am are tagged "Late night",
  and today's row is highlighted in San Antonio time (`src/components/HoursVisit.tsx`).
- **The secret.** A section on the Boutique speakeasy behind the cooler door: walk-ins only,
  capacity 20, "ask the taquero if there's space".
- **Order Now.** Every order button (header, hero, mobile bar) opens one shared "Coming soon" panel
  (`src/components/OrderDialog.tsx`): "For now, call (210) 999-5274."

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Bungee (sign-painter capitals) and Work Sans (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, neon glow, papel picado flags), icons
  assets/images/  logo and photos from their own Instagram, imported statically
  components/     one component per page section, plus the logo and the order panel
  data/           cuates.ts: contact details, hours, menu, speakeasy, story
```

All business content lives in `src/data/cuates.ts`, with the source of each fact noted beside it.

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-24):

| Fact | Source |
| --- | --- |
| "100% Mexican Al Pastor Tacos!!!" | Instagram bio @taqueria.los.cuates |
| 732 S Alamo St, San Antonio, TX 78205 (Southtown) | Google Maps |
| Hours: Mon 12pm–10pm, Tue–Thu 12pm–12am, Fri 12pm–2am, Sat 2pm–2am, Sun closed | Google Maps |
| Phone (210) 999-5274; dine-in, takeout, delivery | Google Maps |
| Al pastor off the trompo; gringa, flour-tortilla pastor, quesadillas, salsas | Google Maps menu highlights and review topics |
| Small, casual; order and pay at the counter; drinks from the fridge; outdoor seating | Google Maps reviews (described, never quoted) |
| Opened January 2022, named after owner Erik Rosales' twin boys | MySA 2022-02-13, Wanderlog |
| Boutique speakeasy at 734 S Alamo: walk-ins only, capacity 20, Wed–Thu 5pm–12am | Instagram bio @boutiquespeakeasy, SA Current 2023-09-01 |

- **Speakeasy Friday and Saturday hours** (5pm–2am): the @boutiquespeakeasy Instagram bio, which the
  brief points to for "more nights". Its mezcal description is from their post of Sep 19, 2024.
- **Dish descriptions**: their own Instagram captions (Sep 24, 2024; Jan 20, 2026; Sep 3, 2025), and
  the gringa from their post "La gringa: al pastor, cheese, & on flour" (Mar 2022). No prices.
- **Photos** (`src/assets/images/`): only from their own Instagram posts (@taqueria.los.cuates and
  @boutiquespeakeasy), no customer photos, captured for the demo. Their posts include no quesadilla
  photo, so that card has none. Swap in originals before any real launch.
- **Logo**: their Instagram profile picture, cropped to the black plate.
- **Colors**: by Sarmad's choice for this demo, a blend. Their black-and-white logo and the hot pink
  of their storefront door lead, with the brief's neon yellow-green as a late-night accent.

No prices, star ratings, review quotes or testimonials are shown. The map embeds the street address
rather than the business, so Google's rating card stays off the page.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/los-cuates` (the Pages project path), adds `.nojekyll` so
the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the repository is
renamed, update the base path in the `deploy` script.

## Notes

- White text on the bright pink is only 3.5:1, so pink buttons and banners carry dark text to meet
  WCAG AA contrast.
- The page is marked `noindex` so the demo never competes with the taqueria's own listings.
