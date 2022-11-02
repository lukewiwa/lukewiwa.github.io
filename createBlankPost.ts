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
