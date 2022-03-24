import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import User from '../database/models/User';
import { ErrorMessages } from '../database/enums';
import { generateToken } from '../database/utilities';
import Club from '../database/models/Club';

chai.use(chaiHttp);
const {expect} = chai;

const user = new User();
user.id = 1;
user.username = 'Admin';
user.email = 'admin@admin.com';
user.role = 'admin';
user.password = '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW';

const responseUser = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  role: 'admin',
};

const incorrectMessage = ErrorMessages.LOGIN_INCORRECT;
const blankMessage = ErrorMessages.LOGIN_BLANK;
const email = 'admin@admin.com';
const password = 'secret_admin';

const requisitionBodies = {
  valid: { email, password },
  noEmail: { password },
  wrongPatternEmail: { email:'wrong_pattern', password },
  fakeEmail: { email:'fake@email.com', password },
  noPassword: { email },
  shortLengthPassword: { email, password:'wp' },
  wrongPassword: { email, password:'wrong_password' },
};

const { valid, noEmail, wrongPatternEmail, fakeEmail, noPassword, shortLengthPassword, wrongPassword } = requisitionBodies;

const club1 = new Club();
club1.id = 1;
club1.clubName = 'Club 1';

const club2 = new Club();
club2.id = 2;
club2.clubName = 'Club 2';

const databaseArray: Club[] = [club1, club2];

const clubsArray: {}[] = [{ id: 1, clubName: 'Club 1' }, { id: 2, clubName: 'Club 2' }];

describe('1 - test login.route', () => {

  describe('1.1 - if it receives a valid requisition', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(user); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); })

    it('a) should return a succesful response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(valid);

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.include.keys('user','token');
      expect(chaiHttpResponse.body.user).to.deep.equal(responseUser);
    });
  });

  describe('1.2 - if body does not have an email', () => {
    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(noEmail);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(blankMessage);
    });
  });

  describe('1.3 - if email does not fit the pattern', () => {
    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(wrongPatternEmail);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(incorrectMessage);
    });
  });

  describe('1.4 - if email is fake', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(undefined); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); })

    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(fakeEmail);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(incorrectMessage);
    });
  });

  describe('1.5 - if body does not have a password', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(user); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); })

    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(noPassword);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(blankMessage);
    });
  });

  describe('1.6 - if password length is too short', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(user); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); })

    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(shortLengthPassword);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(incorrectMessage);
    });
  });

  describe('1.7 - if password is wrong', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(user); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); })

    it('a) should return an error response', async () => {
      const chaiHttpResponse: Response = await chai.request(app).post('/login').send(wrongPassword);

      expect(chaiHttpResponse).to.be.status(401);
      expect(chaiHttpResponse.body.message).to.equal(incorrectMessage);
    });
  });

  describe('1.8 - if given a valid token', () => {

    before(async () => { sinon.stub(User, "findOne").resolves(user); });
    after(() => { (User.findOne as sinon.SinonStub).restore(); });

    it('a) should return a response with the role', async () => {
      const token = await generateToken(email);
      const chaiHttpResponse: Response = await chai.request(app).get('/login/validate').set({ 'authorization': token });

      expect(chaiHttpResponse).to.be.status(200);
      expect(chaiHttpResponse.body).to.equal('admin');
    });
  });
});