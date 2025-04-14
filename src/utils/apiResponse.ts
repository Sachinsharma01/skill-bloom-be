import { CustomError } from "./custom-error";
import { isNullOrUndefined } from "./generalUtils";

class APIResponse {
    constructor(payload: any, message: string | undefined, statusCode = 200) {
        if (isNullOrUndefined(payload)) 
            throw new CustomError('Response Payload is required')
        return 
    }

    static success(payload: any, message: string | undefined, statusCode = 200) {
        return new APIResponse(payload, message, statusCode);
    }

    static error(payload: any, message: string | undefined, statusCode = 500) {
        return new APIResponse(payload, message, statusCode);
    }

    static notFound(payload: any, message: string | undefined, statusCode = 404) {
        return new APIResponse(payload, message, statusCode);
    }

    static badRequest(payload: any, message: string | undefined, statusCode = 400) {
        return new APIResponse(payload, message, statusCode);
    }

    static unauthorized(payload: any, message: string | undefined, statusCode = 401) {
        return new APIResponse(payload, message, statusCode);
    }

    static forbidden(payload: any, message: string | undefined, statusCode = 403) {
        return new APIResponse(payload, message, statusCode);
    }
    
}
