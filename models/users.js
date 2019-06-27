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
  return Users;
};