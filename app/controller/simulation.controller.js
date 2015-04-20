var express = require('express'),
    serializerView = require('../shared/simulationSerilizer/simulationSerializer'),
    simulation = require('../shared/lolSimulation/main'),
    q = require('q')
;
var app = express();

/**
 * Get a random simulation
 */
app.get('/', function(req, res) {

    var defer = q.defer();
    var view = serializerView(defer);
    var sim = simulation();
    sim.init(view).then(function(){
        sim.launch();
    });


    defer.promise.then(function(data){
        res.json(data);
    });
});



/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/simulation'
};
