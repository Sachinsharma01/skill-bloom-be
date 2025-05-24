import { Request, Response, NextFunction } from 'express';
import courseInteractor from 'interactors/courseInteractor';
import userInteractor from 'interactors/userInteractor';
import { IRequest } from 'interfaces/common';
import { CustomError } from 'utils/custom-error';

async function validateUser(req: IRequest, res: Response, next: NextFunction): Promise<void> {
    const userId = req.params?.userId ?? req.context?.user_id ?? req.context?.userId;
    const user: any = await userInteractor.findUserById(parseInt(userId));
    if (!user) {
        next(new CustomError('User not found'));
    }
    req.user = user;
    next();
}

async function validateCourse(req: IRequest, res: Response, next: NextFunction): Promise<void> {
    const courseId = req.params?.courseId;
    const course: any = await courseInteractor.getCourseById(courseId);
    if (!course) {
        next(new CustomError('Course not found'));
    }
    req.course = course;
    next();
}

export { validateUser, validateCourse };
