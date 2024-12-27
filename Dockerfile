ARG BASE_DIR="/function"
ARG FUNCTION_DIR="${BASE_DIR}/src"
ARG NODE_VERSION="20"
FROM python:3.12-slim AS base
ARG FUNCTION_DIR

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
ENV UV_CACHE_DIR=/tmp/uv UV_LINK_MODE=copy UV_PROJECT_ENVIRONMENT=/opt/venv

WORKDIR ${FUNCTION_DIR}

FROM base AS builder

RUN apt update && apt install curl make --yes

# Install node https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions
ARG NODE_VERSION
RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - && \
    apt-get install --no-install-recommends -y nodejs

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
    DATABASE_ENGINE="django.db.backends.sqlite3" \
    SQLITE_OBJECT_STORAGE_BUCKET_NAME="/tmp/dummy.sqlite3" \
    DOMAIN="https://example.com"

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


EXPOSE 8080
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["uv", "run", "gunicorn", "config.wsgi:application"]
