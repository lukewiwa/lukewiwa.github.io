import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import parcel_css from "lume/plugins/parcel_css.ts";
import jsx from "lume/plugins/jsx.ts";
import postcss from "lume/plugins/postcss.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(code_highlight());
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
