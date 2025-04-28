import { Request, Response } from "express";
import Rating from "./Rating";
import { AppDataSource } from "./ormconfig";

export const postRating = async (req: Request, res: Response) => {
  try {
    const { stars, productId, userId } = req.body;
    const rating = new Rating(stars, productId, userId);

    const ratingRepository = AppDataSource.getRepository(Rating);
    await ratingRepository.save(rating);
    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ error });
  }
};


export const getRatings = async (req: Request, res: Response) => {
  const ratingRepository = AppDataSource.getRepository(Rating);
  const ratings = await ratingRepository.find();
  res.json(ratings);
};

