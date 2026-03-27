#!/bin/bash
set -e


if [ -n "${LITESTREAM_REPLICA_URL}" ]; then
  litestream restore -config /function/litestream.yml -if-replica-exists "${DB_PATH}"
fi

# uv run --project src python src/manage.py migrate --noinput

if [ -n "${LITESTREAM_REPLICA_URL}" ]; then
  exec litestream replicate -config /function/litestream.yml -exec "$*"
else
  exec "$@"
fi
