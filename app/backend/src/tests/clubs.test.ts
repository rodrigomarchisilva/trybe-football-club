import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore:1202
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Club from '../database/models/Club';
import { databaseClubs, responseClubs, responseLeaderboard, databaseClubsWithMatches } from './mocks';

chai.use(chaiHttp);
const {expect} = chai;

describe('2 - test clubs.route', () => {

  describe('2.1 - when trying to get all clubs', () => {

    before(async () => { sinon.stub(Club, "findAll").resolves(databaseClubs); });
    after(() => { (Club.findAll as sinon.SinonStub).restore(); });

    it('a) all the clubs should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/clubs');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseClubs);
    });
  });

  describe('2.2 - when trying to get a club by id', () => {

    before(async () => { sinon.stub(Club, "findByPk").resolves(databaseClubs[0]); });
    after(() => { (Club.findByPk as sinon.SinonStub).restore(); });

    it('a) the club should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/clubs/1');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseClubs[0]);
    });
  });

  describe('2.3 - when trying to get a club by id and the club does not exist', () => {

    before(async () => { sinon.stub(Club, "findByPk").resolves(null); });
    after(() => { (Club.findByPk as sinon.SinonStub).restore(); });

    it('a) a 404 error should be returned with the message "Club not found"', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/clubs/1');

      expect(chaiHttpResponse).to.be.status(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message: 'Club not found' });
    });
  });

  describe('2.4 - when trying to get the leaderboard', () => {

    before(async () => { sinon.stub(Club, "findAll").resolves(databaseClubsWithMatches); });
    after(() => { (Club.findAll as sinon.SinonStub).restore(); });

    it('a) the leaderboard should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/leaderboard');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseLeaderboard);
    });
  });
});
