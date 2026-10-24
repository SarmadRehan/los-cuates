import type { StaticImageData } from "next/image";

import gringa from "@/assets/images/gringa.jpg";
import pastorTaco from "@/assets/images/pastor-taco.jpg";
import pastorTacos from "@/assets/images/pastor-tacos.jpg";
import speakeasyBar from "@/assets/images/speakeasy-bar.jpg";
import tacosSalsas from "@/assets/images/tacos-salsas.jpg";
import trompo from "@/assets/images/trompo.jpg";

// Facts come from the verified table in the demo brief (checked 2026-10-24) unless a comment
// names another source; "IG" means their own Instagram posts, with the post date.
// Never link taquerialoscuates.net: the old domain now shows an online-casino page.
export const cuates = {
  name: "Taqueria Los Cuates",
  // IG bio @taqueria.los.cuates.
  bio: "100% Mexican Al Pastor Tacos!!!",
  tagline: "100% Mexican al pastor, off the trompo, in Southtown",
  description:
    "Taqueria Los Cuates carves 100% Mexican al pastor off the trompo at 732 S Alamo St in Southtown, San Antonio, with late nights until 2am on Fridays and Saturdays.",
  demoNotice: "Demo by Sarmad Rehan · not the official Taqueria Los Cuates website",
  phone: "(210) 999-5274",
  street: "732 S Alamo St",
  city: "San Antonio",
  state: "TX",
  postalCode: "78205",
  neighborhood: "Southtown",
  instagramUrl: "https://www.instagram.com/taqueria.los.cuates/",
  instagramHandle: "@taqueria.los.cuates",
  // Address rather than the business name, so the embed doesn't show Google's star-rating card.
  mapEmbedUrl: "https://www.google.com/maps?q=732+S+Alamo+St,+San+Antonio,+TX+78205&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Taqueria+Los+Cuates+732+S+Alamo+St+San+Antonio+TX+78205",
  timeZone: "America/Chicago",
} as const;

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export type DayHours = { day: string; short: string; hours: string | null; late?: boolean };

// Google Maps. Index 0 is Sunday, like Date#getDay.
export const weekHours: DayHours[] = [
  { day: "Sunday", short: "Sun", hours: null },
  { day: "Monday", short: "Mon", hours: "12pm – 10pm" },
  { day: "Tuesday", short: "Tue", hours: "12pm – 12am" },
  { day: "Wednesday", short: "Wed", hours: "12pm – 12am" },
  { day: "Thursday", short: "Thu", hours: "12pm – 12am" },
  { day: "Friday", short: "Fri", hours: "12pm – 2am", late: true },
  { day: "Saturday", short: "Sat", hours: "2pm – 2am", late: true },
];

// Monday first, since Sunday is the one day off.
export const hoursDisplayOrder = [1, 2, 3, 4, 5, 6, 0];

// Google Maps.
export const services = ["Dine-in", "Takeout", "Delivery", "Outdoor seating"];

// Google Maps reviews, as a description only (never quoted).
export const howItWorks = [
  { title: "Order at the counter", text: "Tell the taquero what you want and pay up front." },
  { title: "Grab a drink", text: "Drinks are in the fridge. Help yourself." },
  { title: "Sit in or out", text: "A small, casual room, plus tables outside." },
];

export type Photo = { src: StaticImageData; alt: string };

export const storyImage: Photo = {
  src: pastorTaco,
  alt: "A single al pastor taco topped with pineapple, onion and cilantro, with a lime wedge, on a blue speckled plate",
};

// Photos only from Los Cuates' own Instagram posts.
export const heroImage: Photo = {
  src: trompo,
  alt: "A trompo of marinated al pastor pork, charred and glistening, turning beside the vertical grill's flames",
};

export type MenuItem = { name: string; description: string; photo?: Photo };

// Item list from the brief (Google Maps menu highlights); descriptions from their own IG captions
// (Sep 24, 2024; Jan 20, 2026; Sep 3, 2025; Mar 2022 for the gringa). No prices.
export const menu: MenuItem[] = [
  {
    name: "Tacos al pastor",
    description:
      "Freshly marinated pork cooked on the spit, layer by layer, and carved straight off the trompo with fresh pineapple, onion and cilantro. On corn or flour tortillas.",
    photo: { src: pastorTacos, alt: "Four al pastor tacos on corn tortillas with pineapple, onion, cilantro and lime on a blue enamel plate" },
  },
  {
    name: "Gringa",
    description: "Al pastor and melted cheese on a flour tortilla.",
    photo: { src: gringa, alt: "A gringa of al pastor and melted cheese in a griddled flour tortilla, on a blue Los Cuates enamel plate" },
  },
  {
    name: "Quesadilla",
    // No quesadilla photo in their posts, so the card has none.
    description: "Melted cheese, folded into a griddled tortilla.",
  },
  {
    name: "Salsas",
    description: "A lineup of house salsas, red to green, to load up every taco.",
    photo: { src: tacosSalsas, alt: "A plate of al pastor tacos in front of four squeeze bottles of red, green, orange and creamy salsa" },
  },
];

// IG bio @boutiquespeakeasy and SA Current (2023-09-01). The Fri–Sat hours are from the bio,
// which the brief points to for "more nights".
export const speakeasy = {
  name: "Boutique Speakeasy",
  address: "734 S Alamo St",
  instagramUrl: "https://www.instagram.com/boutiquespeakeasy/",
  instagramHandle: "@boutiquespeakeasy",
  capacity: 20,
  hours: [
    { days: "Wed – Thu", hours: "5pm – 12am" },
    { days: "Fri – Sat", hours: "5pm – 2am" },
  ],
  // IG, Sep 19, 2024.
  description:
    "A mezcal and tequila bar behind the cooler door, with one of the most extensive mezcal collections in town and cocktails built on spirits from all over the world.",
  photo: {
    src: speakeasyBar,
    alt: "The dim Boutique Speakeasy bar: backlit shelves of mezcal bottles above a dark marble counter with a Boutique coaster",
  } satisfies Photo,
};

// MySA (2022-02-13), Wanderlog.
export const story =
  "Opened in Southtown in January 2022 and named after owner Erik Rosales' twin boys: los cuates.";
