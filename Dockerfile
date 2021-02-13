FROM node:latest

WORKDIR /usr/app
COPY ./ /usr/app/

RUN npm install -g expo-cli

EXPOSE 19000 19001 19002

CMD npm i -f && npm start
