export const site = {
  title: "Wiwa",
  description: "The Ramblings of Wiwa",
  author: "Luke Wiwatowski",
  url: "https://lukewiwa.com",
};

export const paths = {
  posts: "blog",
  public: "public",
  out: "dist",
  cache: ".cache",
};

/** The dev server sets this, which turns on drafts and the reload script. */
export const isDev = process.env.SITE_DEV === "1";

export const absoluteUrl = (path: string) => new URL(path, site.url).href;
