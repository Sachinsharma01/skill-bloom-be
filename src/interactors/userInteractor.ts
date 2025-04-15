import { DB } from "../database";
import { User } from "../interfaces/user.interfaces";

const userInteractor = {
    createUser(userData: User) {
        return DB.Users.create(userData);
    },

    findUserByEmail(email: string) {
        return DB.Users.findOne({ where: { email } });
    },

    findUserById(userId: number) {
        return DB.Users.findOne({ where: { id: userId }, attributes: { exclude: ['password'] }})
    }
}


export default userInteractor;