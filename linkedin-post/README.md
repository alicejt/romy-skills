# LinkedIn Post Generator

This is an MIT-licensed LinkedIn post skill. It requires the separate
[Personal Voice](https://github.com/alicejt/personal-voice) skill and its
approved private voice profile before it drafts. It is based on the public
[tinctu-re/linkedin-post-skill](https://github.com/tinctu-re/linkedin-post-skill).

## What's in this folder

```
linkedin-post/
  SKILL.md               The skill definition and format reference
  README.md              This file
  PROFILE-TEMPLATE.md    Structure for the profile written on first run
  examples/              One worked example per format
```

## Install

Copy this whole folder into your agent's skills directory. `SKILL.md` must sit
one level inside `skills/`, alongside its `examples/` folder. Restart any
running agent session, then invoke:

```
/linkedin-post [your bullet points or rough idea]
```

## First run

Run `/personal-voice` first to create the shared writing profile. Then this
skill conducts a short LinkedIn strategy interview and saves its platform-only
preferences to `linkedin-profile.md`. Keep both profiles private; they are
ignored by their respective repositories.

## License

MIT. See [LICENSE](LICENSE).
