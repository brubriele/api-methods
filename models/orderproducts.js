'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    // associations can be defined here
  };
  return OrderProducts;
};