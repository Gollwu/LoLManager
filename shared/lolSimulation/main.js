var abstractSimulation = require('../simulationCore/abstractSimulation');
var q = require('q');
/**
 * Main class of the League of legend simualtion engine
 * extend of abstractSImulation
 */
var LoLSimulation = function() {
    var simulation = this;
    var viewEngine = null;

    this.init = function(newViewEngine) {
        viewEngine = newViewEngine;
        return this.parent.init(viewEngine);
    };

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
                entity.position = entity.position + i*42;
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
module.exports = function() {
    return new LoLSimulation();
};
