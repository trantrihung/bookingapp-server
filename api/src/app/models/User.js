import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    passWord: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
