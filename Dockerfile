FROM node:24-slim AS node_source

ARG BASE_DIR="/function"
ARG FUNCTION_DIR="${BASE_DIR}/src"
FROM python:3.12-slim AS base
ARG FUNCTION_DIR

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
ENV UV_CACHE_DIR=/tmp/uv UV_LINK_MODE=copy UV_PROJECT_ENVIRONMENT=/opt/venv

WORKDIR ${FUNCTION_DIR}

FROM base AS builder

# Copy Node.js and NPM binaries
COPY --from=node_source /usr/local/bin/node /usr/local/bin/node
COPY --from=node_source /usr/local/lib/node_modules /usr/local/lib/node_modules

# Re-link npm and npx so they work in the new image
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

FROM builder AS litestream
ARG TARGETARCH
# Check https://github.com/benbjohnson/litestream/releases for newer versions.
ARG LITESTREAM_VERSION="0.3.13"

RUN curl -fsSL \
    "https://github.com/benbjohnson/litestream/releases/download/v${LITESTREAM_VERSION}/litestream-v${LITESTREAM_VERSION}-linux-${TARGETARCH}.tar.gz" \
    | tar -xz -C /usr/local/bin litestream

FROM builder AS build
ARG FUNCTION_DIR

COPY src/ ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

RUN --mount=type=cache,target=/tmp/uv \
    uv sync --no-dev

# Dummy values so that we can run collectstatic
# These will have no bearing on the final image
ENV DJANGO_SECRET_KEY="dummy-secret-key-for-static-files-collection" \
    ALLOWED_HOSTS="" \
    DOMAIN="https://example.com"

# wagtail_highlight is its own separate frontend package (own build,
# outputs to its own static/ dir) - it has to be built before `npm run
# build` below, since that triggers `collectstatic` as a side effect (see
# vite.config.ts) and collectstatic needs wagtail_highlight's static files
# to already be on disk.
RUN --mount=type=cache,target=/root/.npm npm --prefix=wagtail_highlight install
RUN npm --prefix=wagtail_highlight run build

RUN --mount=type=cache,target=/root/.npm npm install
RUN npm run build


FROM base AS prod
ARG FUNCTION_DIR
ARG BASE_DIR

# Copy django static files
COPY --from=build /staticfiles /staticfiles

COPY _static/ ${BASE_DIR}/_static/
COPY blog/ ${BASE_DIR}/blog/
COPY src/ ${FUNCTION_DIR}

COPY --from=build /opt/venv /opt/venv
COPY --from=litestream /usr/local/bin/litestream /usr/local/bin/litestream


EXPOSE 8080
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["uv", "run", "gunicorn", "config.wsgi:application"]
