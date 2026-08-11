---
name: image-art-direction
description: Create a private visual direction for a person, product, or brand, then turn it into image concepts, production prompts, and generated images where an image tool is available. Use when someone needs a first-run visual interview, a brand image direction, hero or editorial images, campaign imagery, image briefs, or a repeatable image workflow. On a first run, interview the user and make direction examples before producing a full image batch. Never use to publish images or store private brand material in a public repository.
---

# Image Art Direction

Turn a user's own visual taste, business context, and practical image needs into
a direction that can survive more than one image request. Start with the person
and the job the images need to do. Do not start from a generic mood board.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/visual-profile-template.md` | Creating or updating a visual profile | Captures private business context, visual rules, references, and output defaults. |
| `references/direction-board.md` | Presenting first-run directions | Gives each of three directions a comparable, decision-ready shape. |
| `assets/image-run-template.md` | Handing over a selected batch | Keeps prompts, generated assets, and notes in one useful Markdown file. |

## Find or create the visual profile

Look for `brand-visual-profile.md` and `visual-direction-profile.md` in the
working directory or a user-specified private location. Never write either into
this public skill folder or another shared repository.

When a `brand-visual-profile.md` exists, use its approved palette, typography,
imagery rules, protected assets, and avoid list as the foundation. A
`visual-direction-profile.md` may add image-specific choices for a particular
person or project.

If either profile exists, read it before making concepts. Treat approved rules
as the authority unless the user changes them.

If no profile exists, explain that the first run sets the visual direction, then
run the interview and calibration stage below. Ask where the approved profile
should live. If the environment can write private files and the user has no
preference, use `~/.agent-skills/image-art-direction/visual-direction-profile.md`.
If file writing is unavailable, return a copyable profile and use it only in the
current conversation.

## First run: interview, directions, calibration

Ask the first round in one conversational message. Accept short answers, links,
screenshots, rough notes, and skipped questions. Do not infer a visual identity
from a business category, job title, or a single logo.

Ask for:

1. What they make, who it is for, and what the images should help achieve.
2. The first use case: site hero, editorial image, social post, campaign, deck,
   product image, or another named surface. Ask for dimensions and any space
   needed for copy.
3. Existing visual material: logo, colors, typography, photographs, a site, a
   deck, a design system, or image references. Label each supplied image as a
   reference or an edit target.
4. Three to five references they like, with what they like about each. Ask for
   visual qualities rather than an artist's name alone.
5. Their desired degree of realism, polish, literalness, humor, abstraction,
   and visual intensity.
6. What they never want to see: colors, genres, motifs, compositions, stock
   tropes, text in images, people, products, or cultural associations.
7. Practical constraints: accessibility, rights, sensitive subjects, required
   formats, a delivery deadline, and whether they want generated images now.

Read the material, then present three clearly different directions using
`references/direction-board.md`. Give each direction a name based on its visual
logic, not empty adjectives such as "modern" or "elevated." Make the tradeoff
between the directions clear.

### Make calibration examples before the full batch

Write one calibrated test prompt for each direction. If an image-generation tool
is available, generate one example per direction and show the results. If no
tool is available, return the three ready-to-run prompts and say which image
tool would be needed to make them.

Do not generate a full batch or save a profile as final until the user selects a
direction or gives a concrete combination of directions. Ask what they would
keep, cut, or change after they see the examples.

Update the profile from the approved direction using
`references/visual-profile-template.md`. Record decisions, not vague praise.

## Use the skill after setup

1. Read the visual profile and identify the requested image job.
2. Ask for only the missing details that would materially change the image:
   subject, intended surface, dimensions, copy-safe space, references, and
   deadline.
3. Decide whether the work is a new image, an edit, or a variation. For edits,
   list what must remain unchanged before generating.
4. Create two or three concepts when the creative direction is open. Use one
   focused concept when the user has already chosen a composition.
5. Write a complete production prompt for every concept. Include the image's
   job, subject, scene, composition, visual treatment, lighting, palette,
   materials, text requirements, and constraints.
6. Generate the requested images only when an image-generation tool is present
   and the user has asked for images. Inspect the output against the profile,
   source references, composition, text accuracy, and avoid list. Iterate with
   one targeted change at a time.
7. Return one combined Markdown handoff based on `assets/image-run-template.md`.
   Include the brief, selected direction, prompts, generated-file references,
   dimensions, and any remaining decision. Do not create one Markdown file per
   prompt.

## Image-tool behavior

Check the tools available in the current environment. Do not infer capability
from the product name alone.

- **Codex with `image_gen`:** Use the built-in image-generation tool for new
  images and edits. Follow its save-path and edit guidance. Generate each
  distinct concept separately, inspect it, and save any project-bound asset
  where the user asked.
- **ChatGPT with an image tool:** Generate calibration examples and requested
  images with that tool. Keep the same profile, approval, and inspection steps.
- **Claude or another environment without an image tool:** Produce complete,
  engine-ready prompts and the combined handoff. State that image generation is
  unavailable in the current environment. Do not imply that an image was made.
- **Named external engine:** Rewrite the approved direction into the engine's
  prompt grammar. Keep the visual profile and constraints stable. Do not claim
  that the external engine was called unless the relevant tool is connected.

## Prompt rules

- Describe the image's job before its style.
- Use supplied references for mood, composition, material, or palette. Do not
  claim to reproduce a copyrighted image or living artist's exact style.
- Default to no text, logo, watermark, interface, or brand mark in the image.
  Add exact text only when the user provides it and the generation tool can
  support it.
- Preserve real logos, people, product details, and layout only when the user
  supplies them as edit targets and explicitly asks for preservation.
- Build contrast through composition, light, material, scale, or point of view.
  Do not add random props or visual metaphors to make an image feel clever.
- Respect the profile's avoid list every time. Flag a conflict rather than
  silently dropping a requirement.
- Use image generation for raster imagery. Use code-native SVG, HTML, or CSS
  for simple icons, diagrams, and interface shapes when those are the better
  medium.

## Guardrails

- Keep visual profiles, references, client material, raw image inputs, and
  generated source files private unless the user explicitly asks to share them.
- Never publish, schedule, upload, replace, or attach an image without explicit
  instruction.
- Never invent brand rules, product claims, accessibility facts, or usage rights.
- Never overwrite an existing project asset unless the user asks. Create a
  versioned sibling file by default.
- Treat a generated image as a draft until the user approves it. Check that it
  does not include garbled text, accidental logos, obvious artifacts, or a
  composition that defeats its intended use.

## Updating the direction

Update the profile when the user rejects a repeated pattern, approves a new
reference, changes the audience or surface, or adds a visual constraint. Keep a
short dated decision log so future runs explain the choice without re-running
the whole interview.
