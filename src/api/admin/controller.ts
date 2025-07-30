import { NextFunction, Request, Response } from 'express';
import statisticsInteractor from '../../interactors/statisticsInteractor';
import SuccessResponse from 'utils/apiResponse';
class AdminController {
    async updateStatistics(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                active_users,
                total_resources,
                total_categories,
                total_states,
                total_countries,
            } = req.body;
            const { id } = req.params;
            const statistics = await statisticsInteractor.updateStatistics(
                parseInt(id),
                {
                    active_users,
                    total_resources,
                    total_categories,
                    total_states,
                    total_countries,
                    total_portfolios: 0
                },
            );

            return SuccessResponse(
                res,
                statistics,
                'Statistics updated successfully',
            );
        } catch (error) {
            next(error);
        }
    }
}
export default new AdminController();
