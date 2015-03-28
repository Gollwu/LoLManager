/**
 * Controller for url related to players
 * @author Nhacsam
 */
module.exports = function(app) {

    /**
     * Get all the players
     */
    app.get('/player', function(req, res) {
        res.send([{'name':'golwu'}, {'name': 'Nhacsam'}]);
    });
}
