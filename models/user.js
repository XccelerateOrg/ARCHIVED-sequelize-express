'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });
  user.associate =  function(models) {
      user.belongsTo(models.group);    
  }
  return user;
};