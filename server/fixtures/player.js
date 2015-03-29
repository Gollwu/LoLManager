var Player = require('../src/model/player');

Player.sync({force: true}).then(function () {
    // Table created
    Player.create({
        firstName: 'Jeff',
        lastName: 'Aubry',
        pseudo: 'Golwu'
    });

    Player.create({
        firstName: 'Kevin',
        lastName: 'Guillermond',
        pseudo: 'Sqatx'
    });

    Player.create({
        firstName: 'Nicolas',
        lastName: 'Djambi',
        pseudo: 'Nhacsam'
    });

    Player.create({
        firstName: 'Fabien',
        lastName: 'Dagoulas',
        pseudo: 'Hycariss'
    });

    Player.create({
        firstName: 'Arthur',
        lastName: 'Budoin',
        pseudo: 'Overplow'
    });
});
