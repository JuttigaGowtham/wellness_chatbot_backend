import express from 'express';
import { signup, requestOtp, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/request-otp', requestOtp);
router.post('/verify-otp', verifyOtp);

export default router;