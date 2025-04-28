import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import Product from "../entities/Product";
import { getUser } from "../services/userService";

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, userId } = req.body;
  try {
    const user = await getUser(userId);

    const productRepository = AppDataSource.getRepository(Product);
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    await productRepository.save(product);
    res.status(201).json({ ...product, ...user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();
  res.json(products);
};
