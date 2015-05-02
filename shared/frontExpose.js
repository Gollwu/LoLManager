
/**
 * This object is accessible in the front js
 * With th ename SharedLibs
 */
module.exports = {
    q: require('q'),
    lolSimulation: require('./lolSimulation/main.js'),
    abstractSimulation: require('./simulationCore/abstractSimulation.js'),
    abstractViewEngine: require('./simulationCore/abstractViewEngine.js'),
    simulationSerializer: require('./simulationSerializer/simulationSerializer.js'),
    simulationDeserializer: require('./simulationSerializer/simulationDeserializer.js'),
    timedDeserializerEngine: require('./simulationSerializer/timedDeserializerEngine.js')
};
