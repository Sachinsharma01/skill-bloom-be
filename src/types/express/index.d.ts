import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../interfaces/user';

declare module 'express-serve-static-core' {
    interface Request {
        context?: JwtPayload;
        user?: User;
    }
}
