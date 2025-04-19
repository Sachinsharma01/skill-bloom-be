import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../interfaces/user.interfaces';

declare module 'express-serve-static-core' {
    interface Request {
        context?: JwtPayload;
        user?: User;
    }
}
