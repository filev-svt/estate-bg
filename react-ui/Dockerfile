FROM node:18-alpine

WORKDIR /react-ui

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

