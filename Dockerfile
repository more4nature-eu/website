FROM node:22.2.0-alpine

WORKDIR /app

COPY . .

RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]