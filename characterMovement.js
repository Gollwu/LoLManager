var offsetInitX = {}, offsetInitY = {};
offsetInitX.red = []; offsetInitX.blue = [];
offsetInitY.red = []; offsetInitY.blue = [];
for (var i in players.blue){
    offsetInitX.blue.push(players.blue[i].DOMElement.offsetLeft);
    offsetInitY.blue.push(players.blue[i].DOMElement.offsetTop);
}
for (var i in players.red){
    offsetInitX.red.push(players.red[i].DOMElement.offsetLeft);
    offsetInitY.red.push(players.red[i].DOMElement.offsetTop);
}

var baseBlueSideCoord = [30,780];
var toplaneBlueSideCoord = [50,80];
var midlaneBlueSideCoord = [350,420];
var botlaneBlueSideCoord = [640,600];

var baseRedSideCoord = [780,30];
var toplaneRedSideCoord = [150,40];
var midlaneRedSideCoord = [440,330];
var botlaneRedSideCoord = [700,670];


function sendPlayerToLane(player,laneFrom, laneTo, callback){    
    var playersOnThisLane = new Array();
    var laneCoords;
    var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];
        if(color==player.team){   
            for(var i in players[color]){		
                if(players[color][i].lane==laneTo){
                     playersOnThisLane.push(players[color][i]);                     
                }
            }
            if(laneTo==0 && color=="blue"){laneCoords = baseBlueSideCoord;}
            else if(laneTo==1 && color=="blue"){laneCoords = toplaneBlueSideCoord;}
            else if(laneTo==3 && color=="blue"){laneCoords = midlaneBlueSideCoord;}
            else if(laneTo==4 && color=="blue"){laneCoords = botlaneBlueSideCoord;}
            else if(laneTo==0 && color=="red"){laneCoords = baseRedSideCoord;}
            else if(laneTo==1 && color=="red"){laneCoords = toplaneRedSideCoord;}
            else if(laneTo==3 && color=="red"){laneCoords = midlaneRedSideCoord;}
            else if(laneTo==4 && color=="red"){laneCoords = botlaneRedSideCoord;}     
            switch (playersOnThisLane.length){               
                case 0:                               
                    moveElementToXY(player.DOMElement, laneCoords[0], laneCoords[1]);                    
                    break;       
                case 1:  
                    console.log(player.name);
                    console.log(laneCoords[0]-25);
                    console.log(laneCoords[1]-25);
                    moveElementToXY(player.DOMElement, laneCoords[0]-25, laneCoords[1]-25); 
                    console.log(playersOnThisLane[0].name);
                    console.log(laneCoords[0]+45);
                    console.log(laneCoords[1]+25);
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]+45, laneCoords[1]+25); 
                    break;   
                case 2:     
                    moveElementToXY(player.DOMElement, laneCoords[0]-12.5, laneCoords[1]-25);  
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]+22.5, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0], laneCoords[1]+25); 
                    break; 
                case 3:
                    moveElementToXY(player.DOMElement, laneCoords[0]-25, laneCoords[1]-25);  
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]-25, laneCoords[1]+25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0]+25, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[2].DOMElement, laneCoords[0]+25, laneCoords[1]+25); 
                    break;  
                case 4:
                    moveElementToXY(player.DOMElement, laneCoords[0], laneCoords[1]);  
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]-12.5, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0]+12.5, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[2].DOMElement, laneCoords[0]-12.5, laneCoords[1]+25); 
                    moveElementToXY(playersOnThisLane[3].DOMElement, laneCoords[0]+12.5, laneCoords[1]+25); 
                    break;     
            }  
            playersOnThisLane = new Array();
            for(var i in players[color]){		
                if(players[color][i].lane==laneFrom && players[color][i]!=player ){
                     playersOnThisLane.push(players[color][i])                   
                }
            }
           
            if(laneFrom==0 && color=="blue"){laneCoords = baseBlueSideCoord;}
            else if(laneFrom==1 && color=="blue"){laneCoords = toplaneBlueSideCoord;}
            else if(laneFrom==3 && color=="blue"){laneCoords = midlaneBlueSideCoord;}
            else if(laneFrom==4 && color=="blue"){laneCoords = botlaneBlueSideCoord; }
            else if(laneFrom==0 && color=="red"){laneCoords = baseRedSideCoord;}
            else if(laneFrom==1 && color=="red"){laneCoords = toplaneRedSideCoord;}
            else if(laneFrom==3 && color=="red"){laneCoords = midlaneRedSideCoord;}
            else if(laneFrom==4 && color=="red"){laneCoords = botlaneRedSideCoord; }
            
            switch (playersOnThisLane.length){
                case 0:
                    break;       
                case 1:                     
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0], laneCoords[1]); 
                    break;   
                case 2:  
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]+25, laneCoords[1]+25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0]-25, laneCoords[1]-25); 
                    break; 
                case 3:        
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]-12.5, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0]+12.5, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[2].DOMElement, laneCoords[0], laneCoords[1]+25); 
                    break;  
                case 4:                  
                    moveElementToXY(playersOnThisLane[0].DOMElement, laneCoords[0]-25, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[1].DOMElement, laneCoords[0]+25, laneCoords[1]-25); 
                    moveElementToXY(playersOnThisLane[2].DOMElement, laneCoords[0]-25, laneCoords[1]+25); 
                    moveElementToXY(playersOnThisLane[3].DOMElement, laneCoords[0]+25, laneCoords[1]+25); 
                    break;     
            }  
        }
    }
    player.lane=laneTo;   
    if (typeof callback === "function") {   
        callback(player);
    }
}

