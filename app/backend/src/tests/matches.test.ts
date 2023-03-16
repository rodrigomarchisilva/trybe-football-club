import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore:1202
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Match from '../database/models/Match';
import { databaseMatchesWithClubNames, responseMatchesWithClubNames } from './mocks';

chai.use(chaiHttp);
const {expect} = chai;

describe('3 - test matches.route', () => {

  describe('3.1 - when trying to get all matches', () => {

    before(async () => { sinon.stub(Match, "findAll").resolves(databaseMatchesWithClubNames); });
    after(() => { (Match.findAll as sinon.SinonStub).restore(); });

    it('a) all the matches should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/matches');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.deep.equal(responseMatchesWithClubNames);
    });
  });
});
