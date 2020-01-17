
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
    ],
    logo: "/vuepress-blog-logo.png",
    docsDir: "src",
    pageSize: 100,
    startPage: 0
  },
};
