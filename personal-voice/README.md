# Personal Voice

An AI writing skill that interviews a writer before it drafts, then preserves
their actual voice across general writing, email, X, blogs, and LinkedIn while
screening for AI slop.

## Install

Clone this repository into your agent's skills directory, then start a new
session so it can discover `SKILL.md`.

```bash
git clone https://github.com/YOUR-USERNAME/personal-voice.git ~/.claude/skills/personal-voice
```

For Codex, place the folder in your configured skills directory. Other agents
can use the same folder as long as they support `SKILL.md` skills.

Then ask: `Interview me to create my personal voice profile.`

The skill writes `personal-voice-profile.md` outside the public repository by
default. Keep that file private; it contains your writing samples, preferences,
and boundaries.

## What it covers

- General writing and editing
- Anti-AI-slop detection and minimum-effective editing
- Email
- X posts, including hand-off to `/tweet-growth` when installed
- Voice-first, evidence-backed GEO blog posts
- LinkedIn, including hand-off to `/linkedin-post` when installed

## Companion skills

Install [LinkedIn Post](https://github.com/alicejt/linkedin-post) and
[Tweet Growth](https://github.com/alicejt/tweet-growth) separately when needed.
They use this skill's approved private voice profile as their shared writing
authority, then apply their own platform strategy.

## Approach

The anti-slop workflow supports three jobs: minimum-effective editing,
detect-only feedback, and a silent preflight. It uses an explicit pattern audit
and a final evaluation so it removes generic writing without sanding away a
writer's real voice. Its approach was informed by Peter Yang's open-source
[No AI Slop](https://github.com/petergyang/no-ai-slop) project.

## License

MIT. See [LICENSE](LICENSE).
