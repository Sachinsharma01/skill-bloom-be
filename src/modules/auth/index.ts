import express from 'express';
import { authController } from './controller';
import { validateRequest } from 'middlewares/validate-request';
import { signInSchema, signUpSchema } from './validator';

const authRouter = express.Router();

authRouter.post('/signup', validateRequest(signUpSchema), authController.signUp);
authRouter.post('/signin', validateRequest(signInSchema), authController.signIn);

export default authRouter;
