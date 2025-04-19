import { Request, Response, NextFunction } from "express";
import PublicService from "../../services/public";
import SuccessResponse from "utils/apiResponse";

class PublicController {
    async getStatistics(req: Request, res: Response, next: NextFunction) {
        try {
            const statistics = await PublicService.getStatistics();
            return SuccessResponse(res, statistics, 'Statistics fetched successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new PublicController();
