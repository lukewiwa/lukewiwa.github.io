import lume from "lume";
import jsx from "lume/plugins/jsx.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(code_highlight());
site.use(jsx());

site.copy("_static", ".");
site.ignore("README.md");

export default site;
