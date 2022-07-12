import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes/index.js';
import { connectDB } from './config/db/index.js';
import cookieParser from 'cookie-parser';

const app = express();

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

//middleware
app.use(cookieParser());
//json
app.use(express.json());
routes(app);

app.listen(8800, () => {
  connectDB();
  console.log('Connected to backend...');
});
