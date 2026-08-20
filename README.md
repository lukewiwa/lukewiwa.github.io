# lukewiwa.com

The Ramblings of Wiwa

A static blog with an interactive backend: the public site is flat files on S3
behind CloudFront, and posts are written in a Wagtail CMS that runs on Lambda,
from whatever device is to hand.

## How it fits together

```
   blog/*.md ──(one-time import)──> SQLite ──Litestream──> S3 (replica)
                                      │
                                      │  Wagtail CMS on Lambda
                                      │  /blog/cms, /admin
                                      ▼
                                  "Publish"
                                      │
                        bake every page to static HTML
                                      │
                                      ▼
                            S3 site bucket ──> CloudFront ──> readers
```

Readers never reach Django. CloudFront serves the baked site straight from S3,
and only the CMS paths are routed to Lambda.

### The database

SQLite on local disk, replicated to S3 by [Litestream](https://litestream.io).
On a cold start the entrypoint restores the database from the replica; while
the app runs, Litestream replicates the WAL.

Lambda freezes an execution environment the moment a response is returned, so
asynchronous replication alone would risk losing a write that never got flushed
before the environment was reaped. `publishing.middleware.LitestreamSyncMiddleware`
closes that window: after any request that wrote, it asks the Litestream daemon
over its control socket for an immediate, blocking sync, and only then returns.

Litestream cannot have two processes replicating one database, so the CMS
function is pinned to `reservedConcurrentExecutions: 1`. That costs nothing,
because reads are served from S3.

### Publishing

`manage.py publish` bakes every published page with django-bakery, deploys the
result, and invalidates the CDN. It runs the same way from the command line,
from the CMS publish button, and from the worker Lambda.

Where it deploys is configuration, not a `DEBUG` branch:

| `PUBLISH_TARGET` | Goes to                        | Used for                     |
| ---------------- | ------------------------------ | ---------------------------- |
| `filesystem`     | `PUBLISH_DESTINATION` directory | Local dev with no dependencies |
| `s3`             | `PUBLISH_BUCKET_NAME`           | RustFS locally, S3 in production |

Because RustFS speaks the S3 API, `just publish-rustfs` exercises the exact code
path production uses. CloudFront invalidation is skipped unless
`CLOUDFRONT_DISTRIBUTION_ID` is set, which is the only genuinely
production-only step.

Only files whose contents changed are uploaded, so a republish after editing
one post moves a handful of files rather than the whole site.

## Local development

```bash
cp .env.example .env          # then fill in DJANGO_SECRET_KEY
just install
just migrate
just populate-blog            # one-time import of blog/*.md
just start                    # Django on :8000 plus asset watch
```

Publish locally, no object storage needed:

```bash
just publish-local
just serve-publish            # browse the static output on :8080
```

Publish through the production code path, against RustFS:

```bash
docker compose up -d
just publish-rustfs
```

The CMS is at `/blog/cms/`, and the publish button is under "Publish site" in
its menu.

## Deployment

```bash
just deploy
```

CDK builds the container image, deploys both Lambda functions, the buckets and
the distribution, then runs migrations. See [infra/lib/infra-stack.ts](infra/lib/infra-stack.ts).

## Content

The posts began as markdown in [blog/](blog/) and were imported once by
`populate_blog`. The database is the source of truth now; the markdown is kept
as an archive. `populate_blog` skips posts that already exist, so it is safe to
re-run.

## Frontend

The public site ships no application JavaScript — just a Tailwind stylesheet
and highlight.js for code blocks. htmx drives the CMS publish panel.

The only React in the project is the code-block widget in the Wagtail admin,
which borrows Wagtail's own `window.React` rather than bundling a copy.
