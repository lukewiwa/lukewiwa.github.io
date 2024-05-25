---
title: Wiwa's Axiom for Python Virtual Environments In Containers
date: 2022-11-27
tags: blog
layout: layouts/Blog.tsx
---

Don't.

<!--more-->

Never use python virtual environments in a container. At least not directly. There is one argument that holds some water and that's using it as a base to copy from in a multi-stage build but on all honesty that's done quite neatly with a pattern like this:

```docker
ARG PYTHON_VERSION="3.9"
FROM python:${PYTHON_VERSION} AS builder
ARG PYTHON_VERSION

# use whatever method you like here.
# I usually use poetry but let's use the common
# primitive for demonstration purposes.
COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt

FROM python:${PYTHON_VERSION}
ARG PYTHON_VERSION

# Copy files from build container
COPY --from=builder /usr/local/lib/python${PYTHON_VERSION}/site-packages/ /usr/local/lib/python${PYTHON_VERSION}/site-packages/
COPY --from=builder /usr/local/bin/ /usr/local/bin/
```

If we need to install "standalone python executables" then the best way is through `pipx`. A good example might be to install `cookiecutter`.

```docker
FROM python

RUN python -m pip install pipx
ENV PATH="/root/.local/bin:$PATH"
RUN pipx install cookiecutter
```

 `pipx` technically does create a virtual environment for each executable but that's not something we need to worry about managing.

Never use python virtual environments in a container.
