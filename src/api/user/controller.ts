import { NextFunction, Request, Response } from 'express';
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
}

export const userController = new UserController();
