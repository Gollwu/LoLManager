var abstractViewEngine = require('../simulationCore/abstractViewEngine');


/**
 * A view engine which serilise the content instead of displaying it
 * @param Deferred deferrer Deferer to resolve with the serialized content
 */
var simulationSerializer = function(deferrer) {

    var serializedContent = {};

    var addContent = function(method, param, time) {

        var step = {
            method: method,
            time: time,
            param: param
        };

        if ( typeof serializedContent[time] !== 'undefined') {
            serializedContent[time].push(step);
        } else {
            serializedContent[time] = [step];
        }
    };


    /**
     * {@inheritdoc}
     */
    this.init = function() {
        return this.parent.init();
    };

    /**
     * {@inheritdoc}
     */
    this.end = function(info, time) {
        addContent('end', info, time);
        deferrer.resolve(serializedContent);
    };

    /**
     * {@inheritdoc}
     */
    this.createEntity = function(entity, time) {
        addContent('createEntity', entity, time);
    };

    /**
     * {@inheritdoc}
     */
     this.updateEntity = function(entity, time) {
         addContent('updateEntity', entity, time);
     };
};

// Extends
var abstract = new abstractViewEngine();
simulationSerializer.prototype = abstract;
simulationSerializer.prototype.parent = abstract;

// Export a factory
module.exports = function(deferrer) {
    return new simulationSerializer(deferrer);
};
