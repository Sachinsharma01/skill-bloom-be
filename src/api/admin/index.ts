import express from 'express';
import controller from './controller';

const adminRouter = express.Router();


adminRouter.get('/sync_db', )
adminRouter.post('/update_statistics', controller.updateStatistics)


export default adminRouter;