---
title: Dev Container Features
date: 2022-11-24
tags: blog
layout: layouts/Blog.tsx
---

Dev containers have been a thing for a while now in different forms and it looks like Microsoft is really trying to push them forward as a standard rather than something siloed off in Visual Studio Code. One of their latest additions to the spec is a feature creatively named [*features*](https://containers.dev/features). I took the time to investigate them and [write some of my own](https://github.com/lukewiwa/features).

<!--more-->

I've standardised my own development using dev containers for almost everything. It provides me with a consistent developer experience regardless of the machine and has been a huge boon for onboarding people onto big projects that require a lot of moving parts.

One annoying point that I had with them though is that any development tool you would like in your environment you would have to install into your container and that led to awkward Dockerfiles with patterns like this:

```dockerfile
WORKDIR /tmp/dev-setup
ARG HADOLINT_VERSION="v2.10.0"
ARG HADOLINT_ARCH="arm64"
RUN if [ "$DEV_ENV" = "vscode" ]; then \
    yum install --debuglevel=1 -y zsh vim git amazon-linux-extras \
    #
    # Install docker
    && amazon-linux-extras install docker -y \
    #
    # install zsh
    && sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended \
    #
    # install hadolint
    && curl -sSL "https://github.com/hadolint/hadolint/releases/download/${HADOLINT_VERSION}/hadolint-Linux-arm64" \
    --output /usr/bin/hadolint \
    && chmod +x /usr/bin/hadolint \
    #
    # Clean up
    && rm -rf /tmp/dev-setup && yum clean all; \
    fi
```

Ugly as hell and mixes IDE logic with deployment logic. Dev container features allows us to abstract all this away and install an extra layer on top of what your "production" Dockerfile will be. It also allows us to have one bit of abstracted code and use it in enumerable projects. All the above can be replaced with this addition to the `devcontainer.json` file:

```json
"features": {
  "ghcr.io/devcontainers/features/docker-from-docker:1": {},
  "ghcr.io/devcontainers/features/git:1": {},
  "ghcr.io/guiyomh/features/vim:0": {},
  "ghcr.io/devcontainers/features/common-utils:1": {},
  "ghcr.io/dhoeric/features/hadolint:1": {},
}
```

I wrote a couple for myself and it's surprisingly straight forward to get started. There are nice [starter templates](https://github.com/devcontainers/feature-starter) which helped immensely in getting a basic idea into a repo. At it's very bare bones all you need is a `devcontainer-feature.json` file and an `install.sh` file. But the sky is the limit, there are a lot of powerful options such as setting an entrypoint or messing with the mounting points. See the [docker-from-docker](https://github.com/devcontainers/features/tree/main/src/docker-from-docker) feature for something that extensively used the available features.

The first [feature I wrote](https://github.com/lukewiwa/features/tree/main/src/shellcheck) was a simple installation of the [`shellcheck`](https://www.shellcheck.net/) tool. Additionally you can add an extension so naturally I added the excellent [vscode shellcheck extension](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck). Now for any project I want shellcheck for all I need to do is add a line to my features key in the `devcontainer.json` file and I'm off to the races.

```json
"features": {
  "ghcr.io/lukewiwa/features/shellcheck:0": {}
}
```

The second [feature](https://github.com/lukewiwa/features/tree/main/src/wait-for-it) was adding the [`wait-for-it`](https://github.com/vishnubob/wait-for-it) tool. This one required a adding an entrypoint and a few options for what host and port to wait for.

```json
"features": {
    "ghcr.io/lukewiwa/features/wait-for-it:0": {
      "host": "postgres",
      "port: "5432",
      timeout: "60"
    }
}
```

The only downside is that because these features are build as layers on top of your existing dockerfile if you regularly make changes to your dockerfile you can expect some slow build times if you have a few features to load. All in all though I'm ok with this trade off if it abstracts away all this code from the main production logic of the project.
