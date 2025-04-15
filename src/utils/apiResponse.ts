import { Response } from 'express';
import { isNullOrUndefined } from './generalUtils';
import { CustomError } from './custom-error';

const SuccessResponse = (
    res: Response,
    payload: any,
    message: string | undefined,
) => {
    if (isNullOrUndefined(payload))
        throw new CustomError('Response Payload is missing');

    res.status(200).json({
        success: true,
        data: payload,
        message: message,
    });
};

export default SuccessResponse;
