FROM node:18-alpine


WORKDIR /app


COPY package*.json ./



# Bundle app source
COPY . .




EXPOSE 8080


CMD ["npm", "start"]
