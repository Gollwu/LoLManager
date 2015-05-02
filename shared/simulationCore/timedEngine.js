var base = require('../simulationSerializer/simulationSerializer');
var extend = require('extend');

/**
 * Add methods to an object to begin a timedEninge
 * This engine ca control the flow on a View Engine
 * @param abstractViewEngine engine Child view Engine
 */
var timedEngine = function(engine) {

    if (! engine) {
        engine = this;
    }

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

    engine.setStep = function(step) {
        currStep = step;
        engine.pause().continue();
        return engine;
    };

    engine.faster = function(step) {
        engine.setStep(currStep + step);
        return engine;
    };

    engine.slower = function(step) {
        return engine.faster(-step);
    };

    engine.getStep = function() {
        return currStep;
    };


    engine.getTime = function() {
        return currTime;
    };

    engine.jump = function (newTime) {

        if (newTime > currTime) {
            fastForward(newTime);
        } else if (newTime < currTime) {
            engine.restart();
            fastForward(newTime);
        }
        return engine;
    };

    engine.restart = function() {
        currTime = 0;
        engine.pause().clean();
        engine.start();
        return engine;
    };

    engine.toEnd = function() {
        return engine.jump(endTime);
    };

    engine.pause = function() {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        return engine;
    };

    engine.continue = function() {
        engine.start();
        return engine;
    };


    engine.fastForward = function(time) {
        for (; currTime < time; currTime++) {
            engine.doStep(currTime);
        }
        return engine;
    };

    engine.start = function() {
        if (intervalId) {
            clearInterval(intervalId);
        }
        
        intervalId = setInterval(function(){
            if (currTime <= endTime) {
                engine.doStep(currTime);
                currTime++;
            } else {
                clearInterval(intervalId);
            }
        }, currStep);
        return engine;
    };

    engine.getEnd = function() {
        return endTime;
    };

    engine.setEnd = function(end) {
        endTime = end;
        return engine;
    };


    this.clean = function(){
        return engine;
    };
    this.doStep = function(time){
        return engine;
    };
};


// Export a factory
module.exports = function(engine) {
    return new timedEngine(engine);
};
