---
title: manylinux2014 multi architecture build
date: 2023-01-08
tags: blog
layout: layouts/Blog.tsx
---

[`manylinux`](https://github.com/pypa/manylinux) is a linux distro created to provide the widest support possible for python packages. The folks at the Python Packaging Authority (PyPA) provide convenient docker images of this distro but due to the scale and issues of providing builds across multiple architectures the images are distributed under different tags for different architectures. I created a [repo github action](https://github.com/lukewiwa/manylinux2014) to aggregate these images into a multi architecture build using the [docker manifest command](https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/).

<!--more-->

This allows me to mindlessly pull [`lukewiwa/manylinux2014`](https://hub.docker.com/r/lukewiwa/manylinux2014) and let docker sort out the architectural details. This was fairly straight forward to do and I hope the PyPA team implement something like this (although I understand the issues they face). I've got this setup to update every month which feels like a relatively good update schedule without wasting CPU cycles.
