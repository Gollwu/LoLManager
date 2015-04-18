var abstractSimulation = require('../simulationCore/abstractSimulation');

/**
 * Main class of the League of legend simualtion engine
 * extend of abstractSImulation
 */
var LoLSimulation = function(viewEngine) {
    var simulation = this;

    this.init(viewEngine);

    this.launch = function() {
        console.log('I am in the children');
        simulation.parent.launch();
    };
};

// Extends
var abstract = new abstractSimulation();
LoLSimulation.prototype = abstract;
LoLSimulation.prototype.parent = abstract;

// Export a factory
module.exports = function(viewEngine) {
    return new LoLSimulation(viewEngine);
};
