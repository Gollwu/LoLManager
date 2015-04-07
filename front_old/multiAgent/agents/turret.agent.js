
var AgentTurret = function (environement, team, position) {

	this.__env = environement;
	this.__team = team;
	
	this.__positionTurretX = position.x;
	this.__positionTurretY = position.y;


};

// public method
// on each new game loop
AgentTurret.prototype.checkDistChampTurret = function(turrets){
	for(var i in turrets)
        turrets[i].__checkRelativePosition(turrets[i]);
};

// private method
AgentTurret.prototype.__checkRelativePosition = function(self){
	var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];		
			for (var i in players[color]){			
				positionPlayerX = parseInt(players[color][i].DOMElement.style.marginLeft);
				positionPlayerY = parseInt(players[color][i].DOMElement.style.marginTop);

				if(utils.calculateDistance(self.__positionTurretX,self.__positionTurretY,positionPlayerX,positionPlayerY) < configGE.turretRange){
					console.log("champ under attack : "+players[color][i].name);
				}else{
					console.log("not in range : "+utils.calculateDistance(self.__positionTurretX,self.__positionTurretY,positionPlayerX,positionPlayerY));
				}
		}
	}
};

/*AgentTurret.prototype.doAction = function(name) {
	this.engine.dispatch(name, this);
};

AgentTurret.prototype.onChamp = function(eventName, callback) {
	this.engine.on(eventName, function(champ) {
		if (champ != this) {
			callback(champ);
		}
	});
};

AgentTurret.prototype.visible = function (x, y) {
	
	var dx = x-this.x ; 
	var dy = y-this.y ;
	var d2 = dx*dx + dy*dy;
	return d2 < 10;
}*/

/*exports.create = function(env, team, position) {
	return new AgentTurret(env, team, position); */
