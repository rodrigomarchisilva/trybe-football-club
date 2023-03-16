/* eslint-disable linebreak-style */

import { Model, DataTypes } from 'sequelize';
import db from '.';
import Match from './Match';

export default class ClubWithMatches extends Model {
  public id: number;

  public clubName: string;

  public homeMatches: Match[];

  public awayMatches: Match[];
}

ClubWithMatches.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clubName: DataTypes.STRING,
  homeMatches: DataTypes.JSON,
  awayMatches: DataTypes.JSON,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'clubs',
  timestamps: false,
});
