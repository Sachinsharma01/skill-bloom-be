import CourseInteractor from "interactors/courseInteractor";
import ResourceDataInteractor from "interactors/resourceDataInteractor";

class CoursesService {
    async getCourseDetails(courseId: number) {
        const course = await CourseInteractor.getCourseById(courseId);
        const resourceData = await ResourceDataInteractor.getResourceData(courseId);
        return { course, resourceData };
    }
}

export default new CoursesService();
