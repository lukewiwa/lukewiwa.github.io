MAKEFLAGS += --jobs

.PHONY: python-server
python-server:
	cd src && uv run ./manage.py runserver 0.0.0.0:8000

.PHONY: static-build
static-build:
	cd src && uv run ./manage.py collectstatic --noinput --clear

.PHONY: static-watch
static-watch:
	npm --prefix=src run dev


.PHONY: start
start: python-server static-watch

.PHONY: deploy
deploy:
	cd infra && npm run cdk -- deploy --all --require-approval never
