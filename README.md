# GTM Skills

Portable growth, content, and voice skills for Codex and Claude Code.

## Included skills

- `personal-voice` — builds a private voice profile and removes AI slop.
- `linkedin-post` — writes LinkedIn posts using Personal Voice.
- `tweet-growth` — writes goal-led X posts using Personal Voice.
- `geo-optimised-content` — produces evidence-led, GEO-optimised content.
- `daily-signal-brief` — collects and ranks source material for content.

The first four are installed by default. `daily-signal-brief` is optional, so
it never changes an existing scheduled briefing workflow without consent.

## Install

```sh
./scripts/install-codex.sh
./scripts/install-claude-code.sh
```

Each installer creates symlinks rather than copies. Edit the checkout and the
installed Codex or Claude Code skills immediately use that version. Use
`--include-optional` to install `daily-signal-brief`, or `--dry-run` to review
changes first.

Claude Desktop cloud skills are uploaded rather than linked. Create safe ZIP
packages after an update with:

```sh
./scripts/package-claude-desktop.sh
```

The packager excludes private profiles and run state. Upload or re-publish the
resulting ZIPs through Claude Desktop.

## Validate

```sh
./scripts/validate-skills.sh
```

Start a fresh agent session after installing a new skill so its discovery list
refreshes.
