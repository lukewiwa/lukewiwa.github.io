---
title: PWA Share Target
blog: true
type: post
date: 2020-01-17
excerpt: Progressive Web Apps (PWAs) have slowly and steadily grown in functionality and appeal. Google implemented "installation" of PWAs on android through the chrome "add to homescreen" feature and has recently added some experimental support for PWAs to register as a share target.
---

Progressive Web Apps (PWAs) have slowly and steadily grown in functionality and appeal. Google implemented "installation" of PWAs on android through the chrome "add to homescreen" feature and has recently added some experimental support for PWAs to register as a share target. It's all very well explained at [web.dev](https://web.dev/web-share-target/) but the gist is that an installed PWA on your phone will be able to have a presence in the share sheet.

I wanted to implement this for a little web app I share with my wife so I started experimenting with it. The real issue I had though is that what an app shares with another app is somewhat opaque. There are apparently three parameters shared: "title", "url" and "text". I needed the url but it turns out android doesn't use that particular param. To make my life easier I created a little PWA tha would reveal exactly what data and params each app on android would pass. Visit [PWA Share Target Data Revealer](https://lukewiwa.com/pwa-share-target-data-revealer/), add it to your homescreen and then share from any app to it to reveal the data transferred.