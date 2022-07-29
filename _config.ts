import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import parcel_css from "lume/plugins/parcel_css.ts";
import jsx from "lume/plugins/jsx.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import dockerfile from "https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/dockerfile.min.js";


const site = lume({ location: new URL("https://lukewiwa.com/") });

site.use(codeHighlight({languages: {"dockerfile": dockerfile}}));
site.use(jsx());
site.use(parcel_css());
site.use(date({ name: "printDate" }));
site.use(postcss());

site.copy("_static", ".");
site.ignore("README.md");

site.script("blankPost", async () => {
  const date = new Date().toISOString().split("T")[0];
  const encoder = new TextEncoder();
  const templateString = encoder.encode(`---
title: Title
date: ${date}
tags: blog
layout: layouts/Blog.tsx
---

Opening Paragraph

<!--more-->
`);
  await Deno.writeFile(
    "./blog/new_blank_post.md",
    templateString,
  );
});

export default site;
