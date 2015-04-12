(function($){

    $(document).ready(function(){
        $.contextLoader.addContext($('body').data('filename'));
        $.simulationEngine.launch();
    });
})(jQuery);
