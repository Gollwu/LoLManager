(function($){

    var home = function() {
        $.stellar({
             verticalOffset: 100
        });

        $('nav.navbar').addClass('navbar-transparent');

        var resize = function() {
            $('#main-jumbotron').css('height', 'auto');
            var defaultHeight = $('#main-jumbotron').height();
            if (defaultHeight < $(window).height()) {
                $('#main-jumbotron').height($(window).height());
            }
        };
        resize();
        $(window).resize(resize);
    };


    $(document).ready(function(){
        $.contextLoader.register('home.html', home);
    });
})(jQuery);
