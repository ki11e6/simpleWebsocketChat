# Use the official Node.js 18.16 image as a parent image
FROM node:18.16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . /app

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 5000

ENV NAME chatapp

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]

