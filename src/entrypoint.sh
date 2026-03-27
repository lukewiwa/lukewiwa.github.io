#!/bin/bash
set -e

# If Litestream replication is configured, restore from S3 before starting.
# LITESTREAM_REPLICA_URL is expected to be set in prod (e.g. s3://bucket/db).
# Skipped in local dev where the variable is absent.
if [ -n "${LITESTREAM_REPLICA_URL}" ]; then
  litestream restore -config /function/litestream.yml -if-replica-exists "${DB_PATH}"
fi

uv run python manage.py migrate --noinput

if [ -n "${LITESTREAM_REPLICA_URL}" ]; then
  exec litestream replicate -config /function/litestream.yml -exec "$*"
else
  exec "$@"
fi
