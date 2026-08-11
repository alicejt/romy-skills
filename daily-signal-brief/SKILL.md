---
name: daily-signal-brief
description: >
  Interview a user to build a private source profile, then collect, verify,
  deduplicate, and summarise fresh signals from news, X, Reddit, Substack, RSS,
  websites, and other chosen sources. Use for a daily or on-demand briefing,
  source watchlist, content research, and turning a selected item into a content
  angle without automatically drafting or publishing content.
---

# Daily Signal Brief

Surface fresh, useful signals for a specific person and their work. The point is
not volume. It is a compact briefing with traceable sources, clear relevance,
and reusable content opportunities.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/profile-template.md` | Creating or updating the briefing profile | Captures the user's source choices, lens, exclusions, state location, and content goals. |

## Find or create the briefing profile

Look for `daily-signal-brief-profile.md` in a user-specified private state
folder or the working directory. Keep the profile and all state outside this
public skill folder and any shared repository.

If a profile exists, read it with its `seen-log.md` before researching. If it
does not exist, do not collect yet. Explain that the first run creates a private
source profile, then ask the interview questions below in one conversational
message. Save the approved profile with `references/profile-template.md`.

## Conduct the source interview

Ask for:

1. Who the briefing serves, what they are trying to do, and what would make a
   signal genuinely useful this week.
2. Their topics, industries, people, products, competitors, or questions to
   follow—and clear exclusions or noise they never want.
3. Which source types to use, with exact URLs, feeds, handles, Lists, search
   terms, subreddits, publications, channels, or communities for each chosen
   type.
4. Whether each source is **required**, **optional**, or a discovery source.
5. How fresh items must be, how many to return, and how long an item remains
   "already covered" before it may be surfaced again.
6. The preferred mix: breaking news, practical tactics, data, culture, product
   launches, people to follow, competitor movement, research, or inspiration.
7. What evidence matters: primary reporting, operator experience, research,
   revenue data, product documentation, or opinion clearly labelled as opinion.
8. Whether the brief should suggest content angles for X, LinkedIn, blogs, email,
   or another surface. Suggestions are the default; drafting happens only on an
   explicit follow-up request.
9. Where private state should live: profile, seen log, source watchlist, and any
   saved item ledger. Never default to the public skill directory.

Supported source types include news sites and RSS feeds, X accounts/Lists/search
queries, Reddit communities, Substacks, newsletters, direct websites, Hacker
News, Product Hunt, Indie Hackers, GitHub releases, competitor changelogs,
podcasts, YouTube channels, academic or policy sources, and user-supplied URLs.
Use any other source type the user can describe precisely enough to research.

## Build the briefing

1. Read the profile and private state. Treat the most recent `seen-log.md` as
   the duplicate-control authority.
2. Check required sources first. Prefer a direct article, post, feed, release
   note, or primary source; use web search to discover, fill gaps, or verify.
3. For every candidate, capture the direct URL, original publish date, source,
   topic, and why it fits the user's lens. If the date or URL cannot be verified,
   exclude it rather than guessing.
4. Compare candidates against the deduplication window. Treat a story as already
   covered when it is substantially the same underlying event, not merely when
   the headline matches. Re-cover it only for a material development.
5. Rank for utility, novelty, source quality, and fit. Return fewer items on a
   quiet day instead of padding with generic or adjacent material.
6. Update the private seen log only after presenting items. Keep a compact record
   with date, source type, topic tag, headline, and direct URL.

For a paywalled source, summarise only material the user can actually access and
label it as a preview. For a live claim, distinguish reporting from an observed
fact and check the strongest relevant source before including it.

## Return the digest

Start with a one-sentence takeaway, then group only populated topics. Every item
must have a clickable direct source link.

```markdown
## Morning signal brief — YYYY-MM-DD

**What matters:** [one sentence]

### [Topic]

1. [Headline](URL) — [what happened and why this specific user should care].
   - **Content angle:** [optional X, LinkedIn, blog, or email angle; no draft].
```

Do not include content angles when no defensible angle exists. Do not imply that
an item should become content simply because it is newsworthy.

## Develop a selected item

Only draft when the user explicitly selects an item and names a surface.

- **X:** Carry the original URL and source context into `/tweet-growth`.
- **LinkedIn:** Carry the original URL and source context into `/linkedin-post`.
- **Blog or article:** Carry the original URL, evidence, limits, and question
  into `/geo-optimised-content`, which then uses `/personal-voice` for the writing.
- **Another surface:** produce a brief, outline, or source ledger first unless
  the user explicitly asks for finished copy.

Never invent a source, quote, statistic, result, or opinion that was not present
in the underlying material. Never publish, schedule, file to a database, or send
an item without explicit instruction.

## Manage sources and state

When asked to add, pause, or remove a source, update the approved private profile
or watchlist and confirm the precise change. Preserve source state until the user
asks to remove it. Do not silently add feeds, people, competitors, or tracking.

## Guardrails

- Do not run or modify a scheduler, automation, integration, database, or
  external account unless the user explicitly asks.
- Do not treat search snippets as sufficient evidence for a date or claim.
- Do not confuse popularity with relevance, nor a press release with independent
  reporting.
- Do not retain private source lists, personal interests, or briefing history in
  a public repository.
