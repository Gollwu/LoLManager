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

function swingFaces(){
	var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];
		
		//console.log(color);
		
		var move = function(color){
			for (var i in players[color]){
				//console.log(players[color][i].champion);
				if (players[color][i].inlane){

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

function back(color){
	if(color=="blue"){		
		setTimeout(function() {champion_blue_top.style.marginTop = 750 + 'px';}, 1000);
	}
	if(color=="red"){		
		setTimeout(function() {champion_red_top.style.marginLeft = 750 + 'px';}, 1000);		
	}

}

setInterval(swingFaces, 1000);
