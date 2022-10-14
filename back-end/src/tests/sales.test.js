const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-http'));

const app = require('../api/app');

const { Sale } = require('../database/models');
const { saleMock } = require('./mocks/salesMock');


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
});