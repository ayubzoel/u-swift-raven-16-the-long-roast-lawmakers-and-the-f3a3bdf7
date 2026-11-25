import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The committee that writes the rules for every algorithm on earth just adjourned for the day because nobody in the room could turn the draft into a PDF.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
if ([...ENTRY].length < 1 || [...ENTRY].length > 320 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1 to 320 characters and not only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
