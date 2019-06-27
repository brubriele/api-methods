'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    ordersId: DataTypes.INTEGER,
    productsId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Orders, {foreingKey: 'ordersId'});
    OrderProducts.belongsTo(models.Products, {foreingKey: 'productsId'});
  };
  return OrderProducts;
};