import { AppDataSource } from "../ormconfig";
import Product from "../Product";
import Rating from "../Rating";

export default async function seed() {

  const productRepository = AppDataSource.getRepository(Product);
  const ratingRepository = AppDataSource.getRepository(Rating);
 
  const products = await productRepository.find();
  if (products.length === 0) {
    await productRepository.save([
      { name: "Laptop", description: "High-end gaming laptop", price: 1200.0 },
      { name: "Smartphone", description: "Latest model with 5G", price: 800.0 },
      {
        name: "Headphones",
        description: "Noise-cancelling over-ear headphones",
        price: 150.0,
      },
      {
        name: "Monitor",
        description: "4K resolution 27-inch monitor",
        price: 400.0,
      },
      {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 100.0,
      },
    ]);
  }

  const ratings = await ratingRepository.find();
  if (ratings.length === 0) {
    await ratingRepository.save([
      { stars: 5, productId: 1, userId: 1 }, // John Doe rates Laptop 5 stars
      { stars: 4, productId: 2, userId: 2 }, // Jane Smith rates Smartphone 4 stars
      { stars: 3, productId: 3, userId: 3 }, // Alice Johnson rates Headphones 3 stars
      { stars: 5, productId: 4, userId: 4 }, // Bob Brown rates Monitor 5 stars
      { stars: 4, productId: 5, userId: 5 }, // Charlie Davis rates Keyboard 4 stars
    ]);
  }
  console.log("Seeding completed!");
}
