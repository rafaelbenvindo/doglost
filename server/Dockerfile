FROM node:12

WORKDIR /usr/dogserver

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g knex && knex migrate:latest

CMD ["npm", "start"]