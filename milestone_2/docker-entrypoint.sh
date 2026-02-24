#!/bin/sh
set -e

echo "Running migrations..."
npx node-pg-migrate up

echo "Starting server..."
exec npm start
