(function($){

    var viewEngine = function() {
    };
    viewEngine.prototype = new SharedLibs.abstractViewEngine();
    $.browserViewEngine = function() {
        return new viewEngine();
    };
})(jQuery);
