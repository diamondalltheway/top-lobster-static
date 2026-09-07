# Research and implementation specification

## Sources and fidelity

Research date: 2026-09-06. Primary reference: [Resend homepage](https://resend.com/). Values below were inspected in its rendered DOM and computed CSS, and checked against screenshots at a desktop viewport. The site may evolve; re-inspect it when asked for a new exact match.

Font sources: [Dinamo ABC Favorit](https://abcdinamo.com/typefaces/favorit), [Dinamo licensing](https://abcdinamo.com/licenses), [Klim Domaine Display](https://klim.co.nz/fonts/domaine-display/). Open-source alternatives: [Inter](https://fonts.google.com/specimen/Inter), [Inter Tight](https://fonts.google.com/specimen/Inter+Tight), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif). Substitution is a visual judgment, not a claim of identical outlines.

## Typography

| Role            | Observed on Resend                                                                               | TopLobster without commercial font files                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Hero            | CSS family `domaine`, regular 400, 96px desktop / 64px mobile, 1.0 line height, -0.01em tracking | Instrument Serif 400; retain the high-contrast strokes, compact proportions, upright posture, and large scale |
| Section heading | `aBCFavorit`, regular 400, 56px desktop / 48px mobile, 1.2 line height, -0.05em tracking         | Inter Tight 400, -0.045em; 40–56px responsive for long portfolio headings                                     |
| Body            | `inter`, normal 400                                                                              | Inter 400, exact family                                                                                       |
| Lead paragraph  | Inter 18px, 27px line height                                                                     | Inter 18px / 1.5–1.65                                                                                         |
| Card quote      | Inter 14px, 22.4px line height, normal weight                                                    | Inter 14px / 1.6                                                                                              |
| Author and role | Inter 14px / 1.6, normal weight                                                                  | Inter 14px / 1.6                                                                                              |
| Navigation      | Inter 14px, 500                                                                                  | Inter 14px, 500                                                                                               |
| Primary button  | Inter 16px, 600, 48px control height                                                             | Inter 14–16px, 500–600, 44–48px height                                                                        |

ABC Favorit is a low-contrast grotesque with geometric structure and idiosyncratic details. Inter Tight reproduces its compact headline texture better than the previous Space Grotesk, though individual glyphs differ. Domaine is a high-contrast editorial serif; Instrument Serif approximates its narrow, expressive display character. Neither is an exact substitute. Self-host the available open-source files, preserve their OFL licenses, and use `font-display: swap`. Define `--font-display`, `--font-editorial`, and `--font-body` so licensed faces can replace fallbacks centrally.

Resend applies a subtle vertical white-to-gray gradient to display headings. Use it sparingly in dark mode. Body copy and small labels should have solid colors. TopLobster light headings retain terracotta, and the serif hero can use its existing near-black text.

## Palette and surface hierarchy

Resend's page background is literal `rgb(0,0,0)`. Surfaces sit just above it, around #0b0b0b–#141414. Primary text is near white, supporting text around #a0a0a0, and quieter text around #707070. Fine outlines carry much of the component separation. A measured testimonial border is `color(display-p3 0.878 0.929 0.996 / 0.145)`; an sRGB white outline at roughly 12–15% is a practical approximation.

For TopLobster dark mode use black page and surface, 4–7% lightness secondary surfaces, roughly 14% lightness borders, 96% primary text, 80% secondary text, and 64% muted text. Neutral white headings are more faithful than the prior lavender. Preserve the source light palette exactly: background `33 34% 95%`, muted surface `32 27% 90%`, elevated surface `36 45% 99%`, heading `12 60% 43%`, accent `15 62% 60%`, and their existing companion tokens.

Depth comes from restrained tonal changes, a 1px inset top highlight, and a soft black shadow. Avoid saturated glow behind panels and text. Large color gradients, glass grids, and thick colored borders overwhelm the reference.

## Layout and rhythm

The homepage uses an approximately 1280px outer container with 24px inner gutters; the hero occupies a narrower inner grid with substantial space above and below. Header is about 58px tall on desktop and stays at the top when scrolling, with a translucent dark backdrop. Brand left, navigation center, controls right. Navigation is unboxed, while the main action has a low-contrast rounded rectangular surface.

Desktop hero: text and visual in two columns; heading near 96px, a short 18px supporting paragraph, and two actions with around 32px of space above. Adapt the right-hand visual to the product, rather than cloning Resend's dark cube. On phones, stack the content, reduce headline scale, provide 24px gutters, and let content determine height.

Sections typically use 96px vertical padding on larger screens and 48–64px on phones. Center broad section introductions; use left alignment within cards, case studies, and prose. Separate sections with generous background and occasional hairline rules. Keep long reading copy around 65 characters per line.

## Beyond expectations — measured construction

- Centered heading: 56px / 67.2px, weight 400, -2.8px tracking. Below it, an 18px / 27px two-line muted summary. The summary has 96px bottom margin on the reference desktop.
- A single full-bleed horizontal row shows portions of cards at both edges. Cards align at the top and have natural heights. It is not a masonry grid, three-column wall, or large featured quote.
- Width: 450px desktop, 350px mobile. Gap: 32px. Internal padding: 24px vertical and 32px horizontal. Radius: 16px. Border: 1px with no visible bottom edge.
- Card fill: `linear-gradient(180deg, rgba(80,80,80,.15) 0%, rgba(0,0,0,0) 70%)`. Border fades into the background toward the bottom, while text remains at full opacity. Implement the fading border on its own pseudo-element; never fade the quote or author.
- Quote: 14px Inter, normal 400, 1.6 line height, muted gray. Preserve the full original text, including longer quotes. Do not make up shorter endorsements or ratings.
- Attribution starts 24px below the quote. A 40px company mark and 40px author portrait overlap by about 10px, followed by a 16px gap and a vertical name/company stack. Keep name brighter than company. Use real existing logos where available; otherwise a neutral company monogram is an honest substitute.
- Motion: source track uses `180s linear infinite scroll-x`, repeated sets, and pauses on hover. It supports dragging. Absolute speed depends on total track width; a six-quote adaptation can use about 90 seconds per set for a similarly slow pace.
- Adaptation for usability: explicit pause/resume, previous/next controls, touch swipe, keyboard navigation, and a static manually scrollable track for reduced motion. Cloned content used for looping is `aria-hidden` and inert. Do not announce every automatic movement to screen readers. Preserve all original statements in the accessible set.
- On very small phones, cap cards at `calc(100vw - 48px)` so text fits comfortably. Native horizontal scrolling must remain inside the testimonial area. Page-level horizontal scroll is a defect.

## Component translation

Buttons: subtle gradient from elevated to muted surface, 1px border, inset top highlight, 12–16px corner radius. Hover increases contrast; translations, if any, are 1–2px. Small icon controls are 36–40px visually with comfortable targets. Visible keyboard focus uses the host ring token.

Product imagery: preserve its colors and aspect ratio inside quiet bordered frames. Use small browser-style frame details only where they help read a screenshot as a product. Headlines are regular weight; card titles 20–24px, body 14–16px. Metadata is subdued. Technical logos should be restrained in size without hiding their identity.

Biography: an editorial section with a fine divider and narrow reading column. Replace animated aurora surfaces with a plain or slightly elevated panel. Keep existing story and disclosure interactions.

Tech/open-source/favorites: consistent low-contrast panels, fine rules, regular headings, and readable labels. Do not leave legacy neon glows or attention-seeking motion in lower sections after updating the hero.

Contact/footer: large serif closing statement, one clear contact action, small availability and social links, then a restrained footer divider. Preserve the existing email and destinations.

## Verification criteria

Compare visual hierarchy against the reference, rather than counting superficial similarities. Check a wide desktop, a tablet breakpoint, and a 390px phone in light and dark. Confirm theme toggle persists across reload, every quote is readable, paused motion stays paused, touch/manual navigation works, and reduced motion stops automatic movement. Verify self-hosted fonts and images load, the page is visible before hydration, and there is a single primary heading. Run the project build and type check; baseline errors should be distinguished from introduced issues.
