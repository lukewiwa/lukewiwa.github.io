import React from "react";
import { Helper } from "lume/core.ts";

interface BlogProps {
  title: string;
  date: Date;
}

export const layout = "layouts/Base.tsx";

export default (
  { children, title, date }: React.PropsWithChildren<BlogProps>,
  { printDate }: Record<string, Helper>,
) => {
  return (
    <article>
      <h1 className="f2">{title}</h1>
      <time className="db mb1">{printDate(date)}</time>
      {children}
    </article>
  );
};
