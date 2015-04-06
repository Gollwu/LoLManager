
var AgentTurret = function (environement, team, position) {

	this.__env = environement;
	this.__team = team;
	
	this.__positionTurretX = position.x;
	this.__positionTurretY = position.y;


setInterval(
	function(){
		(function(this){
			this.__checkRelativePosition(this);
		})(this)},2000);

/*setInterval(
	function(){
		(function(e, x, y, dx, dy, cb, player){check})(e, x, y, dx, dy, cb, player)}*/

	/////////////////////////////////////////

	/*if (team == 'blue') {
		this.x = 0;
		this.y = O;
	} else {
		this.x = this.env.maxX;
		this.y = this.env.maxY;
	}
	this.vel = 10;

	this.hp = 100;
	this.damage = rand()%10;
	this.damageRate = 1.5;

	
	var moveInterval = null;
	this.move = function(x, y) {
		if (moveInterval) {
			clearInterval(moveInterval);
		}
		moveInterval = setInterval(function() {
			var newX = x-this.x;
			var newY = y-this.y;
			var d = sqrt(newX*newX + newY*newY);
			if (d > this.vel) {
				newX = newX*this.vel/d;
				newY = newY*this.vel/d;
			} else {
				newX = x;
				newY = y;
				clearInterval(moveInterval);
			}
			if (env.allowedToMove(this, newX, newY)) {
				var lastX = this.x;
				var lastY = this.y;
				this.x = newX;
				this.y = newY;
				env.signal('move', {
					champ: this,
					lastX: lastX,
					lastY, lastY
				});
			}
		}, 10);
	}*/

}


AgentTurret.prototype.__checkRelativePosition = function(self){
	var colors = ['red', 'blue'];
	for (var a in colors){
		var color = colors[a];		
			for (var i in players[color]){			
				positionPlayerX = players[color][i].DOMElement.style.marginLeft;
				positionPlayerY = players[color][i].DOMElement.style.marginTop;

				if(utils.calculateDistance(self.__positionTurretX,self.__positionTurretY,positionPlayerX,positionPlayerY) < configGE.turretRange){
					console.log("champ under attack : "+players[color][i].name);
				}else{
					console.log("not in range");
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
