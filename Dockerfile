FROM node:latest as node

WORKDIR /usr/src/app

COPY . .

RUN npm i -f && npm audit fix

RUN npm run format

CMD ["npm", "run", "dev"]