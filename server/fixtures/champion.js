var Champion = require('../src/model/champion');

Champion.sync({force: true}).then(function () {
    // Table created
    Champion.create({
        name: 'Irelia',
        role: 'ADTank',
    });

    Champion.create({
        name: 'Graves',
        role: 'ADCarry',
    });
});