var db = require('../modules/database'),
    Sequelize = require('sequelize');

var statModel  = {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
};
var connection = db.getConection();

var Player = connection.define('player', {
    firstName: {
        type: Sequelize.STRING(25)
    },
    lastName: {
        type: Sequelize.STRING(25)
    },
    pseudo: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    birthdate: {
        type: Sequelize.DATE
    },
    country: {
        type: Sequelize.STRING(30)
    },
    role: {
        type: Sequelize.STRING(15)
    },
    warding: statModel,
    community: statModel,
    attitude: statModel,
    charisma: statModel,
    adaptability: statModel,
    laning: statModel,
    farming: statModel,
    outplay: statModel,
    ganking: statModel,
    pressuring: statModel,
    smiting: statModel,
    ADCarry: statModel,
    Tank: statModel,
    ADTank: statModel,
    APTank: statModel,
    APCarry: statModel,
    AssassinAD: statModel,
    AssassinAP: statModel,
    Support: statModel
});

module.exports = Player;
