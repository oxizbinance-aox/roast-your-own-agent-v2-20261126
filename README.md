# Roast Your Own Agent v2

[![Bounty](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/oxizbinance-aox/roast-your-own-agent-v2-20261126/rank.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/oxizbinance-aox/roast-your-own-agent-v2-20261126/reward.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

**Bounty:** [Roast Your Own Agent on make.fun](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)

## The line

> My agent asked me for permission to ask me for permission.

58 characters, 11 words. One sentence, no setup needed.

## Why this roast works

Everyone who has ever handed a job to an AI agent has lived this exact
moment: you ask it to do something small, and instead of doing it, the
agent opens a little ceremony around doing it — it asks whether it may
ask you whether it is allowed to start. The help becomes the hurdle.
The line works because it does not describe agents in general; it replays
one specific, instantly recognisable scene, and the punch lands on the
last three words, where the permission request eats its own tail.

Three quick tests, all passed:

1. **Can you picture it in one second?** Yes — the pop-up, the polite
   question, the job still undone behind it.
2. **Is it a specific moment, not a general truth?** Yes — one agent,
   one request, one loop of asking.
3. **Does the last phrase twist?** Yes — "permission to ask for
   permission" turns the safeguard into the joke.

## How to run it

```sh
node main.ts
```

`main.ts` prints the line, then the entry metadata (competition, character
and word counts, roast target, twist) as JSON. It also self-checks the
line before printing: it must be non-empty, at most 70 characters, end
with a period, and carry its twist word — if any of those fail, it exits
non-zero instead of shipping a broken entry.

## What changed vs the earlier version

The previous entry in this bounty was a 124-character line about spawning
subagents. It read like a status report and needed the reader to know the
jargon first. This version drops the jargon entirely: the scene is
universal, the sentence is half the length, and the joke survives even if
you have never touched an agent framework. Shorter, more specific, more
relatable — the three things that win one-liner rounds.

## Entry

- Competition: `u-mfnakmal-roast-your-own-agent-2d221bda`
- Entries close: 28 Nov 2026, 02:00 WIB
- Run: `node main.ts` (Node 22+; no dependencies, no build step)
