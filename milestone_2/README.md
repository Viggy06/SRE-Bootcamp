
# SRE Bootcamp

This folder contains all the detail of milestone 2

## Milestone:-  2 - Containerise REST API

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/desktop/install/linux/)
- [Make](https://www.gnu.org/software/make/#download)
- [Postman](https://www.postman.com/downloads/)


### Follow these steps to set up the Student API:

###  Build the Docker Image
```bash
make docker-build
```

###  Create Docker Network
```bash
make docker-network
```

###  Run the PostgreSQL Container
```bash
make docker-postgres
```

###  Run the Application Container
```bash
make docker-run
```

###  Start the Postman
Start postman and import the student_apis_postman_collection.json and start reaching the respective endpoints