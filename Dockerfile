# Base image
FROM node:18

# Make app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Expose port (same as your app)
EXPOSE 4002

# Command to run app
CMD ["npm", "start"]
