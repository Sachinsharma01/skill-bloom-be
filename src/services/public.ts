import statisticsInteractor from "interactors/statisticsInteractor";

class PublicService {
    async getStatistics() {
        const statistics = await statisticsInteractor.getStatistics();
        return statistics;
    }
}


export default new PublicService();