import { Course } from "interfaces/course.interface";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export type CourseCreationAttributes = Optional<Course, 'id'>;

export class CourseModel extends Model<Course, CourseCreationAttributes> {
    id?: number;
    name!: string;
    title!: string;
    description!: string;
    price!: number;
    image_url!: string;
    category!: string;
    author!: string;
    duration!: number;
    rating!: number;
    is_featured!: boolean;
    is_published!: boolean;
    total_enrollments!: number;
    total_lessons!: number;
    is_active!: boolean;
    is_resource!: boolean;
}

export default function (sequelize: Sequelize) {
    CourseModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            duration: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },
            is_featured: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            is_published: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            total_enrollments: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            total_lessons: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            is_resource: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            tableName: 'courses',
            sequelize,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: true,
        },
    );

    return CourseModel;
}