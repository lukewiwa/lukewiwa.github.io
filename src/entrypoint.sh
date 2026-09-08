#! /usr/bin/env bash

set -euo pipefail

CONFIG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export DATABASE_PATH="${DATABASE_PATH:-/tmp/db.sqlite3}"

# LITESTREAM_REPLICA_BUCKET is only set in deployed environments (see
# infra/lib/infra-stack.ts). Local/dev runs just use a plain local sqlite
# file with no replication.
if [ -n "${LITESTREAM_REPLICA_BUCKET:-}" ]; then
    # If Lambda's init phase times out and retries in the same execution
    # environment, /tmp isn't cleared - it still has the partial file from
    # the aborted attempt, and `litestream restore` refuses to overwrite an
    # existing file. Without this, that one bad cold start gets retried
    # forever in a loop (worse still with reservedConcurrentExecutions: 1,
    # since there's no other environment for traffic to fall back to).
    rm -f "${DATABASE_PATH}"
    litestream restore -config "${CONFIG_DIR}/litestream.yml" -if-replica-exists "${DATABASE_PATH}"
    litestream replicate -config "${CONFIG_DIR}/litestream.yml" &
fi

exec "$@"
