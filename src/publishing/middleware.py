"""Flush the SQLite WAL to the Litestream replica before the host freezes."""

import logging

from publishing import litestream

logger = logging.getLogger(__name__)

SAFE_METHODS = frozenset({"GET", "HEAD", "OPTIONS", "TRACE"})


class LitestreamSyncMiddleware:
    """Sync after any request that could have written to the database.

    This runs *before* the response leaves the process, which is the only point
    at which we can be sure the execution environment is still thawed. Read
    traffic never reaches Django in production (CloudFront serves the baked
    site from S3) so in practice this only fires when the author saves
    something in the CMS.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        if request.method in SAFE_METHODS:
            return response
        if response.status_code >= 400:
            return response

        litestream.sync()
        return response
