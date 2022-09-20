/** @type {import('sequelize').ModelAttributes} */
const createSalesProductModel = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'salesProducts'
  });

  SalesProduct.associate = (models) => {
    models.Sales.hasMany(models.Products, { foreignKey: 'saleId', through: 'SalesProduct', as: 'products' });
    models.Products.belongsToMany(models.Sales, { foreignKey: 'productId', through: 'SalesProduct', as: 'sales' });
  }

  return SalesProduct;
};

module.exports = createSalesProductModel;