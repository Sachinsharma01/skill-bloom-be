import { Model, Optional, Sequelize, DataTypes } from "sequelize";
import { Statistics } from "interfaces/statistics";

export type StatisticsCreationAttributes = Optional<Statistics, 'id'>;

export class StatisticsModel extends Model<Statistics, StatisticsCreationAttributes> {
    id?: number;
    active_users!: number;
    total_resources!: number;
    total_categories!: number;
    total_states!: number;
    total_countries!: number;
    total_portfolios!: number;
}

export default function (sequelize: Sequelize): typeof StatisticsModel {
    StatisticsModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        active_users: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_resources: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_categories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_states: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_countries: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_portfolios: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            defaultValue: 0,
        }
    }, {
        tableName: 'statistics',
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return StatisticsModel;
}