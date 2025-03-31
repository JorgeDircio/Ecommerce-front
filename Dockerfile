# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY .env .env

RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Ejecución
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]
