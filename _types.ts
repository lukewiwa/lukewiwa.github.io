import { Search } from "lume/plugins/search.ts";
import { Data, Page } from "lume/core/filesystem.ts";
import site from "./_data/site.ts";

export interface LumeDataProps {
  site: typeof site;
  search: Search;
  url: string;
}

export interface BlogPostData extends Data {
  title: string;
  url: string;
  date: Date;
  content: string;
  description?: string;
}

export interface BlogPostPage extends Page {
  date: BlogPostData;
  title: string;
}
