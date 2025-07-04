# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (initially, Certbot needs this) and 443
EXPOSE 80
EXPOSE 443

# CMD will be overridden by docker-compose for initial setup, but keep for standalone
CMD ["nginx", "-g", "daemon off;"]