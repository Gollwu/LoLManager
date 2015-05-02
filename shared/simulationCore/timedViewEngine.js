var base = require('../simulationSerializer/simulationSerializer');
var extend = require('extend');
var timedEngine = require('./timedEngine');

/**
 * Add methods to an object to begin a timedEninge
 * This engine ca control the flow on a View Engine
 * @param abstractViewEngine engine Child view Engine
 */
var timedViewEngine = function(options, engine) {

    if (! (engine instanceof abstractViewEngine)) {
        throw new Error('view Engines must extend abstractViewEngine');
    }

    /**
     * {@inheritdoc}
     */
    engine.init = function() {
        if (config === null) {
            config = extend({}, defaults, options);
        }

        currStep = config.defaultStep;
        currTime = 0;

        // TODO handle promises
        engine.restart();
        return engine.parent.init();
    };

    /**
     * {@inheritdoc}
     */
    engine.end = function(info, time) {
        return engine.parent.end(info, time)
            .then(function(serializedContent) {
                content = serializedContent;
                start();
            });
    };



};


// Extends
var abstract = new base();
colletionViewEngine.prototype = abstract;
colletionViewEngine.prototype.parent = abstract;

// Export a factory
module.exports = function(engines) {
    return new collectionViewEngine(engines);
};
