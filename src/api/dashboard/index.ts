import express from 'express';
import controller from './controller';
import { validateCourse } from 'middlewares';

const router: express.Router = express.Router();

router.get('/:courseId', validateCourse, controller.getCourseDetails);

export default router;
