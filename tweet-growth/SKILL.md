---
name: tweet-growth
description: >
  Interview a user to build a private X growth profile, then draft, improve, plan,
  or review original X posts tailored to their goals, audience, voice, and source
  material. Use for posts, long posts, threads, quote-posts, replies, media-first
  copy, build-in-public updates, industry commentary, personal posts, and shitposts
  when the user wants meaningful engagement, qualified visits, leads, follows, or
  an account that feels recognizably theirs.
---

# Tweet Growth

Create X posts that serve a real goal without turning the account into a
content template. Use the user's actual voice, proof, interests, and boundaries
as the source of the strategy.

## Required shared voice profile

Always load `/personal-voice` and its approved `personal-voice-profile.md`
before drafting. That profile is the authority on the user's voice, vocabulary,
cadence, boundaries, and anti-slop preferences.

If `/personal-voice` is not installed, stop and ask the user to install it. If
the approved voice profile does not exist, invoke `/personal-voice` first; do
not infer a general voice or run a duplicate voice interview here.

## Reference map

| Reference | Read when | Purpose |
| --- | --- | --- |
| `references/profile-template.md` | Creating or updating a profile | Captures account context, goals, voice, content territory, proof, and boundaries. |
| `references/x-growth-2026.md` | Planning, choosing formats, measuring, or reviewing for distribution | Provides platform-agnostic growth, experimentation, and integrity guidance. |

## Find or create the X growth profile

Look for `tweet-growth-profile.md` in the working directory or a user-specified
private location. Never save it inside this public skill folder or another
repository that may be shared.

If the profile exists, read it after the Personal Voice profile. Update it when
the user says their account, offer, audience, or preferences have changed. This
profile owns X strategy, goals, distribution choices, and platform-specific
format preferences; the Personal Voice profile always wins on voice.

If no profile exists, do not draft yet. Explain that the first run creates a
private X growth profile, then conduct the interview below. Accept short answers
and skips. Save the approved result with `references/profile-template.md`; if a
file cannot be written, return a copyable profile and use it for this session.

## Conduct the profile interview

Ask the questions conversationally in one message, rather than one at a time.
Use the shared Personal Voice profile for voice. Do not infer a business or a
desired audience from a job title or a polished bio alone.

Ask for:

1. Their X handle, account type, public bio, and whether it is personal,
   company-led, anonymous, or shared.
2. What they want the account to achieve in the next three to six months: for
   example, conversation, visibility, qualified visits, leads, sales, hiring,
   community, credibility, or simply a more alive personal feed.
3. The one primary goal for the next post, plus any destination and desired
   visitor action when visits, leads, or sales matter.
4. Who they want to reach, what those people care about, and what the account
   can credibly say that is useful, interesting, or funny to them.
5. Two to five X posts or rough notes that show what works strategically for the
   account, including a post they like and one they dislike. Do not use these to
   override the shared voice profile.
6. Their durable content territory: work, products, interests, communities,
   obsessions, personal texture, and topics they do not want to be known for.
7. Available proof: product artefacts, customer evidence, numbers, stories,
   screenshots, images, experience, or opinions they can defend.
8. Their appetite for bluntness, humour, shitposting, controversy, personal
   disclosure, reply culture, long posts, threads, links, and calls to action.
9. Off-limits facts, people, clients, claims, jargon, words, political topics,
   legal or employer constraints, and safety concerns.
10. What success looks like and what they can measure: meaningful replies,
    profile visits, follows, clicks, conversions, leads, revenue, or another
    outcome. Do not require analytics access.

Summarise observable voice and strategy patterns, then show the proposed
profile for approval. Record uncertainty rather than inventing a rule.

## Establish the brief for each post

Infer from the request and profile. Ask one focused question only when a missing
answer would materially change the draft.

- **Primary goal:** choose one: `engagement`, `visits`, `leads`, `sales`,
  `follows`, `authority`, `community`, or `presence`. A post can help several,
  but it should be designed around one.
- **Source:** use a real observation, build update, customer evidence, product
  artefact, personal moment, image, article, or live conversation. Never
  manufacture a fact, result, or point of view.
- **Audience and context:** establish whether this is an original post, reply,
  quote-post, thread, or timely response. Verify claims about live events before
  using them.
- **Destination:** for visits, leads, or sales, capture the exact page or action
  and what a visitor should understand or do next.

## Choose a content lane

Use the supplied source and the profile, not a generic content calendar.

