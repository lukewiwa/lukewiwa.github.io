---
title: Another Fresh Lick Of Paint
date: 2022-02-19
tags: blog
layout: layouts/Blog.tsx
---

I finally found the time and space to do my semi regular migration to a new static site generator. I thought it was time to step away from Vue and try something new, partly out of curiosity and partly because I really like JSX as a templating language. And frankly I'm just not really up for the migration from Vue 2 to Vue 3.

<!--more-->

This site is now generated using [lume](https://lumeland.github.io/). Lume is a static site generator built on top of the [Deno](https://deno.land) programming language. I've been somewhat enamoured with Deno when it came out. It's pretty fantastic to download a single binary and it's got everything I need for compilation, formatting and typechecking.

I've used Deno for a few small scripts (which I think it excels at) and I wanted to get into a deeper project with it. Additionally I love JSX as a templating language and was wondering whether there was anything out there that would build static web sites using it. I mean particularly calling the `renderToStaticMarkup` method in react at build time and leaving just HTML files to serve. I wanted to steer clear of tools like Gatsby and Next.js, just pure HTML in the end.

Well turns out lume really scratched that itch. It's a neat little framework and suits my needs ok. I do enjoy using TailwindCSS but found no clear way to install it using Deno so I ended up using TachyonsCSS which covers similar ground.

I've also added [new.css](https://newcss.net/) for base styles because I'm lazy. It turns out it has a dark mode which I'm not in love with but I'll take it and hopefully finally learn the particulars of detecting dark mode preferences.

So enjoy the different colour scheme, point out the inconsistency in styles and subscribe to my [rss](/feed/blog/rss.xml) which I'm sure I borked somehow.
