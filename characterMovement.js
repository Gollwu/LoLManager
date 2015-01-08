var offsetInitX = [], offsetInitY = [];
for (var i in players.blue){
    offsetInitX.push(players.blue[i].DOMElement.offsetLeft);
    offsetInitY.push(players.blue[i].DOMElement.offsetTop);
}
for (var i in players.red){
    offsetInitX.push(players.red[i].DOMElement.offsetLeft);
    offsetInitY.push(players.red[i].DOMElement.offsetTop);
}

function swingFaces(){	
	for (var i in players.blue){
		if (players.blue[i].inlane){	
            for (var j in players.red){
		        if (players.red[j].inlane){	
                    setTimeout(function(){
                        players.blue[i].DOMElement.style.marginLeft = offsetInitY[i] + 2 + 'px';
                        players.red[j].DOMElement.style.marginTop = offsetInitX[players.blue.length+i] - 2 + 'px';
                        setTimeout(function(){
                            players.blue[i].DOMElement.style.marginTop = offsetInitY[i] + 2 + 'px';
                            players.red[j].DOMElement.style.marginLeft = offsetInitX[players.blue.length+i] + 2 + 'px';			
                            setTimeout(function(){
                                players.blue[i].DOMElement.style.marginLeft = offsetInitX[i] - 2 + 'px';
                                players.red[j].DOMElement.style.marginTop = offsetInitY[players.blue.length+i] + 2 + 'px';				
                                setTimeout(function(){
                                    players.blue[i].DOMElement.style.marginTop = offsetInitY[i] - 2 + 'px';
                                    players.red[j].DOMElement.style.marginLeft = offsetInitX[players.blue.length+i] - 2 + 'px';					
                                },250);				
                            },250);			
                        },250);
                    },250);
                }
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

setInterval(swingFaces, 1000);
