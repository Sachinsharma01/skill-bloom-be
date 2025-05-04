import { NextFunction, Request, Response } from 'express';
import { IRequest } from 'interfaces/common';
import { IPortfolio } from 'mongo/models/portfolio';
import PortfolioInteractor from 'mongo/interactors/portfolioInteractor';
import SuccessResponse from 'utils/apiResponse';
import { CustomError } from 'utils/custom-error';
import logger from 'utils/logger';
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
            const portfolioData: any = req.body;
            const userId = portfolioData.userId;

            if (!portfolioData.personal.name || !portfolioData.personal.email || !portfolioData.personal.about) {
                return res.status(400).json({ message: 'Missing required personal information' });
              }
              
              if (!portfolioData.skills || portfolioData.skills.length === 0) {
                throw new CustomError('At least one skill is required');
              }
              
              let portfolioExists = await PortfolioInteractor.getPortfolioDetailsByUserId(userId);
          
              if (portfolioExists) {
                portfolioExists = await PortfolioInteractor.updatePortfolioDetails(
                  userId,
                  portfolioData
                );
            } else {
                portfolioExists = await PortfolioInteractor.createPortfolio(portfolioData);
            }
            return SuccessResponse(res, portfolioExists, 'Portfolio details created successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new PortfolioController();
