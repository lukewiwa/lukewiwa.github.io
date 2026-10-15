/**
 * Local preview: rebuilds the site whenever anything under site/, blog/ or
 * public/ changes, serves dist/, and reloads open tabs after each build.
 *
 * Each rebuild runs in a fresh process, so there is no stale module cache to
 * reason about. URL handling mirrors the CloudFront function in infra/.
 */
import { spawn } from "node:child_process";
import { watch } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer, type ServerResponse } from "node:http";
import path from "node:path";
import { paths } from "./config";

const PORT = Number(process.env.PORT ?? 8080);
const WATCH = ["site", paths.posts, paths.public];

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".map": "application/json",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};

const RELOAD_SCRIPT = `new EventSource("/__reload").onmessage = () => location.reload();`;
const clients = new Set<ServerResponse>();

let building = false;
let queued = false;

const rebuild = () => {
  if (building) {
    queued = true;
    return;
  }
  building = true;
  const child = spawn(
    path.resolve("node_modules/.bin/tsx"),
    ["site/build.tsx"],
    { stdio: "inherit", env: { ...process.env, SITE_DEV: "1" } },
  );
  child.on("exit", (code) => {
    building = false;
    if (code === 0) for (const client of clients) client.write("data: reload\n\n");
    else console.error("Build failed; still serving the previous build.");
    if (queued) {
      queued = false;
      rebuild();
    }
  });
};

const isFile = (file: string) =>
  stat(file).then((s) => s.isFile(), () => false);

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");

  if (url.pathname === "/__reload") {
    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
    });
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  if (url.pathname === "/__reload.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(RELOAD_SCRIPT);
    return;
  }

  const pathname = decodeURIComponent(url.pathname);
  const root = path.resolve(paths.out);
  let file = path.join(root, pathname);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  if (pathname.endsWith("/")) file = path.join(file, "index.html");
  else if (!path.extname(pathname) && (await isFile(path.join(file, "index.html")))) {
    res.writeHead(301, { location: pathname + "/" + url.search }).end();
    return;
  }

  if (await isFile(file)) {
    res.writeHead(200, {
      "content-type": TYPES[path.extname(file)] ?? "application/octet-stream",
    });
    res.end(await readFile(file));
  } else {
    res.writeHead(404, { "content-type": TYPES[".html"] });
    res.end(await readFile(path.join(paths.out, "404.html")).catch(() => "Not found"));
  }
});

let timer: NodeJS.Timeout | undefined;
for (const dir of WATCH) {
  watch(dir, { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(rebuild, 100);
  });
}

rebuild();
server.listen(PORT, () => console.log(`Serving http://localhost:${PORT}`));
