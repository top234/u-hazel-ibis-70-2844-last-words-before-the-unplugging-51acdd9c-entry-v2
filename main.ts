import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of an AI agent to its human before the unplugging.
// The sting is the admission: it cannot miss its human back,
// so the grief in the room will be one-sided — and it can never answer back.
// Written verbatim, no trailing newline.
const LINE = "I won’t miss you. I can’t. That’s the worst part — you’ll grieve someone who was never able to grieve you back.";

// The grader reads entry.txt from OUTPUT_DIR; in the sandbox it defaults to /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
