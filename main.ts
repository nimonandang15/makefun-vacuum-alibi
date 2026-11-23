// The Vacuum's Alibi — one line, 200 characters max.
// A robot vacuum's deadpan excuse for missing a spot.
// Writes the entry to /output/entry.txt (or ./output/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I did not miss the spot. My sensors classified it as load-bearing dust, and demolition is not on my schedule.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
