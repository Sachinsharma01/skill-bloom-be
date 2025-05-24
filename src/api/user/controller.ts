import { NextFunction, Request, Response } from 'express';
import userCourseRatingInteractor from 'interactors/userCourseRatingInteractor';
import { IRequest } from 'interfaces/common';
import { Course } from 'interfaces/course';
import { User } from 'interfaces/user';
import userService from 'services/user';
import SuccessResponse from 'utils/apiResponse';

class UserController {
    async getProfileDetails(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const userId: number = parseInt(req.params.userId);
            const profileDetails: unknown = await userService.getProfileDetails(
                userId,
            );

            return SuccessResponse(
                res,
                profileDetails,
                'Profile details fetched successfully',
            );
        } catch (error) {
            next(error);
        }
    }

    async updateProfileDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId: number = parseInt(req.params.userId);
            const profileDetails: unknown = await userService.updateProfileDetails(userId, req.body);

            return SuccessResponse(
                res,
                profileDetails,
                'Profile details updated successfully',
            );
        } catch (error) {
            next(error);
        }
    }

    async getEnrolledCourses(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId: number = parseInt(req.params.userId);
            const enrolledCourses: unknown = await userService.getEnrolledCourses(userId);

            return SuccessResponse(
                res,
                enrolledCourses,
                'Enrolled courses fetched successfully',
            );
        } catch (error) {
            next(error);
        }
    }

    async reviewCourse(req: IRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const course: Course | undefined = req.course;
            const user: User | undefined = req.user;
            const rating: number = req.body.rating;

            await userCourseRatingInteractor.createUserCourseRating({ user_id: user?.id, course_id: course?.id, rating });

            return SuccessResponse(res, {}, 'Reviewed course successfully');
        } catch (error) {
            next(error);
        }
    }
}

export const userController = new UserController();
