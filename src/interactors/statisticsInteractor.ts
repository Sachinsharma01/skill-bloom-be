import { DB } from "database";
import { Statistics } from "interfaces/statistics.interface";

const statisticsInteractor = {
    async updateStatistics(id: number, statisticsData: Statistics) {
        return DB.Statistics.update(statisticsData, { where: { id } });
    },

    async getStatistics() {
        return DB.Statistics.findOne();
    }
}

export default statisticsInteractor;