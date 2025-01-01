import React from "react";
import { BlogPostData, LumeDataProps } from "../_types.ts";
import { Helper } from "lume/core.ts";

export const layout = "layouts/Base.tsx";
export const title = "Blog";

const Preview = ({
  description,
  preview,
}: {
  description?: string;
  preview: string;
}) => {
  if (description) {
    return <p dangerouslySetInnerHTML={{ __html: description }} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: preview }} />;
};

export default (
  { search }: LumeDataProps,
  { md, printDate }: Record<string, Helper>
) => {
  return (
    <>
      {search.pages("blog", "date=desc").map(({ data }) => {
        const { url, date, title, content, description } = data as BlogPostData;
        const preview = md(content.split("<!--more-->")[0]);
        return (
          <section className="pb2" key={url}>
            <h1 className="f3">
              <a href={url}>{title}</a>
            </h1>
            <time className="db gray mb1">{printDate(date)}</time>
            <Preview description={description} preview={preview} />
          </section>
        );
      })}
    </>
  );
};
