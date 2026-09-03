import type { ScrollScrubScene } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes } from "@/scroll-scrub-scenes";

import { BranchCta, NadwasitLockup, OrderCta } from "./chrome";

/**
 * The scenes the page actually renders: the committed scene data plus the
 * bespoke CTAs, which cannot live in a .ts file.
 *
 * This is a MODULE CONSTANT on purpose. The scrub controller rebuilds whenever
 * the array identity changes, so it must never be built during render.
 */
export const journeyScenes: ScrollScrubScene[] = scrollScrubScenes.map(
  (scene, index) => {
    if (index === 0) {
      return {
        ...scene,
        actions: (
          <>
            <OrderCta />
            <BranchCta />
          </>
        ),
      };
    }
    if (index === scrollScrubScenes.length - 1) {
      return { ...scene, actions: <OrderCta /> };
    }
    return scene;
  },
);

export function SiteNav() {
  return (
    <header className="nw-nav">
      <a className="nw-brand" href="#since">
        <NadwasitLockup className="nw-brand__lockup" />
        <span className="nw-brand__since">Cafeteria and Restaurant</span>
      </a>
      <nav aria-label="Sections" className="nw-nav__links">
        <a className="nw-nav__link" href="#story">
          Our story
        </a>
        <a className="nw-nav__link" href="#signatures">
          Menu
        </a>
        <a className="nw-nav__link" href="#services">
          Catering
        </a>
        <a className="nw-nav__link" href="#branches">
          Branches
        </a>
      </nav>
      <OrderCta small />
    </header>
  );
}
