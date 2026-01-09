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
start:
	just python-server & just static-watch

# Deploy infrastructure using CDK
deploy:
	cd infra && npm run cdk -- deploy --all --require-approval never
