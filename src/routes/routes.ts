import userRouter from 'api/user';
import authRouter from '../api/auth';
import express from 'express';
import validateRouter from '../routes/validate';
import publicRouter from '../api/public/routes';
import orderRouter from '../api/orders';
import dashboardRouter from '../api/dashboard';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter)
router.use('/validate', validateRouter);
router.use('/public', publicRouter);
router.use('/orders', orderRouter)
router.use('/dashboard', dashboardRouter)


router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});
export default router;
