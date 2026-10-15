import type { ReactNode } from "react";
import { assets, scriptUrl } from "../assets";
import { absoluteUrl, isDev, site } from "../config";

const NavLink = ({
  href,
  current,
  children,
}: {
  href: string;
  current: string;
  children: ReactNode;
}) => {
  const active = current.startsWith(href);
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={`hover:text-stone-900 dark:hover:text-stone-100 ${
        active ? "font-semibold text-stone-900 dark:text-stone-100" : ""
      }`}
    >
      {children}
    </a>
  );
};

export interface BaseProps {
  /** The page's own URL path, used for the canonical link and nav state. */
  url: string;
  title?: string;
  description?: string;
  /** Names of entries in site/client to load on this page. */
  scripts?: string[];
  children: ReactNode;
}

export const Base = ({
  url,
  title,
  description = site.description,
  scripts = [],
  children,
}: BaseProps) => {
  const fullTitle = title ? `${title} · ${site.title}` : site.title;
  return (
    <html lang="en-AU">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={absoluteUrl(url)} />
        <meta property="og:title" content={title ?? site.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={absoluteUrl(url)} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title={site.title}
          href="/feed/blog/atom.xml"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title={site.title}
          href="/feed/blog/feed.json"
        />
        <link rel="stylesheet" href={assets.css} />
        {scripts.map((name) => (
          <script key={name} type="module" src={scriptUrl(name)} />
        ))}
        {isDev && <script type="module" src="/__reload.js" />}
      </head>
      <body className="bg-stone-50 text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-200">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
          <header className="mb-10 flex items-baseline justify-between">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100"
            >
              {site.title}
            </a>
            <nav className="flex gap-5 text-stone-500 dark:text-stone-400">
              <NavLink href="/blog/" current={url}>
                Blog
              </NavLink>
              <NavLink href="/projects/" current={url}>
                Projects
              </NavLink>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};
