


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

function updateStructure(structure){   
    //Turrets Update
    if(structure.name.indexOf("Turret") > -1){
        if (structure.hp >75 && structure.name.indexOf("red") > -1) {
            structure.DOMElement.src = "assets/Red_Turret_100.png"
        }else if(structure.hp >50 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Turret_75.png"
        }else if(structure.hp >25 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Turret_50.png"
        }else if(structure.hp >0 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Turret_25.png"
        }else if(structure.hp >75 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Turret_100.png"
        }else if(structure.hp >50 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Turret_75.png"
        }else if(structure.hp >25 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Turret_50.png"
        }else if(structure.hp >0 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Turret_25.png"
        }else if(structure.hp == 0) {
             structure.DOMElement.src = "assets/turret.png"
        }    
    }	
	else if(structure.name.indexOf("Nexus") > -1 && structure.name.indexOf("Turret") <= -1){
        if (structure.hp >75 && structure.name.indexOf("red") > -1) {
            structure.DOMElement.src = "assets/Red_Nexus_100.png"
        }else if(structure.hp >50 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Nexus_75.png"
        }else if(structure.hp >25 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Nexus_50.png"
        }else if(structure.hp >0 && structure.name.indexOf("red") > -1) {
             structure.DOMElement.src = "assets/Red_Nexus_25.png"
        }else if(structure.hp >75 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Nexus_100.png"
        }else if(structure.hp >50 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Nexus_75.png"
        }else if(structure.hp >25 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Nexus_50.png"
        }else if(structure.hp >0 && structure.name.indexOf("blue") > -1) {
             structure.DOMElement.src = "assets/Blue_Nexus_25.png"
        }else if(structure.hp == 0) {
             structure.DOMElement.src = "assets/nexus.png"
        }    
    }
}    

//Make the first turret of the lane on the player take damage
function pushTurret(player){
	if(player.lane != 'base'){
		oppositeTeam = (player.team=='red'?'blue':'red')
		structureToHit = getStructureToHit(oppositeTeam, player.lane);
		structureToHit.hp -= 25;
		
		if(structureToHit.name.indexOf("Turret") && structureToHit.hp<=0){
			for(var i in players[color]){
				players[color][i].gold +=150;
				updatePlayer(player);            
			}
		}		
		updateStructure(structureToHit);
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
        }else {           
            killer.gold+=400;
            killer.kills++;
			      for(var i in assists){
				      assists[i].assists++;
				      assists[i].gold+=200;
			      }
            player.deaths++;                                  
            kill(player);            
        }
    }        
}

//Main function simulating a turn in the game
function doTurn(){	 
    // fire event onNewGameLoop
    eventEngine.dispatchEvent("onNewGameLoop");

	// players.blue and players.red are sorted: lane ~ i
	
    var colors = ['red', 'blue'];
    for (var a in colors){
        var color = colors[a]; 
        var oppositeColor = (color=='red'?'blue':'red')        
        for(var i in players[color]){
            if (players[color][i].status=="laning"){
                //Simulate creeping
                playerCreeping(players[color][i]);

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



    if (nexus.blue.hp < 0){console.log("RED TEAM WINS");}
    if (nexus.red.hp < 0){console.log("BLUE TEAN WINS");}
}

//init agents
var turretsAgents = [];
var champAgents = [];

// add an event engine with its associated events
var eventEngine = new EventEngine();

turretsAgents.push(new AgentTurret(eventEngine, "blue", turrets["blue"]["mid"][2]));// mid blue turret
champAgents.push(new AgentChampion(eventEngine, "red", players["red"][2], 2));// Qrthur

eventEngine.addListener("onNewGameLoop",
                        function(){                           
                            AgentTurret.prototype.checkDistChampTurret(turretsAgents);
                        });
eventEngine.addListener("onAttack",
                        function(source, player){
                            for(var i in champAgents)
                                if(champAgents[i].getObjPlayer().name == player.name){
                                    champAgents[i].receiveDamage(source);
                                }
                        });





//Sort players and start turn every 2 seconds
setInterval(doTurn, 2000);
