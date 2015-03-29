var db = require('../common/database/connection'),
    Sequelize = require('sequelize');

var Player = db.define('player', {
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
    warding: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    community: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    attitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    charisma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    adaptability: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    laning: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    farming: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    outplay: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ganking: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    pressuring: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    smiting: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ADCarry: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Tank: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ADTank: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    APCarry: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    AssassinAD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Support: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = Player;
