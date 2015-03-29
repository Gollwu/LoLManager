/**
 * Controller for url related to champions
 * @author hycariss
 * @module champion
 * @class Champion
 */
var Champion = require('../model/champion'),
    express = require('express')
;

var app = express();


/**
 * Replace the url parameter :id to a champion
 */
app.param('id', function(req, res, next, id) {
    Champion.find(id).then(function(champion) {
        if (!champion) {
            res.send('Not Found', 404);
        }
        req.champion = champion;
        next();
    }).fail(function(error) {
        res.send(error, 500);
    });
});



/**
 * @api {get} /api/champion Get all the champions
 * @apiName GetChampions
 * @apiGroup Champion
 */
app.get('/', function(req, res) {
    Champion.findAll().then(function(champions) {
        res.send(champions);
    });
});


/**
 * @api {get} /api/champion/:id Get a champion by id
 * @apiName GetChampion
 * @apiGroup Champion
 * @apiParam {integer} id Id of the champion
 * @apiError {404} NotFound The id of the champion was not found.
 *
 */
app.get('/:id', function(req, res) {
    res.send(req.champion);
});

/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/champion'
}
