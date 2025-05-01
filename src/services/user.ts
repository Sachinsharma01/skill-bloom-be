import userInteractor from 'interactors/userInteractor';
import { CustomError } from 'utils/custom-error';
import { User } from 'interfaces/user';
import userCourseMapppingInteractor from 'interactors/userCourseMapppingInteractor';
class UserService {
    async getProfileDetails(userId: number) {
        const user = await userInteractor.findUserById(userId);
        if (!user) {
            throw new CustomError('User not found');
        }
        return user;
    }

    async updateProfileDetails(userId: number, profileDetails: unknown) {
        const updatedUser = await userInteractor.updateUser(
            userId,
            profileDetails as Partial<User>,
        );
        return updatedUser;
    }

    async getEnrolledCourses(userId: number) {
        const enrolledCourses = await userCourseMapppingInteractor.getEnrolledCourses(userId);
        return enrolledCourses;
    }
}

export default new UserService();
