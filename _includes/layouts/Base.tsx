import React from "react";
import NavBar from "../../_components/NavBar.tsx";

interface BaseProps {
  title: string;
  url: string;
}

export default (
  { children, title = "Wiwa", url }: React.PropsWithChildren<BaseProps>,
) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      {
        /* <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
      /> */
      }
      <link rel="stylesheet" href="/index.css" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github.min.css"
      />
    </head>
    <body className="mid-gray">
      <NavBar url={url} />
      <main className="pt-4">{children}</main>
    </body>
  </html>
);
