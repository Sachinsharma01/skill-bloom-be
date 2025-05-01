import { Orders } from 'interfaces/orders';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type OrderCreationAttributes = Optional<Orders, 'id'>;

export class OrdersModel extends Model<Orders, OrderCreationAttributes> {
    id?: string;
    user_id!: string;
    course_id!: string;
    status!: string;
    amount!: number;
    payment_id!: string;
    razorpay_id!: string;

    static associate: (models: any) => void;
}

export default function (sequelize: Sequelize): typeof OrdersModel {
    OrdersModel.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            course_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            payment_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            razorpay_id: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: 'orders',
            sequelize,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
        },
    );

    OrdersModel.associate = (models: any) => {
        OrdersModel.belongsTo(models.Users, {
            foreignKey: 'user_id',
            targetKey: 'id',
            as: 'user',
        });

        OrdersModel.belongsTo(models.Courses, {
            foreignKey: 'course_id',
            targetKey: 'id',
            as: 'course',
        });
    };

    return OrdersModel;
}
