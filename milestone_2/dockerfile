#Stage 1: Build
FROM node:24-alpine3.23 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN chmod +x docker-entrypoint.sh

# Stage 2: Production
FROM node:24-alpine3.23
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app /app 

EXPOSE 5000

ENTRYPOINT ["./docker-entrypoint.sh"]