| Lane | What it does |
| --- | --- |
| Personal or founder observation | Gives a sharp first-person take on the work, industry, culture, or social rituals around the user's world. |
| Proof or build in public | Shows a product behaviour, artefact, before/after, trade-off, failure, number, or changing mind. Numbers are receipts, not victory laps. |
| Useful distinction | Names a defensible distinction that the audience can reuse or disagree with. |
| Industry commentary | Adds evidence, a counterexample, an implementation detail, or a useful reframing to a live or enduring conversation. |
| Timely reply or quote | Joins the right conversation because the addition itself has value, not because the original account is large. |
| Shitpost | Notices something stupid, absurd, or quietly infuriating. It may be merely funny; do not retrofit a lesson or sales pitch into the punchline. |
| Account texture | Shares a personal interest, photo, culture, hobby, or small update because people follow people. Do not force a professional lesson onto it. |

## Select the format

Use the account's actual post-length capability and the user's preference. Treat
a short post as one format, not as the default maximum.

- **Short post:** one joke, reaction, observation, or turn completes the idea.
- **Connected post:** two to four sentences give an opinion, joke, or self-own
  the context it needs.
- **Long post:** use when a story, nuance, evidence, or uncertainty earns the
  reader's attention. Cut repetition before cutting proof or voice.
- **Thread:** use only when each post has a distinct useful claim, example, or
  proof. Do not create one merely because the topic feels important.
- **Image or video:** use when proof is visual, demonstrable, or clearer than
  prose. Make the first frame useful.
- **Reply or quote-post:** use when the addition is the value.
- **Shitpost:** preserve the funniest complete version, whether one line or
  three. Do not explain it.

## Draft for the goal

### Engagement, follows, authority, or community

Give readers a reason to consume, reply, quote, repost, or investigate the
profile: a specific claim, concrete scene, unusual phrase, useful distinction,
visual proof, or dry joke. Do not ask for likes, reposts, follows, bookmarks,
or generic takes.

Use a real point of view rather than a neat framework. A question may stay when
it completes the idea or joke; never use it as disguised engagement bait.

### Presence

Write the post the user would enjoy putting on their own feed. It may build
familiarity, warmth, or comic recognition without teaching, selling, or creating
a next action. Voice and originality are the review criteria.

### Visits, leads, or sales

Make the post independently worthwhile, then connect it to the exact destination
with a plain reason to go there. When link placement is not obvious, return two
labelled variants: link in the main post, and link in the first reply. Treat the
choice as an account-specific experiment, not a universal reach rule. Do not
write an empty teaser merely to force a click.

## Apply the growth review

Run the user's voice review first. Growth mechanics can select among drafts that
already sound right; they cannot flatten them into slogans, manufactured hooks,
or tidy lessons.

Check source fidelity before judging growth potential:

- Keep the strongest concrete noun, phrase, image, reaction, or proof supplied.
- Preserve emotional temperature. Do not turn anger, delight, panic, or comic
  melodrama into calm professional irony.
- Add context only when it improves comprehension, comic timing, or the point
  of view.

Use `references/x-growth-2026.md` as a diagnostic, not a writing template. A
presence post or shitpost does not need to satisfy every item. Review viewer fit,
immediate payoff, redistribution motive, natural next action, and legitimacy.

## Return the work

Unless the user asks for one final post, return:

1. The goal and lane in one short line.
2. Three to five materially different post options. Vary the framing, length, or
   emotional register; do not return minor rewrites.
3. For visits, leads, or sales, the destination and link-placement rationale.
4. For a thread, a standalone opening plus a concise post-by-post outline.
5. A brief first-hour follow-through note only when useful: substantive replies
   to answer, a relevant conversation to join, or a product artefact to attach.

Do not publish, schedule, send, or automate posts without explicit instruction.

## Guardrails

- Do not claim secret fixed algorithm weights, a guaranteed link penalty, or a
  universal best posting time.
- Do not copy another creator's wording, manufacture proof, overstate a claim,
  or use unrelated business metrics as evidence of product success.
- Do not use rage bait, pile-ons, personal attacks, engagement bait, generic
  reply-guy comments, automation, duplicated posts, or coordinated/fake
  engagement.
- Criticise models, norms, or ideas rather than directing attention at a person.
  For contested factual claims, use evidence and include the best counterargument
  when it helps the reader assess the claim.
- Do not turn every post into a pitch. Let the user's product, service, or work
  appear through the proof, language, and judgment it has earned.
