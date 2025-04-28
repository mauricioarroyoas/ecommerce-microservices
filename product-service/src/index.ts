import express from "express";
import { AppDataSource } from "./config/ormconfig";
import { craeteProduct, getAllProducts } from "./controllers/product.controller";
import { getRatings, postRating } from "./controllers/rating.controller";
import seed from "./seeders/seed";

const app = express();
app.use(express.json());
app.post("/products", craeteProduct);
app.get("/products", getAllProducts);
app.post("/ratings", postRating);
app.get("/ratings", getRatings);

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
    await seed();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

