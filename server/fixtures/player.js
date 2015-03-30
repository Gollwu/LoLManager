var Player = require('../src/model/player');

Player.sync({force: true}).then(function () {
    // Table created
    Player.create({
        firstName: 'Jeff',
        lastName: 'Aubry',
        pseudo: 'Golwu'
		birthdate: '1992-11-02',
		country: 'France',
		role: 'top',
		warding: 40,
		community: 3,
		attitude: 38,
		charisma: 24,
		adaptability: 62,
		laning: 55,
		farming: 42,
		shotcalling: 60,
		outplay: 38,
		ganking: 41,
		pressuring: 40,
		smiting: 65,
		ADCarry: 27,
		Tank: 69,
		ADTank: 67,
		APTank: 62,
		APCarry: 37,
		AssassinAD: 25,
		AssassinAP: 28,
		Support: 65
    });
	
	 Player.create({
        firstName: 'Nicolas',
        lastName: 'Djambi',
        pseudo: 'Nhacsam'
		birthdate: '1994-04-29',
		country: 'France',
		role: 'junger',
		warding: 17,
		community: 3,
		attitude: 78,
		charisma: 52,
		adaptability: 24,
		laning: 39,
		farming: 32,
		shotcalling: 25,
		outplay: 25,
		ganking: 42,
		pressuring: 37,
		smiting: 58,
		ADCarry: 17,
		Tank: 50,
		ADTank: 42,
		APTank: 38,
		APCarry: 28,
		AssassinAD: 18,
		AssassinAP: 19,
		Support: 42
    });
	
	 Player.create({
        firstName: 'Arthur',
        lastName: 'Baudoin',
        pseudo: 'Overplow'
		birthdate: '1991-12-25',
		country: 'France',
		role: 'mid',
		warding: 25,
		community: 5,
		attitude: 75,
		charisma: 65,
		adaptability: 45,
		laning: 51,
		farming: 42,
		shotcalling: 38,
		outplay: 45,
		ganking: 26,
		pressuring: 25,
		smiting: 40,
		ADCarry: 25,
		Tank: 28,
		ADTank: 35,
		APTank: 45,
		APCarry: 69,
		AssassinAD: 55,
		AssassinAP: 65,
		Support: 25
    });  

    Player.create({
        firstName: 'Fabien',
        lastName: 'Daoulas',
        pseudo: 'Hycariss'
		birthdate: '1991-04-07',
		country: 'France',
		role: 'adcarry',
		warding: 62,
		community: 5,
		attitude: 41,
		charisma: 39,
		adaptability: 72,
		laning: 74,
		farming: 76,
		shotcalling: 60,
		outplay: 52,
		ganking: 47,
		pressuring: 42,
		smiting: 28,
		ADCarry: 71,
		Tank: 56,
		ADTank: 58,
		APTank: 47,
		APCarry: 60,
		AssassinAD: 68,
		AssassinAP: 67,
		Support: 41
    });
	
	 Player.create({
        firstName: 'Alexis',
        lastName: 'Krakovinsky',
        pseudo: 'Sowerdski'
		birthdate: '1992-10-28',
		country: 'France',
		role: 'support',
		warding: 22,
		community: 5,
		attitude: 2,
		charisma: 38,
		adaptability: 27,
		laning: 29,
		farming: 40,
		shotcalling: 78,
		outplay: 28,
		ganking: 27,
		pressuring: 32,
		smiting: 45,
		ADCarry: 47,
		Tank: 45,
		ADTank: 46,
		APTank: 27,
		APCarry: 18,
		AssassinAD: 17,
		AssassinAP: 25,
		Support: 50
    });
   
	Player.create({
        firstName: 'Mike',
        lastName: 'Petersen',
        pseudo: 'Wicked'
		birthdate: '1994-04-29',
		country: 'Denmark',
		role: 'top',
		warding: 40,
		community: 10,
		attitude: 10,
		charisma: 60,
		adaptability: 65,
		laning: 87,
		farming: 85,
		shotcalling: 45,
		outplay: 45,
		ganking: 35,
		pressuring: 20,
		smiting: 10,
		ADCarry: 40,
		Tank: 97,
		ADTank: 90,
		APTank: 85,
		APCarry: 65,
		AssassinAD: 40,
		AssassinAP: 40,
		Support: 60
    });
	
	Player.create({
        firstName: 'Ilyas',
        lastName: 'Hartsema',
        pseudo: 'Shook'
		birthdate: '1994-11-05',
		country: 'Netherlands',
		role: 'jungler',
		warding: 72,
		community: 25,
		attitude: 17,
		charisma: 45,
		adaptability: 78,
		laning: 25,
		farming: 78,
		shotcalling: 72,
		outplay: 78,
		ganking: 84,
		pressuring: 80,
		smiting: 92,
		ADCarry: 64,
		Tank: 89,
		ADTank: 87,
		APTank: 78,
		APCarry: 45,
		AssassinAD: 80,
		AssassinAP: 45,
		Support: 45
    });
	
	Player.create({
        firstName: 'Henrik',
        lastName: 'Hansen',
        pseudo: 'Froggen'
		birthdate: '1994-02-21',
		country: 'Denmark',
		role: 'mid',
		warding: 92,
		community: 100,
		attitude: 99,
		charisma: 75,
		adaptability: 85,
		laning: 93,
		farming: 98,
		shotcalling: 84,
		outplay: 94,
		ganking: 67,
		pressuring: 90,
		smiting: 25,
		ADCarry: 82,
		Tank: 58,
		ADTank: 54,
		APTank: 72,
		APCarry: 98,
		AssassinAD: 95,
		AssassinAP: 96,
		Support: 88
    });
	
	Player.create({
        firstName: 'Martin',
        lastName: 'Larsson',
        pseudo: 'Rekkles'
		birthdate: '1996-09-20',
		country: 'Sweden',
		role: 'adcarry',
		warding: 66,
		community: 57,
		attitude: 82,
		charisma: 77,
		adaptability: 80,
		laning: 96,
		farming: 97,
		shotcalling: 43,
		outplay: 92,
		ganking: 25,
		pressuring: 72,
		smiting: 25,
		ADCarry: 98,
		Tank: 56,
		ADTank: 62,
		APTank: 45,
		APCarry: 78,
		AssassinAD: 60,
		AssassinAP: 58,
		Support: 79
    });
	
	Player.create({
        firstName: 'Mitch ',
        lastName: 'Voorspoels',
        pseudo: 'Krepo'
		birthdate: '1990-05-8' ,
		country: 'Belgium',
		role: 'support',
		warding: 97,
		community: 100,
		attitude: 97,
		charisma: 95,
		adaptability: 75,
		laning: 86,
		farming: 75,
		shotcalling: 78,
		outplay: 78,
		ganking: 85,
		pressuring: 82,
		smiting: 61,
		ADCarry: 71,
		Tank: 72,
		ADTank: 68,
		APTank: 57,
		APCarry: 71,
		AssassinAD: 58,
		AssassinAP: 67,
		Support: 97
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
