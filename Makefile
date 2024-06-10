MAKEFLAGS += --jobs

.PHONY: python-server
python-server:
	python ./src/manage.py runserver 0.0.0.0:8000

.PHONY: static-build
static-build:
	python src/manage.py collectstatic --noinput --clear

.PHONY: static-watch
static-watch:
	npm --prefix=src run dev


.PHONY: run
run: python-server static-watch

.PHONY: deploy
deploy:
	cd infra && npm run cdk -- deploy --require-approval never
