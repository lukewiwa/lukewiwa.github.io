# Default recipe - show available commands
default:
	@just --list

# Run Django development server
python-server:
	cd src && uv run ./manage.py runserver 0.0.0.0:8000

# Build wagtail_highlight's frontend bundle. It's a separate npm package
# from src/'s own frontend, and has to be built before collectstatic picks
# up its static files.
wagtail-highlight-build:
	npm --prefix=src/wagtail_highlight install
	npm --prefix=src/wagtail_highlight run build

# Collect static files
static-build: wagtail-highlight-build
	cd src && uv run ./manage.py collectstatic --noinput --clear

# Watch and build static assets
static-watch:
	npm --prefix=src run dev

# Start both python server and static watch in parallel
[parallel]
start: python-server static-watch

# Deploy infrastructure using CDK
deploy:
	cd infra && npm run cdk -- deploy --all --require-approval never

# Django commands

# Run Django migrations
migrate:
	cd src && uv run ./manage.py migrate

# Create Django migrations
makemigrations:
	cd src && uv run ./manage.py makemigrations

# Open Django shell
shell:
	cd src && uv run ./manage.py shell

# Create Django superuser
createsuperuser:
	cd src && uv run ./manage.py createsuperuser

# Linting and formatting

# Run ruff linter on Python code
lint-python:
	cd src && uv run ruff check .

# Format Python code with ruff
format-python:
	cd src && uv run ruff format .

# Fix Python linting issues automatically
fix-python:
	cd src && uv run ruff check --fix .

# Run eslint on JavaScript/TypeScript code
lint-js:
	npm --prefix=src run lint

# Lint Django templates with djlint
lint-templates:
	cd src && uv run djlint --check .

# Format Django templates with djlint
format-templates:
	cd src && uv run djlint --reformat .

# Run all linters
lint: lint-python lint-js lint-templates

# Format all code
format: format-python format-templates

# Deno static site commands (legacy github pages site, kept around because
# populate_blog reads post content from ./blog)

# Build static site with Lume
lume-build:
	deno task build

# Serve static site with Lume
lume-serve:
	deno task serve

# Infrastructure commands

# Build infrastructure TypeScript
infra-build:
	cd infra && npm run build

# Run infrastructure tests
infra-test:
	cd infra && npm test

# Watch infrastructure TypeScript changes
infra-watch:
	cd infra && npm run watch

# Build frontend TypeScript
frontend-build:
	npm --prefix=src run build

# Type check frontend
frontend-typecheck:
	npm --prefix=src run build

# Database backup/restore
#
# The live sqlite database is continuously replicated by litestream into
# WiwaDbBucket (see infra/lib/infra-stack.ts). WiwaDbBackupSchedule copies
# that replica into a separate WiwaDbBackupBucket once a day so a bad
# write/bug can't take out your only backup. These recipes pull that backup
# down locally. `litestream` (https://litestream.io) must be installed
# locally for db-backup-restore.

# Resolve the backup bucket name, either from DB_BACKUP_BUCKET_NAME or by
# asking CloudFormation for the deployed stack's output.
_db_backup_bucket:
	#!/usr/bin/env bash
	set -euo pipefail
	if [ -n "${DB_BACKUP_BUCKET_NAME:-}" ]; then
		echo "$DB_BACKUP_BUCKET_NAME"
	else
		aws cloudformation describe-stacks --stack-name WiwaInfraStack \
			--query "Stacks[0].Outputs[?OutputKey=='DbBackupBucketName'].OutputValue" \
			--output text
	fi

# Pull the latest backed-up litestream replica down into ./tmp/db-backup
db-backup-pull:
	#!/usr/bin/env bash
	set -euo pipefail
	bucket="$(just _db_backup_bucket)"
	mkdir -p ./tmp/db-backup
	aws s3 sync "s3://${bucket}/" ./tmp/db-backup/
	echo "Synced s3://${bucket} to ./tmp/db-backup/"

# Restore a usable sqlite3 file from the backup pulled down by db-backup-pull
db-backup-restore out="./tmp/db.sqlite3": db-backup-pull
	litestream restore -o {{ out }} ./tmp/db-backup/db
	echo "Restored {{ out }}"

# Development helpers

# Install all dependencies
install:
	cd src && uv sync
	npm --prefix=src install
	npm --prefix=src/wagtail_highlight install
	cd infra && npm install

# Clean build artifacts
clean:
	rm -rf src/staticfiles
	rm -rf src/frontend/dist
	rm -rf infra/cdk.out
	rm -rf tmp
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete
