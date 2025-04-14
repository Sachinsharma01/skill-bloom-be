export class CustomError extends Error {
    public statusCode: number;

    //how do i add defualt value in statusCode parameter with the number type ?
    constructor(message: string, statusCode: number = 400) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
