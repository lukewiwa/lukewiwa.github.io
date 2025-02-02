import hljs from "highlight.js";
import "highlight.js/styles/default.css";

const highlightContainers = document.querySelectorAll(
  `code[data-wagtail-highlight="container"]`
);

for (const container of Array.from(highlightContainers)) {
  hljs.highlightElement(container);
}
