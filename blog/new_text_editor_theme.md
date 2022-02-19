---
title: New Text Editor and Syntax Colour Scheme
tags: blog
layout: layouts/Blog.tsx

date: 2017-12-06
---

After trying a few different text editors out, from the standard of gedit, to sublime text and even attempts at nano, I've standardised on Visual Studio Code which seems to be a standout for a few reasons. I'm not exactly an advanced programmer but when I am punching in a few crummy lines of python or writing some markdown notes I've reached for VSCode time and again. It seems to be both extremely flexible, as well as fairly intuitive. The VSCode's extension ecosystem and the git interface is straight forward and easy to use.

<!--more-->

There was however one bug bear of mine which irritated me somewhat when using it. I love the **Vibrant Ink** theme and there is an extension available, however the available theme does not have markdown support and I spend a lot of my time punching in notes using the markdown syntax. As such I attempted to do some tweaking of the Vibrant Ink theme but I wasn't happy with the results. I decided to eventually start from scratch.

![Dark Wiwa](/img/dark_wiwa.png)

I made use of Microsoft's [Yeoman](http://yeoman.io/) to generate a scaffold theme and then used a great [generator](https://github.com/Tyriar/vscode-theme-generator) to populate that scaffold with a basic colour scheme and added my own tweaks. My choice of colours ended up looking very festive. I've put the theme up on [Github](https://github.com/lukewiwa/dark_wiwa).
