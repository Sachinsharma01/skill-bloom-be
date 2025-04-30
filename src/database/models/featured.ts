import { Featured } from 'interfaces/featured';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type FeaturedCreationAttributes = Optional<Featured, 'id'>;

export class FeaturedModel extends Model<Featured, FeaturedCreationAttributes> {
    id?: number;
    course_id!: number;
    course_name!: string;

    static associate: (models: any) => void;
}

export default function (sequelize: Sequelize) {
    FeaturedModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            course_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'courses',
                    key: 'id',
                },
            },
            course_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'featured',
            sequelize,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: true,
        },
    );

    FeaturedModel.associate = (models: any) => {
        FeaturedModel.belongsTo(models.Courses, {
            foreignKey: 'course_id',
            as: 'course',
        });
    };

    return FeaturedModel;
}
