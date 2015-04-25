(function($){

    var viewEngine = function() {

        var engine = this;
        var mainUl = null;

        var print = function(msg, obj, time) {

            var mainLi = $('<li></li>');

            mainLi.append(time + ' : ' + msg);
            if (obj) {
                var ul = $('<ul></ul>');
                for (var key in obj) {
                    var li = $('<li></li>');
                    li.append(key + ' : ' + obj[key]);
                    ul.append(li);
                }
                mainLi.append(ul);
            }
            mainUl.append(mainLi);
        };

        engine.init = function() {
            mainUl = $('<ul></ul>');
            $('#simulation').append(mainUl);
            return engine.parent.init();
        };

        engine.end = function(info, time) {
            print('call end', info, time);
        };

        engine.createEntity = function(entity, time) {
            print('call createEntity', entity, time);
        };

        engine.updateEntity = function(entity, time) {
            print('call updateEntity', entity, time);
        };

    };

    // Extends
    var abstract = new SharedLibs.abstractViewEngine();
    viewEngine.prototype = abstract;
    viewEngine.prototype.parent = abstract;


    $.testViewEngine = function() {
        return new viewEngine();
    };
})(jQuery);
