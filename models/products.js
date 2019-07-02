'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {foreingKey: 'productsId'})
  };
  // Products.create({productName: 'Café americano', price: 5});
  // Products.create({productName: 'Sanduíche de presunto e queijo', price: 10});
  // Products.create({productName: 'Suco de fruta natural', price: 5});
  // Products.create({productName: 'Hambúrguer simples', price: 10});
  // Products.create({productName: 'Hambúrguer duplo', price: 15});
  // Products.create({productName: 'Batata frita', price: 5});
  // Products.create({productName: 'Anéis de cebola', price: 5});
  // Products.create({productName: 'Água 500ml', price: 5});
  // Products.create({productName: 'Água 750ml', price: 7});
  // Products.create({productName: 'Bebida gaseificada 500ml', price: 7});
  // Products.create({productName: 'Bebida gaseificada 750ml ', price: 10});
  return Products;
};