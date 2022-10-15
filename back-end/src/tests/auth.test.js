const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const {
  customerMock,
  validLoginBody,
  createdCustomerBody,
  createdCustomerMock,
  invalidLoginBody,
  userAlreadyCreatedBody
} = require('./mocks/userMock');

describe('Authorization', () => {
  afterEach(sinon.restore);

  describe('Login', () => {
    it('should return a 200 status code and the user with a token', async () => {
      sinon.stub(User, "findOne").resolves(customerMock);
      sinon.stub(jwt, 'sign').returns('any-token');

      const response = await chai.request(app)
        .post('/login')
        .send(validLoginBody);

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal({
        email: customerMock.email,
        name: customerMock.name,
        role: customerMock.role,
        token: 'any-token'
      })
    });

    it('should return a NOT FOUND status code if a invalid email or password is set', async () => {
      sinon.stub(User, "findOne").resolves(null);

      const response = await chai.request(app)
        .post('/login')
        .send(invalidLoginBody);

      chai.expect(response.status).to.be.eq(404);
      chai.expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });
  });

  describe('Register', () => {
    it('should return a 201 status code and the user with a token', async () => {
      sinon.stub(User, "findOne")
      .onFirstCall().resolves(null)
      .onSecondCall().resolves(null)
      .onThirdCall().resolves(createdCustomerMock);
      sinon.stub(User, "create").resolves(createdCustomerMock);
      sinon.stub(jwt, 'sign').returns('any-token');

      const response = await chai.request(app)
        .post('/register')
        .send(createdCustomerBody);

      chai.expect(response.status).to.be.eq(201);
      chai.expect(response.body).to.be.deep.equal({
        email: createdCustomerMock.email,
        name: createdCustomerMock.name,
        role: createdCustomerMock.role,
        token: 'any-token'
      })
    });

    it('should return a CONFLICT status code if email is already registered', async () => {
      sinon.stub(User, "findOne").resolves(true)
      .onSecondCall().resolves(null);

      const response = await chai.request(app)
        .post('/register')
        .send(userAlreadyCreatedBody);

      chai.expect(response.status).to.be.eq(409);
      chai.expect(response.body).to.be.deep.equal({ message: 'Name or email already exists' });
    });
  });
});
