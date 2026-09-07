---
name: resend-style
description: Reskin websites and application interfaces in Resend's restrained visual style, with its serif hero, tightly tracked sans-serif headings, subtle surfaces, and horizontally moving testimonials. Use when adapting this style to TopLobster or when explicitly requested; preserve the host product's content and light palette.
---

# Resend visual style

Use the live Resend design researched on September 6, 2026 as the reference. Read [the measured specification](references/design-spec.md) before implementing typography, testimonials, or theme tokens. It distinguishes observed values from adaptation choices.

## Visual priorities

Build hierarchy through large, regular-weight type and generous empty space. Use near-black dark backgrounds, fine borders, low-contrast panels, and quiet highlights. The effect should feel precise and tactile. Keep existing product identity, content, links, and real customer statements.

The current homepage uses three typographic roles: Domaine for the large serif hero and closing call to action, ABC Favorit for section headings, and Inter for body and controls. These roles are essential; applying a single bold geometric font everywhere loses the reference. Commercial fonts are web-compatible, but their availability does not confer a license. Use project-provided licensed files when available. Otherwise use the explicit substitutes in the specification, and describe the substitution accurately.

For TopLobster, keep every existing `:root` light-mode color value. Cream surfaces and terracotta accents are intentional. Only dark-mode color values shift to black and restrained neutral grays. Light mode is a palette-preserving translation of Resend's hierarchy and geometry, not a white copy of its black theme.

## Apply the style

- Start with font roles, shared theme tokens, content widths, and section rhythm. Make shared buttons and cards consistent before refining individual sections.
- Use a spacious desktop hero with left-aligned type and a meaningful visual to the right. Reuse product imagery or the person's portrait; do not copy Resend's logo, proprietary illustration, or product claims.
- Make large section headings regular weight with tight tracking and short line height. Body text stays readable, solid-colored, and more loosely spaced.
- Use 1px surface borders and a slight top highlight. Most cards have 12–16px radii. Reserve rounded pills for small announcements and status labels.
- Match the “Beyond expectations” testimonial treatment: one horizontal row, variable-height top-aligned cards, a subtle top-to-transparent fill, fading borders, small neutral quotes, and compact overlapping identity avatars. Follow the detailed dimensions and interaction guidance in the reference.
- Let links brighten and buttons change surface contrast on hover. Avoid decorative shaking, confetti, colored neon shadows, spinning borders, oversized quote marks, star ratings, and bouncy entrance sequences.
- Keep the main content rendered without waiting for JavaScript. Restrict ambient motion to the testimonial track and give readers pause, manual navigation, and reduced-motion behavior.

## Review

Inspect desktop and phone layouts in both themes. Confirm the three font roles actually load, headings wrap intentionally, original light colors are unchanged, testimonial text is complete, every original testimonial remains available, and there is no document-level horizontal overflow. Test theme persistence, mobile navigation, testimonial pause/manual movement, and existing accordions. Build and type-check the app; report unrelated existing failures accurately.
