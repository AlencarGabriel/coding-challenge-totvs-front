FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

RUN npm i -g @angular/cli@^11

COPY . .

EXPOSE 4200

CMD ["npm", "start"]


