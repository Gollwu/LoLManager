(function($){

    var launchSimulation = function() {

        var simulation = SharedLibs.simulationDeserializer({
            serializedContent: 'http://localhost:3000/simulation'
        });
        simulation.init($.testViewEngine()).then( function() {
            simulation.launch();
        });

    };


    $(document).ready(function(){
        $.contextLoader.register('simulationServerSide.html', launchSimulation);
    });
})(jQuery);
