var config = require('../../../config.js'),
    Sequelize = require('sequelize');


var sequelize = new Sequelize(config.dbconnectionUrl, {
    default: {
        timestamp: true
    }
});

module.exports = sequelize;
