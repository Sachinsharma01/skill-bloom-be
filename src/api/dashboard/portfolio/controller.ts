import { NextFunction, Request, Response } from 'express';
import { IRequest } from 'interfaces/common';
import { IPortfolio } from 'mongo/models/portfolio';
import PortfolioInteractor from 'mongo/interactors/portfolioInteractor';
import SuccessResponse from 'utils/apiResponse';
import { CustomError } from 'utils/custom-error';
import logger from 'utils/logger';
import { createPortfolioSchema } from './validator';
import userInteractor from 'interactors/userInteractor';
import constants from 'utils/constants';
class PortfolioController {

    async getPortfolio(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const portfolioId = req.params.portfolioId;
            const portfolio = await PortfolioInteractor.getPortfolioDetailsById(portfolioId);
            if (!portfolio) {
                throw new CustomError('Portfolio not found');
            }
            return SuccessResponse(res, portfolio, 'Portfolio details fetched successfully');
        } catch (error) {
            next(error);
        }
    }

    async createPortfolio(req: IRequest, res: Response, next: NextFunction): Promise<any> {
        try {
            logger.info('Portfolio creation started with payload', req.body);

            const { user_id, formData } = req.body;

            // Check if portfolio already exists for this user
            let portfolioExists: any = await PortfolioInteractor.getPortfolioDetailsByUserId(user_id);

            if (portfolioExists) {
                // Update existing portfolio
                await PortfolioInteractor.updatePortfolioDetails(
                    user_id,
                    formData
                );
                return SuccessResponse(res, portfolioExists, 'Portfolio updated successfully');
            } else {
                logger.info('Portfolio does not exist for this user, creating new portfolio with payload: ', { data: formData });
                // Create new portfolio
                portfolioExists = await PortfolioInteractor.createPortfolio({
                    ...formData,
                    user_id
                });
                await userInteractor.updateUser(user_id, {
                    portfolio_id: portfolioExists._id
                })
                return SuccessResponse(res, portfolioExists, 'Portfolio created successfully');
            }
        } catch (error) {
            next(error);
        }
    }

    async grantPortfolioAccess(req: IRequest, res: Response, next: NextFunction): Promise<any> {
        try {
            const { userId } = req.params;
            await userInteractor.grantPortfolioAccess(parseInt(userId));
            const user = await userInteractor.findUserById(parseInt(userId));
            return SuccessResponse(res, user, 'Portfolio access granted successfully');
        } catch (error) {
            next(error);
        }
    }

    async createPortfolioOrder(req: IRequest, res: Response, next: NextFunction): Promise<any> {
        try {
            const { user_id } = req.params;
            const order_id = constants.PORTFOLIO_ORDER_ID;
            return SuccessResponse(res, { order_id }, 'Portfolio order created successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new PortfolioController();
