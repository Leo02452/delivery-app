const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const {
  customerMock,
  validBody,
} = require('./mocks/userMock');

describe('Authorization', () => {
  afterEach(sinon.restore);

  describe('Login', () => {
    it('should return a 200 status code and the user with a token', async () => {
      sinon.stub(User, "findOne").resolves(customerMock);
      sinon.stub(jwt, 'sign').returns('any-token');

      const response = await chai.request(app)
        .post('/login')
        .send(validBody);

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal({
        email: customerMock.email,
        name: customerMock.name,
        role: customerMock.role,
        token: 'any-token'
      })
    });
  });

});
