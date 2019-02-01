const {getSurroundingCrashes, getCrashes} = require('../controllers/apiController');

const routes = (app) => {
    app.route('/api/v1/crashes')
    // GET endpoint
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        // call the execution of next function
        next();
    }, getCrashes)

    app.route('/api/v1/crashes/:longitude/:latitude/:km')
    // GET surrounding crashes
    .get(getSurroundingCrashes)
}

module.exports = routes;