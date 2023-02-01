import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore:1202
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Match from '../database/models/Match';
import { Model } from 'sequelize';
import db from '../database/models';
import { DataTypes } from 'sequelize';

chai.use(chaiHttp);
const {expect} = chai;

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

const matchWithClubNames1 = new MatchWithClubNames({
  id: 1,
  homeTeam: 2,
  homeTeamGoals: 2,
  awayTeam: 1,
  awayTeamGoals: 1,
  inProgress: false,
  homeClub: { clubName: 'club2' },
  awayClub: { clubName: 'club1' },
});

const matchWithClubNames2 = new MatchWithClubNames({
  id: 2,
  homeTeam: 1,
  homeTeamGoals: 1,
  awayTeam: 2,
  awayTeamGoals: 2,
  inProgress: true,
  homeClub: { clubName: 'club1' },
  awayClub: { clubName: 'club2' },
});

const databaseMatchesWithClubNames: MatchWithClubNames[] = [matchWithClubNames1, matchWithClubNames2];

const responseMatches: {}[] = [
  { id: 1, homeTeam: 2, homeTeamGoals: 2, awayTeam: 1, awayTeamGoals: 1, inProgress: false, homeClub: { clubName: 'club2' }, awayClub: { clubName: 'club1' } },
  { id: 2, homeTeam: 1, homeTeamGoals: 1, awayTeam: 2, awayTeamGoals: 2, inProgress: true, homeClub: { clubName: 'club1' }, awayClub: { clubName: 'club2' } },
];

describe('3 - test matches.route', () => {

  describe('3.1 - when trying to get all matches', () => {

    before(async () => { sinon.stub(Match, "findAll").resolves(databaseMatchesWithClubNames); });
    after(() => { (Match.findAll as sinon.SinonStub).restore(); });

    it('a) all the matches should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/matches');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseMatches);
    });
  });
});