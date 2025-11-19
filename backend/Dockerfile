FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy source
COPY . .

EXPOSE 4000

ENV NODE_ENV=production

CMD [ "node", "src/index.js" ]
