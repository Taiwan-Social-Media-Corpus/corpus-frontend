FROM node:18-bullseye-slim as builder

WORKDIR /app

RUN yarn global add pnpm

RUN pnpm config set auto-install-peers true

COPY package.json pnpm-lock.yaml ./

RUN pnpm i

RUN pnpm i pm2

COPY . /app

RUN pnpm build

FROM node:18-bullseye-slim as release

WORKDIR /app

RUN yarn global add pnpm

RUN pnpm config set auto-install-peers true

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/deployment ./deployment 