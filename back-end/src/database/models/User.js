const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User',
    {
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        role: {
          type: DataTypes.STRING,
        }
    }, 
    { 
        timestamps: false,
        tableName: 'users',
    })

    User.associate = (models) => {
      User.hasMany(Sales,{foreignKey: 'userId', as: 'userSales'});
      User.hasMany(Sales,{foreignKey: 'sellerId', as: 'sellerSales'});
    }

    return User;
}

module.exports = createUserModel;