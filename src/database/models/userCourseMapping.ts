import { UserCourseMapping } from "interfaces/userCourseMapping";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export type UserCourseMappingCreationAttributes = Optional<UserCourseMapping, 'id'>;

export class UserCourseMappingModel extends Model<UserCourseMapping, UserCourseMappingCreationAttributes> {
    id!: number;
    user_id!: number;
    course_id!: number;
    created_at!: Date;
    updated_at!: Date;

    static associate: (models: any) => void;
}

export default function (sequelize: Sequelize) {
    UserCourseMappingModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            course_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            is_complete: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            progress: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },
            certificate_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: 'user_course_mappings',
            sequelize,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: true,
        },
    );

    UserCourseMappingModel.associate = (models: any) => {
        UserCourseMappingModel.belongsTo(models.Courses, {
            foreignKey: 'course_id',
            as: 'course',
        });
        UserCourseMappingModel.belongsTo(models.Users, {
            foreignKey: 'user_id',
            as: 'user',
        });
    };

    return UserCourseMappingModel;
}