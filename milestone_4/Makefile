.PHONY: docker-build db-up db-migrate api-up down install lint test

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

        #clean up
        docker rmi db_migrate:v1

# Stop everything and delete volume
down:
        docker compose down -v

install:
        npm install

# Perform code linting
lint:
        npm run lint