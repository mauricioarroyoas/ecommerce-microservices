import User from "../User";
import { AppDataSource } from "../ormconfig";

export default async function seed() {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  if (users.length === 0) {
    await userRepository.save([
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" },
      { name: "Alice Johnson", email: "alice.johnson@example.com" },
      { name: "Bob Brown", email: "bob.brown@example.com" },
      { name: "Charlie Davis", email: "charlie.davis@example.com" },
    ]);
  }
  console.log("Seeding completed!");
}
