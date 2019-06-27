'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {
      foreingKey: 'uid'
    });
  };
  // Users.create({email: 'brunag@gmail.com'});
  // Users.create({email: 'teste@gmail.com'});
  // Users.create({email: 'teste2@gmail.com'});
  // Users.create({email: 'teste3@gmail.com'});
  // Users.create({email: 'teste4@gmail.com'});
  return Users;
};