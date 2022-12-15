const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const { Products } = require('../database/models');
const { productsMock } = require('./mocks/productMock');


describe('Products', () => {
  afterEach(sinon.restore);

  describe('List all', () => {
    it('should return a 200 status code and list of products', async () => {
      sinon.stub(Products, "findAll").resolves([productsMock]);

      const response = await chai.request(app)
        .get('/customer/products');

      chai.expect(response.status).to.be.eq(200);
      chai.expect(response.body).to.be.deep.equal([productsMock]);
    });
  });
});