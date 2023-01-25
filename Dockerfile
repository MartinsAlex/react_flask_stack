

FROM node:16.13.0-alpine

# Set the working directory to /app inside the container
WORKDIR /usr/src/app
# Copy app files
COPY . .
RUN yarn install --ignore-engines --pure-lockfile

# Build the app
RUN yarn build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD ["yarn", "run"]