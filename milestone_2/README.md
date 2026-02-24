
# SRE Bootcamp
  This repo will contain all about milestone_1

## Milestone:-  1 - Create a simple REST API Webserver

## Prerequisites
  Make sure you have the following installed on your system:
  - [Node.js](https://nodejs.org/en/download/package-manager)
  - [PostgreSQL](https://www.postgresql.org/download/)
  - [Make](https://www.gnu.org/software/make/#download)
  - [Postman](https://www.postman.com/downloads/)

### Follow these steps to set up the Student API:

```bash
# Install Dependencies
make install

# Setup PostgreSQL
sudo -i -u postgres

psql

CREATE DATABASE postgres;
CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE postgres TO admin;
GRANT USAGE ON SCHEMA public TO admin;
GRANT CREATE ON SCHEMA public TO admin;

\q

exit
```

### Run Migrations
```bash
make migrate
```

### Run Tests
```bash
make test
```

###  Start the API
```bash
make start
```
###  Start the Postman
Start postman and import the student_apis_postman_collection.json and start reaching the respective endpoints
