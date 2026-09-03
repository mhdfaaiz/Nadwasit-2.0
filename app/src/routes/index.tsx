import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubTheme } from "@/scroll-scrub-scenes";
import { Branches } from "@/site/branches";
import { journeyScenes, SiteNav } from "@/site/journey";
import { Pickers } from "@/site/pickers";
import {
  Delivery,
  Order,
  ProofBand,
  Services,
  Signatures,
  SiteFooter,
  Story,
  Timeline,
} from "@/site/sections";

export const Route = createFileRoute("/")({
  // No title/description here on purpose: the home page inherits the site's
  // editable page metadata from the root route (title/favicon/og), so a shared
  // link to "/" shows the owner's values.
  component: Index,
});

// The journey is the spine: scrolling plays one continuous charcoal film while
// four chapters about Nad Wasit read over it. Everything after it is the
// practical half of the site, in the same black and amber.
function Index() {
  return (
    <div className="nw">
      <SiteNav />
      <main>
        <ScrollScrub scenes={journeyScenes} theme={scrollScrubTheme} />
        <ProofBand />
        <Story />
        <Signatures />
        <Delivery />
        <Services />
        <Branches />
        <Timeline />
        <Order />
      </main>
      <SiteFooter />
      <Pickers />
    </div>
  );
}
