import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const password = req.body.passWord;
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      passWord: hashedPassword,
    });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) return next(createError(404, ' User not found'));

    const isPassWordCorrect = await bcrypt.compare(req.body.passWord, user.passWord);
    if (!isPassWordCorrect) return next(createError(400, 'Wrong password'));

    //! openssl rand -base64 32: auto create token in linux
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    //todo do not show admin and password
    const { passWord, isAdmin, ...other } = user._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...other });
  } catch (err) {
    next(err);
  }
};
