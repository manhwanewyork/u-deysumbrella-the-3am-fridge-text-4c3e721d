import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
// The fridge has a small voice, an opinion, and no shame about sharing
// it in the middle of the night. The angle is fresh: not milk, not ice,
// not a door left open — the leftovers have unionised overnight, and the
// fridge has picked a side. Short enough to read on a lock screen, with
// the punch in the last few words: "I'm with them."
// Note: the fridge takes a side instead of reporting a fact — an opinion
// at 3am is funnier than a status update.
// Length check: 79 of 140 characters — lock-screen short, complete
// without a follow-up.
const entryText =
  "It's 3am. The leftovers formed a union overnight — and honestly, I'm with them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");
