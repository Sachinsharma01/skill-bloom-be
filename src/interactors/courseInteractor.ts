import { DB } from "database";

class CourseInteractor {
    async getCourses() {
        return DB.Courses.findAll();
    }
}

export default new CourseInteractor();  