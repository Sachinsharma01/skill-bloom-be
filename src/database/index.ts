import logger from '../utils/logger';
import Sequelize from 'sequelize';
import userModel from './models/user';
import {
    DB_DIALECT,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
    NODE_ENV,
} from '../config';
import statisticsModel from './models/statistics';
import featuredModel from './models/featured';
import courseModel from './models/course';
import userCourseMappingModel from './models/userCourseMapping';
import ordersModel from './models/orders';
import resourceDataModel from './models/resourceData';
const sequelize = new Sequelize.Sequelize(
    DB_NAME as string,
    DB_USERNAME as string,
    DB_PASSWORD,
    {
        dialect: (DB_DIALECT as Sequelize.Dialect) || 'postgres',
        host: DB_HOST,
        port: parseInt(DB_PORT as string, 10),
        timezone: '+09:00',
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            underscored: true,
            freezeTableName: true,
        },
        pool: {
            min: 0,
            max: 5,
        },
        logQueryParameters: NODE_ENV === 'development',
        logging: (query, time) => {
            logger.info(time + 'ms' + ' ' + query);
        },
        benchmark: true,
    },
);

sequelize.authenticate();

export const DB = {
    Users: userModel(sequelize),
    Statistics: statisticsModel(sequelize),
    Featured: featuredModel(sequelize),
    Courses: courseModel(sequelize),
    UserCourseMapping: userCourseMappingModel(sequelize),
    Orders: ordersModel(sequelize),
    ResourceData: resourceDataModel(sequelize),
    sequelize, // connection instance (RAW queries)
    Sequelize, // library
};

// Set up associations
DB.Featured.associate(DB);
DB.UserCourseMapping.associate(DB);
DB.Orders.associate(DB);
DB.ResourceData.associate(DB);