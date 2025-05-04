import { DB } from 'database';

class CourseInteractor {
    async getCourses() {
        return DB.Courses.findAll();
    }

    async getCourseById(id: string | number) {
        return DB.Courses.findByPk(id);
    }
}

export default new CourseInteractor();
