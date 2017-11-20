'use strict';
const models = require("../models");
const User = models.user;
const Group = models.group;

module.exports = {
  up: function (queryInterface, Sequelize) {
      var group = new Group();
      group.name = "Group 1";
      return group.save().then((group)=>{

        var user = new User();
        user.name = "Thilo Roth";
        user.firstName = "Thilo";
        user.lastName = "Roth";
        user.groupId = group.id;
        var user1Res = user.save();

        var user2 = new User();
        user2.name = "Perry Luo";
        user2.firstName = "Perry";
        user2.lastName = "Luo";
        user2.groupId = group.id;
        var user2Res = user2.save()
        return Promise.all([user1Res,user2Res]);
      });
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([User.truncate(),Group.truncate()]);
  }
};
