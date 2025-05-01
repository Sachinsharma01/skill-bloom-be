import express from 'express';
import controller from './controller';
import { authMiddleware } from 'middlewares/auth';
import { validateUser } from 'middlewares';
import { validateRequest } from 'middlewares/validate-request';
import { createOrderSchema } from './validator';
const router: express.Router = express.Router();


router.get(
    '/:userId',
    authMiddleware,
    validateUser,
    controller.getMyOrders,
);

router.post(
    '/',
    authMiddleware,
    validateRequest(createOrderSchema),
    controller.createOrder,
);



export default router;