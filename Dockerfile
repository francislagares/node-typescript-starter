FROM node:alpine AS development

WORKDIR /appdir

COPY package.json .
COPY yarn.lock .

RUN yarn set version stable
RUN yarn install

# COPY
COPY . .

RUN yarn install

EXPOSE 4000

CMD ["yarn", "start:dev"]

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /appdir

COPY package.json .

RUN yarn install --only=production

COPY . .

COPY --from=development ./appdir/dist ./dist

CMD ["node", "dist/server.js"]