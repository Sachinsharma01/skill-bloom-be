import { getMongoModel, getMongoModelNames } from 'mongo/models';
import { IPortfolio } from 'mongo/models/portfolio';
import { Model } from 'mongoose';

class PortfolioInteractor {
    private portfolio: Model<IPortfolio>;

    constructor() {
        this.portfolio = getMongoModel(getMongoModelNames().Portfolio);
    }

    getPortfolioDetailsById(id: string) {
        return this.portfolio.findOne({ _id: id });
    }

    createPortfolio(payload: IPortfolio) {
        return this.portfolio.create(payload);
    }

    getPortfolioDetailsByUserId(userId: string) {
        return this.portfolio.findOne({ user_id: userId });
    }

    updatePortfolioDetails(userId: string, updateData: Partial<IPortfolio>) {
        return this.portfolio.updateOne({ user_id: userId }, updateData)
    }
}

export default new PortfolioInteractor();
