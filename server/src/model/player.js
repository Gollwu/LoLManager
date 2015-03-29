var db = require('../common/database/connection'),
    Sequelize = require('sequelize');

var Player = db.define('player', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING
  }
});

module.exports = Player;
