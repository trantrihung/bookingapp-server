import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../app/controllers/UserController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello user, you are login');
// });
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are logged in and you can delete you account');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are logged in and you can delete all acount');
// });
// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getAllUser);

export { router };
