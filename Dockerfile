FROM node:alpine AS development

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN corepack enable
RUN pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "start:dev"]

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json .

RUN pnpm install --only=production

COPY . .

COPY --from=development ./app/dist ./dist

CMD ["node", "dist/server.js"]