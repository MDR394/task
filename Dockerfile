# -------- Step 1: Build the Next.js app --------
# Use a lightweight Node.js image for building the app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json (or yarn.lock)
# This allows Docker to cache node_modules layer for faster builds
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your app's source code into the container
COPY . .

# Build the Next.js app (output will go into `.next/`)
RUN npm run build


# -------- Step 2: Run the app in a lightweight container --------
# Use a fresh Node.js base image for production
FROM node:18-alpine

# Set working directory again in the new container
WORKDIR /app

# Copy the built app and all other files from the builder stage
COPY --from=builder /app ./

# Expose the port your Next.js app runs on (default is 3000)
EXPOSE 3000

# Start the app using the Next.js "start" script
CMD ["npm", "start"]
