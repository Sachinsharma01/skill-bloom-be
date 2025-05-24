import express from 'express';
import { validateRequest } from 'middlewares/validate-request';
import { getProfileSchema, reviewCourseSchema, updateProfileSchema } from './validator';
import { authMiddleware } from 'middlewares/auth';
import { userController } from './controller';
import { validateCourse, validateUser } from 'middlewares';

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
userRouter.get(
    '/:userId/enrolled_courses',
    authMiddleware,
    validateUser,
    userController.getEnrolledCourses,
);

userRouter.post(
    '/:userId/review_course/:courseId',
    validateRequest(reviewCourseSchema),
    authMiddleware,
    validateUser,
    validateCourse,
    userController.reviewCourse,
)

export default userRouter;
