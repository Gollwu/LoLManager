var db = require('../modules/database'),
    Sequelize = require('sequelize');
	
var statModel  = {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
};

var Champion = db.getConection().define('champion', {
    name: {
        type: Sequelize.STRING(25)
    },
	ADCarry: statModel,
	Tank: statModel,
	ADTank: statModel,
	APTank: statModel,
	APCarry: statModel,
	AssassinAP: statModel,
	AssassinAD: statModel,
	Support: statModel
});

module.exports = Champion;
