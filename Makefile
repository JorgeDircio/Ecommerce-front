
# Desarrollo (local)
up-dev:
	docker-compose -f docker-compose.development.yml up

build-dev:
	docker-compose -f docker-compose.development.yml up --build

down-dev:
	docker-compose -f docker-compose.development.yml down
