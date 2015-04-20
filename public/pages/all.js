(function($){

    $(document).ready(function(){
        $.contextLoader.addContext($('body').data('filename'));

        var simulation = SharedLibs.simulationDeserializer({
            serializedContent: 'http://localhost:3000/simulation'
        });
        simulation.init($.browserViewEngine()).then( function() {
            simulation.launch();
        });
    });
})(jQuery);
