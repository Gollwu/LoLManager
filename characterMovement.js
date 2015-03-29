//Get current Position of the DOM elements of the players
var offsetInitX = {}, offsetInitY = {};

var resetOffset = function() {
  offsetInitX = {}, offsetInitY = {};
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
};

resetOffset();

//Variable with the position in px of the lanes
var baseBlueSideCoord = [30,780];
var toplaneBlueSideCoord = [90,80];
var midlaneBlueSideCoord = [380,420];
var botlaneBlueSideCoord = [680,700];

var baseRedSideCoord = [800,20];
var toplaneRedSideCoord = [150,40];
var midlaneRedSideCoord = [450,360];
var botlaneRedSideCoord = [740,670];

//Send a player from one lane to another
function sendPlayerToLane(player,laneFrom, laneTo, callback){    
    var playersOnThisLane = new Array();
    var laneCoords;
    var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];
        if(color==player.team){   
            for(var i in players[color]){		
                if(players[color][i].lane==laneTo){
					//Get a list of player of your team already on the lane you are sending the player
                    playersOnThisLane.push(players[color][i]);                     
                }
            }
			//Get position of the lane to go to
            if(laneTo=='base' && color=="blue"){laneCoords = baseBlueSideCoord;}
            else if(laneTo=='top' && color=="blue"){laneCoords = toplaneBlueSideCoord;}
            else if(laneTo=='mid' && color=="blue"){laneCoords = midlaneBlueSideCoord;}
            else if(laneTo=='bot' && color=="blue"){laneCoords = botlaneBlueSideCoord;}
            else if(laneTo=='base' && color=="red"){laneCoords = baseRedSideCoord;}
            else if(laneTo=='top' && color=="red"){laneCoords = toplaneRedSideCoord;}
            else if(laneTo=='mid' && color=="red"){laneCoords = midlaneRedSideCoord;}
            else if(laneTo=='bot' && color=="red"){laneCoords = botlaneRedSideCoord;}   
			//How to display them on the lane depending on the amount of players already on the lane		
            switch (playersOnThisLane.length){               
                case 0:       
                    moveElementToXY(player, laneCoords[0], laneCoords[1], null, null, null, callback);                    
                    break;       
                case 1:                      
                    moveElementToXY(player, laneCoords[0]-25, laneCoords[1]-25, null, null, null, callback);                      
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]+25, laneCoords[1]+25, null, null, null, null); 
                    break;   
                case 2:     
                    moveElementToXY(player, laneCoords[0]-12.5, laneCoords[1]-25, null, null, null, callback);     
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]+12, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[1], laneCoords[0], laneCoords[1]+25 ,null, null, null, null); 
                    break; 
                case 3:
                    moveElementToXY(player, laneCoords[0]-25, laneCoords[1]-25, null, null, null, callback);     
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]-25, laneCoords[1]+25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[1], laneCoords[0]+25, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[2], laneCoords[0]+25, laneCoords[1]+25 ,null, null, null, null); 
                    break;  
                case 4:
                    moveElementToXY(player, laneCoords[0], laneCoords[1], null, null, null, callback);     
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]-12, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[1], laneCoords[0]+12, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[2], laneCoords[0]-12, laneCoords[1]+25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[3], laneCoords[0]+12, laneCoords[1]+25 ,null, null, null, null); 
                    break;     
            }  
			//Get a list of player of your team already on the lane the player is coming from
            playersOnThisLane = new Array();
            for(var i in players[color]){		
                if(players[color][i].lane==laneFrom && players[color][i]!=player ){
                     playersOnThisLane.push(players[color][i])                   
                }
            }
            //Get position of the lane tthe player is from
            if(laneFrom=='base' && color=="blue"){laneCoords = baseBlueSideCoord;}
            else if(laneFrom=='top' && color=="blue"){laneCoords = toplaneBlueSideCoord;}
            else if(laneFrom=='mid' && color=="blue"){laneCoords = midlaneBlueSideCoord;}
            else if(laneFrom=='bot' && color=="blue"){laneCoords = botlaneBlueSideCoord; }
            else if(laneFrom=='base' && color=="red"){laneCoords = baseRedSideCoord;}
            else if(laneFrom=='top' && color=="red"){laneCoords = toplaneRedSideCoord;}
            else if(laneFrom=='mid' && color=="red"){laneCoords = midlaneRedSideCoord;}
            else if(laneFrom=='bot' && color=="red"){laneCoords = botlaneRedSideCoord; }
            //How to display them on the lane depending on the amount of players already on the lane	
            switch (playersOnThisLane.length){
                case 0:
                    break;       
                case 1:  
                    moveElementToXY(playersOnThisLane[0], laneCoords[0], laneCoords[1] ,null, null, null, null); 
					          console.log	(playersOnThisLane[0].name  + " " + laneCoords[0] + " " + laneCoords[1]);
                    break;   
                case 2:  
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]+25, laneCoords[1]+25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[1], laneCoords[0]-25, laneCoords[1]-25 ,null, null, null, null); 
                    break; 
                case 3:        
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]-12, laneCoords[1]-25 ,null, null, null, null);     
                    moveElementToXY(playersOnThisLane[1], laneCoords[0]+12, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[2], laneCoords[0], laneCoords[1]+25 ,null, null, null, null); 
                    break;  
                case 4:                  
                    moveElementToXY(playersOnThisLane[0], laneCoords[0]-25, laneCoords[1]-25 ,null, null, null, null);   
                    moveElementToXY(playersOnThisLane[1], laneCoords[0]+25, laneCoords[1]-25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[2], laneCoords[0]-25, laneCoords[1]+25 ,null, null, null, null); 
                    moveElementToXY(playersOnThisLane[3], laneCoords[0]+25, laneCoords[1]+25 ,null, null, null, null); 
                    break;     
            }  
        }
    }
	//Callback function
    player.lane=laneTo;   
    //if (typeof callback === "function") {   
    //    callback(player);
    //}
}

