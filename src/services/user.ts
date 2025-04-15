import userInteractor from 'interactors/userInteractor';
import { CustomError } from 'utils/custom-error';

class UserService {
    async getProfileDetails(userId: number) {
        const user = await userInteractor.findUserById(userId);
        if (!user) {
            throw new CustomError('User not found');
        }
        return user;
    }
}

export default new UserService();
