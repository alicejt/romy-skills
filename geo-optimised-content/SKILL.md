---
name: geo-optimised-content
description: >
  Interview a user to build a private GEO content profile, then plan, draft,
  edit, or review citable blog posts, guides, resource pages, documentation, and
  answer-led content using an approved Personal Voice profile. Use when content
  should be useful to readers and easy for search and AI assistants to extract,
  verify, and cite, including CMS-ready metadata when the user has supplied a
  publication schema.
---

# GEO Patterns

Write for a reader first, while making useful information easy to extract,
verify, and quote. GEO is not a layer of SEO copy added at the end: it is clear
information architecture, evidence discipline, and explicit answers.

## Required shared voice profile

Always load `/personal-voice` and its approved `personal-voice-profile.md`
before drafting. It is the authority on vocabulary, cadence, personal boundaries,
and anti-slop review.

If `/personal-voice` is not installed, stop and ask the user to install it. If
the approved voice profile does not exist, invoke `/personal-voice` first; do
not infer a general voice or repeat its interview here. In this case, do not
ask GEO-profile questions or collect writing samples: complete the Personal
Voice interview first, then return to this skill for publication strategy.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/publication-profile-template.md` | Creating a user-specific CMS or publication profile | Captures the fields, constraints, and editorial conventions a particular publication requires. |
| `private/publication-schemas.md` | Only when a local private extension exists | Optional local field map; this path is ignored by Git and never part of the public package. |

## Find or create the GEO profile

Look for `geo-patterns-profile.md` in the working directory or a user-specified
private location. Never save it inside this public skill folder or a repository
that may be shared.

If a profile exists, read it after Personal Voice. If it does not, do not draft
yet. Explain that the first run creates a private GEO profile, then ask the
questions below in one conversational message. Save the approved result using
`references/publication-profile-template.md` or return a copyable version if a
file cannot be written.

Ask for:

1. The publication, organisation, product, or author the content represents.
2. The reader, their real question, and the decision the content should make
   easier.
3. The topics they can credibly cover, their actual experience, and subjects or
   claims they must avoid.
4. The desired content types, outcomes, and proof of success: useful leads,
   subscriptions, product understanding, qualified traffic, support deflection,
   reputation, or another stated outcome.
5. Available source material: primary research, first-party data, product docs,
   customer evidence, expert interviews, or existing internal links.
6. Publication conventions: CMS, document type, required metadata, structured
   data options, linking rules, freshness rules, and accessibility needs.
7. Whether they have a publication schema or field map. If yes, ask them to add
   it to their private configuration using the template. If not, return a clear
   content draft and a generic CMS checklist rather than inventing fields.

Record uncertainty rather than inventing a field, publishing rule, or claim.

## Plan and write

1. Identify the reader's question in conversational language and state the
   answer in one self-contained sentence.
2. Establish the article's scope, reader outcome, source material, and search or
   conversational query only when it is genuinely useful. Ask one focused
   question if a missing answer would materially change the draft.
3. Separate facts, first-party observations, recommendations, and opinions.
   Support factual claims with primary or otherwise credible sources, a date when
   freshness matters, and the limits needed to interpret the claim.
4. Build an answer-led structure: opening answer, relevant definitions, evidence
   and mechanisms, useful specifics, limitations or trade-offs, and a next step
   that serves the reader.
5. Draft in the approved Personal Voice profile. Apply its anti-slop pass before
   delivery. GEO must clarify the writing, never flatten it into template prose.
6. For CMS-ready work, read the user's private publication profile or local
   extension. Prepare only fields that actually exist and ask before making a
   schema-dependent decision when the configuration is absent or stale.

## Reusable GEO patterns

- **Clear answer:** write a sentence that still answers the question when quoted
  without its surrounding paragraph.
- **Supported claim:** name the source, finding, population or context, and any
  material limitation. Do not manufacture precision.
- **Definition:** define unfamiliar or reframed terms concisely on first useful
  use. Do not coin proprietary jargon merely to sound authoritative.
- **Bounded specificity:** use real numbers, limits, steps, timeframes, and
  eligibility criteria when they make the advice actionable or verifiable.

Use only the patterns the piece earns. Genuine FAQs belong where readers have
recurring questions and the page can answer them fully; they are not filler.

## Return the work

Unless asked for a final draft only, return:

1. The target reader, question, and answer sentence.
2. A concise outline with the evidence or source needed for each material claim.
3. The draft or edit, with direct links/citations for externally sourced claims.
4. A source ledger distinguishing verified evidence, first-party claims, and
   unverified gaps.
5. A CMS checklist based only on the user's supplied publication profile.

Do not publish, create CMS documents, alter a schema, deploy, or add structured
data without explicit instruction.

## GEO is not

- keyword stuffing or a fixed density target;
- fabricated authority, citations, data, credentials, or testimonials;
- a substitute for useful research, product truth, or editorial judgement;
- a reason to add FAQ, HowTo, or other structured data a page does not support;
  or
- permission to override the approved Personal Voice profile, legal constraints,
  accessibility needs, or editorial standards.
