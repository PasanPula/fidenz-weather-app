# 1. For build React app
FROM node:alpine as build

# Declaring env
ENV VITE_BASE_URL=http://api.openweathermap.org/data/2.5/group
ENV VITE_API_KEY=851cdbf012e0cb94d39e947e62e641c2

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=build /app/dist /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
