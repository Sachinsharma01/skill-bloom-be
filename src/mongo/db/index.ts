import { MONGO_URI } from 'config';
import mongoose from 'mongoose';
import logger from 'utils/logger';

const connectDB = async () => {
    try {
        mongoose.set('debug', true);
        const connection = await mongoose.connect(MONGO_URI as string, {
            dbName: 'skillbloom-dev'
        });
        if (connection.connection.db) {
            logger.info(`Connected to MongoDB database: ${connection.connection.db.databaseName}`);
        }
        return connection.connection.db;
    } catch (error) {
        logger.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
