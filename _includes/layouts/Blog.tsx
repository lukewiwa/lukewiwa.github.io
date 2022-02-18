import React from "react";
import { printDate } from "../../_utils/datetime.ts";

interface BlogProps {
  title: string;
  date: Date;
}

export const layout = "layouts/Base.tsx";

export default (
  { children, title, date }: React.PropsWithChildren<BlogProps>,
) => {
  return (
    <article>
      <h1 className="f2">{title}</h1>
      <time className="db gray mb1">{printDate(date)}</time>
      {children}
    </article>
  );
};
