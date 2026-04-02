.PHONY: docker-build db-up db-migrate api-up down

# Build the Docker image
docker-build:
	docker build --no-cache -t student-api:1.0.0 .

#Database up
db-up:
	docker compose up -d postgres_container

#Migrate Database
db-migrate:
	docker compose run --rm -d migrate

#Start App
api-up:
	@echo "Starting DB..."
	docker compose up -d postgres_container
	@echo "Running Migrations..."
	docker compose run --rm -d migrate
	@echo "Starting the api..."
	docker compose up -d student_api

<<<<<<< HEAD
=======
	#clean up
	docker rmi db_migrate:v1

>>>>>>> 9e5b830efd526de2130ab402c4f8f52e3fd4c89b
# Stop everything and delete volume
down:
	docker compose down -v

<<<<<<< HEAD

=======
>>>>>>> 9e5b830efd526de2130ab402c4f8f52e3fd4c89b
