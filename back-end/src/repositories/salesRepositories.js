const db = require('../database/models');

const salesRepository = {
  async saveSale(sale) {
    console.log(sale);
    const createdSale = await db.Sale.create(sale);
    return createdSale.dataValues;
  },
};

module.exports = salesRepository;