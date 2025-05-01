import { DB } from 'database';

class UserCourseMappingInteractor {

    getEnrolledCourses(userId: number) {
        return DB.UserCourseMapping.findAll({ where: { user_id: userId }, include: [{ model: DB.Courses, as: 'course' }] });
    }

    createUserCourseMapping(payload: any) {
        return DB.UserCourseMapping.create(payload);
    }
}

export default new UserCourseMappingInteractor();