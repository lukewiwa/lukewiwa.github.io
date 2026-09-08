# lukewiwa.com

The Ramblings of Wiwa - a Django + Wagtail blog, deployed as a container image
on AWS Lambda behind CloudFront, with SQLite as the database (replicated to
S3 via [Litestream](https://litestream.io)).

## Architecture

```
Browser -> CloudFront -> API Gateway (HTTP API) -> Lambda (container image)
                                                      |  Django + Wagtail,
                                                      |  served by gunicorn
                                                      |  via the AWS Lambda
                                                      |  Web Adapter
                                                      v
                                            /tmp/db.sqlite3 (local)
                                                      |
                                              litestream replicate
                                                      v
                                            S3 (WiwaDbBucket) - live replica
                                                      |
                                       daily copy (WiwaDbBackupSchedule)
                                                      v
                                          S3 (WiwaDbBackupBucket) - backups
```

- **App**: `src/` - Django project (`config/`), the blog itself (`blog/`,
  Wagtail pages), plus `core`, `admin_core`, `admin_utils` and
  `wagtail_highlight` (a Wagtail StreamField block for syntax-highlighted
  code, with its own separate frontend build).
- **Infra**: `infra/` - an AWS CDK (TypeScript) app. `WiwaCertificateStack`
  (us-east-1, for the CloudFront cert) and `WiwaInfraStack` (your deploy
  region) which has everything else: two Lambda functions running the same
  container image (`WiwaFunction` for public traffic, `WiwaWorkerFunction`
  for one-off management commands - migrations, `populate_blog` - invoked
  directly rather than over HTTP), the S3 buckets, CloudFront, and Route53
  records.
- **Legacy static site**: the root-level Lume/Deno files (`_config.ts`,
  `blog/`, `projects/`, etc.) are what this site used to be, deployed to
  GitHub Pages. That deploy is retired, but the `blog/` markdown files are
  still the source of truth for `populate_blog` (see below), so they stay.

### Database: SQLite on Lambda, via Litestream

Lambda's only writable disk is `/tmp`, which doesn't persist across cold
starts. Litestream bridges that gap:

- On cold start, `src/entrypoint.sh` runs `litestream restore` to pull the
  latest replica from S3 down into `/tmp/db.sqlite3` before the app starts.
- It then starts `litestream replicate` in the background, which
  continuously ships WAL changes back to S3 (`LITESTREAM_REPLICA_BUCKET`).
- Every cold start's restore-then-replicate cycle starts a **new litestream
  generation** on top of the restored data - this is expected litestream
  behaviour (it has no way to know a freshly-restored file belongs to the
  old generation lineage) and is lossless, but it does mean old generations
  pile up in S3 over time. `src/litestream.yml` sets a `retention` window to
  prune those automatically.
- **Concurrency**: litestream assumes a single writer. Both Lambda functions
  are pinned to `reservedConcurrentExecutions: 1` in `infra-stack.ts` so
  Lambda never runs two execution environments (each with their own local
  SQLite file) at once - bursts of concurrent requests queue/throttle
  instead of scaling out. Fine for a low-traffic personal blog; revisit if
  traffic grows.

Separately, `WiwaDbBackupSchedule` copies the live replica bucket into
`WiwaDbBackupBucket` once a day, so a bad write or bug in the live path
can't also take out your only backup. Pull that down locally with
`just db-backup-pull` / `just db-backup-restore` (see below).

### SnapStart

Lambda SnapStart is **not currently enabled**, even though the container
image would otherwise support it. Container-image SnapStart requires the
[AWS Lambda Web Adapter](https://github.com/aws/aws-lambda-web-adapter) to
implement specific before-checkpoint/after-restore runtime hooks - that
support merged upstream in
[PR #790](https://github.com/aws/aws-lambda-web-adapter/pull/790)
(2026-07-09) but hasn't shipped in a tagged release yet. Enabling SnapStart
without that fix crashes the adapter during the init/snapshot phase. Once a
release containing that PR is out, bump the adapter version pinned in the
`Dockerfile` and add `snapStart: lambda.SnapStartConf.ON_PUBLISHED_VERSIONS`
back to both functions in `infra/lib/infra-stack.ts`.

## Local development

Requires Docker, and the [`just`](https://github.com/casey/just) command
runner (already wired up in `.devcontainer/devcontainer.json` if you're
using the dev container).

```
just install       # uv sync, npm install (src/, src/wagtail_highlight/, infra/)
docker compose up -d
just python-server  # Django dev server on :8000
just static-watch   # Vite watch, in another terminal
```

Local dev talks to a plain local SQLite file (bind-mounted, so it survives
container restarts) - no litestream/S3 replication locally, that only
happens in deployed environments. A local MinIO container stands in for S3
for media uploads.

Copy `.env.example` to `.env` at the repo root and fill in `DJANGO_SECRET_KEY`
(and optionally `INITIAL_SUPERUSER_USERNAME` / `_PASSWORD` / `_EMAIL` to
auto-create an admin user) - `docker-compose.yml` reads it.

Other useful commands: `just lint`, `just format`, `just migrate`,
`just makemigrations`, `just shell`, `just createsuperuser`. Run
`just --list` for the full set.

## Deploying

```
just deploy
```

This runs `cdk deploy --all --require-approval never` from `infra/`, which
builds and pushes the container image and rolls out both CloudFormation
stacks. It needs:

- AWS credentials for the target account, with enough permissions to manage
  Lambda, S3, CloudFront, API Gateway, Route53 and ACM (an admin-ish role is
  simplest for a personal project like this).
- A Route53 public hosted zone for `FULLY_QUALIFIED_DOMAIN` already existing
  in that account - the stacks look it up, they don't create it.
- These environment variables:

  | Variable | Purpose |
  |---|---|
  | `DJANGO_SECRET_KEY` | Django's `SECRET_KEY` |
  | `FULLY_QUALIFIED_DOMAIN` | e.g. `lukewiwa.com` - must match an existing Route53 hosted zone |
  | `SUB_DOMAIN` | Optional. Leave unset/empty to deploy on the apex domain (`www.<domain>` is then also wired up automatically). Set to e.g. `staging` to deploy on `staging.<domain>` instead, for testing a change before it touches the real domain. |
  | `INITIAL_SUPERUSER_USERNAME` / `_PASSWORD` / `_EMAIL` | Auto-created Wagtail admin user on first boot. `populate_blog` expects the username `lukewiwa` specifically (it's hardcoded as the author of imported posts) |
  | `CDK_DEFAULT_ACCOUNT` / `CDK_DEFAULT_REGION` | Usually picked up automatically from your AWS CLI config; set explicitly if not |

**First deploy on a new domain**: strongly consider setting `SUB_DOMAIN` to
something like `staging` first, verifying the site actually works (admin
login, a blog page, litestream replicating), and only then redeploying with
`SUB_DOMAIN` unset to move onto the real apex domain. CloudFormation's
`AWS::Route53::RecordSet` **silently overwrites** an existing record at the
same name with no prompt - if the apex domain already points somewhere
(e.g. GitHub Pages), deploying straight to it is a one-shot, no-rollback
DNS cutover.

Other infra commands: `just infra-build`, `just infra-test`,
`just infra-watch`.

## Database backups

`WiwaDbBackupSchedule` copies the live litestream replica into a separate
S3 bucket once a day. To pull that down locally:

```
just db-backup-pull      # aws s3 sync's the replica into ./tmp/db-backup/
just db-backup-restore   # ^ plus `litestream restore` into ./tmp/db.sqlite3
```

`db-backup-pull` resolves the bucket name from the deployed stack's
CloudFormation output automatically (`aws cloudformation describe-stacks
--stack-name WiwaInfraStack`) - set `DB_BACKUP_BUCKET_NAME` yourself to
override. `db-backup-restore` needs the `litestream` CLI installed locally
(`brew install benbjohnson/litestream/litestream` or see
[litestream.io](https://litestream.io/install/)).

## Migrating off GitHub Pages

This repo used to be a [Lume](https://lumeland.github.io/) static site
deployed to GitHub Pages. That's retired: `.github/workflows/main.yaml` (the
old build-and-publish-to-`master` workflow) is gone, and DNS has been
repointed at the new stack. GitHub's API refuses to fully deactivate Pages
on a `<username>.github.io` repo via `DELETE /repos/{owner}/{repo}/pages`
("not allowed") - if you want it gone from repo Settings too, that has to be
done by hand from Settings > Pages in the GitHub web UI. Functionally it
doesn't matter either way: nothing points at it anymore, and nothing will
redeploy it.

The `blog/` markdown files at the repo root are still used - they're the
source content that `just` / the deploy pipeline's `populate_blog`
management command imports into Wagtail. Don't delete them.
