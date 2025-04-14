import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/custom-error';

export const validateRequest = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.method === 'GET' ? req.query : req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            const errorMessage = error.details
                .map((detail: any) => detail.message)
                .join(', ');
            throw new CustomError(errorMessage, 400);
        }

        next();
    };
}; 