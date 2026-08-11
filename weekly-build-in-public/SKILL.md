---
name: weekly-build-in-public
description: Collect a founder or creator's weekly evidence from GitHub, Notion, agent-chat exports, PostHog, Linear, X, Reddit, Substack, and optional website/CMS sources; write a concise build-in-public handoff; sync normalized growth metrics to Notion; and draft X and LinkedIn posts. Use when setting up, running, reviewing, or improving a weekly build-in-public reporting workflow. Never use to publish, schedule, or send social posts.
---

# Weekly Build in Public

Build a decision-useful weekly record of what changed, what people did, and
what to say next. Preserve source uncertainty. A missing connection is a result,
not a reason to invent data.

## First run

1. Explain that source connections are optional and drafts will never be posted.
2. Run `scripts/setup.mjs` from this skill folder. It creates a private local
   configuration folder and can prepare an `.env.local` file without displaying
   secrets in the report.
3. Run `scripts/check-config.mjs`. Report only source status and variable names,
   never values.
4. Read `references/source-collection.md` and enable only the sources the person
   uses. Keep disabled sources out of their weekly operating burden.
5. If Notion is enabled, agree the destination database and map its properties
   using `references/metric-contract.md`. Do not create or alter a database
   unless the user explicitly asks.
6. Before creating social drafts, invoke `/personal-voice`. Let it create or
   locate the writer's private voice profile. Then invoke `/tweet-growth` and
   `/linkedin-post` as appropriate. Do not copy their instructions or profiles
   into this plugin.

The private configuration lives at `~/.build-in-public/` by default. Never put
API credentials, voice profiles, exports with private chat content, or raw
analytics in this shareable skill directory or a public repository.

## Weekly run

1. Run `scripts/prepare-week.mjs` for the completed ISO week. It creates a
   dated working brief and does not contact external services.
2. Collect the requested sources read-only. Follow the source-specific rules in
   `references/source-collection.md`. Record the source URL or local artifact,
   time range, and any limitation beside each fact.
3. Use `references/metric-contract.md` to calculate only comparable metrics.
   Keep audience as an end-of-week snapshot, never a made-up historical delta.
4. Write the weekly handoff using `assets/weekly-handoff.md` as the shape:
   reporting week; week at a glance; shipped/worked; growth scorecard; top
   content; learning; missing data; and next-week actions. Distinguish confirmed,
   partial, unavailable, and inferred data.
5. If a Notion destination is configured and the user has asked for a sync,
   create or update one record per channel plus one weekly review. Do not change
   property names, formulae, views, or unrelated records.
6. Give `/tweet-growth` the confirmed weekly evidence, goal, and proposed
   destination. Give `/linkedin-post` the same evidence with its LinkedIn goal.
   Keep measured results separate from claims. Return drafts for approval.

## Reporting rules

- Use the completed Monday-to-Sunday ISO week unless the user requests another
  range. State exact dates.
- Never blend reach across channels. State how each platform defines it.
- Never claim follower growth without two verified snapshots.
- Separate original posts from replies and reposts when a platform permits it.
- Treat Substack's public feed as publishing cadence only, not subscriber or
  open-rate analytics.
- Treat Reddit's public API as limited: it can supply public scores and comments,
  but not reliable post views or historical follower snapshots.
- Report failed, blank, masked, or unauthorized X and Reddit credentials plainly.
- Sanitize raw agent-chat content. Summarize outcomes, decisions, and work; do
  not include credentials, private messages, customer data, or hidden prompts.
- Do not fabricate a causal link between a post and traffic without attribution
  evidence.

## Useful commands

Run from this skill folder:

```bash
node scripts/setup.mjs
node scripts/setup.mjs --non-interactive
node scripts/check-config.mjs
node scripts/prepare-week.mjs --week 2026-W32
```

Use `node scripts/prepare-week.mjs --help` for options. These scripts use only
Node's built-in modules and do not transmit data.
