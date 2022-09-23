const productsService = require('../services/productsService');

const productsController = {
  async getall(req, res) {
    const products = await productsService.getall();
    res.status(200).json(products);
  },
};

module.exports = productsController;