//Make the players move from 2px in one diretion every 0.250s when they are laning
function moveLaningPlayers(){	

	var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];		
		var move = function(color){
			for (var i in players[color]){			
				if (players[color][i].status=="laning"){
					setTimeout((function(color,i){
						players[color][i].DOMElement.style.marginLeft = offsetInitX[color][i] + 2 + 'px';
						resetOffset();
						setTimeout(function(){
							players[color][i].DOMElement.style.marginTop = offsetInitY[color][i] + 2 + 'px';
							resetOffset();
							setTimeout(function(){
								players[color][i].DOMElement.style.marginLeft = offsetInitX[color][i] - 2 + 'px';
								resetOffset();
								setTimeout(function(){
									players[color][i].DOMElement.style.marginTop = offsetInitY[color][i] - 2 + 'px';
									resetOffset();
								},250);				
							},250);			
						},250);
					})(color,i),250);
				}		
			}
		};
		//Blue and red team are moving with a 0.125s difference
		setTimeout(function(){move('blue');}, 125);
		move('red');

    }
}

//Base function to send a player to a position (x and y the coordinates)
var moveElementToXY = function(player, x, y, dx, dy, dt, cb) {
  var e = player.DOMElement;
	clearInterval(e.interX);
	clearInterval(e.interY);
	dx = dx || 2; dy = dy || 2; dt = dt || 10; cb = cb || function(){};
	if(e.offsetLeft > x) dx = -dx;
	if(e.offsetTop > y) dy = -dy;
  e.reach = {x:false, y:false};
	e.interX = setInterval(function(){(function(e, x, y, dx, dy, cb, player){
		if(Math.abs(e.offsetLeft - x) < Math.abs(dx)){
		  clearInterval(e.interX);
		  e.reach.x = true;
		  if(e.reach.y) cb(player);
		}
		e.style.marginLeft = e.offsetLeft + dx + 'px';
	})(e, x, y, dx, dy, cb, player)}, dt);
	e.interY = setInterval(function(){(function(e, x, y, dx, dy, cb){
		if(Math.abs(e.offsetTop - y) < Math.abs(dy)){
		  clearInterval(e.interY);
		  e.reach.y = true;
		  if(e.reach.x) cb(player);
		}
		e.style.marginTop = e.offsetTop + dy + 'px';
	})(e, x, y, dx, dy, cb, player)}, dt);
};

