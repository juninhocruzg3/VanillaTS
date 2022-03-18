#!make

define run
	docker-compose -f docker/docker-compose.yml -f $1 --env-file $2 $3
endef

docker-dev:
	$(call run, docker/dev/docker-compose.dev.yml, docker/dev/.env, run) --rm --service-ports web

dev:
	npm i
	npx env-cmd -f ./docker/dev/.env npm run dev