FROM node:latest

EXPOSE 8080

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i npm@latest -g

COPY . .

CMD ["node","index.js"]
