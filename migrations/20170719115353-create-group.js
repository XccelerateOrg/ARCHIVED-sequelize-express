'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(()=>{
      return queryInterface.addColumn(
        'users',
        'groupId',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      )
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('groups');
  }
};