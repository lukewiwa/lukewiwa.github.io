#! /usr/bin/env bash
set -euo pipefail

# Litestream owns the lifecycle of the SQLite file:
#
#   1. restore it from object storage if this environment has never seen it
#   2. run the app as a child process, replicating the WAL while it runs
#
# The daemon also opens a control socket, which is how Django forces an
# immediate, blocking sync after each write (see publishing/litestream.py).
# Without that, a write could still be sitting in the WAL when Lambda freezes
# the execution environment, and be lost if it is never thawed again.
#
# With LITESTREAM_REPLICA_URL unset (plain local development) all of this is
# skipped and the app just uses the local file, so it boots with no object
# storage running.

if [ -n "${LITESTREAM_REPLICA_URL:-}" ]; then
  echo "Litestream: restoring ${DB_PATH} if a replica exists"
  litestream restore -config "${LITESTREAM_CONFIG}" -if-replica-exists "${DB_PATH}"
fi

# The initial superuser is created by a data migration from the
# INITIAL_SUPERUSER_* environment variables.
uv run python manage.py migrate --noinput

if [ -n "${LITESTREAM_REPLICA_URL:-}" ]; then
  # -exec ties the two lifetimes together: Litestream exits when the app does,
  # and syncs the WAL on the way out.
  exec litestream replicate -config "${LITESTREAM_CONFIG}" -exec "$*"
fi

exec "$@"
