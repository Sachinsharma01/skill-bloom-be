import { Request, Response, NextFunction } from 'express';
import { CustomError } from './custom-error';

export const errorHandler = (
    err: Error | CustomError | { error: any, message: string },
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const statusCode = err instanceof CustomError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';
    const error = 'error' in err ? err.error : undefined;

    res.status(statusCode).json({ errorMessage: message, error });
};
