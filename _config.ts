import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import jsx from "lume/plugins/jsx.ts";
import postcss from "lume/plugins/postcss.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import dockerfile from "dockerfile";


const site = lume({ location: new URL("https://lukewiwa.com/") });

site.use(date({ name: "printDate" }));
site.use(jsx());
site.use(postcss());
site.use(code_highlight({languages: {"dockerfile": dockerfile}}));

site.copy("_static", ".");
site.ignore("README.md");

export default site;
