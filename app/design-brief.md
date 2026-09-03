# Nadwasit — design brief

## Design read

For people in Sharjah, Ajman and Dubai who want real charcoal food at 2am, from a
family kitchen that has been open since 1989. Emotional register: night, heat,
appetite, and a quiet confidence that does not need to shout.

## Concept spine

**The night kitchen.** The whole page is one long shift: the coals are lit, the
bird goes on, the skin turns, the food goes out, and the branch is still open when
you get there. The site never leaves that night. The scroll is the shift.

## Delivery tier

`cinema`. The Tier-1 mechanic is the scroll-scrub film. Surrounding motion is
transform-only micro-motion, no library dependency added.

## Locked palette

| Token | Hex | Role |
|---|---|---|
| `--nw-ink` | `#0A1230` | Page ground, midnight cobalt |
| `--nw-ink-2` | `#101B44` | Raised surface, section bands |
| `--nw-tile` | `#24408F` | Structural cobalt: rules, strokes, tile motif |
| `--nw-bone` | `#F3EEE3` | Primary text, warm bone |
| `--nw-muted` | `#93A2CE` | Secondary text |
| `--nw-pom` | `#E2453C` | THE single accent, pomegranate |

Defense: midnight cobalt is the sky over a UAE cafeteria at 2am and the blue of
Gulf tilework, and it is the one ground that lets the fire in the film supply all
the heat instead of the interface. Pomegranate is the single accent and the only
warm signal in the chrome. This deliberately avoids the charcoal plus ember grill
cliche (banned family 1), which is exactly where a charcoal chicken brand defaults.
Cobalt plus bone is taken from the approved rotation, not from the beige and brass
family. Exactly one accent, page-wide, saturation under 80%.

One theme per page: the entire page is dark cobalt. No light section anywhere.

## Locked type

- Display: **Cabinet Grotesk** 800. Tight, wide-shouldered grotesk that holds a
  two-word headline at large sizes without reading as a tech startup.
- Body: **Satoshi** 400 / 500 / 700. Wide apertures survive small sizes on a dark
  saturated ground, which Inter does not do as cleanly at this contrast.
- Micro: **JetBrains Mono** 500 for branch codes, opening hours, phone numbers and
  the single-use eyebrows. Numerals are the site's real content.

No serif anywhere. Self-hosted woff2, no third-party font request at runtime.

## Animation mode: animated-website

User picked "Animated" at intake.

### Journey shape: single-shot

ONE continuous ~15s film, one generation. It is cut into four sequential encoded
segments so four chapters of copy can read over it. Because every segment comes
from the same uninterrupted render, the seams are frame-exact by construction and
there is nothing to seam-match. There is no second world to travel to, so
`multi-leg` would cost several extra minutes and buy nothing.

### Journey

The film is one unbroken slow push-in on a single whole chicken that transforms
from raw and marinated to finished al faham over a charcoal grill. The camera never
cuts and never stops.

| # | id | label | Focal point | Headline | Sentence |
|---|---|---|---|---|---|
| 1 | `raw` | Raw | Wide: the marinated bird laid on the grate | Fresh bird, real fire | Never frozen, hand rubbed with our own spice mix hours before it meets the coals. |
| 2 | `fire` | Fire | The charcoal breathing under the grate | The coals take over | Real charcoal, no gas shortcuts, turned by hand until the fat starts to render. |
| 3 | `char` | Char | Macro: skin blistering and glossing | Skin crisps to glass | Twenty minutes over ember heat is what gives al faham its crackle. Nothing is faster. |
| 4 | `served` | Served | Tight beauty frame, steam rising | Al faham, served hot | Straight off the grill to your table, or to your door, across ten branches. |

Eyebrow (kicker) on chapter 1 only. Chapters 2 to 4 carry no kicker, to keep the
page-wide eyebrow ration.

How it enacts the spine: the four chapters are the four stages of one shift at the
grill, so the visitor scrolls through the cooking rather than reading about it.

### World grammar

One style preamble for the single render: photoreal cinematic food film, 85mm
macro, single hero subject centered with clean negative space, seamless very dark
background of midnight cobalt shadow and black smoke, warm ember and saffron rim
light on the subject only, locked exposure, no flicker, minimal motion blur, slow
constant camera speed, no cuts, no on-screen text.

### Mobile framing

The bird stays inside the center-safe area for the whole take, so the mobile crop
never loses the subject. Mobile encode capped at 720px height, separate poster per
mobile clip.

### Delivery budget

<= 32 MiB for all desktop clips combined, <= 16 MiB for all mobile clips combined.

## Section plan

