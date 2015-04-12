/**
 * Allow to load some function/code Only if a specific context is defined.
 * Could be use to load some scripts only on some file
 */


(function($){

    var contextLoader = function(){
        var loader = this;

        var contexts = [];
        var callbacks = {};

        /**
         * Load all the callback for a specific contexts
         * @param string context
         */
        var loadCallbacks = function(context) {
            for (var key in callbacks[context]) {
                callbacks[context][key]();
            }
        };

        /**
         * Define the context to use
         * @param string context
         */
        loader.addContext = function(context) {
            contexts.push(context);
            loadCallbacks(context);
        };

        /**
         * Register a function to be called if the context is loaded
         * @param string context
         * @param function() callback Callback which will be load if the right context is set
         */
        loader.register = function(context, callback) {
            
            if (! callbacks[context]) {
                callbacks[context] = [];
            }
            callbacks[context].push(callback);

            if (contexts.indexOf(context) != -1) {
                callback();
            }
        };

    };


    $.contextLoader = new contextLoader();

})(jQuery);
