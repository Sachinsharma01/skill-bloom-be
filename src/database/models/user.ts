import constants from 'config/constants';
import { User } from '../../interfaces/user';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export type UserCreationAttributes = Optional<
    User,
    'id' | 'username' 
>;

export class UserModel
    extends Model<User, UserCreationAttributes>
    implements User
{
    public id!: string;
    public email!: string;
    public name!: string;
    public username!: string;
    public password!: string;
    public referral_code!: string;
    public profile_image!: string;
    public created_at: string | undefined;
    public updated_at: string | undefined;
    public profession!: string;
    public country!: string;
    public state!: string;
    public mobile_number!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
    UserModel.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            username: {
                allowNull: true,
                type: DataTypes.STRING,
                unique: true,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            referral_code: {
                type: DataTypes.STRING,
                allowNull:false
            },
            profile_image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            profession: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mobile_number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            tableName: 'users',
            sequelize,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: true,
        },
    );

    return UserModel;
}
