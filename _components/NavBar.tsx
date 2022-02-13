import React from "react";

export default () => (
  <nav className="h-16 shadow-sm z-20 border-b border-gray-300">
    <div className="container mx-auto h-full flex flex-row items-center justify-between px-4">
      <div className="flex flex-row items-center">
        <a href="/" className="navlink">Wiwa</a>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <a href="/blog" className="navlink">Blog</a>
        <a href="/projects" className="navlink">Projects</a>
      </div>
    </div>
  </nav>
);
