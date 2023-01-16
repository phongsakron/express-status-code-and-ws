# create docker image for express typescript app
FROM node:16-alpine3.15 as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine3.15

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY --from=builder /app/dist ./dist

EXPOSE 3000
EXPOSE 443

CMD ["node", "dist/index.js"]
