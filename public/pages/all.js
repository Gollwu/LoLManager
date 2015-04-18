(function($){

    $(document).ready(function(){
        $.contextLoader.addContext($('body').data('filename'));

        $.browserViewEngine().test();
        var simulation = SharedLibs.lolSimulation($.browserViewEngine());
        simulation.launch();
    });
})(jQuery);
