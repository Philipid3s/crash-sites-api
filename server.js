const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./src/routes/apiRoutes');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.PROD_MONGODB;

// Mongoose connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Call routes controller
routes(app);

// Server static public files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);