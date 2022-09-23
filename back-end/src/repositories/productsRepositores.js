const db = require('../database/models');

const productsRepository = {
  async getall() {
    const products = await db.Products.findAll();
    return products;
  },
};

module.exports = productsRepository;