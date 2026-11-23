import { mkdirSync, writeFileSync } from "node:fs";

// One line, written verbatim: the line is the whole entry.
const line =
  "The rain that fell on your roof last night is already somebody else's river, and the river is already somebody else's sea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
