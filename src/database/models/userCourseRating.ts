
import { DataTypes } from "sequelize";

export default function (sequelize: any) {
    return sequelize.define('UserCourseRating',  {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        tableName: 'user_course_rating',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        timestamps: true,
    })
}