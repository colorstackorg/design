# Stage: BUILD
FROM node:14-alpine as build

# Change the working directory to /app.
WORKDIR /app

# Copy all of the source files from the computer to the Docker file system.
COPY . .

# Install all of the dependencies.
RUN yarn

# Build the storybook static application.
RUN yarn build:storybook

# Start from a fresh Nginx image.
FROM nginx:stable-alpine

# Copy the /build folder (including the index.html file that React built) from
# the "build" stage to Docker filesytem.
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Copy the nginx.conf file from the "build" stage to Docker filesystem.
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 on the Docker container.
EXPOSE 80

# Serve the built contents (index.html) using nginx (and it's configuration).
CMD ["nginx", "-g", "daemon off;"]
