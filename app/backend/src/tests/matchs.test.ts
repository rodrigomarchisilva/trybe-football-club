import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Match from '../database/models/Match';
import Club from '../database/models/Club';

chai.use(chaiHttp);
const {expect} = chai;

class MatchWithClubNames extends Match {
  homeClub: { clubName: string };
  awayClub: { clubName: string };
}

const club1 = new Club();
club1.id = 1;
club1.clubName = 'club1';

const club2 = new Club();
club2.id = 2;
club2.clubName = 'club2';

const match1 = new MatchWithClubNames();
match1.id = 1;
match1.homeTeam = 2;
match1.homeTeamGoals = 2;
match1.awayTeam = 1;
match1.awayTeamGoals = 1;
match1.inProgress = false;
match1.homeClub = { clubName: club2.clubName };
match1.awayClub = { clubName: club1.clubName };

const match2 = new MatchWithClubNames();
match2.id = 2;
match2.homeTeam = 1;
match2.homeTeamGoals = 1;
match2.awayTeam = 2;
match2.awayTeamGoals = 2;
match2.inProgress = true;
match2.homeClub = { clubName: club1.clubName };
match2.awayClub = { clubName: club2.clubName };

const databaseMatchsWithClubNames: MatchWithClubNames[] = [match1, match2];

const responseMatchs: {}[] = [
  { id: 1, homeTeam: 2, homeTeamGoals: 2, awayTeam: 1, awayTeamGoals: 1, inProgress: false, homeClub: { clubName: 'club2' }, awayClub: { clubName: 'club1' } },
  { id: 2, homeTeam: 1, homeTeamGoals: 1, awayTeam: 2, awayTeamGoals: 2, inProgress: true, homeClub: { clubName: 'club1' }, awayClub: { clubName: 'club2' } },
];

describe('3 - test matchs.route', () => {

  describe('3.1 - when trying to get all matchs', () => {

    before(async () => { sinon.stub(Match, "findAll").resolves(databaseMatchsWithClubNames); });
    after(() => { (Match.findAll as sinon.SinonStub).restore(); });

    it('a) all the matchs should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/matchs');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseMatchs);
    });
  });
});