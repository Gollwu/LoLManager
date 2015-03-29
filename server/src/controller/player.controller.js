var Player = require('../model/player');


/**
 * Controller for url related to players
 * @author Nhacsam
 */
module.exports = function(app) {

    /**
     * Get all the players
     */
    app.get('/player', function(req, res) {
        Player.findAll().then(function(players) {
            res.send(players);
        });
    });
}
