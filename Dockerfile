# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build for web
RUN npx expo export --platform web

# Production Stage
FROM nginx:alpine

# Copy built assets from builder stage
# Expo exports to 'dist' by default in newer versions, check if it's 'web-build' in older ones.
# With "npx expo export", default is 'dist'.
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
