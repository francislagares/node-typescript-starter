FROM node:alpine AS development

RUN apk update && apk add --no-cache nodejs && corepack enable
RUN addgroup backend && adduser -S -G backend francis

USER francis

WORKDIR /node-api

COPY package.json tsconfig.json pnpm-lock.yaml ./

USER root

RUN chown -R francis:backend .

USER francis

RUN corepack enable && pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "start:dev"]