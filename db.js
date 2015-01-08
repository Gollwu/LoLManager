var players = {};

//////////////////////////////// RED TEAM BOUUH
players.blue = [{
    name: 'wickd',
    laning: 80,
    champion: 'irelia',
    affinities: {
        irelia: 99
    },
    gold: 0,
    hp: 100,
    lane: 'top',
    role: 'top',
    inlane: true,
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_top')
	
},{
    name: 'shook',
    laning: 35,
    champion: 'riven',
    affinities: {
        riven: 90
    },
    gold: 0,
    hp: 100,
    lane: 'jungle',
    role: 'jungle',
    inlane: true,
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_jungle')
},{
    name: 'froggen',
    laning: 90,
    champion: 'anivia',
    affinities: {
        anivia: 100
    },
    gold: 0,
    hp: 100,
    lane: 'mid',
    role: 'mid',
    inlane: true,
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_mid')
},{
    name: 'rekkles',
    laning: 100,
    champion: 'lucian',
    affinities: {
        lucian: 85
    },
    gold: 0,
    hp: 100,
    lane: 'bot',
    role: 'adc',
    inlane: true,
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_adc')
},{
    name: 'nyph',
    laning: 75,
    champion: 'thresh',
    affinities: {
        lucian: 80
    },
    gold: 0,
    hp: 100,
    lane: 'bot',
    role: 'support',
    inlane: true,
    team: 'blue',
	DOMElement: document.getElementById('champion_blue_support')
}];

//////////////////////////////// RED TEAM YAY
players.red = [{
    name: 'gollwu',
    laning: 50,
    champion: 'trundle',
    affinities: {
        trundle: 79
    },
    gold: 0,
    hp: 100,
    lane: 'top',
    role: 'top',
    inlane: true,
    team: 'red',
	DOMElement: document.getElementById('champion_red_top')
},{
    name: 'nerevar',
    laning: 25,
    champion: 'fiddlesticks',
    affinities: {
        fiddlesticks: 65
    },
    gold: 0,
    hp: 100,
    lane: 'jungle',
    role: 'jungle',
    inlane: false,
    team: 'red',
	DOMElement: document.getElementById('champion_red_jungle')
},{
    name: 'overplow',
    laning: 51,
    champion: 'kogmaw',
    affinities: {
        kogmaw: 80
    },
    gold: 0,
    hp: 100,
    lane: 'mid',
    role: 'mid',
    inlane: false,
    team: 'red',
	DOMElement: document.getElementById('champion_red_mid')
},{
    name: 'hycariss',
    laning: 85,
    champion: 'vayne',
    affinities: {
        vayne: 65
    },
    gold: 0,
    hp: 100,
    lane: 'bot',
    role: 'adc',
    inlane: false,
    team: 'red',
	DOMElement: document.getElementById('champion_red_adc')
},{
    name: 'sowerdski',
    laning: 10,
    champion: 'taric',
    affinities: {s
    },
    gold: 0,
    hp: 100,
    lane: 'bot',
    role: 'support',
    inlane: false,
    team: 'red',
	DOMElement: document.getElementById('champion_red_support')
}];
