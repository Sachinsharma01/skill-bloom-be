import { User } from '../interfaces/user';
import userInteractor from 'interactors/userInteractor';
import { compareSync, hash } from 'bcrypt';
import { generateJWT } from '../middlewares/jwt.service';
import { JWT_ACCESS_TOKEN_SECRET } from '../config';
import { CustomError } from '../utils/custom-error';
import { generateReferralCode } from 'utils/generalUtils';

class AuthService {

    async signUp(userData: User) {

        const findUser = await userInteractor.findUserByEmail(userData.email);
        if (findUser) {
            throw new CustomError(`Email ${userData.email} already exists`, 409);
        }

        const randomId = (Date.now() + Math.floor(Math.random() * 100)).toString(36);
        const username = userData.username ?? `${userData.email.split('@')[0]}-${randomId}`;
        const hashedPassword = await hash(userData.password, 10);
        const referralCode = generateReferralCode();
        
        const newUserData = await userInteractor.createUser({
            ...userData,
            username,
            referral_code: referralCode,
            password: hashedPassword,
        });

        return { user: newUserData };
    }

    async signIn(userData: User) {

        const user = await userInteractor.findUserByEmail(userData.email);
        if (!user) {
            throw new CustomError('Email or password is invalid', 401);
        }

        const validPassword = compareSync(userData.password, user.password);
        if (!validPassword) {
            throw new CustomError('Email or password is invalid', 401);
        }

        const payload = {
            userId: user.id,
        };

        const accessToken = await generateJWT(
            payload,
            JWT_ACCESS_TOKEN_SECRET as string,
        );

        const response = JSON.parse(JSON.stringify(user));  
        delete response.password;

        return { user: response, accessToken };
    }
}

export const authService = new AuthService();
