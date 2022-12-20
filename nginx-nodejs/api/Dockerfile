FROM node:16.19.0-alpine

WORKDIR /usr/nodeapi/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000