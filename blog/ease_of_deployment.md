---
title: JavaScript Remains The Best Deployment Target
tags: blog
layout: layouts/Blog.tsx

date: 2018-11-10
description: It is abundantly clear that targeting the web, even as a Single Page App with heavy JavaScript, hits that sweet spot of development time, availability and cost.
---

I have finally got to the point where I can throw together a single purpose web app over the course of a weekend. I recently was in need of a quick utility that could translate the session times of the recent Gymnastics World Championships, being held in Doha, into my own timezone. I also thought this was a problem that more people probably had so I started thinking about the quickest, easiest and cheapest way to share that utility with others.

Just by shear chance that I work mostly on Python and Javascript projects, and deciding I needed to brush up on my React skills I chose a Single Page App as my distribution method of choice. So I rolled up my sleeves and built a [web app that did just that](https://lukewiwa.com/dohagym2018).

Much as I've wanted to expand into learning a bit of Android development, on this occasion my lack of knowledge and time constraints pushed me towards the languages and platforms that I already know. What is abundantly clear though is that targeting the web, even as a Single Page App with heavy JavaScript, clearly hits that sweet spot of development time, availability and cost.

# Advantages

## Development Time

Javascript is ugly as hell but with modern JavaScript libraries like React and Vue, among others, and their requisite cli commands for bootstrapping a boilerplate app, developing for the current web is pretty nice in the scheme of things. It's easy to iterate, there are plenty of resources out there to help with most issues and there is a metric tonne of helper libraries and components just a quick NPM install away. It truly is a matter of gluing a few pieces together.

## Availability

Nothing has more reach than the Web at this point in time. No app store or packaged app is anywhere near as easy as to share as a URL with anybody and everybody. Additionally there is no wait times for app auditing or to register as a developer. There are dozens of services that will host your static files.

## Cost

Not only are there dozens of static hosting services but the vast majority of them are free. No registration fees, plenty don't even ask for a credit card number. I was amazed at how simple it is to push a bunch of static files up to a service and grab a URL.

# Disadvantages

## Monetisation

Charging for Web Apps, especially small, single purpose utility ones is notoriously hard to do. This is the strength of an App Store where the user is more conditioned to pay for an app (although I'm not so sure about that anymore). I didn't need to monetise my app but if you do care about pulling in a bit of spare change perhaps the current web isn't your best bet.

## Further Building

If you ever get to the point where you need to start building more features on top of your app or you start needing a database to back it then you are looking at a bit of rebuilding and rethinking your strategy.

# Conclusion

All in all I was pretty happy that I could build a utility that did exactly what I needed in pretty quick time, and that I could share with the world easily and freely.
