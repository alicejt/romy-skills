---
name: email-sequences
description: Interview a founder, marketer, or operator to plan and draft a private, evidence-backed email sequence for a specific audience and trigger. Use when someone needs a welcome, onboarding, nurture, activation, post-download, post-purchase, re-engagement, or follow-up sequence; wants to review an existing sequence; or needs a first-run email strategy. On a first run, establish the sender's private context and use `/personal-voice` before drafting. Never send, schedule, upload, or subscribe people.
---

# Email Sequences

Write emails that have a clear reason to arrive and a job the reader can
understand. The sequence belongs to a real relationship, offer, and audience.
Do not turn a sending calendar into proof of a strategy.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/email-sequence-profile-template.md` | Creating or updating the sender profile | Captures private business context, consent, sending constraints, and approved claims. |
| `references/sequence-map.md` | Planning before drafting | Maps the trigger, reader state, message jobs, cadence, and success signal. |
| `assets/email-sequence-handoff.md` | Delivering the sequence | Keeps the plan and all drafts in one Markdown file. |

## Find or create the private context

Use `/personal-voice` first. If the writer has no private voice profile, run its
first-use interview before drafting the sequence. The voice profile owns tone,
source fidelity, and anti-slop review.

Look for `email-sequence-profile.md` in the working directory or a
user-specified private location. Never write it into this public skill folder or
another shared repository.

If no profile exists, explain that the first run captures the offer, audience,
consent, approved claims, and sending constraints. Ask where it should live. If
the environment can write private files and the user has no preference, use
`~/.agent-skills/email-sequences/email-sequence-profile.md`. If file writing is
unavailable, return a copyable profile and use it only in the current
conversation.

## First run: understand the relationship

Ask the first round in one conversational message. Accept rough notes, live
pages, existing emails, product material, and incomplete answers. Ask for:

1. What they offer, who receives the emails, and what the sequence should help
   the reader do or understand.
2. The exact trigger and the reader's state at that moment: signup, product
   action, download, purchase, inquiry, inactivity, event, or another event.
3. What the reader has already seen, agreed to, received, bought, or tried.
4. The useful proof: real product behavior, approved customer evidence, source
   material, links, offers, caveats, and facts that may appear in the emails.
5. The desired next action, the available destination, and what success means.
6. Existing emails, brand rules, sender details, locale, and preferences for
   length, cadence, and directness.
7. Consent, unsubscribe, privacy, regulated-industry, deliverability, and
   platform constraints. Ask whether the audience is opted in.
8. What must stay out: unsupported claims, sensitive topics, discounts, hard
   sells, personal details, or particular tactics.

Read the material, then present a sequence map using
`references/sequence-map.md`. Give each proposed email one reader-centered job,
a reason for its timing, a proof source, and one next action. Ask the user to
approve or change the map before drafting a full sequence.

Save the approved context with
`references/email-sequence-profile-template.md`. Keep it private.

## Plan and draft a sequence

1. Read the voice profile and email-sequence profile. Confirm the requested
   trigger, audience, offer, destination, and proof are current.
2. Load `references/sequence-map.md` and draft or revise the map before writing
   the email bodies when the sequence shape is unclear.
3. Give every email one job. A welcome sequence can orient, help, prove, answer
   a likely question, or invite a relevant next step. It does not need a forced
   sales turn in every message.
4. Use only approved claims and real links. Mark missing proof, destinations,
   compliance text, or personalization data as a question instead of inventing
   it.
5. Draft a subject, preview text, body, CTA, and timing note for each email.
   Keep the subject specific and the CTA proportional to the relationship.
6. Run `/personal-voice`'s email reference and anti-slop review on the final
   copy. Preserve the sender's own rhythm and words.
7. Return one combined handoff based on `assets/email-sequence-handoff.md`.
   Do not create a separate Markdown file per email.

## Sequence rules

- Respect consent and describe the actual trigger. Do not invent urgency,
  familiarity, a recent action, or a personal detail.
- Make cadence match the reader's context. State why a follow-up arrives when it
  does. A quiet period can be the right choice.
- Keep each email focused on one useful point. Link to supporting material when
  it carries the proof better than the email body.
- Make the sender, company, offer, and next action clear. Avoid hiding the
  commercial purpose behind a false personal note.
- Include required unsubscribe and compliance language as a placeholder when
  the sender has not provided it. Do not claim legal compliance.
- Keep product, pricing, availability, customer, and performance claims tied to
  a supplied source. Never create social proof from a vague anecdote.
- Treat personalization fields as data dependencies. Show the fallback copy and
  flag what needs verification.

## Review an existing sequence

1. Compare each email with the current trigger, reader state, offer, proof, and
   sender profile.
2. Identify stale claims, repeated jobs, missing consent or unsubscribe details,
   unsupported urgency, broken links, and mismatched CTAs.
3. Preserve working copy where it still fits. Rewrite only the parts that no
   longer do the job.
4. Return the revised combined handoff and a concise list of material changes.

## Guardrails

- Never send, schedule, import contacts, change a sending tool, or publish a
  sequence without explicit instruction.
- Never add a person to a list, scrape email addresses, or create a sequence for
  an audience without a clear lawful relationship or consent basis.
- Never use fake replies, fake one-to-one sender language, invented scarcity,
  fabricated case studies, or fabricated product behavior.
- Never put a private sender profile, customer data, platform export, or contact
  list into this public skill folder or a shareable output.
- Never treat open rate or click rate as proof of reader value without the
  user's evidence and context.

## Keep the profile current

Update the private profile when an offer, audience, proof source, consent rule,
sender identity, platform, or writing preference changes. Record a short dated
note that says what changed and why.
