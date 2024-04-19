FROM node:20.10.0

WORKDIR /app

COPY ./package.json ./
RUN npm i -s
COPY . .
RUN npm run build

EXPOSE 3000

CMD npm start
