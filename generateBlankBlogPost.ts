const path = require("path");
const { promises } = require("fs");
const { writeFile } = promises;

const template = ({ title = "Title" }) => {
  const date = new Date().toISOString().split("T")[0];
  return `---
title: ${title}
type: post
date: ${date}
blog: true
---

Opening Paragraph

<!--more-->
`;
};

const writeBlogTemplate = async () => {
  const templateString = template({});
  await writeFile(
    path.join(__dirname, "content", "blog", "new_blank_post.md"),
    templateString
  );
};

writeBlogTemplate();
