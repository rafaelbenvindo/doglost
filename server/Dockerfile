FROM node:12

WORKDIR /usr/dogserver

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]