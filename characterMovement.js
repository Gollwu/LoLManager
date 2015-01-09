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

function moveJunglingPlayers(){		
	for (var i in players['blue']){		
		//console.log(players[color][i].champion);
		if (players.blue[i].status=="jungling"){			
			switch (players.blue[i].camp) {
				case 'BlueGrump':
					players.blue[i].camp = "BlueSentinelle";
					players.blue[i].DOMElement.style.marginTop =  '310px';
					players.blue[i].DOMElement.style.marginLeft ='180px';
					break;
				case 'BlueSentinelle':
					players.blue[i].camp = "BlueWolves";
					players.blue[i].DOMElement.style.marginTop = '420px';
					players.blue[i].DOMElement.style.marginLeft = '210px';
					break;
				case 'BlueWolves':
					players.blue[i].camp = "BlueRaptors";
					players.blue[i].DOMElement.style.marginTop =  '490px';
					players.blue[i].DOMElement.style.marginLeft =  '375px';
					break;
				case 'BlueRaptors':
					players.blue[i].camp = "BlueBrambleback";
					players.blue[i].DOMElement.style.marginTop = '570px';
					players.blue[i].DOMElement.style.marginLeft =  '425px';
					break;
				case 'BlueBrambleback':
					players.blue[i].camp = "BlueGolems";
					players.blue[i].DOMElement.style.marginTop = '660px';
					players.blue[i].DOMElement.style.marginLeft =  '460px';
					break;
				case 'BlueGolems':
					players.blue[i].camp = "BlueGrump";
					players.blue[i].DOMElement.style.marginTop = '300px';
					players.blue[i].DOMElement.style.marginLeft =  '135px';
					break;				
			}
		}
	}
	for (var i in players['red']){		
		//console.log(players[color][i].champion);
		if (players.red[i].status=="jungling"){			
			switch (players.red[i].camp) {
				case 'RedGrump':
					players.red[i].camp = "RedSentinelle";
					players.red[i].DOMElement.style.marginTop =  '410px';
					players.red[i].DOMElement.style.marginLeft ='610px';
					break;
				case 'RedSentinelle':
					players.red[i].camp = "RedWolves";
					players.red[i].DOMElement.style.marginTop = '300px';
					players.red[i].DOMElement.style.marginLeft = '580px';
					break;
				case 'RedWolves':
					players.red[i].camp = "RedRaptors";
					players.red[i].DOMElement.style.marginTop =  '260px';
					players.red[i].DOMElement.style.marginLeft =  '415px';
					break;
				case 'RedRaptors':
					players.red[i].camp = "RedBrambleback";
					players.red[i].DOMElement.style.marginTop = '170px';
					players.red[i].DOMElement.style.marginLeft =  '365px';
					break;
				case 'RedBrambleback':
					players.red[i].camp = "RedGolems";
					players.red[i].DOMElement.style.marginTop = '80px';
					players.red[i].DOMElement.style.marginLeft =  '330px';
					break;
				case 'RedGolems':
					players.red[i].camp = "RedGrump";
					players.red[i].DOMElement.style.marginTop = '420px';
					players.red[i].DOMElement.style.marginLeft =  '655px';
					break;				
			}
		}
	}
}	


function back(color){
	if(color=="blue"){		
		setTimeout(function() {champion_blue_top.style.marginTop = 750 + 'px';}, 1000);
	}
	if(color=="red"){		
		setTimeout(function() {champion_red_top.style.marginLeft = 750 + 'px';}, 1000);		
	}

}

setInterval(moveLaningPlayers, 1000);
setInterval(moveJunglingPlayers, 2000);

