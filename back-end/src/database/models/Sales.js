const createSalesModel = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sales',
    {
        userId: {
          type: DataTypes.INTEGER,
        },
        sellerId: {
          type: DataTypes.INTEGER,
        },
        totalPrice: {
          type: DataTypes.DECIMAL(9,2),
        },
        deliveryAddres: {
          type: DataTypes.STRING,
        },
        deliveryNumber: {
            type: DataTypes.INTEGER,
        },
        saleDate: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
        },
    }, 
    { 
        timestamps: false,
        tableName: 'users',
        underscore: true,
    })

    Sales.associate = (models) => {
        Sales.belongsTo(models.User,{foreignKey: 'sellerId', as: 'seller'});
        Sales.belongsTo(models.User,{foreignKey: 'userId', as: 'user'});
    }

    return Sales;
}

module.exports = createSalesModel;