import { Request, Response, NextFunction } from 'express';
import userInteractor from 'interactors/userInteractor';
import { IRequest } from 'interfaces/common';
import { CustomError } from 'utils/custom-error';

async function validateUser(req: IRequest, res: Response, next: NextFunction): Promise<void> {
    const { userId } = req.params;
    const user: any = await userInteractor.findUserById(parseInt(userId));
    if (!user) {
        next(new CustomError('User not found'));
    }
    req.user = user;
    next();
}

export { validateUser };
