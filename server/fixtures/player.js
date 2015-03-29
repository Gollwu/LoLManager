var Player = require('../src/model/player');

Player.sync({force: true}).then(function () {
    // Table created
    Player.create({
        firstName: 'Jeff',
        lastName: 'Aubry'
    });

    Player.create({
        firstName: 'Kevin',
        lastName: 'Guillermond'
    });

    Player.create({
        firstName: 'Nicolas',
        lastName: 'Djambi'
    });

    Player.create({
        firstName: 'Fabin',
        lastName: 'Dagoulas'
    });

    Player.create({
        firstName: 'Arthur',
        lastName: 'Budoin'
    });
});
