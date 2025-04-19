import express from 'express';
import controller from './controller';

const router: express.Router = express.Router();

router.get('/statistics', controller.getStatistics)

export default router;