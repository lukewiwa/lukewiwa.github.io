// Bundled for the Wagtail publish panel. Loading it as a static file keeps the
// admin free of any CDN dependency.
import htmx from "htmx.org";

declare global {
  interface Window {
    htmx: typeof htmx;
  }
}

window.htmx = htmx;
