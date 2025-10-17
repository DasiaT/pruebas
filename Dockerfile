FROM node:22-alpine AS build

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:22-alpine

WORKDIR /app
COPY --from=build /app /app

EXPOSE 8080
CMD ["yarn", "start"]
