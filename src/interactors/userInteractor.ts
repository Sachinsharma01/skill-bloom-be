import { DB } from "../database";
import { User } from "../interfaces/user";

const userInteractor = {
    createUser(userData: User) {
        return DB.Users.create(userData);
    },

    findUserByEmail(email: string) {
        return DB.Users.findOne({ where: { email } });
    },

    findUserById(userId: number) {
        return DB.Users.findOne({ where: { id: userId }, attributes: { exclude: ['password'] }})
    },

    countUserByUsername(username: string) {
        return DB.Users.count({ where: {username} })
    },

    updateUser(userId: number, profileDetails: Partial<User>) {
        return DB.Users.update(profileDetails, { where: { id: userId } });
    },

    getEnrolledCourses(userId: number) {
        return DB.UserCourseMapping.findAll({ where: { user_id: userId }, include: [{ model: DB.Courses, as: 'course' }] });
    }
}


export default userInteractor;