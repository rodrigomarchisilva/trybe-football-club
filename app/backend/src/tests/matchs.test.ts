import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Match from '../database/models/Match';

chai.use(chaiHttp);
const {expect} = chai;

const match1 = new Match();
match1.id = 1;
match1.homeTeam = 2;
match1.homeTeamGoals = 2;
match1.awayTeam = 1;
match1.awayTeamGoals = 1;
match1.inProgress = false;

const match2 = new Match();
match2.id = 2;
match2.homeTeam = 1;
match2.homeTeamGoals = 1;
match2.awayTeam = 2;
match2.awayTeamGoals = 2;
match2.inProgress = true;

const databaseMatchs: Match[] = [match1, match2];

const responseMatchs: {}[] = [
  { id: 1, homeTeam: 2, homeTeamGoals: 2, awayTeam: 1, awayTeamGoals: 1, inProgress: false },
  { id: 2, homeTeam: 1, homeTeamGoals: 1, awayTeam: 2, awayTeamGoals: 2, inProgress: true },
];

describe('3 - test matchs.route', () => {

  describe('3.1 - when trying to get all matchs', () => {

    before(async () => { sinon.stub(Match, "findAll").resolves(databaseMatchs); });
    after(() => { (Match.findAll as sinon.SinonStub).restore(); });

    it('a) all the matchs should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/matchs');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseMatchs);
    });
  });
});