const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./src/routes/apiRoutes');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URI || 'mongodb://crash-sites:lotus-1978@ds123181.mlab.com:23181/heroku_215sspjc';

// Mongoose connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Call routes controller
routes(app);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);