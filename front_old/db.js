//Local database of Players, turrets, nexus and inhibitors. They also contain an attribute to get their element in the DOM

var players = {};

var nexus = {};

var inhibs = {};
inhibs.blue = {};
inhibs.red = {};

var turrets = {};
turrets.red = {};
turrets.blue = {};




 
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
    lane: 'top',    
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
    lane: 'jungle',
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
    lane: 'mid',
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
    lane: 'bot',
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
    lane: 'bot',
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
    lane: 'top',
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
    lane: 'jungle',
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
    lane: 'mid',
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
    lane: 'bot',
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
    lane: 'bot',
    role: 'support',
    status: 'laning',
	camp: 'none',
    team: 'red',
	DOMElement: document.getElementById('mapChampionRedSupport')
}];

nexus.blue = {
    name: 'blueNexus',
    hp:100,
	DOMElement: document.getElementById('blueNexus'),
    x: 87,
    y: 748
}
nexus.red =  {
    name: 'redNexus',
    hp:100,
	DOMElement: document.getElementById('redNexus'),
    x: 768,
    y: 48
};


inhibs.blue.top = {
    name: 'blueInhibTop',
    hp:100,
	DOMElement: document.getElementById('blueInhibTop'),
    x: 65,
    y: 615
}
inhibs.blue.mid = {
    name: 'blueInhibMid',
    hp:100,
	DOMElement: document.getElementById('blueInhibMid'),
    x: 180,
    y: 650
}
inhibs.blue.bot = {
    name: 'blueInhibBot',
    hp:100,
	DOMElement: document.getElementById('blueInhibBot'),
    x: 220,
    y: 765
}
inhibs.red.top = {
    name: 'redInhibTop',
    hp:100,
	DOMElement: document.getElementById('redInhibTop'),
    x: 630,
    y: 55
}
inhibs.red.mid = {
    name: 'redInhibMid',
    hp:100,
	DOMElement: document.getElementById('redInhibMid'),
    x: 670,
    y: 170
}
inhibs.red.bot = {
    name: 'redInhibBot',
    hp:100,
	DOMElement: document.getElementById('redInhibBot'),
    x: 785,
    y: 220  
}

turrets.red.base = [{   
    name: 'redNexusTurret1',
    hp:100,
	DOMElement: document.getElementById('redNexusTurret1'),
    x: 735,
    y: 80
},{
    name: 'redNexusTurret2',
    hp:100,
	DOMElement: document.getElementById('redNexusTurret2'),
    x: 755,
    y: 110    
}];

turrets.red.top = [{   
    name: 'redTopInhibTurret',
    hp:100,
	DOMElement: document.getElementById('redTopInhibTurret'),
    x: 575,
    y: 45
},{
    name: 'redTopInnerTurret',
    hp:100,
	DOMElement: document.getElementById('redTopInnerTurret'),
    x: 415,
    y: 60    
},{      
    name: 'redTopOuterTurret',
    hp:100,
	DOMElement: document.getElementById('redTopOuterTurret'),
    x: 250,
    y: 35 
}];

turrets.red.mid = [{   
    name: 'redMidInhibTurret',
    hp:100,
	DOMElement: document.getElementById('redMidInhibTurret'),
    x: 635,
    y: 200    
},{
    name: 'redMidInnerTurret',
    hp:100,
	DOMElement: document.getElementById('redMidInnerTurret'),
    x: 540,
    y: 260 
},{    
    name: 'redMidOuterTurret',
    hp:100,
	DOMElement: document.getElementById('redMidOuterTurret'),
    x: 515,
    y: 350 
}];

turrets.red.bot = [{ 
    name: 'redBotInhibTurret',
    hp:100,
	DOMElement: document.getElementById('redBotInhibTurret'),
    x: 785,
    y: 255
},{
    name: 'redBotInnerTurret',
    hp:100,
	DOMElement: document.getElementById('redBotInnerTurret'),
    x: 770,
    y: 400 
},{
    name: 'redBotOuterTurret',
    hp:100,
	DOMElement: document.getElementById('redBotOuterTurret'),
    x: 800,
    y: 610         
}];

turrets.blue.base = [{ 
 name: 'blueNexusTurret1',
    hp:100,
	DOMElement: document.getElementById('blueNexusTurret1'),
    x: 100,
    y: 710	
},{
    name: 'blueNexusTurret2',
    hp:100,
	DOMElement: document.getElementById('blueNexusTurret2'),
    x: 125,
    y: 735
}];

turrets.blue.top = [{ 
    name: 'blueTopInhibTurret',
    hp:100,
	DOMElement: document.getElementById('blueTopInhibTurret'),
    x: 65,
    y: 555
},{ 
    name: 'blueTopInnerTurret',
    hp:100,
	DOMElement: document.getElementById('blueTopInnerTurret'),
    x: 75,
    y: 410    
},{
     name: 'blueTopOuterTurret',
    hp:100,
	DOMElement: document.getElementById('blueTopOuterTurret'),
    x: 50,
    y: 220 
}];
    
turrets.blue.mid = [{  
    name: 'blueMidInhibTurret',
    hp:100,
	DOMElement: document.getElementById('blueMidInhibTurret'),
    x: 215,
    y: 610    
},{   
    name: 'blueMidInnerTurret',
    hp:100,
	DOMElement: document.getElementById('blueMidInnerTurret'),
    x: 300,
    y: 550    
},{   
    name: 'blueMidOuterTurret',
    hp:100,
	DOMElement: document.getElementById('blueMidOuterTurret'),
    x: 350,
    y: 450   
}];    
    
turrets.blue.bot = [{  
    name: 'blueBotInhibturret',
    hp:100,
	DOMElement: document.getElementById('blueBotInhibTurret'),
    x: 270,
    y: 765
},{ 
    name: 'blueBotInnerTurret',
    hp:100,
	DOMElement: document.getElementById('blueBotInnerTurret'),
    x: 445,
    y: 750    
},{   
    name: 'blueBotOuterTurret',
    hp:100,
	DOMElement: document.getElementById('blueBotOuterTurret'),
    x: 610,
    y: 780 
}];

//Given a team and a lane, return the next turret to be hit by the players. If the three turrets are down, hit the nexus turrets then the nexus

function getStructureToHit(color,lane){  
    if(turrets[color][lane][2].hp > 0){
        return turrets[color][lane][2];
    }else if (turrets[color][lane][1].hp > 0){
        return turrets[color][lane][1];
    } else if (turrets[color][lane][0].hp > 0){
        return turrets[color][lane][0];
    }else if (inhibs[color][lane].hp > 0){
        return inhibs[color][lane];
    }else if (turrets[color].base[0].hp > 0){
        return turrets[color].base[0];
    }else if (turrets[color].base[1].hp > 0){
        return turrets[color].base[1];
    }else return nexus[color];
}
