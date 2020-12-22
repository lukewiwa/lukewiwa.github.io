export default {
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "@/plugins/vue-good-table", mode: "client" }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "@nuxtjs/feed",
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  feed() {
    const baseUrlArticles = "https://lukewiwa.com/blog";
    const baseLinkFeedArticles = "/feed/blog";
    const feedFormats = {
      rss: { type: "rss2", file: "rss.xml" },
      atom: { type: "atom1", file: "atom.xml" },
      json: { type: "json1", file: "feed.json" },
    };
    const { $content } = require("@nuxt/content");

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: "My Blog",
        description: "",
        link: baseUrlArticles,
      };
      const articles = await $content("blog").fetch();

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;
        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.date),
          description: article.excerpt,
        });
      });
    };

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type,
      create: createFeedArticles,
    }));
  },
};
