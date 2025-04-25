import express from "express";
import { AppDataSource } from "./ormconfig";
import { craeteProduct, getAllProducts } from "./product.controller";

const app = express();
app.use(express.json());

// const productController = new ProductController();
// app.get("/products", productController.getAllProducts);
// app.get("/products/:id", productController.getProductById);
// app.post("/products", productController.createProduct);
// app.put("/products/:id", productController.updateProduct);
// app.delete("/products/:id", productController.deleteProduct);

app.post("/products", craeteProduct);
app.get("/products", getAllProducts);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

