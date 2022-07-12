import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongoDB successfully');
  } catch (error) {
    throw error;
  }
}
export { connectDB };