function moveLaningPlayers(){	
	var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];
		
		//console.log(color);
		
		var move = function(color){
			for (var i in players[color]){
				//console.log(players[color][i].champion);
				if (players[color][i].status=="laning"){

					setTimeout((function(color,i){
						players[color][i].DOMElement.style.marginLeft = offsetInitX[color][i] + 2 + 'px';
						setTimeout(function(){
							players[color][i].DOMElement.style.marginTop = offsetInitY[color][i] + 2 + 'px';
							setTimeout(function(){
								players[color][i].DOMElement.style.marginLeft = offsetInitX[color][i] - 2 + 'px';
								setTimeout(function(){
									players[color][i].DOMElement.style.marginTop = offsetInitY[color][i] - 2 + 'px';
								},250);				
							},250);			
						},250);
					})(color,i),250);
				}		
			}
		};

		setTimeout(function(){move('blue');}, 125);
		move('red');

    }
}

var moveElementToXY = function(e, x, y, dx, dy, dt, callback) {
	clearInterval(e.interX);
	clearInterval(e.interY);
	dx = dx || 2; dy = dy || 2; dt = dt || 10;
	if(e.offsetLeft > x) dx = -dx;
	if(e.offsetTop > y) dy = -dy;
	e.interX = setInterval(function(){(function(e, x, y, dx, dy){
		e.style.marginLeft = e.offsetLeft + dx + 'px';
		if(Math.abs(e.offsetLeft - x) < Math.abs(dx)) clearInterval(e.interX);
	})(e, x, y, dx, dy)}, dt);
	e.interY = setInterval(function(){(function(e, x, y, dx, dy){
		e.style.marginTop = e.offsetTop + dy + 'px';
		if(Math.abs(e.offsetTop - y) < Math.abs(dy)) clearInterval(e.interY);
	})(e, x, y, dx, dy)}, dt);
	
	 if (typeof callback === "function") {   
        callback(e);
    }
};

function moveJunglingPlayers(){		
	for (var i in players['blue']){	
		if (players.blue[i].status=="jungling"){	
            players.blue[i].gold+=80;
            updatePlayer(players.blue[i]);
			switch (players.blue[i].camp) {
				case 'BlueGrump':
					players.blue[i].camp = "BlueSentinelle";                    
					moveElementToXY(players.blue[i].DOMElement, 200, 360);
					break;
				case 'BlueSentinelle':
					players.blue[i].camp = "BlueWolves";
					moveElementToXY(players.blue[i].DOMElement, 210, 450);
					break;
				case 'BlueWolves':
					players.blue[i].camp = "BlueRaptors";
					moveElementToXY(players.blue[i].DOMElement, 395, 520);
					break;
				case 'BlueRaptors':
					players.blue[i].camp = "BlueBrambleback";
					moveElementToXY(players.blue[i].DOMElement, 435, 600);
					break;
				case 'BlueBrambleback':
					players.blue[i].camp = "BlueGolems";
					moveElementToXY(players.blue[i].DOMElement, 475, 675);					
					break;
				case 'BlueGolems':
					players.blue[i].camp = "BlueGrump";
					moveElementToXY(players.blue[i].DOMElement, 115, 335);
					break;				
			}
		}
	}
	for (var i in players['red']){				
		if (players.red[i].status=="jungling"){	
            players.red[i].gold+=80;
            updatePlayer(players.red[i]);
			switch (players.red[i].camp) {
				case 'RedGrump':
					players.red[i].camp = "RedSentinelle";
					moveElementToXY(players.red[i].DOMElement, 630, 430);					
					break;
				case 'RedSentinelle':
					players.red[i].camp = "RedWolves";
					moveElementToXY(players.red[i].DOMElement, 625, 345);					
					break;
				case 'RedWolves':
					players.red[i].camp = "RedRaptors";
					moveElementToXY(players.red[i].DOMElement, 450, 275);		
					break;
				case 'RedRaptors':
					players.red[i].camp = "RedBrambleback";
					moveElementToXY(players.red[i].DOMElement, 395, 200);				
					break;
				case 'RedBrambleback':
					players.red[i].camp = "RedGolems";
					moveElementToXY(players.red[i].DOMElement, 350, 120);					
					break;
				case 'RedGolems':
					players.red[i].camp = "RedGrump";
					moveElementToXY(players.red[i].DOMElement, 710, 455);				
					break;				
			}
		}
	}
}	


function kill(player){		
    player.DOMElement.style.visibility = 'hidden';				
    sendPlayerToLane(player, player.lane, 0, respawnPlayer);		
}

function respawnPlayer(player){
	player.DOMElement.style.visibility = 'visible';    	
}



function goBackToBase(player){	
    setTimeout(function() {sendPlayerToLane(player,player.lane,0); player.hp=100;}, 3000);	
}

//setInterval(moveLaningPlayers, 1000);
setInterval(moveJunglingPlayers, 6000);

