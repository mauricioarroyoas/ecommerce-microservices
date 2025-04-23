# Step 1: Use Node.js official image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application
COPY . .

# Step 5: Build TypeScript files
RUN npm run build

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Run the app
CMD ["npm", "start"]
