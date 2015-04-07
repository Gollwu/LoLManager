
var AgentTurret = function (environment, team, turret) {

	this.__env = environment;
	this.__team = team;

	this.__turret = turret;
	
	this.__positionTurretX = this.__turret.x;
	this.__positionTurretY = this.__turret.y;

	this.__type = "turret";
	this.__damage = 10;


};

// public method
// on each new game loop
AgentTurret.prototype.checkDistChampTurret = function(turrets){
	for(var i in turrets)
        turrets[i].__checkRelativePosition(turrets[i]);
};

// private method
AgentTurret.prototype.__checkRelativePosition = function(self){
	// only check ennemy team
	var color = this.__team == 'red'?'blue':'red';
	
	for (var i in players[color]){			
		positionPlayerX = parseInt(players[color][i].DOMElement.style.marginLeft);
		positionPlayerY = parseInt(players[color][i].DOMElement.style.marginTop);

		if(utils.calculateDistance(self.__positionTurretX,self.__positionTurretY,positionPlayerX,positionPlayerY) < configGE.turretRange){
			console.log("champ under attack : "+players[color][i].name);
			// attack this champion
			// fire event onTurretAttack
			this.__onTurretAttack(players[color][i]);
		}else{
			console.log(players[color][i].name+" is not in range : "+utils.calculateDistance(self.__positionTurretX,self.__positionTurretY,positionPlayerX,positionPlayerY));
		}
	}
};

AgentTurret.prototype.__onTurretAttack = function(target){
	this.__env.dispatchEvent("onTurretAttack", this, target);
};

//getters
AgentTurret.prototype.getDamage = function(){
	return this.__damage;
};