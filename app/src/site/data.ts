/**
 * Every value here comes from the client's own material: nadwasit.com, the
 * branch directory in js/branches-data.js, and the current delivery artwork.
 * Nothing on this page is invented.
 */

export const BRAND = {
  name: "Nad Wasit",
  founded: 1989,
  years: 36,
  branchCount: 10,
  emirateCount: 3,
  phone: "+971 50 981 3566",
  phoneHref: "tel:+971509813566",
  typingPhone: "+971 54 718 5237",
  email: "nadwasitrest@gmail.com",
  whatsapp: "https://wa.me/971509813566",
  whatsappChannel: "https://whatsapp.com/channel/0029Va4jBYK0wajujaFHi61c",
  instagram: "https://www.instagram.com/nadwasit",
  address: "Nadwasit Typing Centre, Yarmook, Sharjah, UAE",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Nadwasit+Typing+Centre+Yarmook+Sharjah",
} as const;

export type Emirate = "Sharjah" | "Dubai" | "Ajman";

export interface Branch {
  id: string;
  name: string;
  area: string;
  emirate: Emirate;
  phone: string;
  phoneHref: string;
  /** A branch that runs a second line. Shown everywhere the first one is. */
  altPhone?: string;
  altPhoneHref?: string;
  email: string;
  hours: string;
  head?: boolean;
}

export const BRANCHES: Branch[] = [
  {
    area: "Yarmook",
    email: BRAND.email,
    emirate: "Sharjah",
    head: true,
    hours: "Head office and typing centre",
    id: "head-office",
    name: "Nadwasit Head Office",
    phone: "+971 50 981 3566",
    phoneHref: "tel:+971509813566",
  },
  {
    area: "Al Atheen",
    email: "nadwasitcafeteria@gmail.com",
    emirate: "Sharjah",
    hours: "6 AM to 3 AM",
    id: "nadwasit-fast-food",
    name: "Nadwasit Fast Food",
    phone: "+971 56 726 6284",
    phoneHref: "tel:+971567266284",
  },
  {
    area: "Maysaloon",
    email: "tareeqwasit@gmail.com",
    emirate: "Sharjah",
    hours: "6 AM to 3 AM",
    id: "tareeq-wasit",
    name: "Tareeq Wasit Restaurant",
    phone: "+971 50 782 6682",
    phoneHref: "tel:+971507826682",
  },
  {
    area: "Industrial Area",
    email: "ibnaljabal@gmail.com",
    emirate: "Sharjah",
    hours: "6 AM to 3 AM",
    id: "ibn-al-jabal",
    name: "Ibn Al Jabal Restaurant",
    phone: "+971 56 274 7002",
    phoneHref: "tel:+971562747002",
  },
  {
    altPhone: "+971 54 534 4224",
    altPhoneHref: "tel:+971545344224",
    area: "Terminal 2 Freezone, Food Court",
    email: "springonion@gmail.com",
    emirate: "Dubai",
    hours: "Open 24 hours",
    id: "spring-onion",
    name: "Spring Onion Restaurant",
    phone: "+971 56 365 1343",
    phoneHref: "tel:+971563651343",
  },
  {
    area: "Al Barsha",
    email: "spicelab@gmail.com",
    emirate: "Dubai",
    hours: "Open 24 hours",
    id: "spice-lab",
    name: "Spice Lab Restaurant",
    phone: "+971 56 129 6309",
    phoneHref: "tel:+971561296309",
  },
  {
    area: "Garhoud",
    email: "centuryexpress@gmail.com",
    emirate: "Dubai",
    hours: "Open 24 hours",
    id: "century-express",
    name: "Century Express Restaurant",
    phone: "+971 54 514 4224",
    phoneHref: "tel:+971545144224",
  },
  {
    area: "Al Karama",
    email: "karakcorner@gmail.com",
    emirate: "Dubai",
    hours: "Open 24 hours",
    id: "karak-corner",
    name: "Karak Corner Cafeteria",
    phone: "+971 50 551 7486",
    phoneHref: "tel:+971505517486",
  },
  {
    area: "Al Zahra",
    email: "nadwasitajman@gmail.com",
    emirate: "Ajman",
    hours: "Open 24 hours",
    id: "nadwasit-zahra",
    name: "Nadwasit Restaurant",
    phone: "+971 55 890 2831",
    phoneHref: "tel:+971558902831",
  },
  {
    area: "Industrial Area",
    email: "nadwasitindustrial@gmail.com",
    emirate: "Ajman",
    hours: "6 AM to 3 AM",
    id: "nadwasit-industrial",
    name: "Nadwasit Restaurant",
    phone: "+971 58 290 9081",
    phoneHref: "tel:+971582909081",
  },
];

