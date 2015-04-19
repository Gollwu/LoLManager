var abstractViewEngine = require('../simulationCore/abstractViewEngine');


/**
 * A view engine which serilise the content instead of displaying it
 */
var simulationSerializer = function() {
};

simulationSerializer.prototype = new abstractViewEngine();



module.exports = function() {
    return new simulationSerializer();
};
