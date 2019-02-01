const mongoose = require('mongoose');

const Crash = require('../Models/crash');

const getCrashes = (req, res) => {
    Crash.find({}, (error, crash) => {
        if (error) {
            res.send(error);
        }
        res.json(crash);
    });
};

const getSurroundingCrashes = (req, res) => {
    const query = { 
        location:
            { 
                $geoWithin:{ 
                    $centerSphere: [ [ req.params.longitude, req.params.latitude ], req.params.km / 6371  ] 
                } 
            } 
        };

    Crash.find(query, (error, crashes) => {
        if (error) {
            res.send(err);
        }
        res.json(crashes);
    })
}

module.exports = {getCrashes, getSurroundingCrashes}