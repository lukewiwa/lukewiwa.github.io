ARG FUNCTION_DIR="/function"
ARG NODE_VERSION="20"
FROM python:3.12-slim as base
ARG FUNCTION_DIR

ENV POETRY_VIRTUALENVS_CREATE="false"
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --upgrade pip poetry

# Install project deps
RUN --mount=type=cache,target=/root/.cache/pypoetry \
    --mount=type=bind,source=src,target=/tmp/pip-tmp/ \
    poetry --directory=/tmp/pip-tmp/ install

WORKDIR ${FUNCTION_DIR}

FROM base AS builder

RUN apt update && apt install curl make --yes

# Install node https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions
ARG NODE_VERSION
RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - && \
    apt-get install -y nodejs && npm install --global yarn


FROM base AS staticbuild

COPY src/ ${FUNCTION_DIR}

# Collect all static files
WORKDIR ${FUNCTION_DIR}
ENV DJANGO_SECRET_KEY="dummy-secret-key-for-static-files-collection" ALLOWED_HOSTS=""

RUN python manage.py collectstatic --noinput --clear

FROM base AS prod
ARG FUNCTION_DIR

# Copy django static files
COPY --from=staticbuild /bundle /bundle

COPY src/ ${FUNCTION_DIR}

ENTRYPOINT [ "poetry", "run","python", "-m", "awslambdaric" ]

CMD [ "config.asgi.handler" ]
