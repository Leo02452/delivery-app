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
};

module.exports = salesService;