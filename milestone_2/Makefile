.PHONY: docker-build  docker-postgres  docker-run docker-network

# Build the Docker image
docker-build:
	docker build --no-cache -t student-api:1.0.0 .

#Create a Docker network
docker-network:
	docker network create student-network

# Run the PostgreSQL container
docker-postgres:
	docker pull postgres:16-alpine
	docker run -d --name postgres-container --network student-network  --env-file .env postgres:16-alpine

# Run the Docker container for the application
docker-run:
	docker run -d -p 5000:5000 --name student_app --network student-network --env-file .env student-api:1.0.0

