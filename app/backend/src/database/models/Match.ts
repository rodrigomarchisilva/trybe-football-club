import { Model, DataTypes } from 'sequelize';
import db from '.';
import Club from './Club';

export default class Match extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: number;
};

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: { type: DataTypes.STRING, allowNull: false },
  homeTeamGoals: { type: DataTypes.STRING, allowNull: false },
  awayTeam: { type: DataTypes.STRING, allowNull: false },
  awayTeamGoals: { type: DataTypes.STRING, allowNull: false },
  inProgress: { type: DataTypes.STRING, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matchs',
  timestamps: false,
});

Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeClub' });
Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayClub' });

Club.hasMany(Match, { foreignKey: 'homeTeam', as: 'homeMatches' });
Club.hasMany(Match, { foreignKey: 'awayTeam', as: 'awayMatches' });