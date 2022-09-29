const db = require('../database/models');

const salesProductRepository = {
  async saveSalesProduct(sale) {
    await db.SalesProduct.create(sale);
  },
};

module.exports = salesProductRepository;