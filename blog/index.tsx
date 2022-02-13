import React from "react";
import { LumeDataProps, LumeFilterProps } from "../types.ts";
import { printDate } from "../_utils/datetime.ts";
import { Data } from "lume/core/filesystem.ts";

interface BlogData extends Data {
  title: string;
  url: string;
  date: Date;
  content: string;
  description?: string;
}

export const layout = "layouts/Base.tsx";
export const title = "Wiwa's Blog";

export default ({ search }: LumeDataProps, { md }: LumeFilterProps) => {
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-5">
      {search.pages("blog", "date=desc").map(({ data }) => {
        const { url, date, title, content, description } = data as BlogData;
        const preview = md(content.split("<!--more-->")[0]);
        return (
          <section>
            <div>
              <span className="font-normal mr-2">{printDate(date)}</span>
              <a href={url} className="bloglist-title">
                <span>{title}</span>
              </a>
            </div>
            {description
              ? <p>{description}</p>
              : <p dangerouslySetInnerHTML={{ __html: preview }} />}
          </section>
        );
      })}
    </div>
  );
};
