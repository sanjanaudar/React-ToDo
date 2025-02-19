FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json  
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Describe the port your application is listening to
EXPOSE 3000

# Healthcheck
HEALTHCHECK CMD curl -fsSL http://localhost:3000 || exit 1

# Command to run your application
CMD ["npm", "start"]