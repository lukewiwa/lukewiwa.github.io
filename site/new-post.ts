/**
 * Scaffolds a draft post: npm run new-post -- "My Post Title"
 *
 * Drafts show in the dev server but are left out of the published site until
 * the `draft: true` line is removed.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { paths } from "./config";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new-post -- "My Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "_")
  .replace(/^_|_$/g, "");
const file = path.join(paths.posts, `${slug}.md`);
const date = new Date().toISOString().slice(0, 10);

await writeFile(
  file,
  `---
title: ${JSON.stringify(title)}
date: ${date}
draft: true
---

Opening paragraph, shown on the blog index.

<!--more-->

The rest of the post.
`,
  { flag: "wx" },
);
console.log(`Created ${file}`);
