var abstractSimulation = require('../simulationCore/abstractSimulation');
var q = require('q');
/**
 * Main class of the League of legend simualtion engine
 * extend of abstractSImulation
 */
var LoLSimulation = function(viewEngine) {
    var simulation = this;

    this.init(viewEngine);

    this.launch = function() {
        var deferrer = q.defer();

        // test Asynchronious
        setTimeout(function() {
            var entity = {
                id: 1,
                name: 'toto',
                position: 5
            };

            viewEngine.createEntity(entity, 0);
            for (var i = 1; i < 10; i++) {
                viewEngine.updateEntity(entity, i);
            }

            var finalMessage = {
                message: 'this is the end !'
            };

            viewEngine.end(finalMessage, 10);
            deferrer.resolve(finalMessage);

        }, 100);

        return deferrer;
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
