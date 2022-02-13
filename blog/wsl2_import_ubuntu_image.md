---
title: Importing Rootfs Ubuntu Images into WSL2

date: 2020-05-26
tags: blog
layout: layouts/Blog.tsx
---

I've been generally impressed with the preview of Windows Subsystem for Linux 2 (WSL2) and it's integration between the windows desktop and the underlying linux kernel.

<!--more-->

I did notice on a [talk by one of the main devs](https://www.youtube.com/watch?v=UCAid-NQwWU&feature=youtu.be) that you could manually import and export linux and container images. This seemed like a nice idea if you wanted to separate dev environments or perhaps have separate work or personal accounts. The demonstration showed exporting and importing docker containers and linux tarballs using the Cool New `wsl` command in powershell. My dilemma was that I had already setup one Ubuntu environment and wanted a clean one from scratch. So I did a little digging and managed to get one working with a few hiccups along the way.

# 1. Download The Latest Rootfs Image

The Ubuntu wiki has a very neat [guide](https://wiki.ubuntu.com/WSL#Installing_Ubuntu_on_WSL_via_rootfs) on how to import an image. Be sure to download the nightly image with the `-wsl.rootfs.tar.gz` suffix.

# 2. Import The Image

As in the Ubuntu wiki run the command below. I decided to keep the image location in my home directory, in a `distro` folder.

```shell
wsl --import <DistributionName> <InstallLocation> <FileName>
```

# 3. Create A User

Drop into the wsl2 instance by running the name of the distribution as a command in powershell, or by using the excellent new Windows Terminal app. By default the only user in the image is the root user. While the stock standard Ubuntu image you install from the Microsoft Store prompts you to create a user at startup we'll have to do the prompting ourselves here. The `adduser` command should get you what you need. **Be sure to add your new user to the sudo group**.

```shell
adduser <username> --ingroup sudo
```

# 4. Change The Default User

Now that we have created the user we would like it to be the default user whenever you start a new shell. This is a little tricky and there's a [github issue](https://github.com/Microsoft/WSL/issues/3974) outlining this pain point and some possible work arounds. I went with the powershell option but pick your poison.

And that's it, enjoy separating those concerns.