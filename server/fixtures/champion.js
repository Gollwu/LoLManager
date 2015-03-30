var Champion = require('../src/model/champion');

Champion.sync({force: true}).then(function () {
    // Table created
    Champion.create({
        name: 'Aatrox',
        ADCarry: 40,
		Tank: 60,
		ADTank: 100,
		APTank: 20,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 25,
    });

    Champion.create({
        name: 'Ahri',
        ADCarry: 60,
		Tank: 20,
		ADTank: 10,
		APTank: 45,
		APCarry: 90,
		AssassinAP: 100,
		AssassinAD: 10,
		Support: 40,
    });
	
	Champion.create({
        name: 'Akali',
        ADCarry: 15,
		Tank: 20,
		ADTank: 60,
		APTank: 75,
		APCarry: 85,
		AssassinAP: 100,
		AssassinAD: 70,
		Support: 10,
    });
	
	Champion.create({
		name: 'Alistar',
		ADCarry: 5,
		Tank: 95,
		ADTank: 70,
		APTank: 55,
		APCarry: 70,
		AssassinAP: 20,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Amumu',
		ADCarry: 5,
		Tank: 95,
		ADTank: 40,
		APTank: 100,
		APCarry: 65,
		AssassinAP: 45,
		AssassinAD: 5,
		Support: 60,
    });
	
	Champion.create({
		name: 'Anivia',
		ADCarry: 20,
		Tank: 35,
		ADTank: 40,
		APTank: 60,
		APCarry: 100,
		AssassinAP: 70,
		AssassinAD: 5,
		Support: 60,
    });
	
	Champion.create({
		name: 'Annie',
		ADCarry: 50,
		Tank: 5,
		ADTank: 5,
		APTank: 55,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Ashe',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 20,
		AssassinAP: 5,
		AssassinAD: 10,
		Support: 55,
    });
	
	Champion.create({
		name: 'Azir',
		ADCarry: 10,
		Tank: 5,
		ADTank: 5,
		APTank: 30,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 30,
		Support: 30,
    });
	
	Champion.create({
		name: 'Bard',
		ADCarry: 20,
		Tank: 10,
		ADTank: 10,
		APTank: 40,
		APCarry: 70,
		AssassinAP: 55,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Blitzcrank',
		ADCarry: 10,
		Tank: 60,
		ADTank: 45,
		APTank: 60,
		APCarry: 60,
		AssassinAP: 20,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Brand',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 30,
		APCarry: 100,
		AssassinAP: 65,
		AssassinAD: 20,
		Support: 60,
    });
	
	Champion.create({
		name: 'Braum',
		ADCarry: 5,
		Tank: 70,
		ADTank: 50,
		APTank: 40,
		APCarry: 10,
		AssassinAP: 5,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Caitlyn',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 10,
		AssassinAP: 5,
		AssassinAD: 10,
		Support: 20,
    });
	
	Champion.create({
		name: 'Cassiopeia',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 50,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 20,
		Support: 50,
    });
	
	Champion.create({
		name: 'Chogath',
		ADCarry: 5,
		Tank: 90,
		ADTank: 65,
		APTank: 100,
		APCarry: 95,
		AssassinAP: 70,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'Corki',
		ADCarry: 100,
		Tank: 5,
		ADTank: 25,
		APTank: 25,
		APCarry: 30,
		AssassinAP: 20,
		AssassinAD: 30,
		Support: 10,
    });
	
	Champion.create({
		name: 'Darius',
		ADCarry: 10,
		Tank: 60,
		ADTank: 100,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 10,
    });
	
	Champion.create({
		name: 'Diana',
		ADCarry: 10,
		Tank: 20,
		ADTank: 20,
		APTank: 70,
		APCarry: 90,
		AssassinAP: 100,
		AssassinAD: 30,
		Support: 10,
    });
	
	Champion.create({
		name: 'Draven',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 30,
		Support: 5,
    });
	
	Champion.create({
		name: 'DrMundo',
		ADCarry: 5,
		Tank: 100,
		ADTank: 90,
		APTank: 80,
		APCarry: 20,
		AssassinAP: 5,
		AssassinAD: 30,
		Support: 55,
    });
	
	Champion.create({
		name: 'Elise',
		ADCarry: 20,
		Tank: 70,
		ADTank: 60,
		APTank: 100,
		APCarry: 70,
		AssassinAP: 65,
		AssassinAD: 20,
		Support: 70,
    });
	
	Champion.create({
		name: 'Evelynn',
		ADCarry: 5,
		Tank: 50,
		ADTank: 70,
		APTank: 70,
		APCarry: 65,
		AssassinAP: 100,
		AssassinAD: 30,
		Support: 5,
    });
	
	Champion.create({
		name: 'Ezreal',
		ADCarry: 100,
		Tank: 5,
		ADTank: 5,
		APTank: 5,
		APCarry: 95,
		AssassinAP: 70,
		AssassinAD: 70,
		Support: 10,
    });
	
	Champion.create({
		name: 'Fiddlesticks',
		ADCarry: 30,
		Tank: 5,
		ADTank: 5,
		APTank: 35,
		APCarry: 90,
		AssassinAP: 100,
		AssassinAD: 5,
		Support: 70,
    });
	
	Champion.create({
		name: 'Fiora',
		ADCarry: 40,
		Tank: 20,
		ADTank: 35,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Fizz',
		ADCarry: 10,
		Tank: 30,
		ADTank: 100,
		APTank: 80,
		APCarry: 90,
		AssassinAP: 90,
		AssassinAD: 95,
		Support: 5,
    });
	
	Champion.create({
		name: 'Galio',
		ADCarry: 5,
		Tank: 70,
		ADTank: 60,
		APTank: 100,
		APCarry: 80,
		AssassinAP: 60,
		AssassinAD: 5,
		Support: 60,
    });
	
	Champion.create({
		name: 'Gangplank',
		ADCarry: 20,
		Tank: 70,
		ADTank: 100,
		APTank: 30,
		APCarry: 30,
		AssassinAP: 10,
		AssassinAD: 80,
		Support: 20,
    });
	
	Champion.create({
		name: 'Garen',
		ADCarry: 20,
		Tank: 100,
		ADTank: 100,
		APTank: 30,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 5,
    });
	
	Champion.create({
		name: 'Gnar',
		ADCarry: 70,
		Tank: 90,
		ADTank: 100,
		APTank: 20,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 30,
		Support: 30,
    });
	
	Champion.create({
		name: 'Gragas',
		ADCarry: 5,
		Tank: 90,
		ADTank: 70,
		APTank: 100,
		APCarry: 90,
		AssassinAP: 75,
		AssassinAD: 5,
		Support: 60,
    });
	
	Champion.create({
		name: 'Graves',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 10,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 5,
    });
	
	Champion.create({
		name: 'Heimerdinger',
		ADCarry: 30,
		Tank: 5,
		ADTank: 5,
		APTank: 40,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 5,
		Support: 5,
    });
	
	Champion.create({
		name: 'Hecarim',
		ADCarry: 20,
		Tank: 60,
		ADTank: 100,
		APTank: 25,
		APCarry: 40,
		AssassinAP: 40,
		AssassinAD: 95,
		Support: 20,
    });
	
	Champion.create({
		name: 'Irelia',
		ADCarry: 20,
		Tank: 60,
		ADTank: 100,
		APTank: 20,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 85,
		Support: 30,
    });
	
	Champion.create({
		name: 'Janna',
		ADCarry: 30,
		Tank: 5,
		ADTank: 5,
		APTank: 5,
		APCarry: 70,
		AssassinAP: 50,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'JarvanIV',
		ADCarry: 10,
		Tank: 90,
		ADTank: 100,
		APTank: 50,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 40,
    });
	
	Champion.create({
		name: 'Jax',
		ADCarry: 20,
		Tank: 60,
		ADTank: 100,
		APTank: 70,
		APCarry: 60,
		AssassinAP: 55,
		AssassinAD: 70,
		Support: 10,
    });
	
	Champion.create({
		name: 'Jayce',
		ADCarry: 60,
		Tank: 20,
		ADTank: 30,
		APTank: 10,
		APCarry: 10,
		AssassinAP: 10,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Jinx',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 10,
		AssassinAP: 10,
		AssassinAD: 60,
		Support: 20,
    });
	
	Champion.create({
		name: 'Kalista',
		ADCarry: 100,
		Tank: 5,
		ADTank: 15,
		APTank: 5,
		APCarry: 20,
		AssassinAP: 15,
		AssassinAD: 70,
		Support: 20,
    });
	
	Champion.create({
		name: 'Karma',
		ADCarry: 20,
		Tank: 10,
		ADTank: 5,
		APTank: 40,
		APCarry: 90,
		AssassinAP: 70,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Karthus',
		ADCarry: 15,
		Tank: 10,
		ADTank: 5,
		APTank: 40,
		APCarry: 100,
		AssassinAP: 70,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'Kassadin',
		ADCarry: 5,
		Tank: 10,
		ADTank: 50,
		APTank: 50,
		APCarry: 95,
		AssassinAP: 100,
		AssassinAD: 5,
		Support: 10,
    });
	
	Champion.create({
		name: 'Katarina',
		ADCarry: 5,
		Tank: 20,
		ADTank: 30,
		APTank: 50,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 75,
		Support: 5,
    });
	
	Champion.create({
		name: 'Kayle',
		ADCarry: 30,
		Tank: 5,
		ADTank: 20,
		APTank: 20,
		APCarry: 100,
		AssassinAP: 75,
		AssassinAD: 50,
		Support: 85,
    });
	
	Champion.create({
		name: 'Kennen',
		ADCarry: 70,
		Tank: 15,
		ADTank: 20,
		APTank: 55,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 50,
		Support: 40,
    });
	
	Champion.create({
		name: 'Khazix',
		ADCarry: 20,
		Tank: 50,
		ADTank: 85,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 30,
		AssassinAD: 100,
		Support: 10,
    });
	
	Champion.create({
		name: 'Kogmaw',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 20,
		APCarry: 95,
		AssassinAP: 30,
		AssassinAD: 30,
		Support: 20,
    });
	
	Champion.create({
		name: 'Leblanc',
		ADCarry: 50,
		Tank: 5,
		ADTank: 5,
		APTank: 10,
		APCarry: 90,
		AssassinAP: 100,
		AssassinAD: 15,
		Support: 20,
    });
	
	Champion.create({
		name: 'LeeSin',
		ADCarry: 10,
		Tank: 70,
		ADTank: 95,
		APTank: 40,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 90,
		Support: 15,
    });
	
	Champion.create({
		name: 'Leona',
		ADCarry: 5,
		Tank: 90,
		ADTank: 60,
		APTank: 60,
		APCarry: 60,
		AssassinAP: 20,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Lissandra',
		ADCarry: 10,
		Tank: 5,
		ADTank: 10,
		APTank: 70,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 10,
		Support: 65,
    });
	
	Champion.create({
		name: 'Lucian',
		ADCarry: 70,
		Tank: 15,
		ADTank: 20,
		APTank: 55,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 50,
		Support: 40,
    });
	
	Champion.create({
		name: 'Lulu',
		ADCarry: 20,
		Tank: 50,
		ADTank: 85,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 30,
		AssassinAD: 100,
		Support: 10,
    });
	
	Champion.create({
		name: 'Lux',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 20,
		APCarry: 95,
		AssassinAP: 30,
		AssassinAD: 30,
		Support: 20,
    });
	
	Champion.create({
		name: 'Malphite',
		ADCarry: 5,
		Tank: 100,
		ADTank: 70,
		APTank: 80,
		APCarry: 60,
		AssassinAP: 75,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'Malzahar',
		ADCarry: 40,
		Tank: 5,
		ADTank: 5,
		APTank: 65,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 20,
		Support: 40,
    });
	
	Champion.create({
		name: 'Maokai',
		ADCarry: 5,
		Tank: 80,
		ADTank: 40,
		APTank: 100,
		APCarry: 65,
		AssassinAP: 50,
		AssassinAD: 20,
		Support: 60,
    });
	
	Champion.create({
		name: 'MasterYi',
		ADCarry: 40,
		Tank: 5,
		ADTank: 65,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'MissFortune',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 30,
		AssassinAP: 20,
		AssassinAD: 30,
		Support: 5,
    });
	
	Champion.create({
		name: 'MonkeyKing',
		ADCarry: 20,
		Tank: 80,
		ADTank: 100,
		APTank: 15,
		APCarry: 5,
		AssassinAP: 10,
		AssassinAD: 100,
		Support: 30,
    });
	
	Champion.create({
		name: 'Mordekaiser',
		ADCarry: 5,
		Tank: 70,
		ADTank: 50,
		APTank: 100,
		APCarry: 95,
		AssassinAP: 70,
		AssassinAD: 20,
		Support: 5,
    });
	
	Champion.create({
		name: 'Morgana',
		ADCarry: 10,
		Tank: 10,
		ADTank: 5,
		APTank: 30,
		APCarry: 95,
		AssassinAP: 65,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Nami',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 60,
		AssassinAP: 40,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Nasus',
		ADCarry: 10,
		Tank: 80,
		ADTank: 100,
		APTank: 40,
		APCarry: 20,
		AssassinAP: 10,
		AssassinAD: 45,
		Support: 5,
    });
	
	Champion.create({
		name: 'Nautilus',
		ADCarry: 5,
		Tank: 100,
		ADTank: 80,
		APTank: 80,
		APCarry: 40,
		AssassinAP: 10,
		AssassinAD: 10,
		Support: 95,
    });
	
	Champion.create({
		name: 'Nidalee',
		ADCarry: 40,
		Tank: 30,
		ADTank: 60,
		APTank: 70,
		APCarry: 95,
		AssassinAP: 100,
		AssassinAD: 50,
		Support: 40,
    });
	
	Champion.create({
		name: 'Nocturne',
		ADCarry: 10,
		Tank: 75,
		ADTank: 100,
		APTank: 20,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 90,
		Support: 20,
    });
	
	Champion.create({
		name: 'Nunu',
		ADCarry: 5,
		Tank: 100,
		ADTank: 50,
		APTank: 90,
		APCarry: 70,
		AssassinAP: 50,
		AssassinAD: 5,
		Support: 70,
    });
	
	Champion.create({
		name: 'Olaf',
		ADCarry: 20,
		Tank: 80,
		ADTank: 100,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 15,
    });
	
	Champion.create({
		name: 'Orianna',
		ADCarry: 50,
		Tank: 5,
		ADTank: 5,
		APTank: 40,
		APCarry: 100,
		AssassinAP: 65,
		AssassinAD: 5,
		Support: 60,
    });
	
	Champion.create({
		name: 'Pantheon',
		ADCarry: 20,
		Tank: 60,
		ADTank: 85,
		APTank: 10,
		APCarry: 15,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 25,
    });
	
	Champion.create({
		name: 'Poppy',
		ADCarry: 5,
		Tank: 70,
		ADTank: 100,
		APTank: 40,
		APCarry: 40,
		AssassinAP: 80,
		AssassinAD: 90,
		Support: 5,
    });
	
	Champion.create({
		name: 'Quinn',
		ADCarry: 100,
		Tank: 5,
		ADTank: 50,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 95,
		Support: 5,
    });
	
	Champion.create({
		name: 'Rammus',
		ADCarry: 5,
		Tank: 100,
		ADTank: 70,
		APTank: 30,
		APCarry: 40,
		AssassinAP: 60,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'RekSai',
		ADCarry: 10,
		Tank: 80,
		ADTank: 100,
		APTank: 20,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 5,
    });
	
	Champion.create({
		name: 'Renekton',
		ADCarry: 20,
		Tank: 90,
		ADTank: 100,
		APTank: 20,
		APCarry: 15,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 15,
    });
	
	Champion.create({
		name: 'Rengar',
		ADCarry: 20,
		Tank: 55,
		ADTank: 95,
		APTank: 40,
		APCarry: 50,
		AssassinAP: 75,
		AssassinAD: 100,
		Support: 30,
    });
	
	Champion.create({
		name: 'Riven',
		ADCarry: 20,
		Tank: 40,
		ADTank: 60,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Rumble',
		ADCarry: 5,
		Tank: 30,
		ADTank: 25,
		APTank: 60,
		APCarry: 100,
		AssassinAP: 70,
		AssassinAD: 5,
		Support: 15,
    });
	
	Champion.create({
		name: 'Ryze',
		ADCarry: 40,
		Tank: 30,
		ADTank: 25,
		APTank: 100,
		APCarry: 60,
		AssassinAP: 40,
		AssassinAD: 5,
		Support: 20,
    });
	
	Champion.create({
		name: 'Sejuani',
		ADCarry: 5,
		Tank: 100,
		ADTank: 60,
		APTank: 90,
		APCarry: 75,
		AssassinAP: 75,
		AssassinAD: 5,
		Support: 55,
    });
	
	Champion.create({
		name: 'Shaco',
		ADCarry: 20,
		Tank: 5,
		ADTank: 40,
		APTank: 10,
		APCarry: 45,
		AssassinAP: 75,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Shen',
		ADCarry: 5,
		Tank: 100,
		ADTank: 75,
		APTank: 40,
		APCarry: 20,
		AssassinAP: 10,
		AssassinAD: 10,
		Support: 60,
    });
	
	Champion.create({
		name: 'Shyvana',
		ADCarry: 10,
		Tank: 90,
		ADTank: 100,
		APTank: 40,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 25,
		Support: 10,
    });
	
	Champion.create({
		name: 'Singed',
		ADCarry: 5,
		Tank: 95,
		ADTank: 55,
		APTank: 100,
		APCarry: 70,
		AssassinAP: 40,
		AssassinAD: 5,
		Support: 20,
    });
	
	Champion.create({
		name: 'Sion',
		ADCarry: 20,
		Tank: 100,
		ADTank: 90,
		APTank: 70,
		APCarry: 35,
		AssassinAP: 10,
		AssassinAD: 45,
		Support: 40,
    });
	
	Champion.create({
		name: 'Sivir',
		ADCarry: 100,
		Tank: 5,
		ADTank: 25,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 60,
		Support: 5,
    });
	
	Champion.create({
		name: 'Skarner',
		ADCarry: 10,
		Tank: 95,
		ADTank: 100,
		APTank: 40,
		APCarry: 30,
		AssassinAP: 20,
		AssassinAD: 20,
		Support: 55,
    });
	
	Champion.create({
		name: 'Sona',
		ADCarry: 45,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 75,
		AssassinAP: 60,
		AssassinAD: 10,
		Support: 100,
    });
	
	Champion.create({
		name: 'Soraka',
		ADCarry: 30,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 65,
		AssassinAP: 30,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Swain',
		ADCarry: 20,
		Tank: 55,
		ADTank: 15,
		APTank: 85,
		APCarry: 100,
		AssassinAP: 65,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'Syndra',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 20,
		Support: 30,
    });
	
	Champion.create({
		name: 'Talon',
		ADCarry: 30,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 10,
    });
	
	Champion.create({
		name: 'Taric',
		ADCarry: 5,
		Tank: 90,
		ADTank: 65,
		APTank: 65,
		APCarry: 30,
		AssassinAP: 5,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Teemo',
		ADCarry: 60,
		Tank: 5,
		ADTank: 45,
		APTank: 45,
		APCarry: 100,
		AssassinAP: 100,
		AssassinAD: 60,
		Support: 45,
    });
	
	Champion.create({
		name: 'Thresh',
		ADCarry: 60,
		Tank: 80,
		ADTank: 45,
		APTank: 30,
		APCarry: 30,
		AssassinAP: 5,
		AssassinAD: 40,
		Support: 100,
    });
	
	Champion.create({
		name: 'Tristana',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 15,
		APCarry: 85,
		AssassinAP: 100,
		AssassinAD: 75,
		Support: 5,
    });
	
	Champion.create({
		name: 'Trundle',
		ADCarry: 20,
		Tank: 90,
		ADTank: 100,
		APTank: 15,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 40,
		Support: 10,
    });
	
	Champion.create({
		name: 'Tryndamere',
		ADCarry: 50,
		Tank: 5,
		ADTank: 70,
		APTank: 5,
		APCarry: 20,
		AssassinAP: 20,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'TwistedFate',
		ADCarry: 65,
		Tank: 5,
		ADTank: 25,
		APTank: 35,
		APCarry: 100,
		AssassinAP: 95,
		AssassinAD: 45,
		Support: 35,
    });
	
	Champion.create({
		name: 'Twitch',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 10,
    });
	
	Champion.create({
		name: 'Udyr',
		ADCarry: 20,
		Tank: 65,
		ADTank: 100,
		APTank: 15,
		APCarry: 20,
		AssassinAP: 15,
		AssassinAD: 70,
		Support: 10,
    });
	
	Champion.create({
		name: 'Urgot',
		ADCarry: 100,
		Tank: 25,
		ADTank: 100,
		APTank: 10,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 80,
		Support: 10,
    });
	
	Champion.create({
		name: 'Varus',
		ADCarry: 100,
		Tank: 5,
		ADTank: 20,
		APTank: 5,
		APCarry: 60,
		AssassinAP: 55,
		AssassinAD: 75,
		Support: 30,
    });
	
	Champion.create({
		name: 'Vayne',
		ADCarry: 100,
		Tank: 5,
		ADTank: 30,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 200,
		Support: 5,
    });
	
	Champion.create({
		name: 'Veigar',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 95,
		AssassinAP: 100,
		AssassinAD: 5,
		Support: 70,
    });
	
	Champion.create({
		name: 'VelKoz',
		ADCarry: 15,
		Tank: 5,
		ADTank: 5,
		APTank: 35,
		APCarry: 100,
		AssassinAP: 90,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Vi',
		ADCarry: 15,
		Tank: 90,
		ADTank: 100,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 90,
		Support: 25,
    });
	
	Champion.create({
		name: 'Viktor',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 35,
		APCarry: 100,
		AssassinAP: 90,
		AssassinAD: 5,
		Support: 30,
    });
	
	Champion.create({
		name: 'Vladimir',
		ADCarry: 5,
		Tank: 65,
		ADTank: 5,
		APTank: 95,
		APCarry: 100,
		AssassinAP: 90,
		AssassinAD: 5,
		Support: 5,
    });
	
	Champion.create({
		name: 'Volibear',
		ADCarry: 20,
		Tank: 100,
		ADTank: 95,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 40,
		Support: 45,
    });
	
	Champion.create({
		name: 'Warwick',
		ADCarry: 15,
		Tank: 75,
		ADTank: 100,
		APTank: 50,
		APCarry: 35,
		AssassinAP: 35,
		AssassinAD: 60,
		Support: 40,
    });
	
	Champion.create({
		name: 'Xerath',
		ADCarry: 20,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 100,
		AssassinAP: 80,
		AssassinAD: 5,
		Support: 35,
    });
	
	Champion.create({
		name: 'XinZhao',
		ADCarry: 20,
		Tank: 80,
		ADTank: 100,
		APTank: 30,
		APCarry: 25,
		AssassinAP: 35,
		AssassinAD: 80,
		Support: 20,
    });
	
	Champion.create({
		name: 'Yasuo',
		ADCarry: 40,
		Tank: 5,
		ADTank: 75,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Yorick',
		ADCarry: 10,
		Tank: 90,
		ADTank: 100,
		APTank: 45,
		APCarry: 35,
		AssassinAP: 10,
		AssassinAD: 35,
		Support: 45,
    });
	
	Champion.create({
		name: 'Zac',
		ADCarry: 5,
		Tank: 90,
		ADTank: 45,
		APTank: 100,
		APCarry: 75,
		AssassinAP: 65,
		AssassinAD: 5,
		Support: 55,
    });
	
	Champion.create({
		name: 'Zed',
		ADCarry: 40,
		Tank: 5,
		ADTank: 45,
		APTank: 5,
		APCarry: 5,
		AssassinAP: 5,
		AssassinAD: 100,
		Support: 5,
    });
	
	Champion.create({
		name: 'Ziggs',
		ADCarry: 45,
		Tank: 5,
		ADTank: 10,
		APTank: 25,
		APCarry: 100,
		AssassinAP: 45,
		AssassinAD: 5,
		Support: 45,
    });
	
	Champion.create({
		name: 'Zilean',
		ADCarry: 40,
		Tank: 5,
		ADTank: 5,
		APTank: 20,
		APCarry: 80,
		AssassinAP: 45,
		AssassinAD: 5,
		Support: 100,
    });
	
	Champion.create({
		name: 'Zyra',
		ADCarry: 35,
		Tank: 5,
		ADTank: 5,
		APTank: 35,
		APCarry: 90,
		AssassinAP: 90,
		AssassinAD: 5,
		Support: 100,
    });
});