import express from 'express';
import { login, register } from '../app/controllers/AuthController.js';
const router = express.Router();

//CREATE USER
router.post('/register', register);
//LOGIN
router.post('/login', login);

export { router };
