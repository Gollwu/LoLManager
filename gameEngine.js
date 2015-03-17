function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key], y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function updatePlayer(player){
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Kills").innerHTML = player.kills;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Deaths").innerHTML = player.deaths;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Assists").innerHTML = player.assists;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Gold").innerHTML = pad(player.gold,5);
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"HP").style.width = player.hp + "%"
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"MissingHP").style.width = 100-player.hp + "%"
                            
}

function playerCreeping(player){   
    player.gold+=18;
    updatePlayer(player);     
}

function tradeWithOpponent(player, oppositePlayer){
    //One trade every turn
    if (player.status=="laning" && oppositePlayer.status=="laning"){
        //100 must get a name
        var trade = Math.random()*(Math.abs(oppositePlayer.laning - player.laning ) + 100);

        if(trade < oppositePlayer.laning){
            player.hp -= 2; 
        }else if (trade < oppositePlayer.laning+player.laning){
            oppositePlayer.hp-=2;
        }else if (trade < oppositePlayer.laning+player.laning+50){
            oppositePlayer.hp-=2;
            player.hp-=2;
        }
    }     
}

function checkDead(player, killer, assists){
    if(player.hp<=15 && player.status=="laning"){
        var killed = Math.round(Math.random()*2-1);  //Need formula here 
       
        if(!killed){  		
            goBackToBase(player);            
            player.status="base";
        }else {           
            killer.gold+=400;
            killer.kills++;
			for(var i in assists){
				assists[i].assists++;
				assists[i].gold+=200;
			}
            player.deaths++;   
            player.hp=100;
            player.status="dead";            
            kill(player);            
        }
    }        
}

function doTurn(){	 
	// players.blue and players.red are sorted: lane ~ i
    for(var i in players.blue) {
	    if (players.blue[i].status=="laning"){
		  playerCreeping(players.blue[i]);
        }
		var oppositePlayers = new Array();
		var oppositeAssistsPlayers = new Array();
        for(var j in players.red){			
            if(players.red[j].lane==players.blue[i].lane){
				oppositePlayers.push(players.red[j]);
				oppositeAssistsPlayers.push(players.red[j]);	
			}
		}	
		for(var k in oppositePlayers){
			tradeWithOpponent(players.blue[i],oppositePlayers[k]);			
			oppositeAssistsPlayers.splice(k,1);			
			checkDead(players.blue[i],oppositePlayers[k], oppositeAssistsPlayers);
			oppositeAssistsPlayers.splice(k,0,oppositePlayers[k]);	
		}
                
        updatePlayer(players.blue[i]);
	}
    for(var i in players.red) {
	    if (players.red[i].status=="laning"){
		  playerCreeping(players.red[i]);
        }
		
		var oppositePlayers = new Array();
		var oppositeAssistsPlayers = new Array();
		for(var j in players.blue){			
            if(players.blue[j].lane==players.red[i].lane){
				oppositePlayers.push(players.blue[j]);   
				oppositeAssistsPlayers.push(players.blue[j]);				
            }
		}	
		for(var k in oppositePlayers){
			tradeWithOpponent(players.red[i],oppositePlayers[k]);						
			oppositeAssistsPlayers.splice(k,1);						
			checkDead(players.red[i],oppositePlayers[k], oppositeAssistsPlayers);
			oppositeAssistsPlayers.splice(k,0,oppositePlayers[k]);	
		}        	        
        updatePlayer(players.red[i]);
	}
}

players.blue = sortByKey(players.blue, 'lane');
players.red = sortByKey(players.red, 'lane');
setInterval(doTurn, 2000);