//Automatic movements of jungler players and gold generation at each camp. First blue players then red players
function moveJunglingPlayers(){		
	for (var i in players['blue']){	
		if (players.blue[i].status=="jungling"){	
            players.blue[i].gold+=80;
            updatePlayer(players.blue[i]);
			switch (players.blue[i].camp) {
				case 'BlueGrump':
					players.blue[i].camp = "BlueSentinelle";                    
					moveElementToXY(players.blue[i], 200, 360);
					break;
				case 'BlueSentinelle':
					players.blue[i].camp = "BlueWolves";
					moveElementToXY(players.blue[i], 210, 450);
					break;
				case 'BlueWolves':
					players.blue[i].camp = "BlueRaptors";
					moveElementToXY(players.blue[i], 395, 520);
					break;
				case 'BlueRaptors':
					players.blue[i].camp = "BlueBrambleback";
					moveElementToXY(players.blue[i], 435, 600);
					break;
				case 'BlueBrambleback':
					players.blue[i].camp = "BlueGolems";
					moveElementToXY(players.blue[i], 475, 675);					
					break;
				case 'BlueGolems':
					players.blue[i].camp = "BlueGrump";
					moveElementToXY(players.blue[i], 115, 335);
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
					moveElementToXY(players.red[i], 630, 430);					
					break;
				case 'RedSentinelle':
					players.red[i].camp = "RedWolves";
					moveElementToXY(players.red[i], 625, 345);					
					break;
				case 'RedWolves':
					players.red[i].camp = "RedRaptors";
					moveElementToXY(players.red[i], 450, 275);		
					break;
				case 'RedRaptors':
					players.red[i].camp = "RedBrambleback";
					moveElementToXY(players.red[i], 395, 200);				
					break;
				case 'RedBrambleback':
					players.red[i].camp = "RedGolems";
					moveElementToXY(players.red[i], 350, 120);					
					break;
				case 'RedGolems':
					players.red[i].camp = "RedGrump";
					moveElementToXY(players.red[i], 710, 455);				
					break;				
			}
		}
	}
}	

//Function to call when a player is killed, make him dissapear, send him to base and make him respawn
function kill(player){		   
    player.DOMElement.style.visibility  = "hidden";				
    sendPlayerToLane(player, player.lane, 'base', respawnPlayer);
}

//Respawn a player (give him 100HP and send him back to a lane)
function respawnPlayer(player){
     setTimeout(function() {
        player.DOMElement.style.visibility = "visible";
        player.hp=100;       
		updatePlayer(player);
        if (player.role=="top"){
              sendPlayerToLane(player, 'base', 'top', makePlayerLane);
        }else if (player.role=="mid"){
              sendPlayerToLane(player, 'base', 'mid', makePlayerLane);
        }else if (player.role=="adc"){
              sendPlayerToLane(player, 'base', 'bot', makePlayerLane);
        }else if (player.role=="support"){
              sendPlayerToLane(player, 'base', 'bot', makePlayerLane);
        }
    }, 5000);
}

function makePlayerLane(player){
	player.status = 'laning'; 	
}


//Send player to base and simulate backs in LoL
function goBackToBase(player){	
    setTimeout(function() {sendPlayerToLane(player,player.lane,'base', respawnPlayer); }, 3000);	
}

//Start the movements of players

setInterval(moveLaningPlayers, 1000);
setInterval(moveJunglingPlayers, 6000);

