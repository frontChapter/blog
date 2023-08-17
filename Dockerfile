FROM oven/bun AS deps
WORKDIR /app
COPY package.json ./
RUN bun install --network-timeout 10000000

FROM oven/bun AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN bun run build

FROM oven/bun AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/ ./

EXPOSE 3000
ENV PORT 3000
CMD ["bun", "start"]