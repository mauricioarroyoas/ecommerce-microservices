FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

#for debugger
EXPOSE 9229


# Run the app (use `npm run dev` for development, `start` for prod)
CMD ["npm", "run", "dev"]
