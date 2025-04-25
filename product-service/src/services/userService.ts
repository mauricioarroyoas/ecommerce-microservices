import axios from "axios";

// Base URL of the user service (Docker container name + port)
const userServiceUrl = "http://user-service:3000/users";

interface User {
  id: string;
  name: string;
  email: string;
}

// Function to fetch a user by ID
export async function getUserById(userId: string): Promise<User> {
  try {
    const response = await axios.get<User>(`${userServiceUrl}/${userId}`);
    const user: User = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching user with ID ${userId}:`, error.message);
    } else {
      console.error(
        `Unknown error occurred while fetching user with ID ${userId}`
      );
    }
    throw error; // Re-throw the error
  }
}
