# Weekly metric contract

Use one record per channel per completed ISO week and one linked weekly review.
Keep `data status` as `Confirmed`, `Partial`, `Unavailable`, or `Inferred`.

## Shared fields

| Field | Meaning |
| --- | --- |
| Week | Monday-to-Sunday ISO week, for example `2026-W32` |
| Channel | Website, X, Reddit, Substack, GitHub, or another named channel |
| Audience end | End-of-week followers, subscribers, or other durable audience snapshot |
| Net audience growth | Current snapshot minus verified prior snapshot; leave blank otherwise |
| Content published | Original public items published in the week |
| Reach | Platform-defined impressions, visitors, or views; never add across channels |
| Meaningful engagement | Replies, comments, saves, shares, or another stated meaningful action |
| Owned conversion | Email captures, signups, qualified leads, or another owned action |
| Top content | Link or exact identifier plus its observed result |
| Learning | A testable observation, not an unexplained conclusion |
| Source and limitation | API, export, analytics view, URL, plus constraints |

## Channel definitions

| Channel | Prefer | Do not infer |
| --- | --- | --- |
| Website | visitors, sessions, conversion events, bounce/engagement, top landing pages | source attribution from a page-view total |
| X | end followers, original posts, impressions, likes, replies, reposts, link clicks where available | historical followers from a current account response |
| Reddit | original posts, score, comments received, comments made, score on comments | views, follower counts, or private analytics from the public API |
| Substack | posts sent from a public feed; subscriber, open, click, and paid metrics from a creator export | subscriber or open metrics from the public feed |
| GitHub | merged pull requests, releases, issues closed, and shipped artifacts | effort or business impact from commits alone |
| Linear | completed/cancelled work and the stated work outcome | product impact from issue status alone |

## Notion mapping

Map the shared fields to the user's existing database before writing. A useful
minimum is `Week`, `Channel`, `Audience end`, `Net audience growth`, `Content
published`, `Reach`, `Meaningful engagement`, `Owned conversion`, `Top content`,
`Learning`, `Source and limitation`, and `Data status`. Preserve their formulas
and views. Do not require every field to be populated.
