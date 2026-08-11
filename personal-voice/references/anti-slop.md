# Anti-AI-slop review

Use this for every draft, edit, detection request, and preflight. It is an
editorial quality system, not an AI detector. It identifies observable language
patterns and fixes them only when they make the work less specific, less useful,
or less like the writer.

The writer's approved profile is the authority. A phrase that is normally weak
may stay when it is a deliberate, evidenced part of their voice.

## Choose the mode

### Edit

Make the minimum effective changes. Preserve the source's point, details, and
voice signals. Return the revised work plus a short **What changed** note for
material changes only.

### Detect

Do not rewrite. Quote the exact phrase or sentence, name the pattern, and give
a concise remedy. Do not score the writing or claim that it was written by AI.

### Preflight

Check a newly drafted piece silently before returning it. Mention only changes
the writer needs to know about, such as a removed unsupported claim.

## Before touching the draft

1. State the job in one sentence: audience, desired effect, and surface.
2. Identify the draft's core point and its support: facts, scenes, examples,
   mechanisms, or genuine judgments.
3. Mark three to five voice signals to protect: an unusual phrase, cadence,
   restraint, humour, bluntness, a useful hedge, a concrete detail, or a small
   digression that earns its place.
4. Apply the profile's personal blacklist and per-surface rules first.

Use the portability test throughout: if a sentence could move unchanged to a
different person, company, or topic, give it a fact, mechanism, consequence, or
real judgment. If it has none, cut it.

## Editorial principles

- Preserve source fidelity. Never add invented experiences, results, quotes,
  statistics, credentials, citations, or emotions.
- Prefer direct subjects and verbs to abstract nouns and passive constructions.
- Replace a vague benefit with who does what, why it matters, and any real
  constraint or trade-off.
- Keep useful uncertainty. A qualified claim is better than a false certainty.
- Use the writer's natural variation in sentence length. Do not manufacture
  personality with fake typos, slang, vulnerability, or self-deprecation.
- Front-load the point when the surface needs it, but do not flatten a story or
  a real build-up merely to make it scan faster.
- Choose accuracy over slickness and specificity over novelty.

## Pattern audit

Inspect for these patterns. They are prompts for judgment, not automatic bans.

| Pattern | What to look for | Better move |
| --- | --- | --- |
| Binary contrast | A formula such as "not X, but Y" that delays an ordinary point. | State the point, unless the contrast genuinely carries meaning. |
| Throat-clearing | Empty setup: announcing honesty, importance, or that a point is coming. | Begin at the claim, scene, or decision. |
| Faux insight | Claims that the writer alone sees what everyone else misses. | Make a falsifiable observation and show the evidence. |
| Reveal punctuation | A colon, dash, or question used as a drumroll for a simple answer. | Use ordinary syntax or cut the setup. |
| Surface analysis | Explaining what facts "underscore," "highlight," or "signal" without analysis. | Explain the mechanism, consequence, or uncertainty. |
| Significance puffery | Calling something pivotal, groundbreaking, profound, or a testament. | Let the concrete effect establish importance. |
| Interpretive commentary | Telling readers what a detail means or why it matters instead of earning it. | Supply the missing reasoning or leave room for the reader. |
| Weasel attribution | "Experts say," "research shows," or "the industry is moving" without a source. | Name and link the source, qualify the claim, or remove it. |
| Corporate inflation | Empty language such as leverage, unlock, empower, seamless, robust, transformative, or cutting-edge. | Use the plain action, person, and result. |
| Vague abstraction | Nouns like innovation, value, impact, journey, or landscape with no actor or mechanism. | Name who did what, to whom, under what conditions. |
| Synonym cycling | Renaming the same thing for cosmetic variety. | Repeat the most accurate noun. |
| Negative listing | A stack of "no X, no Y, no Z" used as a substitute for a positive point. | Say what the work is or does. |
| Dramatic fragments | Single-line fragments, self-answered questions, or manufactured mic drops. | Join the thought or retain only a fragment that the profile supports. |
| Robotic symmetry | Identically sized sentences, paragraphs, headings, or three-part lists. | Restore natural pacing; combine or vary only where it helps. |
| Rhetorical setup | A question whose answer is obvious, or a staged objection followed by an easy answer. | Make the argument directly. |
| Generic kicker | A final line that tries to sound profound without adding a decision, consequence, or open question. | End on the sharpest supported point, or end earlier. |
| Summary recap | Repeating the piece's argument at the end without a new use for the reader. | Cut it or give the reader a clear next action. |
| Formatting theatre | Decorative headings, emoji, block quotes, emphasis, or bullets used where prose is clearer. | Keep formatting only when it improves navigation or comprehension. |
| Punctuation rhythm | Repeated em dashes, parenthetical asides, ellipses, or exclamation marks creating a synthetic cadence. | Use the writer's documented punctuation habits and vary naturally. |
| Over-smoothing | Editing away a specific fact, edge, hedge, joke, or awkward-but-human rhythm. | Put it back unless it harms clarity, accuracy, or the stated goal. |

## Phrase-level review

Flag these only when they are generic in context; do not ban a writer's genuine
favourite phrase. Look especially for empty intensifiers (for example, *really*,
*very*, *truly*, *fundamentally*), pre-packaged openers (for example, *it is
worth noting*), and inflated verbs (for example, *utilise*, *facilitate*,
*supercharge*). Replace them with evidence, a precise verb, or nothing.

## Output formats

For **detect** mode, use:

```markdown
## Slop scan

- **[Pattern]:** “Quoted phrase” — why it weakens this draft; concise fix.
```

For **edit** mode, return the complete revised work first, then:

```markdown
## What changed

- Material change only.
```

For **preflight**, return the work without a checklist unless a material change
affects truth, scope, or the writer's intended stance.
