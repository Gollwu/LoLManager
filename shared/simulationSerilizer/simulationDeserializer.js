var abstractSimulation = require('../simulationCore/abstractSimulation');


/**
 * A simulation engine wich use serialized simulation
 * extend of abstractSImulation
 */
var simulationDeserializer = function(viewEngine) {

    this.launch = function() {
        console.log('I am in the children');
    };
};

// Extends
var abstract = abstractSimulation();
simulationDeserializer.prototype = abstract;
simulationDeserializer.prototype.parent = abstract;

// Export a factory
module.exports = function(options, viewEngine) {
    return new simulationDeserializer(options, viewEngine);
};
