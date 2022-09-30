const { Op } = require('sequelize');
const db = require('../database/models');

const salesRepository = {
  async saveSale(sale) {
    const createdSale = await db.Sale.create(sale);
    return createdSale.dataValues;
  },

  async getByRole(userId) {
    const sales = await db.Sale.findAll({ where: {
      [Op.or]: [{ userId }, { sellerId: userId }],
    } });
    return sales;
  },

  async list() {
    const sales = await db.Sale.findAll();

    return sales;
  },

  async getById(id) {
    const sale = await db.Sale.findByPk(id);
    
    return sale;
  },
};

module.exports = salesRepository;