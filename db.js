var players = {};

//////////////////////////////// BLUE TEAM BOUUH
players.blue = [{
    name: 'wickd',
    laning: 80,
    champion: 'irelia',
    irelia: 99,
    gold: 0,
    hp: 100,
    lane: 1,
    role: 'top',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_top')
	
},{
    name: 'shook',
    laning: 35,
    champion: 'riven',
    riven: 90,
    gold: 0,
    hp: 100,
    lane: 2,
    role: 'jungle',
	status: 'jungling', 
	camp: 'BlueSentinelle',	
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_jungle')
},{
    name: 'froggen',
    laning: 90,
    champion: 'anivia',
    anivia: 100,
    gold: 0,
    hp: 100,
    lane: 3,
    role: 'mid',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_mid')
},{
    name: 'rekkles',
    laning: 100,
    champion: 'lucian',
    lucian: 85,
    gold: 0,
    hp: 100,
    lane: 4,
    role: 'adc',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_adc')
},{
    name: 'nyph',
    laning: 75,
    champion: 'thresh',
	thresh: 80,
    gold: 0,
    hp: 100,
    lane: 4,
    role: 'support',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_support')
}];

//////////////////////////////// RED TEAM YAY
players.red = [{
    name: 'gollwu',
    laning: 50,
    champion: 'trundle',
    trundle: 79,
    gold: 0,
    hp: 100,
    lane: 1,
    role: 'top',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('champion_red_top')
},{
    name: 'nerevar',
    laning: 25,
    champion: 'fiddlesticks',
    fiddlesticks: 65,
    gold: 0,
    hp: 100,
    lane: 2,
    role: 'jungle',
    status: 'jungling',
	camp: 'RedSentinelle',
    team: 'red',
	DOMElement: document.getElementById('champion_red_jungle')
},{
    name: 'overplow',
    laning: 51,
    champion: 'kogmaw',
    kogmaw: 80,
    gold: 0,
    hp: 100,
    lane: 3,
    role: 'mid',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('champion_red_mid')
},{
    name: 'hycariss',
    laning: 85,
    champion: 'vayne',
	vayne: 65,
    gold: 0,
    hp: 100,
    lane: 4,
    role: 'adc',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('champion_red_adc')
},{
    name: 'sowerdski',
    laning: 10,
    champion: 'taric',
	taric:0,
    gold: 0,
    hp: 100,
    lane: 4,
    role: 'support',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('champion_red_support')
}];
