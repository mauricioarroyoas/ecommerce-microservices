import express from "express";
import "dotenv/config";
import { AppDataSource } from "./ormconfig";
import { createUser, getAllUsers, getUser } from "./user.controller";
import seed from "./seeders/seed";

const app = express();
app.use(express.json());
app.post("/users", createUser);
app.get("/users", getAllUsers);
app.get("/users/:id", getUser);

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    await seed();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
