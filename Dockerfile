FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i -g nodemon && npm install -g cors && npm -g install bootstrap && npm i create-react-app -g
EXPOSE 8080
CMD [ "npm", "start" ]