export const EMIRATES: Emirate[] = ["Sharjah", "Dubai", "Ajman"];

export interface Chapter {
  id: string;
  label: string;
  kicker?: string;
  title: string;
  body: string;
  tags?: string[];
}

/**
 * The four chapters that read over the charcoal film. These are about
 * Nad Wasit as a business, not about how a single dish is cooked.
 */
export const CHAPTERS: Chapter[] = [
  {
    body: "One kitchen in Sharjah, a charcoal grill, and a family recipe we have never handed out.",
    id: "since",
    kicker: "Sharjah, since 1989",
    label: "1989",
    tags: ["Family run"],
    title: "It started with one kitchen",
  },
  {
    body: "Ten branches across Sharjah, Dubai and Ajman. Several trade under their own names, all cook to one standard.",
    id: "group",
    label: "Group",
    tags: ["3 emirates"],
    title: "Now a group of ten",
  },
  {
    body: "Fresh stock in every morning, charcoal on every grill, and cooks who have worked this fire for decades.",
    id: "kitchen",
    label: "Kitchen",
    tags: ["Charcoal only"],
    title: "The same grill in every branch",
  },
  {
    body: "Dubai and Al Zahra never close. Every other branch runs from 6 in the morning to 3 at night.",
    id: "open",
    label: "Open",
    tags: ["Dine in", "Delivery", "Catering"],
    title: "Still open when you are",
  },
];

export interface Dish {
  id: string;
  name: string;
  arabic: string;
  note: string;
  image?: string;
  alt?: string;
}

/** The charcoal range, as it appears on the current Nad Wasit menu. */
export const DISHES: Dish[] = [
  {
    alt: "A whole butterflied charcoal grilled chicken on a wooden board with fries, garlic sauce and flatbread",
    arabic: "الخاص",
    id: "special",
    image: "/assets/img/dish-special.jpg",
    name: "Nadwasit Special Charcoal",
    note: "A whole bird butterflied, rubbed with our own mix and finished flat over live coals. The plate the group was built on.",
  },
  {
    alt: "Charcoal grilled chicken under a creamy orange dynamite sauce with fries and slaw",
    arabic: "داينامايت",
    id: "dynamite",
    image: "/assets/img/dish-dynamite.jpg",
    name: "Dynamite Chicken Charcoal",
    note: "Charcoal chicken under a creamy dynamite sauce, with fries and slaw. The one people come back for.",
  },
  {
    alt: "Charcoal grilled chicken in a sticky honey glaze scattered with sesame seeds",
    arabic: "العسل",
    id: "honey",
    image: "/assets/img/dish-honey.jpg",
    name: "Honey Chicken Charcoal",
    note: "A sticky honey glaze and toasted sesame over the same charcoal bird. Sweet against the smoke.",
  },
  {
    alt: "A plain charcoal grilled chicken with clean grill marks, fries, garlic sauce and flatbread",
    arabic: "الكلاسيك",
    id: "classic",
    image: "/assets/img/dish-classic.jpg",
    name: "Nadwasit Classic Charcoal",
    note: "No sauce, no glaze. Spice rub, live coals and clean bar marks, the way it has been cooked since 1989.",
  },
];

export interface MenuEntry {
  id: string;
  name: string;
  where: string;
  /** Folder under /menus holding the rendered page images. */
  file: string;
  pages: number;
}

/**
 * Every menu the group publishes, in the same order as the branch list so the
 * two read the same way. `pages` must match the number of images actually in
 * public/menus/<file>/, which are named p-01.jpg upwards.
 */
