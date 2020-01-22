# base image
FROM node:13.6 AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.0-rc.3

# add app
COPY . /app

# Compile
RUN ng build

# final image
FROM nginx:alpine

COPY --from=build /app/dist/JADfront /usr/share/nginx/html

EXPOSE 80
