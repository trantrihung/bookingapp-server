import express from 'express';
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from '../app/controllers/RoomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

//CREATE ROOM
router.post('/:hotelId', verifyAdmin, createRoom);
//UPDATE ROOM
router.put('/:id', verifyAdmin, updateRoom);
//DELETE ROOM
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
// GET ROOM
router.get('/:id', getRoom);
// GET ALL ROOM
router.get('/', getAllRoom);

export { router };
