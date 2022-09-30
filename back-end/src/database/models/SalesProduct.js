/** @type {import('sequelize').ModelAttributes} */
const createSalesProductModel = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Products, { foreignKey: 'saleId', through: 'SalesProduct', as: 'products' });
    models.Products.belongsToMany(models.Sale, { foreignKey: 'productId', through: 'SalesProduct', as: 'sales' });
  }

  return SalesProduct;
};

module.exports = createSalesProductModel;