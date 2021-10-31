FROM node:latest
WORKDIR /app
COPY  package.json .
RUN npm install
COPY . .
EXPOSE 9000
VOLUME [ "/app/node_modules" ]
CMD ["npm", "start"]