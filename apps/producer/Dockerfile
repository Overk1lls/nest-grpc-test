FROM node:23-slim

WORKDIR /app

COPY ../../ ./

RUN yarn && yarn build

CMD ["node", "dist/apps/producer/main"]
