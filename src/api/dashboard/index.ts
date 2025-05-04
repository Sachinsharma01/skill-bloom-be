import express from 'express';
import controller from './controller';
import { validateCourse } from 'middlewares';
import portfolioRouter from './portfolio';
import { authMiddleware } from 'middlewares/auth';

const router: express.Router = express.Router();

router.get(
    '/:courseId',
    authMiddleware,
    validateCourse,
    controller.getCourseDetails,
);

router.use(
    '/portfolio',
    authMiddleware,
    portfolioRouter,
);

export default router;
