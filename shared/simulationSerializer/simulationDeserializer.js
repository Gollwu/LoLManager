var abstractSimulation = require('../simulationCore/abstractSimulation');
var extend = require('extend');
var request = require('request');
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
    options = extend({}, defaults, options);


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

        if (! options.serializedContent) {
            deferrer.reject('No content do deserialize');
        } else  if (typeof options.serializedContent === 'string') {

            request.get(options.serializedContent)
            .on('response', function(response) {
                response.on('data', function(data){
                    content = JSON.parse(data);
                    parentPromise.then(function(){
                        deferrer.resolve(response);
                    }, function(error) {
                        deferrer.reject(error);
                    });
                });
            })
            .on('error', function(error) {
                deferrer.reject(error);
            });

        } else {
            content = options.serializedContent;
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
                for (var j in content[i]) {
                    var step = content[i][j];
                    viewEngine[step.method](step.param, step.time);
                }
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
};

// Extends
var base = new abstractSimulation();
simulationDeserializer.prototype = base;
simulationDeserializer.prototype.parent = base;

// Export a factory
module.exports = function(options, viewEngine) {
    return new simulationDeserializer(options, viewEngine);
};
