FROM node:8

WORKDIR /app

COPY package.json .
COPY public .
COPY index.js .

RUN npm install --production

CMD [ "node", "index.js"]
