FROM node:18-alpine

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]