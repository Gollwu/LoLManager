/*
 *	CLASS EventEngine
 *	Handle events of multi agent architecture
 */

var EventEngine = function () {
	this.callBacks = {};
};

// add new event to the list to handle them
EventEngine.prototype.addListener = function(eventName, callback) {
	
	if (! this.callBacks[eventName]) { 
		this.callBacks[eventName] = [];
	}
	this.callBacks[eventName].push(callback);	
}

// dispatch event (execute callback with param eventObj)
EventEngine.prototype.dispatchEvent = function(eventName, eventObj, targetObj) {
	for( var i in this.callBacks[eventName] ) {

		var callback = this.callBacks[eventName][i];
		callback(eventObj, targetObj);
	}
}
