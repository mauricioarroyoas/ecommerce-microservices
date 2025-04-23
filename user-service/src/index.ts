import express from 'express';
import { AppDataSource } from './ormconfig';
import 'reflect-metadata';
import 'dotenv/config';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

app.get('/', (req, res) => {
  res.send('User Service is up and running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
