var express = require('express'),
    serializerView = require('../shared/simulationSerializer/simulationSerializer'),
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
        for (var i in data)
        res.json(data);
    });
});


/**
 * Demo pages
 */
app.get('/server_side', function(req, res) {
    res.render('simulationServerSide.html');

});

app.get('/client_side', function(req, res) {
    res.render('simulationClientSide.html');
});





/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/simulation'
};
