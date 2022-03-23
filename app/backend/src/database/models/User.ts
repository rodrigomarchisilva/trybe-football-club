import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class User extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
};

User.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: DataTypes.STRING,
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});