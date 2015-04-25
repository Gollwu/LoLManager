(function($){

    var launchSimulation = function() {

        var simulation = SharedLibs.lolSimulation();
        simulation.init($.testViewEngine()).then( function() {
            simulation.launch();
        });
    };

    $(document).ready(function(){
        $.contextLoader.register('simulationClientSide.html', launchSimulation);
    });
})(jQuery);
