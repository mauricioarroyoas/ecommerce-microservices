import express from 'express';
import 'dotenv/config';
import { AppDataSource } from './ormconfig';
import { createUser } from './user.controller';

const app = express();
app.use(express.json()); // ✅ important for reading JSON bodies

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

app.post('/users', createUser);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
