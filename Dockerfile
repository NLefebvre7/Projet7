FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i -g nodemon && npm install cookie-parser -g
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]