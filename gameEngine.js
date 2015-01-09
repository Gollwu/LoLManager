 setInterval(doTurn, 100);

var turn = 1;

function doTurn(){	    
	//alert("doturn");
	for (var i in players.blue){
		if (players.blue[i].status=="laning"){
			//Farming
			players.blue[i].gold+=11;
		}	
    }	
	
	for (var i in players.red){
		if (players.red[i].status=="laning"){
			//Farming
			players.red[i].gold+=11;
		}	
    }
	 
	
    for(var i in players.blue) {
		for(var j in players.red) {
             if(players.blue[i].lane == players.red[j].lane) {				
                //One trade every wave
                if (turn%18 == 0 && players.blue[i].status=="laning" && players.red[j].status=="laning"){
                    //100 must get a name
                    var trade = Math.random()*(Math.abs(players.red[j].laning - players.blue[i].laning ) + 100);
                    
                    if(trade < players.red[j].laning){
                        players.blue[i].hp -= 10; 
                    }else if (trade < players.red[j].laning+players.blue[i].laning){
                        players.red[j].hp-=10;
                    }else if (trade < players.red[j].laning+players.blue[i].laning+50){
                        players.red[j].hp-=10;
                        players.blue[i].hp-=10;
                    }
                }
                
                if(players.red[j].hp <=30  && players.red[j].status=="laning"){
                    var killed = Math.random()*( Math.max(60, 40 ));
                    
                    if(killed > Math.min(players.red[j][players.red[j].champion], players.blue[i][players.blue[i].champion] )){
                        //alert(players.red[j].name+" escaped :)");	
                        players.red[j].hp=100;
                    }else {
                        //alert(players.red[j].name+" died :(");	
                        players.blue[i].gold+=400;
                        players.red[j].hp=100;
                    }
                    
                    players.red[j].status="dead";
                    //back("red");
                    
                }
                
                if(players.blue[i].hp<=30 && players.blue[i].status=="laning"){
                    var killed = Math.random()*(Math.max(players.red[j][players.red[j].champion],players.blue[i][players.blue[i].champion] ));                    
                    if(killed > Math.min(players.red[j][players.red[j].champion], players.blue[i][players.blue[i].champion] )){
                        //alert(players.blue[i].name+" escaped :(");
                        players.blue[i].hp=100;
                    }else {
                        //alert(players.blue[i].name+" died :)");	
                        players.red[j].gold+=400;
                        players.blue[i].hp=100;
                    }
                    players.blue[i].status="dead";
                    //back("blue");
                    
                }
                
            } 
		
			
		}
        
	}
	
	document.getElementById('info').innerHTML = '';
	for(var i in players.blue) document.getElementById('info').innerHTML += players.blue[i].name+' HP:'+players.blue[i].hp+'<br />';
	for(var i in players.red) document.getElementById('info').innerHTML += players.red[i].name+' HP:'+players.red[i].hp+'<br />';
	
	
	
	
	turn++;


}