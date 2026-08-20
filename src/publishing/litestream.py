"""Helpers for keeping the SQLite replica durable on ephemeral hosts.

Litestream replicates asynchronously, roughly once a second. On a long running
host that window is fine, but on Lambda the execution environment is *frozen*
the moment a response is returned and may be reaped without ever thawing again.
Anything still sitting in the WAL at that point is lost.

`sync()` closes that window. It is a client command: it connects to the running
`litestream replicate` daemon over its control socket and asks for an immediate
flush, blocking until the data has actually reached object storage. By the time
Lambda freezes us the write is already durable.
"""

import logging
import subprocess

from django.conf import settings

logger = logging.getLogger(__name__)


def enabled() -> bool:
    return bool(settings.LITESTREAM_REPLICA_URL and settings.LITESTREAM_SOCKET)


def sync(timeout: int = 15) -> bool:
    """Force Litestream to flush the WAL to the replica. Returns success.

    Never raises: a failed sync is worth an alarming log line, but it must not
    turn a successful save into an error response.
    """
    if not enabled():
        logger.debug("Litestream not configured, skipping sync")
        return False

    command = [
        settings.LITESTREAM_BINARY,
        "sync",
        # Block until the remote replica has the data, not just the local WAL.
        "-wait",
        "-timeout",
        str(timeout),
        "-socket",
        str(settings.LITESTREAM_SOCKET),
        str(settings.DB_PATH),
    ]

    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            # Give the subprocess longer than Litestream's own timeout so the
            # error we report is Litestream's, not ours.
            timeout=timeout + 10,
            check=False,
        )
    except FileNotFoundError:
        logger.warning("litestream binary %s not found", settings.LITESTREAM_BINARY)
        return False
    except subprocess.TimeoutExpired:
        logger.error("litestream sync timed out after %ss", timeout)
        return False

    if result.returncode != 0:
        logger.error(
            "litestream sync failed (%s): %s",
            result.returncode,
            result.stderr.strip() or result.stdout.strip(),
        )
        return False

    logger.info("litestream sync complete")
    return True
