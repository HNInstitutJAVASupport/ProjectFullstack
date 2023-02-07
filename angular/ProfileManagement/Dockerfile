###############
### STAGE 1: Compile and Build angular codebase
###############

# Use official node image as the base image
FROM node:alpine as node

# Add the source code to app
COPY . /app

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm cache clean --force
RUN npm install
RUN npm install -g @angular/cli --force

# Build application
RUN ng build

###############
### STAGE 2: Serve app with nginx ###
###############

# Use official nginx image as the base image
FROM nginx:alpine

# Copy nginx.conf to required location
#COPY nginx.conf /etc/nginx/nginx.conf

# Copy executables in html folder
#EXPOSE 4200
COPY --from=node /app/dist/profile-management /usr/share/nginx/html

