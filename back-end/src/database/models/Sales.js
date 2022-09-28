const createSalesModel = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sale',
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    sellerId: {
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
    },
    deliveryNumber: {
        type: DataTypes.INTEGER,
    },
    saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pendente'
    },
  }, 
  { 
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  })

  Sales.associate = (models) => {
    Sales.belongsTo(models.User,{foreignKey: 'sellerId', as: 'seller'});
    Sales.belongsTo(models.User,{foreignKey: 'userId', as: 'user'});
  }

  return Sales;
}

module.exports = createSalesModel;