'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('salesProducts', {
    saleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      field: 'sale_id',
    },
    productId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      field: 'product_id',
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
   });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
