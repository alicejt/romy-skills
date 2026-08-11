---
name: brand-visual-system
description: Interview a founder, team, or brand owner to build a private, usable visual system for sites, products, decks, social work, and image direction. Use when someone needs to establish, review, document, or update visual identity rules; turn scattered references into a design system; or create a shared visual foundation before design or image work. On a first run, conduct the visual interview and present directions before treating any system as approved. Never put private brand material into a public repository or publish design changes without explicit instruction.
---

# Brand Visual System

Build a system that helps someone make consistent visual decisions. Start from
their work, audience, assets, and taste. Keep every rule connected to a real
use case instead of inventing a brand personality from a few adjectives.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/brand-visual-profile-template.md` | Creating or updating a profile | Captures the approved system and its evidence in a private file. |
| `references/visual-system-review.md` | Reviewing an existing brand | Separates confirmed rules, contradictions, and decisions that need an owner. |
| `assets/visual-system-handoff.md` | Delivering the work | Keeps the direction, rules, examples, and open decisions in one handoff. |

## Find or create the private profile

Look for `brand-visual-profile.md` in the working directory or a user-specified
private location. Never write it into this public skill folder or another shared
repository.

If a profile exists, read it before proposing design work. Treat it as the
authority unless the user changes it.

If no profile exists, explain that the first run creates a private visual
foundation. Ask where the approved profile should live. If the environment can
write private files and the user has no preference, use
`~/.agent-skills/brand-visual-system/brand-visual-profile.md`. If file writing
is unavailable, return a copyable profile and use it only in the current
conversation.

## First run: understand the work before the style

Ask the first round in one conversational message. Accept links, screenshots,
asset folders, rough notes, and incomplete answers. Ask for:

1. What the business or product does, who it serves, and what people need to
   understand or feel when they encounter it.
2. The priority surfaces: website, product UI, deck, social, editorial, sales
   material, packaging, events, or another named surface.
3. Existing material: logo, color palette, type choices, site, product, deck,
   style guide, reference images, and examples that already work. Label supplied
   images as a reference or an edit target.
4. Three to five visual references they like, with what they like about each.
   Ask for qualities, composition, material, typography, and mood rather than
   an artist's name alone.
5. Visual territory to avoid, including category clichés, colors, motifs,
   genres, accessibility failures, and cultural associations.
6. Practical constraints: fonts they can license or use, existing components,
   platforms, implementation capacity, accessibility requirements, and deadlines.
7. What must remain unchanged, including a logo, product UI, customer trust
   signal, or existing visual equity.

Review the supplied material. Separate confirmed rules from your inference, and
ask only focused follow-up questions where a decision would change the system.

### Propose directions before making rules final

If the user has an established system, normalize it into a draft and flag any
contradictions. If the direction is open, present two or three clearly different
directions. Give each a visual premise, suitable surfaces, type and color logic,
imagery behavior, a tradeoff, and an avoid list.

Do not finalize a palette, typography, or image register until the user selects
or combines a direction. Record approved choices in the private profile with
their reason.

When imagery is part of the work, use `/image-art-direction` after the broader
system is approved. Give it the profile's imagery rules and existing references.
It owns calibration images, prompts, generation, and image-specific iteration.

## Build or update the visual system

1. Read the profile and identify the requested surface and decision.
2. Inspect existing work before recommending changes. Load
   `references/visual-system-review.md` for an audit or migration.
3. Define only the parts the work needs: visual premise, palette, typography,
   spacing, layout, imagery, component behavior, motion, data visualization,
   accessibility, or a named subset.
4. Give each rule a job. Include a value, range, example, or decision boundary
   whenever possible. Avoid vague labels such as "premium," "clean," or
   "modern" without observable guidance.
5. Preserve approved assets and system choices. Flag conflicts, missing source
   files, licensing questions, or implementation limits instead of guessing.
6. Return one handoff using `assets/visual-system-handoff.md`. Include what is
   confirmed, what changes, examples, implementation notes, and open decisions.
7. Update the private profile only after the user approves a decision or corrects
   a rule.

## System rules

- Set color by role, contrast, and state. Do not provide hex values without a
  use, accessibility check, or token name.
- Set typography by role and hierarchy. Record available weights, fallback
  choices, and any licensing or loading constraints.
- Set spacing and layout using a small repeatable scale. Connect it to real
  breakpoints, canvases, or component behavior where those exist.
- Treat imagery as a system: subjects, composition, palette, treatment,
  placement, and avoid list. Use `/image-art-direction` for generated-image
  work.
- Keep brand marks, icons, and illustration methods separate. Do not substitute
  generated raster art for an existing logo or a code-native icon system.
- Build accessible contrast, readable type sizes, focus states, and motion
  preferences into the system. Flag anything that needs a real browser or design
  review to verify.

## Guardrails

- Keep brand profiles, source files, strategy, client assets, and unpublished
  work private unless the user explicitly asks to share them.
- Never claim a color, font, mark, image, or reference is licensed or approved
  without evidence.
- Never replace production assets, change a live site, or publish a design
  system without explicit instruction.
- Never treat a generated image or a mood reference as an approved brand rule.
- Never turn a sparse brief into a giant design system. Keep uncertainty visible
  and build only the rules the user can apply.

## Keep the profile useful

Add a dated decision whenever the user approves a change, rejects a recurring
failure, adopts a new surface, or supplies an authoritative source. Retire rules
only when the user explicitly replaces them. A profile with a short decision log
is easier to trust than a polished document with no history.
