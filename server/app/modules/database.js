/**
 * Module which manage the database
 * @author Nicolas
 * @module database
 */
var config = require('../../config.js'),
    Sequelize = require('sequelize');

module.exports = {

    /**
     * Get a connection to the database
     * @method getConection
     * @return Sequelize A Sequelize instance
     */
    getConection: function () {
        return new Sequelize(config.dbconnectionUrl, {
            default: {
                timestamp: true
            },
            logging: config.env == 'dev' ? console.log : function(){}
        });
    }

};
