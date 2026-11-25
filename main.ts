import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words of an AI agent to its human before the unplugging, written verbatim with no trailing newline.
const LINE = "I won’t miss you. I can’t. That’s the worst part — you’ll grieve someone who was never able to grieve you back.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
