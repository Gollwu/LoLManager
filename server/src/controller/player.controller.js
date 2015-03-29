/**
 * Controller for url related to players
 * @author Nhacsam
 * @module player
 * @class Player
 */
var Player = require('../model/player'),
    express = require('express')
;

var app = express();


/**
 * Replace the url parameter :id to a player
 */
app.param('id', function(req, res, next, id) {
    Player.find(id).then(function(player) {
        if (!player) {
            res.send('Not Found', 404);
        }
        req.player = player;
        next();
    }).fail(function(error) {
        res.send(error, 500);
    });
});



/**
 * @api {get} /api/player Get all the players
 * @apiName GetPlayers
 * @apiGroup Player
 */
app.get('/', function(req, res) {
    Player.findAll().then(function(players) {
        res.send(players);
    });
});


/**
 * @api {get} /api/player/:id Get a player by id
 * @apiName GetPlayer
 * @apiGroup Player
 * @apiParam {integer} id Id of the player
 * @apiError {404} NotFound The id of the player was not found.
 *
 */
app.get('/:id', function(req, res) {
    res.send(req.player);
});

/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/player'
}
