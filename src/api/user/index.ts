import express from 'express';
import { validateRequest } from 'middlewares/validate-request';
import { getProfileSchema } from './validator';
import { authMiddleware } from 'middlewares/auth';
import { userController } from './controller';
const userRouter = express.Router();

userRouter.get(
    '/profile/:userId',
    validateRequest(getProfileSchema),
    authMiddleware,
    userController.getProfileDetails,
);

export default userRouter;
