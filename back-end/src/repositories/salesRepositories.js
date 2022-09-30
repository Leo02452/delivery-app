const { Op } = require('sequelize');
const db = require('../database/models');

const include = [
  { model: db.Products, as: 'products', through: { attributes: ['quantity'] } },
  { model: db.User, as: 'seller', attributes: ['name'] },
];

const salesRepository = {
  async saveSale(sale) {
    const createdSale = await db.Sale.create(sale);
    return createdSale.dataValues;
  },

  async getByRole(userId) {
    const sales = await db.Sale.findAll({
      where: {
        [Op.or]: [{ userId }, { sellerId: userId }],
      },
    });
    return sales;
  },

  async list() {
    const sales = await db.Sale.findAll({ include });

    return sales;
  },

  async getById(id) {
    const sale = await db.Sale.findOne({ include, where: { id } });

    return sale;
  },
};

  /* const sale = await db.Sale.findOne({
      include: [{
        model: db.Products, as: 'products', through: { attributes: [] } },{
        model: db.User, as: 'seller', through: { attributes: {
          exclude: ['password', 'id', 'role', 'email']
        } }
      }],
      where: { id },
    }); */

module.exports = salesRepository;