var jquery = require('jquery');
var base = require('./abstractViewEngine');

/**
 * Allow to encapsulate more than one View Engine
 * @param abstractViewEngine[] engines View Engines
 */
var collectionViewEngine = function(engines) {

    for (var i in engines) {
        if (! (engines[i] instanceof abstractViewEngine)) {
            throw new Error('view Engines must extend abstractViewEngine');
        }
    }

    /**
     * {@inheritdoc}
     */
    this.init = function() {
        var finished = 0;
        var deferred = jquery.Deferred();

        var success = function () {
            if (finished < 0) {
                return;
            }

            finished ++;
            if (finished === engines.length) {
                deferred.resolve();
            }
        };

        var fail = function () {
            deferred.reject();
            deferred = -1;
        };

        if (engines.length === 0) {
            return this.parent.init();
        }

        for (var i in engines) {
            engines[i].init().then(success, fail);
        }
        return deferred;
    };

    /**
     * {@inheritdoc}
     */
    this.end = function(info) {
        for (var i in engines) {
            engines[i].end(info);
        }
    };

    /**
     * {@inheritdoc}
     */
    this.createEntity = function(entity) {
        for (var i in engines) {
            engines[i].createEntity(entity);
        }
    };

    /**
     * {@inheritdoc}
     */
     this.updateEntity = function(entity, time) {
         for (var i in engines) {
             engines[i].updateEntity(entity, time);
         }
     };
};


// Extends
var abstract = new base();
colletionViewEngine.prototype = abstract;
colletionViewEngine.prototype.parent = abstract;

// Export a factory
module.exports = function(engines) {
    return new collectionViewEngine(engines);
};
