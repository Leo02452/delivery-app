const createProductsModel = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
    id:  {
        type: DataTypes.INTEGER,
        },
    name: {
        type: DataTypes.STRING,
        },
    price: {
        type: sequelize.DECIMAL(4, 2),
        },
    urlImage: {
        type: sequelize.STRING,
        }
    }, {
      tableName: 'Products',
      timestamps: false,
      underscore: true,
    });
  
    return Products;
  };
  
  module.exports = createProductsModel;