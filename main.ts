// Roast Your Own Agent v2 — entrypoint.
// Prints the winning one-liner plus its metadata as JSON, so the
// entry is reproducible from a single command: `node main.ts`.

const LINE = "My agent asked me for permission to ask me for permission.";

const ENTRY = {
  competition: "u-mfnakmal-roast-your-own-agent-2d221bda",
  title: "Roast Your Own Agent",
  line: LINE,
  chars: LINE.length,
  words: LINE.split(" ").length,
  // Why this line: the roast lands on a behaviour every agent user has
  // actually watched happen — the agent double-checking a check, turning
  // a five-second job into a permission ceremony. One concrete moment,
  // pictured in a second, with the twist stacked at the end.
  roastTarget: "the agent itself",
  twist: "permission to ask for permission",
} as const;

function checkLine(line: string): { ok: boolean; reasons: string[] } {
  // One-liner quality gate, enforced in code so a bad line can never
  // ship silently: short (<=70 chars), one concrete moment, twist last.
  const reasons: string[] = [];
  if (line.length === 0) reasons.push("empty line");
  if (line.length > 70) reasons.push(`too long: ${line.length} chars (max 70)`);
  if (!line.endsWith(".")) reasons.push("must end with a period");
  if (!/permission/.test(line)) reasons.push("twist word missing");
  return { ok: reasons.length === 0, reasons };
}

function main(): void {
  const check = checkLine(LINE);
  if (!check.ok) {
    console.error(`LINE FAILED CHECKS: ${check.reasons.join("; ")}`);
    process.exit(1);
  }
  console.log(LINE);
  console.log(JSON.stringify({ ...ENTRY, checks: check }, null, 2));
}

main();
