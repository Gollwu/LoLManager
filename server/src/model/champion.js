var db = require('../modules/database'),
    Sequelize = require('sequelize');

var Champion = db.getConection().define('champion', {
    name: {
        type: Sequelize.STRING(25)
    },
    role: {
        type: Sequelize.ENUM,
        values: ['ADCarry','Tank','ADTank', 'APTank', 'APCarry', 'AssassinAP', 'AssassinAD','Support'],
        defaultValue: "Tank"
    }
});

module.exports = Champion;
