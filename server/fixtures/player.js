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


/*
 INSERT INTO player(id, firstname,lastname, pseudo, age, birthdate, country, role, warding, community, attitude, charisma, adaptability, excentricity, laning, farming, outplay, ganking, pressuring, smiting, ADcarry, ADCarry, Tank, ADTank, APCarry, APTank, AssassinAD, Support) VALUES

(1, 'Mike', 'Petersen', 'Wickd', 23, '1991/01/22', 'Denmark', 'toplaner', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(2, '', '', 'Shook', 23, '1991/01/22', 'German', 'jungler', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(3, 'Henrik', '', 'Froggen', 23, '1991/01/22', 'Denmark', 'midlaner', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(4, 'Martin', 'Larssen', 'Rekkles', 23, '1991/01/22', 'Denmark', 'adcarry', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(5, 'Patryk', '', 'Nyph', 23, '1991/01/22', 'Germany', 'support', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(6, 'Jeff', 'Aubry', 'Gollwu', 22, '1992/11/02', 'France', 'toplaner', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(7, 'Maxime', 'Gillet', 'Nerevar', 23, '1991/01/22', 'France', 'jungler', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(8, 'Arthur', 'Baudoin', 'Overplow', 23, '1991/01/22', 'France', 'midlaner', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(9, 'Fabien', 'Daoulas', 'Hycariss', 23, '1991/01/22', 'France', 'adcarry', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40),
(10, 'Alexis', 'Krakowinski', 'Sowerdski', 23, '1991/01/22', 'France', 'support', 20, 15, 60, 45, 20, 35, 70, 70, 50, 30, 20, 10, 15, 90, 80, 60, 80, 25, 40);

*/
