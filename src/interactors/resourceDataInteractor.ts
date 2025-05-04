import { DB } from "database";

class ResourceDataInteractor {
    async getResourceData(courseId: string | number) {
        const resourceData = await DB.ResourceData.findAll({ where: { course_id: courseId } });
        return resourceData;
    }
}

export default new ResourceDataInteractor();