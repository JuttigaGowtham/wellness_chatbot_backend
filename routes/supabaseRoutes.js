import express from 'express';
import { syncUserDetails, saveChatHistory, getChatHistory } from '../controllers/supabaseController.js';

const router = express.Router();

router.post('/sync-user', syncUserDetails);
router.post('/chat-history', saveChatHistory);
router.get('/chat-history/:email', getChatHistory);

export default router;
