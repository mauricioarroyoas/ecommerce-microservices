import express from 'express';
import 'dotenv/config';
import { AppDataSource } from './ormconfig';
import { createUser, getAllUsers, getUser } from './user.controller';

const app = express();
app.use(express.json()); 

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

app.post('/users', createUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUser);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
