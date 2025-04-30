import { DB } from 'database';
import { FeaturedModel } from 'database/models/featured';

export class FeaturedInteractor {
    async getFeaturedCourses() {
        const includes = [
            {
                model: DB.Courses,
                as: 'course',
            },
        ];
        return DB.Featured.findAll({ include: includes });
    }
}

export default new FeaturedInteractor();
