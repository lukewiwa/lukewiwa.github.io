import React from "react";

const NavLink = ({ href, title, url }: Record<string, string>) => {
  const currentPageHeader = url.startsWith(href);
  const classString = `link gray hover-moon-gray f6 f5-ns dib mr3 mr4-ns ${
    currentPageHeader ? "b" : ""
  }`;
  return (
    <a href={href} className={classString}>
      {title}
    </a>
  );
};

export default ({ url }: { url: string }) => (
  <header>
    <nav className="flex flex-row items-center justify-between">
      <a href="/" className="link black hover-gray dtc w-25 f3">Wiwa</a>
      <div className="dtc v-mid w-75 tr">
        <NavLink href="/blog" title="Blog" url={url} />
        <NavLink href="/projects" title="Projects" url={url} />
      </div>
    </nav>
  </header>
);
