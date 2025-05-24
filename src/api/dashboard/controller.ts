import { NextFunction, Request, Response } from 'express';
import DashboardService from 'services/dashboard';
import SuccessResponse from 'utils/apiResponse';
import logger from 'utils/logger';

class DashboardController {
    async getCourseDetails(req: Request, res: Response, next: NextFunction) {
        try {
            logger.debug('DashboardController.getCourseDetails', req.user);
            const courseId = parseInt(req.params.courseId);
            const course = await DashboardService.getCourseDetails(courseId, req.user?.id as number);
            return SuccessResponse(res, course, 'Course details fetched successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new DashboardController();
