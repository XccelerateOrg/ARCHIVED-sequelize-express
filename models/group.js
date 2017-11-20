'use strict';
module.exports = function(sequelize, DataTypes) {
  var group = sequelize.define('group', {
    name: DataTypes.STRING
  });
  group.associate = function(models) {
        group.hasMany(models.user);
  }
  return group;
};