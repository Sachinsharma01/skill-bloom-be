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

    grantPortfolioAccess(userId: number) {
        return DB.Users.update({ has_portfolio_access: true }, { where: { id: userId } });
    },

    findUserByPhone(phone: string) {
        return DB.Users.findAll({ where: { mobile_number: phone } });
    }

}


export default userInteractor;