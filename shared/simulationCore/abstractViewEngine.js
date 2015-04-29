var q = require('q');

/**
 * Abstract class for view engines
 * It's role id to display/serialize/save the result of the simulation
 */
var abstractViewEngine = function() {

    /**
     * Init the display
     * Care that init can be called more than once (to restart the display)
     * @return Deferred Promise resolved when the Engine is initialised
     */
    this.init = function() {
        var deferred = q.defer();
        deferred.resolve();
        return deferred.promise;
    };

    /**
     * Signal the simulation ended
     * @param Object info End of the game informations
     * @param integer time A time information about the end of the game (no special unit)
     */
    this.end = function(info, time) {
    };

    /**
     * Create a new entity to be displayed
     * NOTE : An entity always have an id {@see http://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks_of_DDD}
     * @param Object entity New Entiy. The content of the entity depends of the simulation
     * @param integer time When the entity is created (no special unit)
     */
    this.createEntity = function(entity, time) {
    };

    /**
     * Destroy an entity. Basicly just hide it and free memory
     * @param Object entity Entity to destroy
     * @param integer time When the entity is destroyed (no special unit)
     */
    this.destroyEntity = function(entity, time) {
    };

    /**
     * Update an entiy at a given time
     * throw an error if the entity as not been definied yet
     * @param Object entity THe entity to update
     * @param integer time A time information about the entity (no special unit)
     */
     this.updateEntity = function(entity, time) {
     };
};

module.exports = abstractViewEngine;
