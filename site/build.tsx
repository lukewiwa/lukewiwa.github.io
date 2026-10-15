/**
 * Builds the whole site into dist/.
 *
 *   public/       copied as-is
 *   styles.css    Tailwind, fingerprinted into dist/assets/
 *   client/*.ts   browser entries, bundled by esbuild into dist/assets/
 *   pages, posts  rendered to static HTML with React
 *
 * Anything under dist/assets/ has a content hash in its name and is uploaded
 * with a year-long cache; everything else is revalidated on every request.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as esbuild from "esbuild";
import { assets } from "./assets";
import { absoluteUrl, paths } from "./config";
import { loadPosts } from "./content";
import { atomFeed, jsonFeed, rssFeed, sitemap } from "./feeds";
import { BlogIndex, BlogPost } from "./pages/blog";
import { CodeOfPoints } from "./pages/code-of-points";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Projects, TwitterBot } from "./pages/projects";

const out = paths.out;
const assetDir = path.join(out, "assets");

const write = async (urlPath: string, contents: string) => {
  // "/blog/" -> dist/blog/index.html, "/404.html" -> dist/404.html
  const file = urlPath.endsWith("/")
    ? path.join(out, urlPath, "index.html")
    : path.join(out, urlPath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, contents);
};

const buildCss = async () => {
  const tmp = path.join(paths.cache, "site.css");
  execFileSync(
    path.resolve("node_modules/.bin/tailwindcss"),
    ["--input", "site/styles.css", "--output", tmp, "--minify"],
    // Tailwind prints timings on success; its error is in the thrown message.
    { stdio: "pipe" },
  );
  const css = await readFile(tmp);
  const hash = createHash("sha256").update(css).digest("hex").slice(0, 10);
  const name = `site-${hash}.css`;
  await writeFile(path.join(assetDir, name), css);
  assets.css = `/assets/${name}`;
};

/** Each file directly in site/client is a browser entry point. */
const buildClient = async () => {
  const clientDir = "site/client";
  const entries = (await readdir(clientDir).catch(() => []))
    .filter((f) => /\.(ts|tsx)$/.test(f))
    .map((f) => path.join(clientDir, f));
  if (entries.length === 0) return;

  const result = await esbuild.build({
    entryPoints: entries,
    outdir: assetDir,
    entryNames: "[name]-[hash]",
    bundle: true,
    splitting: true,
    format: "esm",
    minify: true,
    sourcemap: true,
    target: "es2022",
    jsx: "automatic",
    metafile: true,
  });
  for (const [file, meta] of Object.entries(result.metafile.outputs)) {
    if (!meta.entryPoint) continue;
    const name = path.basename(meta.entryPoint).replace(/\.tsx?$/, "");
    assets.scripts[name] = "/" + path.relative(out, file);
  }
};

const html = (element: ReactElement) =>
  "<!doctype html>\n" + renderToStaticMarkup(element);

const build = async () => {
  const started = performance.now();
  await rm(out, { recursive: true, force: true });
  await mkdir(assetDir, { recursive: true });
  await mkdir(paths.cache, { recursive: true });

  await Promise.all([
    cp(paths.public, out, {
      recursive: true,
      filter: (src) => !path.basename(src).startsWith("."),
    }),
    buildCss(),
    buildClient(),
  ]);

  const posts = await loadPosts();

  const pages: Record<string, () => ReactElement | Promise<ReactElement>> = {
    "/": () => <Home />,
    "/blog/": () => <BlogIndex posts={posts} />,
    "/projects/": () => <Projects />,
    "/projects/code-of-points/": CodeOfPoints,
    "/projects/twitter-bot/": () => <TwitterBot />,
    ...Object.fromEntries(
      posts.map((post) => [post.url, () => <BlogPost post={post} />]),
    ),
  };

  await Promise.all([
    ...Object.entries(pages).map(async ([url, render]) =>
      write(url, html(await render())),
    ),
    write("/404.html", html(<NotFound />)),
    write("/feed/blog/atom.xml", atomFeed(posts)),
    write("/feed/blog/rss.xml", rssFeed(posts)),
    write("/feed/blog/feed.json", jsonFeed(posts)),
    write("/sitemap.xml", sitemap(Object.keys(pages))),
    write(
      "/robots.txt",
      `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
    ),
  ]);

  const ms = Math.round(performance.now() - started);
  console.log(`Built ${Object.keys(pages).length} pages in ${ms}ms`);
};

await build();
