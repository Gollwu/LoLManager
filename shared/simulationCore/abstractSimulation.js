var abstractViewEngine = require('./abstractViewEngine.js');
var q = require('q');

/**
 * Base class of a simulation
 * Make all the calculus and use a view Engine to diplay it
 */
var abstractSimulation = function() {

    var mainDeferrer = q.defer();
    var viewEngine = null;

    /**
     * Init the Simulation Engine with a View Engine
     * @param abstractViewEngine viewEngine
     * @return Deferred Rsolved when initialized
     */
    this.init = function(newViewEngine) {
        if (! (newViewEngine instanceof abstractViewEngine)) {
            throw new Error('view Engine must extend abstractViewEngine.');
        }
        viewEngine = newViewEngine;
        return viewEngine.init();
    };

    /**
     * Launch the simulation
     * @return Deferred Deferred resolved with the result when the simualtion ended
     */
    this.launch = function() {
        mainDeferrer.resolve({});
        viewEngine.end({});
        return mainDeferrer.promise;
    };

    /**
     * Interrupt the simulation before the end
     */
    this.interrupt = function() {
        mainDeferrer.reject();
    };

};

module.exports = abstractSimulation;
