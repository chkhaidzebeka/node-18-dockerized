FROM node:18-alpine

RUN addgroup -S node-app && adduser -S node-app -G node-app

WORKDIR /app

COPY ./package*.json ./

RUN chown -R node-app:node-app /app

USER node-app

RUN npm i

COPY --chown=node-app:node-app . .

RUN ls -la

CMD ["npm", "run", "dev"]
