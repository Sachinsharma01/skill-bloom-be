import express from 'express';
import controller from './controller';

const router: express.Router = express.Router();

router.get('/statistics', controller.getStatistics)
router.get('/featured_courses', controller.getFeaturedCourses)
router.get('/courses', controller.getCourses)
router.get('/courses/:id', controller.getCourseDetails)

export default router;