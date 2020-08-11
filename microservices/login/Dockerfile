FROM node:10.1-alpine

WORKDIR /src/index/

ADD ./package.json .

RUN ["npm", "install"]

COPY . .

RUN chown -R node:node /src/index

USER node
