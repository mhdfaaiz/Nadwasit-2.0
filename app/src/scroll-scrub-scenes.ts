/**
 * Scene data for the scroll-scrub journey.
 *
 * Journey shape: single-shot. ONE continuous charcoal film was generated, then
 * cut into four sequential segments so four chapters of copy can read over it.
 * Because every segment comes out of the same uninterrupted render, the seams
 * are frame exact by construction: segment N ends on the frame segment N+1
 * begins on. Every poster below was extracted from its own ENCODED clip, after
 * encoding, so first paint matches playback.
 *
 * The chapters are about Nad Wasit as a business. The film is the room the
 * copy sits in, not the subject of it.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Brand tokens for the journey layer: the signage black and the logo amber. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#ffc107",
  background: "#080808",
  ink: "#f7f3ea",
  muted: "#9e968a",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "One kitchen in Sharjah, a charcoal grill, and a family recipe we have never handed out.",
    clip: "/assets/world/scene-01.mp4",
    id: "since",
    kicker: "Sharjah, since 1989",
    label: "1989",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    poster: "/assets/world/scene-01-poster.jpg",
    scroll: 1.4,
    tags: ["Family run"],
    title: "It started with one kitchen",
  },
  {
    align: "right",
    body: "Ten branches across Sharjah, Dubai and Ajman. Several trade under their own names, all cook to one standard.",
    clip: "/assets/world/scene-02.mp4",
    id: "group",
    label: "Group",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.jpg",
    poster: "/assets/world/scene-02-poster.jpg",
    scroll: 1.4,
    tags: ["3 emirates"],
    title: "Now a group of ten",
  },
  {
    body: "Fresh stock in every morning, charcoal on every grill, and cooks who have worked this fire for decades.",
    clip: "/assets/world/scene-03.mp4",
    id: "kitchen",
    label: "Kitchen",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.jpg",
    poster: "/assets/world/scene-03-poster.jpg",
    scroll: 1.4,
    tags: ["Charcoal only"],
    title: "The same grill in every branch",
  },
  {
    align: "right",
    body: "Dubai and Al Zahra never close. Every other branch runs from 6 in the morning to 3 at night.",
    clip: "/assets/world/scene-04.mp4",
    id: "open",
    label: "Open",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    mobilePoster: "/assets/world/scene-04-mobile-poster.jpg",
    poster: "/assets/world/scene-04-poster.jpg",
    scroll: 1.6,
    tags: ["Dine in", "Delivery", "Catering"],
    title: "Still open when you are",
  },
];
