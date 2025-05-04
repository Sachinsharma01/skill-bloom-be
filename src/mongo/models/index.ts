//? how do i initialize all the models in the mongo db

import { Model } from 'mongoose';
import portfolioModel from './portfolio';

const models: Record<string, Model<any>> = {
    Portfolio: portfolioModel,
};

const modelNames = {
    Portfolio: 'Portfolio',
};

const getMongoModel = (modelName: string) => {
    return models[modelName];
};

const getMongoModelNames = () => {
    return modelNames;
};

export { getMongoModel, getMongoModelNames };
