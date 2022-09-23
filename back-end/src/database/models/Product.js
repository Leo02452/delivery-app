const createProductsModel = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
    name: {
        type: DataTypes.STRING,
        },
    price: {
        type: DataTypes.DECIMAL,
        },
    urlImage: {
        type: DataTypes.STRING,
        field: 'url_image',
        }
    }, {
      tableName: 'products',
      timestamps: false,
      underscore: true,
    });
  
    return Products;
  };
  
  module.exports = createProductsModel;