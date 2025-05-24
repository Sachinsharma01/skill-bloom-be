import CourseInteractor from "interactors/courseInteractor";
import ResourceDataInteractor from "interactors/resourceDataInteractor";
import UserCourseRatingInteractor from "interactors/userCourseRatingInteractor";

class CoursesService {
    async getCourseDetails(courseId: number, userId: number | string) {
        const course = await CourseInteractor.getCourseById(courseId);
        const resourceData = await ResourceDataInteractor.getResourceData(courseId);
        const userRarting = await UserCourseRatingInteractor.getUserCourseRating(courseId, userId)
        return { course, resourceData, userRarting };
    }
}

export default new CoursesService();
