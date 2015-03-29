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
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1
 *              "firstname": "John",
 *              "lastname": "Doe",
 *              ...
 *          },
 *              ...
 *      ]
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
 * @apiSuccessExample Success-Response:
 *      {
 *         "id": 1,
 *         "firstName": "Jeff",
 *         "lastName": "Aubry",
 *         "pseudo": "Golwu",
 *         "birthdate": null,
 *         "country": null,
 *         "role": null,
 *         "warding": 0,
 *         "community": 0,
 *         "attitude": 0,
 *         "charisma": 0,
 *         "adaptability": 0,
 *         "laning": 0,
 *         "farming": 0,
 *         "outplay": 0,
 *         "ganking": 0,
 *         "pressuring": 0,
 *         "smiting": 0,
 *         "ADCarry": 0,
 *         "Tank": 0,
 *         "ADTank": 0,
 *         "APCarry": 0,
 *         "AssassinAD": 0,
 *         "Support": 0,
 *         "createdAt": "2015-03-29T00:31:41.792Z",
 *         "updatedAt": "2015-03-29T00:31:41.792Z"
 *      }
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
