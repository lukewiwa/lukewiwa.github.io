---
title: Bottle URL Redirect
slug: bottle_url
layout: simple_page
date: 2017-05-23
teaser: The little documented url method in bottle.py
---

I've been making a little web app for my partner and I. I decided to use the [Bottle](https://bottlepy.org/docs/0.12/) framework as opposed to [Flask](http://flask.pocoo.org/docs/0.12/) since I've always liked the lightness of Bottle and my little app has no need for scaling.

Flask and Bottle seem have much the same features but there's one pattern in particular that is done easily in Flask but wasn't obvious in Bottle. In many flask tutorials a simple redirect to a url, usually after an authentication seems easily done.

In Flask it's basically implemented like this:

```python
from flask import route, redirect, url_for

@route('/')
def root():
    return 'home'

@route('/redirected')
def redirected():
    return redirect(url_for('root'))
```

In Bottle this can be done with the little documented `url` method, however it works a little bit differently. The route needs to be named using a keyword argument, but then the rest is much the same.

```python
from bottle import route, redirect, url

@route('/', name='home')
def root():
    return 'home'

@route('/redirected')
def redirected():
    return redirect(url('home'))
```