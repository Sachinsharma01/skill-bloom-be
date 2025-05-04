import { NextFunction, Request, Response } from 'express';
import DashboardService from 'services/dashboard';
import SuccessResponse from 'utils/apiResponse';

class DashboardController {
    async getCourseDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const courseId = parseInt(req.params.courseId);
            const course = await DashboardService.getCourseDetails(courseId);
            return SuccessResponse(res, course, 'Course details fetched successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new DashboardController();
