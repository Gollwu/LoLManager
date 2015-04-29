var base = require('../simulationSerializer/simulationSerializer');
var extend = require('extend');

/**
 * Control time for child view Engine
 * @param abstractViewEngine engine Child view Engine
 */
var timedWrapperViewEngine = function(engine, options) {

    if (! (engine instanceof abstractViewEngine)) {
        throw new Error('view Engines must extend abstractViewEngine');
    }

    var wrapper = this;

    /**
     * Default config
     * @var Object
     */
    var defaults = {
        /**
         * Default length in ms between two simulation step
         * @var integer
         */
        defaultStep: 200
    };
    /*
     * Current config
     * var Object
     */
    var config = null;

    /**
     * The id of the current set Interval
     * @var integer
     */
    var intervalId = null;

    /**
     * The current step duration (in millisecond)
     * @var integer
     */
    var currStep = 1;

    /**
     * Current time in the simualtion
     * @var integer
     */
    var currTime = 0;

    /**
     * Length of the simulation
     * @var integer
     */
    var endTime = null;

    /**
     * Serialized Content
     * var Object
     */
     var content = null;


    wrapper.setStep = function(step) {
        currStep = step;
        reload();
        return wrapper;
    };

    wrapper.faster = function(step) {
        currStep += step || 100;
        reload();
        return wrapper;
    };

    wrapper.slower = function(step) {
        return wrapper.slower(-step);
    };

    wrapper.getStep = function() {
        return currStep;
    };


    wrapper.getTime = function() {
        return currTime;
    };

    wrapper.jump = function (newTime) {

        if (newTime > currTime) {
            fastForward(newTime);
        } else if (newTime < currTime) {
            wrapper.restart();
            fastForward(newTime);
        }
        return wrapper;
    };

    // TODO deferrer
    wrapper.restart = function(deferrer) {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        engine.init();
        return wrapper;
    };

    wrapper.toEnd = function() {
        return wrapper.jump(endTime);
    };

    wrapper.pause = function() {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        return wrapper;
    };

    wrapper.continue = function() {
        start();
        return wrapper;
    };


    var fastForward = function() {

    };

    var start = function() {

    };





    /**
     * {@inheritdoc}
     */
    wrapper.init = function() {
        if (config === null) {
            config = extend({}, defaults, options);
        }

        currStep = config.defaultStep;
        currTime = 0;

        // TODO handle promises
        wrapper.restart();
        return wrapper.parent.init();
    };

    /**
     * {@inheritdoc}
     */
    wrapper.end = function(info, time) {
        return wrapper.parent.end(info, time)
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
