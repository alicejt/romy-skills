<p align="center">
  <a href="https://romy.is?utm_source=github&utm_medium=readme&utm_campaign=romy-skills">
    <img src=".github/assets/romy-skills-banner.png" alt="Romy Skills - Agent Skills for the bit after shipping" width="100%">
  </a>
</p>


Romy Skills is an open-source collection of Agent Skills for solo founders doing
their own marketing: personal voice, LinkedIn, X, GEO-optimized content, and
daily research.

They're free, open-source [Agent Skills](https://agentskills.io/) for solo
founders who've built something and are now staring at the less photogenic part: finding
the right people, giving them a reason to care, and keeping the work moving
without turning into a content machine.

The skills work with Codex and Claude Code today. They're written in the
portable Agent Skills format, so each folder can travel with you as the tools
change.

## Install

Clone the repo, then choose your agent:

```sh
git clone https://github.com/alicejt/romy-skills.git
cd romy-skills

# Codex
./scripts/install-codex.sh

# Claude Code
./scripts/install-claude-code.sh
```

The installers create links rather than copies. Update the checkout and your
installed skills pick up the new version. Start a fresh agent session after you
add a skill.

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

## What's in here

| Skill | Use it when you want to... |
| --- | --- |
| [`personal-voice`](./personal-voice) | interview yourself properly, build a private voice profile, and guard against AI slop. |
| [`linkedin-post`](./linkedin-post) | turn a real observation, source, or piece of work into a LinkedIn post that sounds like the person publishing it (you). |
| [`tweet-growth`](./tweet-growth) | write X posts around a specific audience and goal, whether that's a useful reply, a little more attention, or someone clicking through. |
| [`geo-optimised-content`](./geo-optimised-content) | write a source-backed article that's easier for people and search systems to understand. |
| [`daily-signal-brief`](./daily-signal-brief) | collect the sources you actually pay attention to, separate signal from repetition, and find a content angle worth writing. |
| [`weekly-build-in-public`](./weekly-build-in-public) | turn a week of real work into a source-aware growth handoff and ready-to-review X and LinkedIn drafts. It never publishes anything. |

## A small example

The input can be unglamorous:

```text
I spent three hours rewriting a homepage headline because it was trying to
explain the whole product. The useful version was one sentence about who's
the problem and what happens after they ship.
```

Keep the specificity, work out whether there's a view in it, and make a draft
that still sounds like a person who's just had that mildly irritating
afternoon.

## What these skills won't do

- Publish, schedule, or send posts without a person approving them.
- Invent evidence, results, or customer claims to make a draft read better.
- Put a public profile, source log, or private writing samples in this repo.
- Promise traffic, rankings, leads, or AI citations. That'd be a very easy
  business model if it were true.

## Why I made them public

I'm Alice Bull. I'm building [Romy](https://romy.is?utm_source=github&utm_medium=readme&utm_campaign=romy-skills), a go-to-market operating system for solo founders who've built a product and need to get it in front of people.

I've done some of this work by hand for years: reading what customers say,
working out what they meant, choosing a useful angle, then trying to write
something that doesn't sound like a LinkedIn post about itself. They're the
reusable parts. They're free because founders should be able to see the working
before deciding whether the rest of Romy is useful.

They're the portable bits of the work. [Romy](https://romy.is?utm_source=github&utm_medium=readme&utm_campaign=romy-skills) is where I'm building the system around them.

## Quality standard

Each skill needs to say what it does, when to use it, what it touches, and where
its limits are. Private context stays private. Claims need sources. Drafts need
a human being at the end of the chain.

If a skill doesn't do that, please [open an issue](https://github.com/alicejt/romy-skills/issues). A useful bug report is much more helpful than polite applause.

## Contributing

I welcome ideas, examples, and reports of where a skill falls over in
[Issues](https://github.com/alicejt/romy-skills/issues). Everything's available
under the [MIT License](./LICENSE).
