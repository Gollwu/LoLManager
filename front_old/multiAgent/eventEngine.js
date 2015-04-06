var EventEngine = function () {
	this.callBacks = {};
};

EventEngine.prototype.on = function(eventName, callback) {
	
	if (! this.callBacks[eventName]) { 
		this.callBacks[eventName] = [];
	}
	this.callBacks[eventName].push(callback);	
}


EventEngine.prototype.dispatch = function(eventName, eventObj) {
	for( var i in this.callBacks[eventName] ) {

		var callback = this.callBacks[eventName][i];
		callback(eventObj);
	}
}

/*exports.create = function() {
	return new EventEngine();
};*/