export const MENUS: MenuEntry[] = [
  {
    file: "nadwasitfastfood",
    id: "fastfood",
    name: "Nadwasit Fast Food",
    pages: 12,
    where: "Al Atheen, Sharjah",
  },
  {
    file: "tareek",
    id: "tareeq",
    name: "Tareeq Wasit Restaurant",
    pages: 20,
    where: "Maysaloon, Sharjah",
  },
  {
    file: "ibnaljabal",
    id: "ibn",
    name: "Ibn Al Jabal Restaurant",
    pages: 16,
    where: "Industrial Area, Sharjah",
  },
  {
    file: "springonion",
    id: "spring",
    name: "Spring Onion Restaurant",
    pages: 12,
    where: "Terminal 2 Freezone, Dubai",
  },
  {
    file: "spicelab",
    id: "spicelab",
    name: "Spice Lab Restaurant",
    pages: 8,
    where: "Al Barsha, Dubai",
  },
  {
    file: "centuryexpress",
    id: "century",
    name: "Century Express Restaurant",
    pages: 8,
    where: "Garhoud, Dubai",
  },
  {
    file: "karakcorner",
    id: "karak",
    name: "Karak Corner Cafeteria",
    pages: 4,
    where: "Al Karama, Dubai",
  },
  {
    file: "nadwasit",
    id: "zahra",
    name: "Nadwasit Restaurant",
    pages: 28,
    where: "Al Zahra, Ajman",
  },
  {
    file: "nadwasit",
    id: "industrial",
    name: "Nadwasit Restaurant",
    pages: 28,
    where: "Industrial Area, Ajman",
  },
];

/** "tel:+971507826682" becomes that branch's own WhatsApp thread. */
export function waHref(phoneHref: string): string {
  return `https://wa.me/${phoneHref.replace(/\D/g, "")}`;
}

/** The UAE mobile prefixes. Everything else is a landline. */
const UAE_MOBILE_PREFIXES = ["50", "52", "54", "55", "56", "58"];

/**
 * WhatsApp only works on a mobile number, so a branch on a landline (Al Atheen
 * is on 06) needs a call rather than a chat. Sending it to wa.me would hand the
 * customer a dead link.
 */
export function hasWhatsApp(phoneHref: string): boolean {
  const digits = phoneHref.replace(/\D/g, "");
  return UAE_MOBILE_PREFIXES.some((prefix) => digits.startsWith(`971${prefix}`));
}

export interface Service {
  id: string;
  title: string;
  body: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    body: "Cooks who have worked this grill for decades, not a rota of temporary hands.",
    icon: "chef",
    id: "chefs",
    title: "Master chefs",
  },
  {
    body: "Fresh stock in every morning. What does not meet the standard does not go on the fire.",
    icon: "leaf",
    id: "quality",
    title: "Quality food",
  },
  {
    body: "Order through Noon, Talabat, Smiles or Keeta, or message the branch directly and we take it from there.",
    icon: "scooter",
    id: "delivery",
    title: "Online order",
  },
  {
    body: "Dubai and Al Zahra never close. Every other branch runs 6 AM to 3 AM.",
    icon: "clock",
    id: "hours",
    title: "Round the clock",
  },
  {
    body: "Full service catering for weddings, majlis gatherings and community events.",
    icon: "tray",
    id: "catering",
    title: "Catering",
  },
  {
    body: "Standing meal packages for offices and site crews, delivered on a fixed schedule.",
    icon: "briefcase",
    id: "corporate",
    title: "Corporate packages",
  },
  {
    body: "Birthdays, Eid tables and festive orders, built to whatever headcount you give us.",
    icon: "balloon",
    id: "party",
    title: "Party orders",
  },
  {
    body: "We bring the grill to picnics, sports days and outdoor community functions.",
    icon: "fire",
    id: "outdoor",
    title: "Outdoor events",
  },
];

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

export const TIMELINE: Milestone[] = [
  {
    body: "The first kitchen opens in Sharjah on one promise: fresh ingredients and genuine hospitality.",
    title: "One kitchen",
    year: "1989",
  },
  {
    body: "The charcoal chicken recipe becomes a local habit, and demand pushes us into new Sharjah branches.",
    title: "The recipe travels",
    year: "2000s",
  },
  {
    body: "Ajman and Dubai open under the Nadwasit family of names, same grill, same standard.",
    title: "Across the border",
    year: "2010s",
  },
  {
    body: "Ten branches in three emirates, serving dine in, delivery, catering and corporate orders.",
    title: "Ten branches",
    year: "Today",
  },
];

export const DELIVERY_PARTNERS = ["Noon", "Talabat", "Smiles", "Keeta"] as const;

export const PROOF_BAND = [
  "Since 1989",
  "Charcoal grilled",
  "10 branches",
  "Sharjah",
  "Dubai",
  "Ajman",
  "Catering and events",
  "Open 24 hours",
] as const;
