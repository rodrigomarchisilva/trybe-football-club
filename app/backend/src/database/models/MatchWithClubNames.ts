/* eslint-disable linebreak-style */
import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class MatchWithClubNames extends Model {
  id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;

  inProgress: boolean;

  homeClub: { clubName: string };

  awayClub: { clubName: string };
}

MatchWithClubNames.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: DataTypes.INTEGER,
  homeTeamGoals: DataTypes.INTEGER,
  awayTeam: DataTypes.INTEGER,
  awayTeamGoals: DataTypes.INTEGER,
  inProgress: DataTypes.BOOLEAN,
  homeClub: DataTypes.JSON,
  awayClub: DataTypes.JSON,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matchesWithClubNames',
  timestamps: false,
});