| # | Section | Layout family | Eyebrow |
|---|---|---|---|
| 1 | Journey (4 chapters over the film) | scroll-scrub journey | 1 (chapter 1 kicker) |
| 2 | Proof band | marquee | no |
| 3 | The 1989 story | asymmetric split editorial | no |
| 4 | Signature dishes | asymmetric mosaic | no |
| 5 | What we cater | staggered index rows with generated icons | no |
| 6 | Branches | filterable index table | 2 |
| 7 | From one kitchen to ten | stepped rail | no |
| 8 | Order and contact | contact slab | 3 |
| 9 | Footer | footer | no |

Nine sections, seven distinct layout families, no consecutive repeats. Eyebrow
budget is ceil(9/3) = 3, and exactly 3 are used.

Mobile collapse, declared per multi-column section: story splits to stacked plate
then copy; mosaic goes to a single column with the lead dish full width; index rows
stack with the icon inline; branch table drops the emirate column and groups by
emirate heading; stepped rail becomes a vertical rail; contact slab stacks.

## Asset plan

All generated on Higgsfield, palette-locked, downloaded into `app/public/assets/`.

1. Storyboard sheet, 6 keyframes of one continuous move (Phase 1 anchor, stays in `refs/`).
2. The film: one ~15s render, cut into 4 desktop clips + 4 mobile clips + 8 exact-frame posters.
3. Content imagery: 5 dish plates (al faham platter, mandi rice platter, mixed grill skewers, karak and paratha, broasted chicken).
4. Section plates: the 1989 kitchen plate, a night branch exterior plate.
5. Custom icon set: one sheet of 8 line glyphs (charcoal, chef, 24 hour clock, scooter delivery, catering tray, corporate, party, fresh leaf), keyed to transparent.
6. Monogram mark and favicon set.
7. Launch cover and OG card.

No stock, no picsum, no CSS-only substitutes.

## CTA inventory

Each CTA is its own component with its own interaction identity. There is no
site-wide button class.

| id | Label | Identity |
|---|---|---|
| `cta-order` | Order on WhatsApp | Solid pomegranate slab. On hover the label mask-slides up and a second copy rises into place. Active: scale 0.98. The one order label page-wide, used in nav, chapter 1, chapter 4 and the order slab. |
| `cta-branch` | Find a branch | Bone hairline outline, cobalt tile fills from the left on hover, arrow glyph translates 4px. |
| `cta-call` | The phone number, set in mono | Text only. Underline draws from left on hover. No fill, no box. |
| `cta-menu` | See the menu | Circular bone stroke ring around a diagonal arrow that rotates 45 degrees on hover. |
| `cta-branch-row` | Each branch row | The row itself is the target: cobalt wipes across from the left, the emirate label shifts right, the phone number reveals. |

## Revision 2: the client's own brand

The client supplied their real site files (logo artwork, branch photography,
delivery artwork) and asked for a black theme with the original logo. That
supersedes the free-rein identity above. What changed and why:

- **Palette is now black and amber, not cobalt and pomegranate.** The amber is
  sampled directly out of `img/Logo.png` (`#ffc107`), and black is the colour of
  their actual shopfronts. Banned family 1 (near black plus amber) is explicitly
  overridable by the user's real brand colours, and this is that case: it is not
  a default reach, it is their signage. Ground `#080808`, raised `#101010`, warm
  raised `#17140f`, wipe `#2b2419`, text `#f7f3ea`, muted `#9e968a`. Still
  exactly one accent. Amber only ever carries black text, never bone.
- **The monogram is retired.** The nav and footer use the real artwork
  (`img/log.png` and `img/Logo.png`), and the favicon is cut from `Logo.png`.
  Generated marks never override a brand the client already owns.
- **The journey chapters are about Nad Wasit, not about al faham.** The film is
  now the room the copy sits in rather than its subject: 1989, the group of ten,
  the shared method, the opening hours.
- **The signature section is the real charcoal range**: Nadwasit Special,
  Dynamite, Honey and Kashmir chicken charcoal, read off the client's own
  delivery artwork. Four cells at four sizes, not the earlier three.
- **Every restaurant photograph is now a real photograph** of a real branch:
  Al Zahra in the story, the Industrial Area corner in the branch index, the
  Yarmook head office in the order panel. No generated building remains.
- **Keeta joins Noon and Talabat** as a delivery partner, per the current
  artwork.

## Copy rules honored

No em-dashes or en-dash separators anywhere visible. Headlines at or under 8 words.
Sub-paragraphs at or under 25 words. One label per CTA intent. No invented
performance stats: every number on the page (1989, 36 years, 10 branches, 3
emirates, the hours, the phone numbers, the branch names and addresses) is taken
from the client's existing site.
