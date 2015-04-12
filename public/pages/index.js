(function($){

    var index = function() {

        $('nav').css('background-color', '#ffaaaa');

    };


    $(document).ready(function(){
        $.contextLoader.register('home.html', index);
    });
})(jQuery);
