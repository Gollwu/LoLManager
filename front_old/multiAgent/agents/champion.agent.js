
var AgentChampion = function (environment, team, player, id) {

	this.__env = environment;
	this.__team = team;
	
	this.__player = player;// element of players in db.js

	this.__id = id;

};

// called in callback of onTurretAttack or later onChamp attack
AgentChampion.prototype.receiveDamage = function(source){
	console.log("Aaaaargh, je me meurs !");
	console.log(this.__player.name+" a subi "+source.getDamage());
	players[this.__team][this.__id].hp -= source.getDamage();
};


// getter
AgentChampion.prototype.getObjPlayer = function(){
	return this.__player;
};