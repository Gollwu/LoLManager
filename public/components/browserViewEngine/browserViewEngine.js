(function($){

    var viewEngine = function() {

        this.end = function(info, time) {
            console.log('end');
        };

        this.createEntity = function(entity, time) {
            console.log('createEntity');
        };

        this.updateEntity = function(entity, time) {
            console.log('updateEntity');
        };

    };
    viewEngine.prototype = new SharedLibs.abstractViewEngine();
    $.browserViewEngine = function() {
        return new viewEngine();
    };
})(jQuery);
