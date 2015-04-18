var abstractSimulation = require('../simulationCore/abstractSimulation');

var LoLSimulation = function(viewEngine) {

    this.launch = function() {
        console.log('I am in the children');
    };
};

LoLSimulation.prototype = new abstractSimulation();



module.exports = function(viewEngine) {
    return new LoLSimulation(viewEngine);
};
