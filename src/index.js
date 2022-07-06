import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { routes } from './routes/index.js';

dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

//middleware
routes(app);

app.listen(8800, () => {
  connectDB();
  console.log('Connected to backend...');
});
