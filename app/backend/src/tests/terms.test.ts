import * as chai from 'chai';
// @ts-ignore:1202
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';

chai.use(chaiHttp);
const {expect} = chai;

describe('4 - test terms.route', () => {

  describe('4.1 - when trying to get terms', () => {

    const copyrightsText = `Copyright terms\r\n\r\nThis application was developed by Rodrigo Marchi Silva (backend, database and docker/compose) and Trybe (frontend and design).\r\n\r\nYou are free to use this application for any purpose, including commercial purposes, at absolutely no cost.\r\n\r\nNo paperwork, no royalties, no GNU-like "copyleft" restrictions, either. Just don't claim you wrote it.\r\n`;

    it('a) the terms should be returned', async () => {
      const chaiHttpResponse: Response = await chai.request(app).get('/terms');

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.equal(copyrightsText);
    });
  });
});
