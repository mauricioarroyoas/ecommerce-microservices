import { Request, Response } from "express";
import Rating from "../entities/Rating";
import { AppDataSource } from "../config/ormconfig";
import { getUser, getUsers } from "../services/userService";

export const postRating = async (req: Request, res: Response) => {
  try {
    const { stars, productId, userId } = req.body;
    const rating = new Rating(stars, productId, userId);
    const ratingRepository = AppDataSource.getRepository(Rating);
    await ratingRepository.save(rating);

    const user: any = await getUser(userId);
    const ratingResponse = new RatingDTO(
      rating.id,
      rating.stars,
      rating.productId,
      user
    );
    res.status(201).json(ratingResponse);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getRatings = async (req: Request, res: Response) => {
  const ratingRepository = AppDataSource.getRepository(Rating);
  const ratings = await ratingRepository.find();
  const users = await getUsers();

  const ratingsResponse = ratings.map((rating) => {
    const user = users.find((u) => u.id === rating.userId);
    return new RatingDTO(rating.id, rating.stars, rating.productId, user);
  })
  res.json(ratingsResponse);
};

class RatingDTO {
  constructor(
    public readonly id: number,
    public readonly stars: number,
    public readonly productId: number,
    public readonly user: any
  ) {}
}


