const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const salesProductRepository = require('../repositories/salesProductRepositories');
const salesRepository = require('../repositories/salesRepositories');

const salesService = {
  async create(payload, userId) {
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products } = payload;

    const createdSaleId = await sequelize.transaction(async (transaction) => {
      const createdSale = await salesRepository.saveSale({
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
      }, { transaction });

      Promise.all(
        products
          .map(({ id, quantity }) => salesProductRepository.saveSalesProduct({
            saleId: createdSale.id,
            productId: id,
            quantity,
          }, { transaction })),
      );

      return createdSale.id;
    });

    return createdSaleId;
  },

  async detailsList(id) {
   if (!id) {
    const sales = await salesRepository.list();

    return sales;
   }

    const sales = await salesRepository.getByRole(id);

    return sales;
  },

  async getById(id) {
    const sale = await salesRepository.getById(id);

    if (!sale) {
      const e = new Error('Sale not found');
      e.name = 'NotFoundError';
      throw e;
    }

    return sale;
  },
};

// {
// "sellerId": 2,
// "totalPrice": 234,
// "deliveryAddress": "huefhefnjwd", 
// "deliveryNumber": "44", 
// "products": [{
// "id": 2,
// "quantity": 3
// }]  
// }

module.exports = salesService;
