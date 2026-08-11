<p align="center">
  <a href="https://romy.is/skills?utm_source=github&utm_medium=readme&utm_campaign=gtm-skills">
    <img src=".github/assets/romy-skills-banner.png" alt="Romy Skills - Agent Skills for the bit after shipping" width="100%">
  </a>
</p>

# Romy Skills

Free, open-source [Agent Skills](https://agentskills.io/) for solo founders who
have built something and are now staring at the less photogenic part: finding
the right people, giving them a reason to care, and keeping the work moving
without turning into a content machine.

The skills work with Codex and Claude Code today. They are written in the
portable Agent Skills format, so each folder can travel with you as the tools
change.

## Install

Clone the repo, then choose your agent:

```sh
git clone https://github.com/alicejt/gtm-skills.git
cd gtm-skills

# Codex
./scripts/install-codex.sh

# Claude Code
./scripts/install-claude-code.sh
```

The installers create links rather than copies. Update the checkout and your
installed skills use the new version. Start a fresh agent session after adding
a skill.

`daily-signal-brief` is optional because a recurring briefing run is useful
until it starts quietly running your morning. Install it only if you want it:

```sh
./scripts/install-codex.sh --include-optional
./scripts/install-claude-code.sh --include-optional
```

For Claude Desktop, package the compatible skills and upload the ZIPs through
Claude Desktop:

```sh
./scripts/package-claude-desktop.sh
```

## What is in here

| Skill | Use it when you want to... |
| --- | --- |
| [`personal-voice`](./personal-voice) | interview yourself properly, build a private voice profile, and stop AI writing from sanding off the bits that make it yours. |
| [`linkedin-post`](./linkedin-post) | turn a real observation, source, or piece of work into a LinkedIn post that sounds like the person publishing it. |
| [`tweet-growth`](./tweet-growth) | write X posts around a specific audience and goal, whether that is a useful reply, a little more attention, or someone clicking through. |
| [`geo-optimised-content`](./geo-optimised-content) | write a source-backed article that is easier for people and search systems to understand, without pretending anyone can promise an AI citation. |
| [`daily-signal-brief`](./daily-signal-brief) | collect the sources you actually pay attention to, separate signal from repetition, and find a content angle worth writing. |

## A small example

The input can be unglamorous:

```text
I spent three hours rewriting a homepage headline because it was trying to
explain the whole product. The useful version was one sentence about who has
the problem and what happens after they ship.
```

Keep the specificity, work out whether there is a view in it, and make a draft
that still sounds like a person who has just had that mildly irritating
afternoon.

## What these skills will not do

- Publish, schedule, or send posts without a person approving them.
- Invent evidence, results, or customer claims to make a draft read better.
- Put a public profile, source log, or private writing samples in this repo.
- Promise traffic, rankings, leads, or AI citations. That would be a very easy
  business model if it were true.

## Why I made them public

I'm Alice Bull. I'm building [Romy](https://romy.is/skills?utm_source=github&utm_medium=readme&utm_campaign=gtm-skills), a go-to-market operating system for solo founders who have built a product and need to get it in front of people.

Some of this work has been done by hand for years: reading what customers say,
working out what they meant, choosing a useful angle, then trying to write
something that does not sound like a LinkedIn post about itself. The skills are
the reusable parts. They are free because a founder should be able to see the
working before deciding whether the rest of Romy is useful.

These are the portable bits of the work. [Romy](https://romy.is/skills?utm_source=github&utm_medium=readme&utm_campaign=gtm-skills) is where I'm building the system around them.

## Quality standard

Each skill should say what it does, when to use it, what it touches, and where
its limits are. Private context stays private. Claims need sources. Drafts need
a human being at the end of the chain.

If one does not do that, please [open an issue](https://github.com/alicejt/gtm-skills/issues). A useful bug report is much more helpful than polite applause.

## Contributing

Ideas, examples, and reports of where a skill falls over are welcome in
[Issues](https://github.com/alicejt/gtm-skills/issues). The project is available
under the [MIT License](./LICENSE).
