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
            res.status(404).send('Not Found');
        } else {
            req.champion = champion;
            next();
        }
    }).fail(function(error) {
        res.status(500).send(error);
    });
});



/**
 * @api {get} /api/champion Get all the champions
 * @apiName GetChampions
 * @apiGroup Champion
 */
app.get('/', function(req, res) {
    Champion.findAll().then(function(champions) {
        res.json(champions);
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
    res.json(req.champion);
});

/**
 * Return the controller configuration
 */
module.exports = {
    app: app,
    base: '/champion'
};
