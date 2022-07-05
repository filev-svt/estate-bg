FROM node:18-alpine

WORKDIR /app/react-ui

COPY ./package*.json ./

RUN npm install

COPY . .

CMD npm start

