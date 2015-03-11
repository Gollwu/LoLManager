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
    if (player.status=="laning" && players.red[i].status=="laning"){
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

function checkDead(player){
    if(players.blue[i].hp<=15 && players.blue[i].status=="laning"){
        var killed = Math.random()*2-1;  //Need formula here 
        alert(killed);
        if(!killed){           
            players.blue[i].hp=100;				
            goBackToBase(players.blue[i]);
            players.blue[i].lane=0;
            players.blue[i].status="base";
        }else {           
            players.red[i].gold+=400;
            players.red[i].kills++;
            players.blue[i].deaths++;   
            players.blue[i].hp=100;
            players.blue[i].status="dead";
            players.blue[i].lane=0;
            kill(players.blue[i]);            
        }
    }        
}

function doTurn(){	 
	// players.blue and players.red are sorted: lane ~ i
    for(var i in players.blue) {
	    if (players.blue[i].status=="laning"){
		  playerCreeping(players.blue[i]);
        }
        for(var j in players.red){
            if(players.red[j].lane==players.blue[i].lane){
                tradeWithOpponent(players.blue[i],players.red[j])
            }
        }	
        checkDead(players.blue[i]);
        updatePlayer(players.blue[i]);
	}
    for(var i in players.red) {
	    if (players.red[i].status=="laning"){
		  playerCreeping(players.red[i]);
        }
        for(var j in players.blue){
            if(players.blue[j].lane==players.red[i].lane){
                tradeWithOpponent(players.red[i],players.blue[j])
            }
        }	
        checkDead(players.red[i]);
        updatePlayer(players.red[i]);
	}
}

players.blue = sortByKey(players.blue, 'lane');
players.red = sortByKey(players.red, 'lane');
setInterval(doTurn, 2000);