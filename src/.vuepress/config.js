const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "Wiwa",
  dest: "./public",
  themeConfig: {
    repo: "https://github.com/lukewiwa",
    repoLabel: "Github",
    editLinks: false,
    nav: [
      { text: "Gymnastics", link: "/gymnastics/" },
      { text: "Blog", link: "/blog/" },
      { text: "RSS Feed", link: "/rss.xml" }
    ],
    logo: "/vuepress-blog-logo.png",
    docsDir: "src",
    pageSize: 100,
    startPage: 0
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "" // UA-00000000-0
      }
    ],
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://lukewiwa.com",
        filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
        count: 20
      }
    ],
    "vuepress-plugin-reading-time",
    "vuepress-plugin-janitor"
  ],
  head: [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" }
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ]
};