.PHONY: docker-build db-up db-migrate api-up down install lint test

# Build the Docker image
docker-build:
	docker build -t student-api:1.0.0 .

# Start database
db-up:
	docker compose up -d postgres_container

# Run migrations (one-time job)
db-migrate:
	docker compose run --rm migrate
	docker rmi db_migrate:v1

# Start full app
api-up:
	@echo "Starting DB..."
	docker compose up -d postgres_container
	@echo "Running Migrations..."
	docker compose run --rm migrate
	@echo "Starting API..."
	docker compose up -d student_api

# Stop everything and delete volumes
down:
	docker compose down -v

# Install dependencies
install:
	npm install

# Run tests
test:
	npm test

# Lint
lint:
	npm run lint
