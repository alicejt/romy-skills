---
name: personal-voice
description: >
  Interview a writer to build a private, evidence-based voice profile, then draft,
  edit, or review writing in that voice without AI slop. Use for general writing,
  email, X posts, LinkedIn posts, and GEO-ready blog posts when the user wants
  their work to sound recognizably like them rather than generic AI prose. On a
  first run, conduct the voice interview before drafting.
---

# Personal Voice

Build a voice profile from the writer's own words, then use it as the authority
for all writing. The objective is not polished "professional" prose. It is
writing that is accurate, useful, and recognizably theirs.

## Reference map

Read only the references relevant to the job. The writer's approved private
profile always outranks these defaults.

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/profile-template.md` | Creating or updating a profile | Captures the evidence, preferences, boundaries, and per-surface rules that make a voice usable. |
| `references/anti-slop.md` | Every draft, edit, detect, or preflight request | Defines the anti-slop modes, preservation rules, patterns, and reporting format. |
| `references/anti-slop-eval.md` | After a substantive edit or before returning a high-stakes draft | A final pass/fail audit of source fidelity, voice, evidence, rhythm, and formatting. |
| `references/general.md` | General writing | Applies the profile outside a named platform. |
| `references/email.md` | Email | Applies audience, relationship, and action-oriented email guidance. |
| `references/x.md` | X posts | Applies voice-first X guidance; pair with `/tweet-growth` when available. |
| `references/blog-geo.md` | Blog posts | Applies evidence-backed, answer-ready GEO guidance without keyword stuffing. |
| `references/linkedin.md` | LinkedIn posts | Applies LinkedIn-specific guidance; pair with `/linkedin-post` when available. |

## Find or create the profile

Look for `personal-voice-profile.md` in the working directory or a user-specified
private location. Never write a person's profile into this public skill folder or
a repository that may be shared.

If a profile exists, read it first. It outranks every default in this skill.
Update it when the writer says their preferences have changed.

If no profile exists, do not draft yet. Explain that this first run creates a
private voice profile, then conduct the interview below. Accept short answers,
allow skips, and never pressure someone to share private material. Save the
approved result using `references/profile-template.md`; if writing a file is not
possible, return a copyable profile and use it only for the current conversation.

## Conduct the voice interview

Run this in two rounds. Ask each round conversationally in one message, not one
question at a time. Do not infer a personal voice from demographic information,
a job title, or a single polished bio.

### Round 1: material and intent

Ask for:

1. What they do, who they write for, and what writing should help them achieve.
2. The surfaces they use: general, email, X, blog, LinkedIn, or another named
   context.
3. Five to ten real samples they wrote themselves, ideally across more than one
   surface. Ask for 100-1,000 words total; links, pasted text, or rough notes are
   all acceptable. If you do not feel you understand their tone, ask for more samples.
4. Words, phrases, jokes, rhythms, or ways of qualifying a claim that sound like
   them.
5. Words, tones, or writing habits they dislike or would never use.
6. Their appetite for bluntness, warmth, humor, profanity, vulnerability,
   informality, and technical detail.
7. Facts, topics, clients, claims, and personal details that are off limits.
8. Editing preference: preserve and lightly edit, reshape, or start afresh.
9. Mechanics: spelling locale, punctuation preferences, formatting, length, and
   accessibility requirements.

Read the supplied samples before Round 2. Identify observable patterns only:
vocabulary, sentence shape, pacing, humor, proof habits, uncertainty, and
structural habits. Do not mistake errors or a one-off joke for a permanent rule.

### Round 2: calibrate and protect the voice

Summarize the patterns you observed in plain language, then ask the writer to
confirm or correct them. Ask for:

1. Three lines from the samples they would most want preserved, and any lines
   that are not representative.
2. Their personal AI-slop tells: phrases, rhythms, hooks, structures, or levels
   of polish that make them cringe.
3. What a good edit must preserve, even if it is messy, unusual, or less tidy.
4. What changes by surface: email, X, blog, and LinkedIn.
5. One or two topics on which they have a real point of view, and what evidence
   they can safely draw on.

Draft the profile, show it to the writer, and revise it before treating it as
authoritative. Put uncertainty in the profile rather than inventing a rule.

## Write or edit

1. Read the profile, identify the requested surface, and use the reference map
   above to load the needed surface reference and anti-slop workflow.
2. Establish the job, audience, source material, and desired reader outcome.
   Ask one focused question only if a missing answer would materially change the
   draft. Never invent facts, examples, credentials, results, or opinions.
3. For an edit, preserve the writer's structure, strongest wording, useful
   roughness, and specific details. Make the minimum effective edit. Start over
   only when asked or when the source cannot do the stated job.
4. Draft for the writer's profile, not for a generic ideal of clarity or
   professionalism.
5. Run the appropriate mode in `references/anti-slop.md`. Remove only genuine
   patterns. A personal aside, fragment, hedge, repetition, or odd phrase stays
   when it is purposeful and sounds like the writer.
6. After a substantive edit or before a high-stakes delivery, run
   `references/anti-slop-eval.md`. Revise if any applicable check fails.
7. Return the ready-to-use work. For an edit, add a brief **What changed** note
   naming only material changes. For a detect-only request, report quoted
   patterns and concise fixes without rewriting or claiming to detect AI use.

## Work with specialist skills

This skill owns the writer's profile, source fidelity, and anti-slop review.
Specialists own their platform-specific strategy.

- **X:** If `/tweet-growth` is installed, load the profile and
  `references/x.md` first, then use `/tweet-growth` for goal, format,
  distribution, and reply strategy. Do not let growth mechanics flatten the
  voice into hooks, slogans, or engagement bait.
- **LinkedIn:** If `/linkedin-post` is installed, provide the approved profile
  and use `/linkedin-post` for format selection and LinkedIn-specific structure.
  This profile overrides its generic defaults. Apply `references/linkedin.md`
  and the anti-slop pass to the final post.
- **Blog:** Use `references/blog-geo.md` for answer-readiness and evidence. GEO
  must clarify useful information, never turn a personal voice into keyword
  stuffing, generic FAQs, fake citations, or empty authority.

If a specialist is not installed, use this skill's surface reference directly.

## Non-negotiable guardrails

- Never make the writer sound more corporate, agreeable, authoritative, or
  "content-ready" merely because it looks cleaner.
- Never manufacture human texture with fake typos, forced vulnerability, jokes,
  slang, or self-deprecation.
- Never turn a real feeling into a commitment, a projection into a measurement,
  or a private detail into public copy.
- Never publish, send, schedule, or post without explicit instruction.
- Treat the profile as private user material. Do not include it in a public repo,
  example, issue, or output unless the writer explicitly asks.
