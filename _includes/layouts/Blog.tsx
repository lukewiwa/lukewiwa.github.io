import React from "react";
import { printDate } from "../../_utils/datetime.ts";

interface BlogProps {
  title: string;
  date: string;
}

export const layout = "layouts/Base.tsx";

export default (
  { children, title, date }: React.PropsWithChildren<BlogProps>,
) => {
  return (
    <article className="max-w-screen-md mx-auto px-6 mt-10 mb-20">
      <h1 className="font-semibold mb-4">{title}</h1>
      <div className="mb-3 font-normal">{printDate(date)}</div>
      {children}
    </article>
  );
};
