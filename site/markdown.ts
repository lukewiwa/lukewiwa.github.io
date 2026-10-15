import MarkdownIt from "markdown-it";
import shiki from "@shikijs/markdown-it";
import type { BundledLanguage } from "shiki";

// Shiki's built-in plain-text grammar. It works at runtime but is missing from
// the option types.
const plainText = "text" as BundledLanguage;

const md = MarkdownIt({ html: true });

// Highlighting happens at build time, so the published pages ship no
// highlighter. Both themes are emitted; styles.css picks one per colour scheme.
md.use(
  await shiki({
    themes: { light: "github-light", dark: "github-dark" },
    langs: [
      "bash",
      "dockerfile",
      "javascript",
      "json",
      "python",
      "shell",
      "typescript",
      "tsx",
      "yaml",
      "html",
      "css",
      "sql",
    ],
    defaultLanguage: plainText,
    fallbackLanguage: plainText,
  }),
);

export const renderMarkdown = (source: string) => md.render(source);
