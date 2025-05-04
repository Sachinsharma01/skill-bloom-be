import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ResourceData } from 'interfaces/resourceData';

export type ResourceDataCreateAttributes = Optional<ResourceData, 'id'>;

export class ResourceDataModel extends Model<
    ResourceData,
    ResourceDataCreateAttributes
> {
    id!: number;
    course_id!: number;
    company_name!: string;
    industry!: string;
    location!: string;
    careers_url!: string;
    linkedin_url!: string;

    static associate: (models: any) => void;
}

export default function (sequelize: Sequelize) {
    ResourceDataModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            course_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            company_name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            industry: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            careers_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            linkedin_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: 'resource_data',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            sequelize,
        },
    );

    ResourceDataModel.associate = (models: any) => {
        ResourceDataModel.belongsTo(models.Courses, {
            foreignKey: 'course_id',
            targetKey: 'id',
        });
    };

    return ResourceDataModel;
}
