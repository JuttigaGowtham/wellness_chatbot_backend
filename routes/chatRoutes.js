import express from 'express';
import { handleChat } from '../controllers/chatController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Optionally protect the route with auth middleware if we want
// router.post('/', protect, handleChat);
router.post('/', handleChat);

export default router;
