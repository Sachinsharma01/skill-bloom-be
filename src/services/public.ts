import statisticsInteractor from "interactors/statisticsInteractor";
import featuredInteractor from "interactors/featuredInteractor";
import courseInteractor from "interactors/courseInteractor";
class PublicService {
    async getStatistics() {
        const statistics = await statisticsInteractor.getStatistics();
        return statistics;
    }

    async getFeaturedCourses() {
        const courses = await featuredInteractor.getFeaturedCourses();
        return courses;
    }

    async getCourses() {
        const courses = await courseInteractor.getCourses();
        return courses;
    }

    async getCourseById(id: string) {
        const course = await courseInteractor.getCourseById(id);
        return course;
    }
}


export default new PublicService();