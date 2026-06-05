FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --ignore-scripts

COPY frontend/package*.json frontend/
RUN cd frontend && npm install

COPY server/ server/
COPY frontend/ frontend/
RUN cd frontend && npm run build

EXPOSE 3000

CMD ["node", "server/index.js"]
