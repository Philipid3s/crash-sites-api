const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes/apiRoutes');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.PROD_MONGODB;

// Mongoose connection
// mongoose.connect(DB_URL, {
//    useNewUrlParser: true
//});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Call routes controller
routes(app);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);