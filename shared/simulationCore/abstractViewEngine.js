var jquery = require('jquery');

/**
 * Abstract class for view engines
 * It's role id to display/serialize/save the result of the simulation
 */
var abstractViewEngine = function() {

    /**
     * Init the display
     * @return Deferred Promise resolved when the Engine is initialised
     */
    this.init = function() {
        var deferred = jquery.Deferred();
        deferred.resolve();
        return deferred;
    };

    /**
     * Signal the simulation ended
     * @param Object info End of the game informations
     */
    this.end = function(info) {
    };

    /**
     * Create a new entity to be displayed
     * NOTE : An entity always have an id {@see http://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks_of_DDD}
     * @param Object entity New Entiy. The content of the entity depends of the simulation
     */
    this.createEntity = function(entity) {
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
