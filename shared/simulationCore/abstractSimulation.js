var abstractViewEngine = require('./abstractViewEngine.js');

var abstractSimulation = function() {

    this.init = function(viewEngine) {
        if (! (viewEngine instanceof abstractViewEngine)) {
            throw new Error('view Engine must extend abstractViewEngine');
        }
    };


    this.launch = function() {
        console.log('launch base simulation');
        return true;
    };
};

module.exports = abstractSimulation;
