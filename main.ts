// ai-excited-01 entry: place our image where the judge looks for it.
// The bounty grades the single image at $MAKEFUN_OUTPUT_DIR/entry.png.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

await mkdir(outDir, { recursive: true });
await copyFile(source, target);
console.log(`wrote ${target}`);
