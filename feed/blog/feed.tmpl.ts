import { Helper } from "lume/core.ts";
import { BlogPostData, LumeDataProps } from "../../_types.ts";

export const url = "/feed/blog/feed.json";

interface FeedItem {
  id: string;
  url: string;
  title: string;
  content_html: string;
  date_modified: string;
}

interface Feed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  description: string;
  items: FeedItem[];
}

export default function (
  { site, search }: LumeDataProps,
  { md, url, printDate, htmlUrl }: Record<string, Helper>,
) {
  const feed: Feed = {
    version: "https://jsonfeed.org/version/1",
    title: site.title,
    home_page_url: url("", true),
    feed_url: url("/feed/blog/feed.json", true),
    description: site.description,
    items: [],
  };

  for (const { data } of search.pages("blog", "date=desc")) {
    const { url: blogUrl, title, content, date: blogDate } =
      data as BlogPostData;
    feed.items.push({
      id: url(blogUrl, true),
      url: url(blogUrl, true),
      title: title,
      content_html: htmlUrl(md(content), true),
      date_modified: printDate(blogDate, "ATOM"),
    });
  }

  return JSON.stringify(feed, null, 2);
}
