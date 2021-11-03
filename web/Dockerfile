FROM node:12 AS build-step

WORKDIR /usr/buildtmp

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --prod


FROM nginx:alpine

COPY --from=build-step /usr/buildtmp/dist/doglostweb/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'