---
title: Docker Image With Multiple Python Installs
blog: true
type: post
date: 2021-05-26
---

Not sure whether this has been done before but I created a [docker container with four (4) Python installs](https://hub.docker.com/r/lukewiwa/pythons). To get there I heavily abused [Docker multistage builds from external images](https://docs.docker.com/develop/develop-images/multistage-build/#use-an-external-image-as-a-stage). You can check out the [repo](https://github.com/lukewiwa/pythons) for the gory details. Now I'm not insane there is a specific reason why I did this.

<!--more-->

I'm pretty all in on Visual Studio Code dev containers and I also like having sensible CI pipelines to catch things. I recently wrote a little library that I diligently tested against multiple python versions using [tox](https://tox.readthedocs.io/en/latest/index.html). I like to be able to test and debug this locally and not rely on the pipeline specific syntax. So the challenge was to create an environment locally and in the pipeline where a single `tox` command would kick start all my tests. This seems to be the solution that satisfies this criteria.

Here's an example using Github Actions:

```yaml
name: tests
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: lukewiwa/pythons:latest
    steps:
      - name: tox
        run: tox
```

And one for bitbucket pipelines:

```yaml
image: lukewiwa/pythons

pipelines:
  default:
    - step:
        script:
            - tox
```