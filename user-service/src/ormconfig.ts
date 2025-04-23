import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // or container name if using Docker
  port: 5432,
  username: 'postgres',
  password: 'password', // make sure to set this in .env later
  database: 'user_service_db',
  synchronize: true, // set to false in production!
  logging: true,
  entities: [
    // Add entities here
  ],
});
