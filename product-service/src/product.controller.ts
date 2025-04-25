import { Request, Response } from "express";
import { AppDataSource } from "./ormconfig";
import { Product } from "./Product";

export const craeteProduct = async (req: Request, res: Response) => {
  const { name, description, price, category } = req.body;
  try {
    const productRepository = AppDataSource.getRepository(Product);
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();
  res.json(products);
}
