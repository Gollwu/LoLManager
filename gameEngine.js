//UTility function to sort players
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key], y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

//Utility function to add 0 to a string for golds
function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

//Update the player stats on the UI (KDA, Gold, HP)
function updatePlayer(player){
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Kills").innerHTML = player.kills;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Deaths").innerHTML = player.deaths;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Assists").innerHTML = player.assists;
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"Gold").innerHTML = pad(player.gold,5);
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"HP").style.width = player.hp + "%"
    document.getElementById(player.role+player.team.charAt(0).toUpperCase() + player.team.slice(1)+"MissingHP").style.width = 100-player.hp + "%"
                            
}

function updateTurret(element, index, array){   
    if (element.hp >75 && element.name.indexOf("red") > -1) {
        element.DOMElement.src = "assets/turretFullRed.png"
    }else if(element.hp >50 && element.name.indexOf("red") > -1) {
         element.DOMElement.src = "assets/turret75Red.png"
    }else if(element.hp >25 && element.name.indexOf("red") > -1) {
         element.DOMElement.src = "assets/turret50Red.png"
    }else if(element.hp >0 && element.name.indexOf("red") > -1) {
         element.DOMElement.src = "assets/turret25Red.png"
    }else if(element.hp >75 && element.name.indexOf("blue") > -1) {
         element.DOMElement.src = "assets/turretFullBed.png"
    }else if(element.hp >50 && element.name.indexOf("blue") > -1) {
         element.DOMElement.src = "assets/turret75Blue.png"
    }else if(element.hp >25 && element.name.indexOf("blue") > -1) {
         element.DOMElement.src = "assets/turret50Blue.png"
    }else if(element.hp >0 && element.name.indexOf("blue") > -1) {
         element.DOMElement.src = "assets/turret25Blue.png"
    }else if(element.hp == 0) {
         element.DOMElement.src = "assets/turret.png"
    }
    
}    


//Simulate player creeping
function playerCreeping(player){   
    player.gold+=18;
    updatePlayer(player);     
}


//Simulate a trade with one opponent player
function tradeWithOpponent(player, oppositePlayer){
    
    if (player.status=="laning" && oppositePlayer.status=="laning"){
        //Generate a random value
        var trade = Math.random()*(Math.abs(oppositePlayer.laning - player.laning ) + 100);
		//Three cases, one player loses HP,the opposite loses HP or both
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

//Check if a player's HP is low (<15%hp) and decides if the player is killed or if he goes back to base 
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

//Main function simulating a turn in the game
function doTurn(){	 
	// players.blue and players.red are sorted: lane ~ i
	//To be changed in one loop for both teams following the other js functions models 
    for(var i in players.blue) {
	    if (players.blue[i].status=="laning"){
			//Simulate creeping
			playerCreeping(players.blue[i]);
        }
		var oppositePlayers = new Array();
		var oppositeAssistsPlayers = new Array();
		//Get opposite players in lane
        for(var j in players.red){			
            if(players.red[j].lane==players.blue[i].lane){
				oppositePlayers.push(players.red[j]);
				oppositeAssistsPlayers.push(players.red[j]);	
			}
		}			
		//Trade with every opponent (loop on oppositePlayers where oppositeAssistsPlayers always contain all the opposite players on the lane but the player you are trading with
		for(var k in oppositePlayers){
			tradeWithOpponent(players.blue[i],oppositePlayers[k]);			
			oppositeAssistsPlayers.splice(k,1);			
			checkDead(players.blue[i],oppositePlayers[k], oppositeAssistsPlayers);
			oppositeAssistsPlayers.splice(k,0,oppositePlayers[k]);	

		}
        //Update UI     
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
    turrets.forEach(updateTurret)  
}

//Sort players and start turn every 2 seconds
players.blue = sortByKey(players.blue, 'lane');
players.red = sortByKey(players.red, 'lane');
setInterval(doTurn, 2000);