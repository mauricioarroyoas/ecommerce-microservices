import axios from "axios";

const userServiceUrl = "http://user-service:3000/users";

interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUser(userId: string): Promise<User> {
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


export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(`${userServiceUrl}`);
    return response.data;
  } catch (error) {
    throw error;    
  }
}
