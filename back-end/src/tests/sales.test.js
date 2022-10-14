const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const jwt = require('jsonwebtoken');
const { Sale } = require('../database/models');
const { saleMock, updatedSaleMock } = require('./mocks/salesMock');


describe('Sales', () => {
  afterEach(sinon.restore);

  describe('List all', () => {
    it('should return a 200 status code and list of sales', async () => {
      sinon.stub(Sale, "findAll").resolves([saleMock]);

      const response = await chai.request(app)
        .get('/sales/search');

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal([saleMock]);
    });
  });

  describe('Find by id', () => {
    it('should return a 200 status code and a sale', async () => {
      sinon.stub(Sale, "findOne").resolves(saleMock);

      const response = await chai.request(app)
        .get('/sales/1');

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal(saleMock);
    });
  });

  describe('Update status', () => {
    it('should return a 200 status code and the updated sale', async () => {
      sinon.stub(Sale, "update").resolves(updatedSaleMock);
      sinon.stub(jwt, "verify").returns({ role: 'seller' });

      const response = await chai.request(app)
        .patch('/sales/1')
        .send({ status: 'Preparando' })
        .set('Authorization', 'any-seller-token');

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal(updatedSaleMock);
    });
  });
});