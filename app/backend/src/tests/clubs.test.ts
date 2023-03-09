import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore:1202
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Club from '../database/models/Club';

chai.use(chaiHttp);
const {expect} = chai;

const club1 = new Club();
club1.id = 1;
club1.clubName = 'Club 1';

const club2 = new Club();
club2.id = 2;
club2.clubName = 'Club 2';

const databaseClubs: Club[] = [club1, club2];

const responseClubs: {}[] = [{ id: 1, clubName: 'Club 1' }, { id: 2, clubName: 'Club 2' }];

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
});
