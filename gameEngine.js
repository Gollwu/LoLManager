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

function updateTurret(turret){   
    if (turret.hp >75 && turret.name.indexOf("red") > -1) {
        turret.DOMElement.src = "assets/turretFullRed.png"
    }else if(turret.hp >50 && turret.name.indexOf("red") > -1) {
         turret.DOMElement.src = "assets/turret75Red.png"
    }else if(turret.hp >25 && turret.name.indexOf("red") > -1) {
         turret.DOMElement.src = "assets/turret50Red.png"
    }else if(turret.hp >0 && turret.name.indexOf("red") > -1) {
         turret.DOMElement.src = "assets/turret25Red.png"
    }else if(turret.hp >75 && turret.name.indexOf("blue") > -1) {
         turret.DOMElement.src = "assets/turretFullBed.png"
    }else if(turret.hp >50 && turret.name.indexOf("blue") > -1) {
         turret.DOMElement.src = "assets/turret75Blue.png"
    }else if(turret.hp >25 && turret.name.indexOf("blue") > -1) {
         turret.DOMElement.src = "assets/turret50Blue.png"
    }else if(turret.hp >0 && turret.name.indexOf("blue") > -1) {
         turret.DOMElement.src = "assets/turret25Blue.png"
    }else if(turret.hp == 0) {
         turret.DOMElement.src = "assets/turret.png"
    }    
}    

//Make the first turret of the lane on the player take damage
function pushTurret(player){
    
    
    updateTurret(turret);
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
	
    var colors = ['red', 'blue'];
    for (var a in colors){
        var color = colors[a]; 
        var oppositeColor = (color=='red'?'blue':'red')        
        for(var i in players[color]){
            if (players[color][i].status=="laning"){
                //Simulate creeping
                playerCreeping(players.blue[i]);

                var oppositePlayers = new Array();
                var oppositeAssistsPlayers = new Array();
                //Get opposite players in lane
                for(var j in players[oppositeColor]){			
                    if(players[oppositeColor][j].lane==players[color][i].lane){
                        oppositePlayers.push(players[oppositeColor][j]);
                        oppositeAssistsPlayers.push(players[oppositeColor][j]);	
                    }
                }		
                //If there is no opposite player on the lane, attack the next turret on the lane
                if(oppositePlayers.length==0){
                    pushTurret(players[color][i]);
                }else{
                    //Trade with every opponent (loop on oppositePlayers where oppositeAssistsPlayers always contain all the opposite players on the lane but the player you are trading with
                    for(var k in oppositePlayers){
                        tradeWithOpponent(players[color][i],oppositePlayers[k]);			
                        oppositeAssistsPlayers.splice(k,1);			
                        checkDead(players[color][i],oppositePlayers[k], oppositeAssistsPlayers);
                        oppositeAssistsPlayers.splice(k,0,oppositePlayers[k]);	

                    }
                }
            }
            //Update UI     
            updatePlayer(players[color][i]);
	   }    
    }     
}

//Sort players and start turn every 2 seconds
players.blue = sortByKey(players.blue, 'lane');
players.red = sortByKey(players.red, 'lane');
setInterval(doTurn, 2000);