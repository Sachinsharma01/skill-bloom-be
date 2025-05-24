import { DB } from "database";

class UserCourseRatingInteractor {
    async getUserCourseRating(userId: number, courseId: number | string) {
        return DB.UserCourseRating.findOne({
            where: {
                user_id: userId,
                course_id: courseId,
            },
        });
    }

    async createUserCourseRating(payload: any) {
        return DB.UserCourseRating.create(payload);
    }
}

export default  new UserCourseRatingInteractor();