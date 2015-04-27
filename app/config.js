var config = {};
if ( process.env.DATABASE_URL) {

    config = {
        dbconnectionUrl: process.env.DATABASE_URL,
        upload_dir: (process.env.UPLOAD_DIR || 'www/upload')
    };

} else {
    config = require('../config');
}


module.exports = config;
