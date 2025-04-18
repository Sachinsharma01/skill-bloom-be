import { NextFunction, Request, Response, Router } from 'express';
import userInteractor from 'interactors/userInteractor';
import SuccessResponse from 'utils/apiResponse';
import logger from 'utils/logger';

const router = Router();

router.get(
    '/username',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username } = req.query;
            const usernameExists = await userInteractor.countUserByUsername(
                username as string,
            );
            if (usernameExists) {
                return SuccessResponse(res, { valid: false }, 'Username already exists');
            }
            return SuccessResponse(
                res,
                { valid: true },
                'Username is available',
            );
        } catch (error) {
            logger.error('Error in validate_username', error);
            next(error);
        }
    },
);

export default router;
