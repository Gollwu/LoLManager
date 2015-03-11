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

var first = true;

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
            players.blue[i].gold+=30;
            updatePlayer(players.blue[i]);
			switch (players.blue[i].camp) {
				case 'BlueGrump':
					players.blue[i].camp = "BlueSentinelle";                    
					moveElementToXY(players.blue[i].DOMElement, 180, 310);
					break;
				case 'BlueSentinelle':
					players.blue[i].camp = "BlueWolves";
					moveElementToXY(players.blue[i].DOMElement, 210, 420);
					break;
				case 'BlueWolves':
					players.blue[i].camp = "BlueRaptors";
					moveElementToXY(players.blue[i].DOMElement, 375, 490);
					break;
				case 'BlueRaptors':
					players.blue[i].camp = "BlueBrambleback";
					moveElementToXY(players.blue[i].DOMElement, 425, 570);
					break;
				case 'BlueBrambleback':
					players.blue[i].camp = "BlueGolems";
					moveElementToXY(players.blue[i].DOMElement, 460, 660);					
					break;
				case 'BlueGolems':
					players.blue[i].camp = "BlueGrump";
					moveElementToXY(players.blue[i].DOMElement, 135, 300);
					break;				
			}
		}
	}
	for (var i in players['red']){				
		if (players.red[i].status=="jungling"){	
            players.red[i].gold+=30;
            updatePlayer(players.red[i]);
			switch (players.red[i].camp) {
				case 'RedGrump':
					players.red[i].camp = "RedSentinelle";
					moveElementToXY(players.red[i].DOMElement, 610, 410);					
					break;
				case 'RedSentinelle':
					players.red[i].camp = "RedWolves";
					moveElementToXY(players.red[i].DOMElement, 580, 300);					
					break;
				case 'RedWolves':
					players.red[i].camp = "RedRaptors";
					moveElementToXY(players.red[i].DOMElement, 415, 260);		
					break;
				case 'RedRaptors':
					players.red[i].camp = "RedBrambleback";
					moveElementToXY(players.red[i].DOMElement, 365, 170);				
					break;
				case 'RedBrambleback':
					players.red[i].camp = "RedGolems";
					moveElementToXY(players.red[i].DOMElement, 330, 80);					
					break;
				case 'RedGolems':
					players.red[i].camp = "RedGrump";
					moveElementToXY(players.red[i].DOMElement, 655, 420);				
					break;				
			}
		}
	}
}	


function kill(player){
	if(player.team=="blue"){		
		player.DOMElement.style.visibility = 'hidden';				
		moveElementToXY(player.DOMElement, 20, 750,2, 2, 10, respawnPlayer);
			
	}else{	
		player.DOMElement.style.visibility = 'hidden';			
		moveElementToXY(player.DOMElement, 750, 20, 2, 2, 10, respawnPlayer);	
	}
	
}

function respawnPlayer(playerDOMElement){
	setTimeout(function() {playerDOMElement.style.visibility = 'visible'; console.log(playerDOMElement.style.marginTop);}, 10000);			
	
}



function goBackToBase(player){
	if(player.team=="blue"){
		setTimeout(function() {moveElementToXY(player.DOMElement, 20, 750); player.hp=100;}, 4000);
	}else{
		setTimeout(function() {moveElementToXY(player.DOMElement, 750, 20); player.hp=100;}, 4000);
	}	
}

setInterval(moveLaningPlayers, 1000);
setInterval(moveJunglingPlayers, 2000);

