const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const {
  customerMock,
  customerWithoutPassword,
} = require('./mocks/userMock');

describe('Users', () => {
  afterEach(sinon.restore);

  describe('List all', () => {
    it('should return a 200 status code and list of users', async () => {
      sinon.stub(User, "findAll").resolves([customerMock]);

      const response = await chai.request(app)
        .get('/users/search');

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal([customerWithoutPassword]);
    });
  });

  describe('Delete', () => {
    it('should return a 204 status code and an empty body', async () => {
      sinon.stub(User, "destroy").resolves(true);
      sinon.stub(jwt, "verify").returns({ role: 'administrator' })

      const response = await chai.request(app)
        .delete('/users/1')
        .set('Authorization', 'any-token');

      chai.expect(response.status).to.be.eq(204);
      chai.expect(response.body).to.be.deep.equal({});
    });
  });
});
