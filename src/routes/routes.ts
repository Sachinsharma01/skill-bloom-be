import userRouter from 'api/user';
import authRouter from '../api/auth';
import express from 'express';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter)
export default router;
