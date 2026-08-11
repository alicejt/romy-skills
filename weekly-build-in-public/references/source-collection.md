# Source collection

Collect read-only and state the exact range. Prefer the platform's official API,
then a user-provided export, then public data. Do not scrape behind login or
automate browser actions where an official source is available.

## Source matrix

| Source | Preferred access | Weekly evidence | Limitation |
| --- | --- | --- | --- |
| GitHub | `gh` CLI or `GITHUB_TOKEN` | merged PRs, releases, notable issue work | commits do not prove value |
| Notion | connected Notion workspace or `NOTION_TOKEN` | published pages, decisions, database updates | obey workspace permissions |
| Agent chats | user-selected local export or folder | work completed, decisions, blockers | redact private/user content |
| PostHog | personal API key and project ID | aggregate visitors, sessions, conversions, key events | no personal-level reporting |
| Linear | personal API key and team ID | completed work and linked outcomes | completion is not impact |
| X | bearer token plus handle/user ID | original posts, public engagement, available analytics | flag auth failure; do not publish |
| Reddit | OAuth client credentials and username | posts, score, comments received/made | no public post-view or history metrics |
| Substack | public publication URL or creator export | publication cadence; creator metrics from export | public feed has no subscriber analytics |
| Website/CMS | analytics or CMS read access | traffic/conversions and editorial change log | name the project/dataset |

## Environment variable names

Use only the variables required by enabled sources. Store them in
`~/.build-in-public/.env.local`, never version control.

```text
GITHUB_TOKEN=
NOTION_TOKEN=
POSTHOG_PERSONAL_API_KEY=
POSTHOG_PROJECT_ID=
LINEAR_API_KEY=
LINEAR_TEAM_ID=
TWITTER_BEARER_TOKEN=
TWITTER_USER_ID=
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
REDDIT_USERNAME=
REDDIT_PASSWORD=
REDDIT_USER_AGENT=
SUBSTACK_PUBLICATION_URL=
```

`REDDIT_USERNAME` and `REDDIT_PASSWORD` are only needed for user-scoped Reddit
data. Public collection may use client credentials and a descriptive user agent.

## Failure handling

Mark a source unavailable when its credentials are absent, blank, masked,
unauthorized, expired, or the query fails. State the specific source and reason
in the handoff, suggest the smallest next action, and continue with the other
sources. Never echo credentials or authorization headers.
