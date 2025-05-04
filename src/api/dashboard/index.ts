import express from 'express';
import controller from './controller';
import { validateCourse } from 'middlewares';
import portfolioRouter from './portfolio';
import { validateRequest } from 'middlewares/validate-request';
import { createPortfolioSchema } from './portfolio/validator';
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
    validateRequest(createPortfolioSchema),
    portfolioRouter,
);

export default router;
