import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbConnector from './db/dbConnector.js';

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

dbConnector(MONGO_DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server run on porn: ${PORT}`);
    });
  }).catch((error) => console.log(error));



