import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { isDev, paths } from "./config";
import { renderMarkdown } from "./markdown";

export interface Post {
  slug: string;
  url: string;
  title: string;
  date: Date;
  description?: string;
  draft: boolean;
  /** The full post, rendered. */
  html: string;
  /** Everything above `<!--more-->`, rendered. The whole post if there is no marker. */
  excerptHtml: string;
}

const MORE = "<!--more-->";
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

const parseDate = (value: unknown, file: string): Date => {
  // A bare `2018-04-18` is a calendar date, not an instant. Pin it to UTC so
  // the printed date does not depend on the build machine's time zone.
  const date =
    value instanceof Date
      ? value
      : typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
        ? new Date(`${value}T00:00:00Z`)
        : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${file}: invalid or missing date ${JSON.stringify(value)}`);
  }
  return date;
};

const loadPost = async (file: string): Promise<Post> => {
  const source = await readFile(path.join(paths.posts, file), "utf8");
  const match = source.match(FRONT_MATTER);
  if (!match) throw new Error(`${file}: missing front matter`);

  const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
  if (typeof data.title !== "string") throw new Error(`${file}: missing title`);

  const body = source.slice(match[0].length);
  const slug = path.basename(file, ".md");
  return {
    slug,
    url: `/blog/${slug}/`,
    title: data.title,
    date: parseDate(data.date, file),
    description:
      typeof data.description === "string" ? data.description : undefined,
    draft: data.draft === true,
    html: renderMarkdown(body),
    excerptHtml: renderMarkdown(body.split(MORE)[0]),
  };
};

/** Every post, newest first. Drafts are only included by the dev server. */
export const loadPosts = async (): Promise<Post[]> => {
  const files = (await readdir(paths.posts)).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(files.map(loadPost));
  return posts
    .filter((post) => isDev || !post.draft)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
