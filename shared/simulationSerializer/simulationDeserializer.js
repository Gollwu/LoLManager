var abstractSimulation = require('../simulationCore/abstractSimulation');
var extend = require('extend');
var q = require('q');

/**
 * A simulation engine wich use serialized simulation
 * extend of abstractSImulation
 */
var simulationDeserializer = function(options) {

    var defaults = {
        /**
         * The content to deserialize.
         * Could be an object or an Url
         * @var Object|string
         */
        serializedContent: null
    };
    var config = defaults;

    this.setOptions = function(newOptions) {
        config = extend({}, defaults, newOptions);
    };
    this.setOptions(options);

    var viewEngine = null;
    var mainDeferrer = q.defer();
    var content = {};
    var stop = false;


    /**
     * Init the Simulation Engine with a View Engine
     * @param abstractViewEngine viewEngine
     * @return Deferred Resolved when initialized
     */
    this.init = function(newViewEngine) {
        viewEngine = newViewEngine;
        var parentPromise = this.parent.init(viewEngine);
        var deferrer = q.defer();

        if (! config.serializedContent) {
            deferrer.reject('No content do deserialize');
        } else if (typeof config.serializedContent === 'string') {
            if (typeof $ !== 'undefined') {

                $.get(config.serializedContent)
                .done(function(data) {
                    content = data;
                    parentPromise.then(function(){
                        deferrer.resolve(content);
                    }, function(error) {
                        deferrer.reject(error);
                    });
                })
                .fail(function(error) {
                    deferrer.reject(error);
                });
            }

        } else {
            content = config.serializedContent;
            return parentPromise;
        }
        return deferrer.promise;
    };


    /**
     * Launch the simulation
     * @return Deferred Deferred resolved with the result when the simualtion ended
     */
    this.launch = function() {
        // launch the function in an asynchronious way
        setTimeout(function() {
            for( var i in content) {
                if (stop) {
                    break;
                }
                this.deserializeTime(i);
            }
        }, 0);
        return mainDeferrer.promise;
    };

    /**
     * Interrupt the simulation before the end
     */
    this.interrupt = function() {
        stop = true;
        mainDeferrer.reject();
        viewEngine.end({});
    };


    /**
     * Deserialize one Step
     * @param integer time Time to deserialize
     */
    this.deserializeTime = function(time) {
        for (var j in content[time]) {
            var step = content[time][j];
            viewEngine[step.method](step.param, step.time);
        }
    };


    this.getEnd = function() {
        var max = 0;
        for(max in content);
        return max;
    };

};

// Extends
var base = new abstractSimulation();
simulationDeserializer.prototype = base;
simulationDeserializer.prototype.parent = base;

// Export a factory
module.exports = function(options, viewEngine) {
    return new simulationDeserializer(options, viewEngine);
};
