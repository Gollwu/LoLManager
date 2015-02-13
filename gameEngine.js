var turn = 1;

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key], y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function doTurn(){	 
	// players.blue and players.red are sorted: lane ~ i
    for(var i in players.blue) {
	
		if (players.red[i].status=="laning"){
			players.blue[i].gold+=11;
			players.red[i].gold+=11;
		}
	
		//One trade every wave
		if (turn%18 == 0 && players.blue[i].status=="laning" && players.red[i].status=="laning"){
			//100 must get a name
			var trade = Math.random()*(Math.abs(players.red[i].laning - players.blue[i].laning ) + 100);
			
			if(trade < players.red[i].laning){
				players.blue[i].hp -= 10; 
			}else if (trade < players.red[i].laning+players.blue[i].laning){
				players.red[i].hp-=10;
			}else if (trade < players.red[i].laning+players.blue[i].laning+50){
				players.red[i].hp-=10;
				players.blue[i].hp-=10;
			}
		}
		
		if(players.red[i].hp <=30  && players.red[i].status=="laning"){
			var killed = Math.random()*( Math.max(60, 40 ));
			
			if(killed > Math.min(players.red[i][players.red[i].champion], players.blue[i][players.blue[i].champion] )){
				//alert(players.red[i].name+" escaped :)");	
				players.red[i].hp=100;
			}else {
				//alert(players.red[i].name+" died :(");	
				players.blue[i].gold+=400;
				players.red[i].hp=100;
			}
			
			players.red[i].status="dead";
			//back("red");
			
		}
		
		if(players.blue[i].hp<=30 && players.blue[i].status=="laning"){
			var killed = Math.random()*(Math.max(players.red[i][players.red[i].champion],players.blue[i][players.blue[i].champion] ));                    
			if(killed > Math.min(players.red[i][players.red[i].champion], players.blue[i][players.blue[i].champion] )){
				//alert(players.blue[i].name+" escaped :(");
				players.blue[i].hp=100;
			}else {
				//alert(players.blue[i].name+" died :)");	
				players.red[i].gold+=400;
				players.blue[i].hp=100;
			}
			players.blue[i].status="dead";
			//back("blue");
			
		}
 
        
	}
	
	document.getElementById('info').innerHTML = '';
	for(var i in players.blue) document.getElementById('info').innerHTML += players.blue[i].name+' HP:'+players.blue[i].hp+'<br />';
	for(var i in players.red) document.getElementById('info').innerHTML += players.red[i].name+' HP:'+players.red[i].hp+'<br />';
	
	
	
	
	turn++;


}

players.blue = sortByKey(players.blue, 'lane');
players.red = sortByKey(players.red, 'lane');
setInterval(doTurn, 100);