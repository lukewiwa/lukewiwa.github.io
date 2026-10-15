import { absoluteUrl, site } from "./config";
import type { Post } from "./content";

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Feed readers have no base URL, so root-relative links must be made absolute. */
const absolutizeHtml = (html: string) =>
  html.replace(/(href|src)="\/(?!\/)/g, `$1="${site.url}/`);

const updated = (posts: Post[]) => (posts[0]?.date ?? new Date()).toISOString();

export const atomFeed = (posts: Post[]) => `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(site.title)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <id>${absoluteUrl("/")}</id>
  <link href="${absoluteUrl("/feed/blog/atom.xml")}" rel="self"/>
  <link href="${absoluteUrl("/blog/")}" rel="alternate"/>
  <author><name>${escapeXml(site.author)}</name></author>
  <updated>${updated(posts)}</updated>
${posts
  .map(
    (post) => `  <entry>
    <title>${escapeXml(post.title)}</title>
    <id>${absoluteUrl(post.url)}</id>
    <link href="${absoluteUrl(post.url)}"/>
    <updated>${post.date.toISOString()}</updated>
    <content type="html">${escapeXml(absolutizeHtml(post.html))}</content>
  </entry>`,
  )
  .join("\n")}
</feed>
`;

export const rssFeed = (posts: Post[]) => `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${absoluteUrl("/blog/")}</link>
    <description>${escapeXml(site.description)}</description>
    <lastBuildDate>${new Date(updated(posts)).toUTCString()}</lastBuildDate>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${absoluteUrl(post.url)}</link>
      <guid>${absoluteUrl(post.url)}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${escapeXml(absolutizeHtml(post.html))}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

export const jsonFeed = (posts: Post[]) =>
  JSON.stringify(
    {
      version: "https://jsonfeed.org/version/1.1",
      title: site.title,
      description: site.description,
      home_page_url: absoluteUrl("/"),
      feed_url: absoluteUrl("/feed/blog/feed.json"),
      authors: [{ name: site.author }],
      items: posts.map((post) => ({
        id: absoluteUrl(post.url),
        url: absoluteUrl(post.url),
        title: post.title,
        summary: post.description,
        content_html: absolutizeHtml(post.html),
        date_published: post.date.toISOString(),
      })),
    },
    null,
    2,
  );

export const sitemap = (urls: string[]) => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${absoluteUrl(url)}</loc></url>`).join("\n")}
</urlset>
`;
