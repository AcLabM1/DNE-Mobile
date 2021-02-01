FROM node:12.9

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 2020
CMD ["npm", "serve"]
