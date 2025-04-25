import { Request, Response } from "express";
import { AppDataSource } from "./ormconfig";
import { User } from "./User";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ message: "Name and email are required" });
  }

  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.name = name;
    user.email = email;

    await userRepository.save(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find(); // 👈 this is the key line
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};