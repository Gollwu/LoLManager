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
            res.status(404).end();
        } else {
            req.player = player;
            next();
        }
    }, function(error) {
        res.status(500).end(error);
    });
});



/**
 * @api {get} /api/player Get all the players
 * @apiName GetPlayers
 * @apiGroup Player
 */
app.get('/', function(req, res) {
    Player.findAll().then(function(players) {
        res.render('player.html', {players: players});
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
    res.json(req.player);
});

/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/player'
};
