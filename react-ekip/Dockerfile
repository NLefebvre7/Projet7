FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i -g react-router-dom
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]  