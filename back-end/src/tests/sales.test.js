const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const jwt = require('jsonwebtoken');
const { Sale } = require('../database/models');
const { saleMock, updatedSaleMock, createdSaleMock, createSaleBody, invalidCreateSaleBody } = require('./mocks/salesMock');


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

    it('should return a 200 status code and a list of user sales', async () => {
      sinon.stub(Sale, "findAll").resolves([saleMock]);

      const response = await chai.request(app)
        .get('/sales/search?userId=1');

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

    it('should return a NOT FOUND status code if the sale id is not exists', async () => {
      sinon.stub(Sale, "findOne").resolves(null);

      const response = await chai.request(app)
        .get('/sales/0');

      chai.expect(response.status).to.be.eq(404);
      chai.expect(response.body).to.be.deep.equal({ message: 'Sale not found' });
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

  describe('Create', () => {
    it('should return a 201 status code and the new sale id', async () => {
      sinon.stub(Sale, "create").resolves({ dataValues: createdSaleMock });
      sinon.stub(jwt, "verify").returns({ id: 1 });

      const response = await chai.request(app)
        .post('/sales')
        .send(createSaleBody)
        .set('Authorization', 'any-seller-token');

      chai.expect(response.status).to.be.eq(201);
      chai.expect(response.body).to.be.deep.equal(2);
    });

    it('should return a UNAUTHORIZED status code if the token is invalid', async () => {
      const response = await chai.request(app)
        .post('/sales')
        .send(invalidCreateSaleBody)
        .set('Authorization', 'invalid-token');

      chai.expect(response.status).to.be.eq(401);
      chai.expect(response.body).to.be.deep.equal({ message: 'Invalid token' });
    });

    it('should return a BAD REQUEST status code if the body is invalid', async () => {
      sinon.stub(jwt, "verify").returns({ id: 1 });

      const response = await chai.request(app)
        .post('/sales')
        .send(invalidCreateSaleBody)
        .set('Authorization', 'any-seller-token');

      chai.expect(response.status).to.be.eq(400);
      chai.expect(response.body).to.be.deep.equal({ message: 'deliveryAddress: Expected string, received number' });
    });
  });
});