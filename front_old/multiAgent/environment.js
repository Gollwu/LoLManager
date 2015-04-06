
var Environement = function(turrets) {

	this.__actions = [
		'attack'
	];
	this.__receivedEvent = [
		'UnderAttack'
	];
	
	this.__champs = champs;

	var events = eventEngine.create();

	this.__signal = events.dispatch;
/*	events.on('attack', function(champ) {
		
	});*/

}

/*Environement.prototype.allowedToMove = function(Champ, x, y) {
	return true;
}*/