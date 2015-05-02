var simulationDeserializer = require('./simulationDeserializer');
var timedEngine = require('../simulationCore/timedEngine');
var extend = require('extend');
var q = require('q');

/**
 * A simulation engine wich use serialized simulation
 * And control time to call the view engine
 * extend of abstractSImulation
 */
var timedDeserializerEngine = function(options) {

    timedEngine(this);
    var self = this;
    /**
     * Default config
     * @var Object
     */
    var defaults = {
        /**
         * Default length in ms between two simulation step
         * @var integer
         */
        defaultStep: 2000
    };
    /*
     * Current config
     * var Object
     */
    var config = null;


    self.setOptions = function(newOptions) {
        config = extend({}, defaults, newOptions);
    };

    this.setOptions(options);

    var engine = null;
    self.init = function(nEngine) {
        engine = nEngine;
        self.setStep(config.defaultStep);

        self.simulationDeserializer.setOptions(options);
        return self.simulationDeserializer.init(engine).then(function(){
            self.setEnd(self.simulationDeserializer.getEnd());
        });
    };

    self.launch = self.start;


    self.clean = function(){};
    self.doStep = function(time) {
        self.deserializeTime(time);
    };

};

// Extends
var base = new simulationDeserializer();
timedDeserializerEngine.prototype = base;
timedDeserializerEngine.prototype.simulationDeserializer = base;

// Export a factory
module.exports = function(options) {
    return new timedDeserializerEngine(options);
};
