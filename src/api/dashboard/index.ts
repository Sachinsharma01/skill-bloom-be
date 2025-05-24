import express from 'express';
import controller from './controller';
import { validateCourse, validateUser } from 'middlewares';
import portfolioRouter from './portfolio';
import { authMiddleware } from 'middlewares/auth';

const router: express.Router = express.Router();

router.get(
    '/:courseId',
    authMiddleware,
    validateUser,
    validateCourse,
    controller.getCourseDetails,
);

router.use(
    '/portfolio',
    portfolioRouter,
);

export default router;
