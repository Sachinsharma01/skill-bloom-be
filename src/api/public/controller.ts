import { Request, Response, NextFunction } from "express";
import PublicService from "../../services/public";
import SuccessResponse from "utils/apiResponse";

class PublicController {
    async getStatistics(req: Request, res: Response, next: NextFunction) {
        try {
            const statistics = await PublicService.getStatistics();
            return SuccessResponse(res, statistics, 'Statistics fetched successfully');
        } catch (error) {
            next(error);
        }
    }

    async getFeaturedCourses(req: Request, res: Response, next: NextFunction) {
        try {
            const courses = await PublicService.getFeaturedCourses();
            return SuccessResponse(res, courses, 'Featured courses fetched successfully');
        } catch (error) {
            next(error);
        }
    }

    async getCourses(req: Request, res: Response, next: NextFunction) {
        try {
            const courses = await PublicService.getCourses();
            return SuccessResponse(res, courses, 'Courses fetched successfully');
        } catch (error) {
            next(error);
        }
    }

    async getCourseDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await PublicService.getCourseById(req.params.id);
            return SuccessResponse(res, course, 'Course fetched successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new PublicController();
