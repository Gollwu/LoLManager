var players = {};

//////////////////////////////// BLUE TEAM BOUUH
players.blue = [{
    name: 'Wickd',
    laning: 80,
    champion: 'Irelia',
    irelia: 99,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 1,
    role: 'top',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('mapChampionBlueTop')
	
},{
    name: 'Shook',
    laning: 35,
    champion: 'Riven',
    riven: 90,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 2,
    role: 'jungler',
	status: 'jungling', 
	camp: 'BlueSentinelle',	
    team: 'blue',
	DOMElement: document.getElementById('mapChampionBlueJungler')
},{
    name: 'Froggen',
    laning: 90,
    champion: 'Anivia',
    anivia: 100,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 3,
    role: 'mid',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('mapChampionBlueMid')
},{
    name: 'Rekkles',
    laning: 100,
    champion: 'Lucian',
    lucian: 85,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 4,
    role: 'adc',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('mapChampionBlueAdc')
},{
    name: 'Nyph',
    laning: 75,
    champion: 'Thresh',
	thresh: 80,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 4,
    role: 'support',
    status: 'laning',
	camp: 'none',
    team: 'blue',
	DOMElement: document.getElementById('mapChampionBlueSupport')
}];

//////////////////////////////// RED TEAM YAY
players.red = [{
    name: 'Gollwu',
    laning: 50,
    champion: 'Trundle',
    trundle: 79,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 1,
    role: 'top',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedTop')
},{
    name: 'Nerevar',
    laning: 25,
    champion: 'Fiddlesticks',
    fiddlesticks: 65,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 2,
    role: 'jungler',
    status: 'jungling',
	camp: 'RedSentinelle',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedJungler')
},{
    name: 'Overplow',
    laning: 51,
    champion: 'KogMaw',
    kogmaw: 80,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 3,
    role: 'mid',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedMid')
},{
    name: 'Hycariss',
    laning: 85,
    champion: 'Vayne',
	vayne: 65,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 4,
    role: 'adc',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedAdc')
},{
    name: 'Sowerdski',
    laning: 10,
    champion: 'Taric',
	taric:0,
    gold: 475,
    stuffValue: 475,
    kills:0,
    deaths:0,
    assists:0,
    hp: 100,
    lane: 4,
    role: 'support',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedSupport')
}];
