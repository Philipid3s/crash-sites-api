let mongoose = require('mongoose');

// Crash Site schema
let crashSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    url:{
        type: String,
        required: true
    }
});

let Crash = module.exports = mongoose.model('Crash', crashSchema);
