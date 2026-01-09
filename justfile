# Default recipe - show available commands
default:
	@just --list

# Run Django development server
python-server:
	cd src && uv run ./manage.py runserver 0.0.0.0:8000

# Collect static files
static-build:
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

# Deno static site commands

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

# Development helpers

# Install all dependencies
install:
	cd src && uv sync
	npm --prefix=src install
	cd infra && npm install

# Clean build artifacts
clean:
	rm -rf src/staticfiles
	rm -rf src/frontend/dist
	rm -rf infra/cdk.out
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete
