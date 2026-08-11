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
| [`image-art-direction`](./image-art-direction) | set a private visual direction, then create prompts and images where the agent has an image tool. |
| [`brand-visual-system`](./brand-visual-system) | turn visual references and practical constraints into a private, usable brand system. |
| [`email-sequences`](./email-sequences) | plan and draft a private email sequence around a real audience, trigger, offer, and proof. |

## A small example

The input can be unglamorous:

```text
I want to write a blog post about that stat I read somewhere, can't remember where, that SaaS spend is increasing yet number of tools used within a company is decreasing. I want to write a blog post about why that gives SaaS builders a good opportunity to create vertical tools in 2026 - the spend is growing yet narrowing.
```

The skills will keep the specificity, find out what you meant, work out whether there's a view in it, and make a draft that sounds like you - but a non-confused version.

## What these skills won't do

- Publish, schedule, or send posts without a person approving them.
- Invent evidence, results, or customer claims to make a draft read better.
- Put a public profile, source log, or private writing samples in this repo.
- Promise traffic, rankings, leads, or AI citations. That'd be a very easy
  business model if it were true.

## Why I made them public

I'm Alice, and I'm building [Romy](https://romy.is/?utm_source=github&utm_medium=readme&utm_campaign=romy-skills), a go-to-market operating system for solo founders who've built a product and need to get it in front of people.

I've done this work by hand for 20 years - taking a product or a brand and growing it online - and Romy is the platform that does all this work for you. These Skills are the portable and reusable parts, which I've made free because founders should be able to grow their businesses without a deep understanding of marketing.

## Quality standard

Each skill says what it does, when to use it, what it touches, and where
its limits are. Private context stays private. Claims need sources. Drafts need
a human being at the end of the chain.

If a skill doesn't do that, please [open an issue](https://github.com/alicejt/romy-skills/issues). A useful bug report is much more helpful than polite applause.

## Contributing

I welcome ideas, examples, and reports of where a skill falls over in
[Issues](https://github.com/alicejt/romy-skills/issues). Everything's available
under the [MIT License](./LICENSE).
