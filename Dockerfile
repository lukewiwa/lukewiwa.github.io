FROM node:24-slim AS node_source

ARG BASE_DIR="/function"
ARG FUNCTION_DIR="${BASE_DIR}/src"
FROM python:3.12-slim AS base
ARG FUNCTION_DIR

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
ENV UV_CACHE_DIR=/tmp/uv UV_LINK_MODE=copy UV_PROJECT_ENVIRONMENT=/opt/venv

COPY --from=ghcr.io/lukewiwa/just-container:latest /usr/local/bin/just /usr/local/bin/just
COPY --from=litestream/litestream:latest /usr/local/bin/litestream /usr/local/bin/litestream

WORKDIR ${FUNCTION_DIR}

FROM base AS builder

# Copy Node.js and NPM binaries
COPY --from=node_source /usr/local/bin/node /usr/local/bin/node
COPY --from=node_source /usr/local/lib/node_modules /usr/local/lib/node_modules

# Re-link npm and npx so they work in the new image
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

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

RUN --mount=type=cache,target=/root/.npm npm install
RUN npm run build


FROM base AS prod
ARG FUNCTION_DIR
ARG BASE_DIR

ENV DB_PATH=/tmp/db.sqlite3

# Copy django static files
COPY --from=build /staticfiles /staticfiles

COPY _static/ ${BASE_DIR}/_static/
COPY blog/ ${BASE_DIR}/blog/
COPY src/ ${FUNCTION_DIR}
COPY litestream.yml ${BASE_DIR}/litestream.yml

COPY --from=build /opt/venv /opt/venv


EXPOSE 8080
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["uv", "run", "gunicorn", "config.wsgi:application"]
