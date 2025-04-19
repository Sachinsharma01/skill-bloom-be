import express from 'express';
import { validateRequest } from 'middlewares/validate-request';
import { getProfileSchema, updateProfileSchema } from './validator';
import { authMiddleware } from 'middlewares/auth';
import { userController } from './controller';
import { validateUser } from 'middlewares';

const userRouter = express.Router();

userRouter.get(
    '/profile/:userId',
    validateRequest(getProfileSchema),
    authMiddleware,
    userController.getProfileDetails,
);

userRouter.put(
    '/profile/:userId',
    validateRequest(updateProfileSchema),
    authMiddleware,
    validateUser,
    userController.updateProfileDetails,
);

export default userRouter;
