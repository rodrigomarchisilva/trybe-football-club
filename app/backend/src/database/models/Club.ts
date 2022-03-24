import { Model, DataTypes } from 'sequelize';
import db from '.';
import Match from './Match';

export default class Club extends Model {
  public id: number;

  public clubName: string;
}

Club.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clubName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'clubs',
  timestamps: false,
});

Match.belongsTo(Club, { foreignKey: 'homeTeam', as: 'homeClub' });
Match.belongsTo(Club, { foreignKey: 'awayTeam', as: 'awayClub' });

Club.hasMany(Match, { foreignKey: 'homeTeam', as: 'homeMatches' });
Club.hasMany(Match, { foreignKey: 'awayTeam', as: 'awayMatches' });
