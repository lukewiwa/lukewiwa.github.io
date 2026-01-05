import hljs from "highlight.js";
// Styles are loaded via CDN in the template for dark mode support

const highlightContainers = document.querySelectorAll(
  `code[data-wagtail-highlight="container"]`
);

for (const container of Array.from(highlightContainers)) {
  hljs.highlightElement(container);
}
