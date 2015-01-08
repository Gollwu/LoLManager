 setInterval(doTurn, 100);

var turn = 1;

function doTurn(){	    
	alert("doturn");
	for (var i in players.blue){
		if (players.blue[i].inlane){
			//Farming
			players.blue[i].gold+=11;
		}	
    }	
	
	for (var i in players.red){
		if (players.red[i].inlane){
			//Farming
			players.red[i].gold+=11;
		}	
    }
	 
    for(var i in players.blue) s{
         for(var j in players.red) {
             if(players.blue[i].lane == players.red[j].lane) {
				alert("lol2");
                //One trade every wave
                if (turn%18 == 0 && players.blue[i].inlane && players.red[j].inlane){
                    //100 must get a name
                    var trade = Math.random()*( Math.abs(players.red[j].laning - players.blue[i].laning ) + 100);
                    
                    if(trade < players.red[j].laning){
                        players.blue[i].hp -= 10; 
                    }else if (trade < players.red[j].laning+players.blue[i].laning){
                        players.red[j].hp-=10;
                    }else if (trade < players.red[j].laning+players.blue[i].laning+50){
                        players.red[j].hp-=10;
                        players.blue[i].hp-=10;
                    }
                }
                
                if(players.red[j].hp	<=30  && players.red[j].inlane){
                    var killed = Math.random()*( Math.max(v.affinities[players.red[j].champion], players.blue[i].affinities[players.blue[i].champion] ));
                    
                    if(killed > Math.min(players.red[j].affinities[players.red[j].champion], players.blue[i].affinities[players.blue[i].champion] )){
                        alert("gollwu escaped :)");	
                        players.red[j].hp=100;
                    }else {
                        alert("gollwu died :(");	
                        players.blue[i].gold+=400;
                        players.red[j].hp=100;
                    }
                    
                    players.red[j].inlane=false;
                    back("red");
                    
                }
                
                if(players.blue[i].hp<=30 && players.blue[i].inlane){
                    var killed = Math.random()*(Math.max(players.red[j].affinities[players.red[j].champion],players.blue[i].affinities[players.blue[i].champion] ));                    
                    if(killed > Math.min(players.red[j].affinities[players.red[j].champion], players.blue[i].affinities[players.blue[i].champion] )){
                        alert("wickd escaped :(");
                        players.blue[i].hp=100;
                    }else {
                        alert("wickd died :)");	
                        players.red[j].gold+=400;
                        players.blue[i].hp=100;
                    }
                    players.blue[i].inlane=false;
                    back("blue");
                    
                }
                
            }    
		}
        	//document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + "\n" + players.blue[i].name+ "HP : "+players.blue[i].hp + players.red[j].name+ " HP : "+players.red[j].hp + " wickd Gold : "+players.blue[i].gold + " gollwu Gold : "+players.red[j].gold; 
	}
	
	
	
	
	
	turn++;


	}