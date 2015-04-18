(function($){

    $(document).ready(function(){
        $.contextLoader.addContext($('body').data('filename'));

        var simulation = SharedLibs.lolSimulation($.browserViewEngine);
        simulation.launch();
    });
})(jQuery);
