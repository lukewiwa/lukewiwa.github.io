import { Search } from "lume/plugins/search.ts";
import { Helper } from "lume/core.ts";
import { Page } from "lume/core/filesystem.ts";

export interface LumeDataProps {
  search: Search;
}

export interface LumeFilterProps {
  md: Helper;
}

export interface BlogPostData extends Page {
  date: string;
}
