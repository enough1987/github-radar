FROM node:9.4.0-alpine

WORKDIR /users/app

COPY ./package.json ./
RUN npm install -qy

COPY . ./

CMD ["npm", "start"]
